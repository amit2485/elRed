import { Button, Image } from "react-bootstrap";
import logo from "../images/a-t-inks-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck,faEdit} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useState } from "react";
import AboutUSModal from "./AbousUsModal";
import SubMenu from "./SubMenu";
import Info from "./Info";





function AboutUs(){

    const defaultText = "Lorem Ipsum is simply dummy text ofsetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

    const [isModal,showModal] = useState(false)
    const [text, setText] = useState(defaultText)


    const handleEdit = () => {
        showModal(true);

    }

    return( 
        
        <>
        <div className="about_us">
            <h5 style={{margin:"20px"}}>About Us</h5>
            <div style={{margin:"5px 0 0 20px", display:"inline-flex"}}>
                <Image className="logo_img" src={logo} style={{marginRight:"20px"}} />
                <div style={{marginTop:"5px",lineHeight:"5px"}}>
                    <h6>A .T Inks</h6>
                    <h6 style={{color:"darkgray", marginTop:"0px"}}>Digital Inks</h6>
                </div>
                <div style={{padding:"5px",marginLeft:"20px"}}>
                    <FontAwesomeIcon className="" icon={faCircleCheck} style={{color:"darkgray",paddingRight:"5px"}} />
                    <Link style={{fontSize:"13px"}}>Verify Company</Link>

                </div>
            </div>
            <div style={{display:"flex",inlineSize:"750px",overflowWrap:"break-word"}}>
                <p className="about_us_txt">{text}</p>
                <FontAwesomeIcon  icon={faEdit} style={{color:"rgb(207, 11, 11)",marginLeft:"5px"}} onClick={handleEdit} />
            </div>
            <SubMenu/>
            <Info/>
            {isModal && <AboutUSModal isModal={isModal} showModal={showModal} setText={setText} text={text}/>} 
        </div>
       
        </>
    )
}

export default AboutUs;