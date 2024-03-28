import React, { useState } from "react";
import '../Styles/AdminSignUp.css'

const AdminSignUp = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [password, setPassword] = useState("");

    let info = {name, phone, email, password};

    function addAdmin(e) {
        e.preventDefault();
        fetch("http://localhost:3050/Admin", {
            method: "POST",
            headers: {"Content-Type" : "Application/json"},
            body: JSON.stringify(info)
        })
        .then(res => {
            alert("Admin added successfully");
            setName("");
            setPhone("");
            setEmail("");
            setPassword("");
        })
        .catch(err => {
            alert("Invalid Credentials")
        })
    }

    return ( 
        <div className="adminSignUp">
            <form action="">
                <input value={name} onChange={(e) => {setName(e.target.value)}} required type="text" placeholder="Enter The Name" name="" id="" />
                <input value={phone} onChange={e => setPhone(e.target.value)} required type="tel" pattern="[0-9]{10}" placeholder="Enter Phone Number" name="" id="" />
                <input value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder="Enter Email" name="" id="" />
                <input value={password} onChange={e => setPassword(e.target.value)} required type="password" placeholder="Enter Password" name="" id="" />
                <button onClick={addAdmin}>SignUp</button>
            </form>
        </div>
     );
}
 
export default AdminSignUp;