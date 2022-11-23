import {Select} from 'antd';
import React, {useState} from 'react';
const MultiSelect = (value) => {
    const categories = value.value;
    const options = [];
    const defaultValue = {
        value: 0,
        label: 'CatalogSearch'
    }
    options.push(defaultValue);
    if (categories) {
        categories.map((category)=>{
            const option = {
                value : category.id,
                label : category.name,
            };
            options.push(option);
        })
    }
    return (
        <Select
            mode="multiple"
            style={{
                width: '100%',
            }}
            placeholder="Select category"
            defaultValue={options[0]}
            optionLabelProp="label"
            options={options}
            onChange={value.onchange}
        >
        </Select>
    )
};

export default MultiSelect;