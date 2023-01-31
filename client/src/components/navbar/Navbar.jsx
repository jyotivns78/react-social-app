import './Navbar.scss';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/DarkModeContext';


const Navbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);

    return (
        <div className='navbar'>
            <div className='left'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>Be Social</span>
                </Link>
                <HomeOutlinedIcon style={{ color: "rgb(8, 55, 117)", position: "absolute", left: "180px", top: "20px", fontSize: "30px" }} />
                {darkMode ? (
                    <WbSunnyOutlinedIcon onClick={toggle} style={{ color: "white", position: "absolute", left: "250px", top: "20px", fontSize: "30px" }} />
                ) : (
                    <DarkModeOutlinedIcon style={{ color: "rgb(8, 55, 117)", position: "absolute", left: "250px", top: "20px", fontSize: "30px" }}  onClick={toggle}/>
                )}
                <GridViewOutlinedIcon style={{ color: "rgb(8, 55, 117)", position: "absolute", left: "320px", top: "20px", fontSize: "30px" }} />
                <div className='search'>
                    <SearchOutlinedIcon style={{ color: "rgb(8, 55, 117)", fontSize: "30px" }} />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className='right'>
                <PersonOutlinedIcon style={{ color: "rgb(8, 55, 117)", position: "absolute", left: "1050px", top: "20px", fontSize: "30px" }} />
                <EmailOutlinedIcon style={{ color: "rgb(8, 55, 117)", position: "absolute", left: "1110px", top: "20px", fontSize: "30px" }} />
                <NotificationsOutlinedIcon style={{ color: "rgb(8, 55, 117)", position: "absolute", left: "1170px", top: "20px", fontSize: "30px" }} />
                <div className='user' >
                    <img src={'/upload/' + currentUser.profilePic} alt="" />
                    <span className='user-name'>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}


export default Navbar;
