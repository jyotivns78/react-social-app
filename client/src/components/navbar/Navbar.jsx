import './Navbar.css';
import HomeOutlinedIcon from "mui/icons-material/HomeOutlinedIcon";
import DarkModeOutlinedIcon from "mui/icons-material/DarkModeOutlinedIcon";
import WbSunnyOutlinedIcon from "mui/icons-material/WbSunnyOutlinedIcon";
import GridViewOutlinedIcon from "mui/icons-material/GridViewOutlinedIcon";
import NotificationsOutlinedIcon from "mui/icons-material/NotificationsOutlinedIcon";
import EmailOutlinedIcon from "mui/icons-material/EmailOutlinedIcon";
import PersonOutlinedIcon from "mui/icons-material/PersonOutlinedIcon";
import SearchOutlinedIcon from "mui/icons-material/SearchOutlinedIcon";

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
                    <span>Be Social</span>
                </Link>
                <HomeOutlinedIcon />
                {darkMode ? (
                    <WbSunnyOutlinedIcon onClick={toggle}/>
                ) : (
                    <DarkModeOutlinedIcon onClick={toggle}/>
                )}
                <GridViewOutlinedIcon />
                <div className='search'>
                    <SearchOutlinedIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className='right'>
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className='user'>
                    <img src={'/upload/' + currentUser.profilePic} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Navbar;
