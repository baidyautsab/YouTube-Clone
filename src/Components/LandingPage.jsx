import { Link } from "react-router-dom";
import adminimg from "../Images/admin_lock.png";
import userimg from "../Images/user-lock.png";
import "../Styles/Landingpage.css";

const LandingPage = () => {
  return (
    <div className="landingpage">
        <h1>Please Login for further use!</h1>
      <div className="display">
        <Link className="landingLink" to="/adminlogin">
          <img src={adminimg} alt="" />
          <span>Admin</span>
        </Link> 
        <Link className="landingLink" to="/userlogin">
          <img src={userimg} alt="" />
          <span>User</span>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
