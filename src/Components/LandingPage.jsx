import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import coder from '../Images/coder1-removebg-preview.png'
import "../Styles/Landingpage.css";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <img className="coder" src={coder} alt="" />
      <div className="display">
        <Link className="landingLink" to="/adminlogin">
          <RiAdminFill className="landing-icon" />
          <span>Admin</span>
        </Link>
        <Link className="landingLink" to="/userlogin">
          <FaUserCircle className="landing-icon" />
          <span>User</span>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
