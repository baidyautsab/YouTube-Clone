import { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/UserLogin.css'

const UserLogin = () => {
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');

    function checkUser() {
        if(name === "utsab" && password === "utsab123")
            alert(`Hello ${name}`)
        else
            alert(`Log in fail`)
    }

    return ( 
        <div className="user">
            <form action="">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="" placeholder="Enter user name or password"/> <br />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" placeholder="Enter password" /> <br />
                <Link className="adminlink first" to='./forgot-password'>Forgot password!</Link>
                <Link className="adminlink" to='/crate-account'>Dont have an account?</Link> <br />
                <button onClick={checkUser}>Login</button>
            </form>
        </div>
     );
}
 
export default UserLogin;