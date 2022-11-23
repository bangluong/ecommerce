import React, {useState} from 'react';
import {Button, Form, Input, Upload,} from 'antd';
import axios from "axios";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import storage from "./Firebase";
const {TextArea} = Input;

const CategoryForm = () => {
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);
    const onFinish = async (values) => {
        let images = ['\'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'];
        for (const item of fileList) {
            if (item.originFileObj !== undefined) {
                const imageUrl = await handleUpload(item.originFileObj);
                images.push(imageUrl);
            }
        }
        images = JSON.stringify(images);
        values.banner = images;
        const response = await axios.post(
            'http://127.0.0.1:8000/api/auth/category/add',
            values,
            { headers: { 'Content-Type': 'application/json' } }
        );
        console.log(response);
        console.log(values);
    }

    const handleUpload = async (uploadFile) => {
        if (uploadFile) {
            return new Promise(function (resolve,reject){
                const storageRef = ref(storage, `/media/catalog/category/${uploadFile.name}`);

                // progress can be paused and resumed. It also exposes progress updates.
                // Receives the storage reference and the file to upload.
                const uploadTask =  uploadBytesResumable(storageRef, uploadFile);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const percent = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );

                        // update progress
                        setPercent(percent);
                    },
                    (err) => console.log(err),
                    () => {
                        // download url
                        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                            resolve(url);
                        });
                    }
                );
            })

        }
        else {
            console.log("no file");
        }
    };
    const onChange = ({fileList: newFileList}) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;

        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = () => resolve(reader.result);
            });
        }

        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (
        <div className="admin-form">
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onFinish={onFinish}
            >
                <Form.Item label="Category Name" name='category_name'>
                    <Input/>
                </Form.Item>
                <Form.Item label="Category image" valuePropName="fileList">
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        onChange={onChange}
                        onPreview={onPreview}
                    >
                    </Upload>
                </Form.Item>
                <Form.Item label="TextArea" name={"description"}>
                    <TextArea rows={4}/>
                </Form.Item>
                <Form.Item label="Button">
                    <Button type={"submit"} htmlType={"submit"} className={"submit"}>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CategoryForm;