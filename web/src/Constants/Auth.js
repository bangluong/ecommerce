import {useState} from "react";

const auth = ()=> {
    let [user, setUser] = useState(null);
    let currentUser = localStorage.getItem('customer');
    if (currentUser !== null) {
        currentUser = JSON.parse(currentUser);
        setUser(currentUser);
    }
}