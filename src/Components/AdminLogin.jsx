import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../Styles/AdminLogin.css";

const AdminLongin = () => {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("http://localhost:3050/Admin");
      let content = await res.json();
      setData(content);
    }
    fetchData();
  }, []);

  function checkAdmin() {
    let userData = data.find((u) => u.name === name && u.password === password);

    if (userData) {
      navigate("/adminhomepage");
      alert(`Wellcome back ${name}`);
    } else alert(`Login fail`);
  }

  return (
    <div className="admin">
      <form action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Enter user name or password"
        />{" "}
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name=""
          id=""
          placeholder="Enter password"
        />{" "}
        <br />
        <div className="links">
          <Link className="adminlink first" to="./forgot-password">
            Forgot password!
          </Link>
          <Link className="adminlink" to="/adminsignup">
            Dont have an account?
          </Link>
        </div>
        <button onClick={checkAdmin}>Login</button>
      </form>
    </div>
  );
};

export default AdminLongin;
