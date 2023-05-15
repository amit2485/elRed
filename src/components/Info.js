import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentSms,faLocationDot,faContactBook,faBusinessTime,faLink,faQuoteLeft,faEdit,faEnvelope,faPhone,faHome,faClock,faGlobe} from '@fortawesome/free-solid-svg-icons'
import {} from "@fortawesome/free-regular-svg-icons"
import { faFacebook,faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons"
import {useNavigate } from "react-router-dom"

import { useState } from 'react'
import Contact from './Contact'


function Info(){

    const data = [{id:0,team:"Sales", email:"abc@xyz.com", contact:["9876234905"]},
    {id:1,team:"Marketing", email:"abc@xyz.com", contact:["9876234905"]},
    {id:2,team:"Technical", email:"abc@xyz.com", contact:["9876234905","78787878777"]}]

    const navigate = useNavigate()

    
    const [showContact, setShowContact] = useState(false)
    const [contactData, setContactData] = useState(data)
    
  
    
    

    const handleContact = () => {
        setShowContact(true)
    }

    const refreshData = (val) => {
        setContactData(val)
    
    }

  
    


    return(<div style={{display:"flex",width:"auto",margin:"0px 0px 0px 0px",flexWrap:"wrap"}}>
        <div className="contact">
            <div style={{display:"flex"}}>
                <FontAwesomeIcon icon={faContactBook} style={{color:"darkgray",margin:"10px"}}/>
                <h6 style={{marginTop:"7px"}}>Contact</h6>
                <FontAwesomeIcon onClick={handleContact} icon={faEdit} style={{color:"rgb(207, 11, 11)",marginLeft:"200px", marginTop:"7px"}}/>
            </div>
            <div style={{lineHeight:"10px"}}>
            <div style={{display:"inline-flex"}}>
                <FontAwesomeIcon  icon={faEnvelope} style={{margin:"15px 5px 5px 10px", fontSize:"12px",color:"darkgray"}}/>
                <p style={{ fontSize:"13px",marginTop:"15px",width:"220px"}}>{contactData[0].email}</p>
                <div className='round'>
                    <p style={{margin:"8px 0px 0px 4px" ,color:"red",fontSize:"14px"}}>+{contactData.length}</p>
                </div>
            </div>
            <div style={{display:"flex"}}>
                <FontAwesomeIcon  icon={faPhone} style={{margin:"0px 5px 5px 10px", fontSize:"12px",color:"darkgray"}}/>
                <p style={{marginTop:"0px" , fontSize:"13px"}}>{contactData[0].contact}</p>
            </div>
            </div>
           
            
        </div>
        <div className="contact">
            <div style={{display:"flex"}}>
                <FontAwesomeIcon icon={faLocationDot} style={{color:"darkgray",margin:"10px"}}/>
                <h6 style={{marginTop:"7px"}}>Address</h6>
                <FontAwesomeIcon  icon={faEdit} style={{color:"rgb(207, 11, 11)",marginLeft:"200px", marginTop:"7px"}}/>
            </div>
            <div style={{display:"flex"}}>
                <FontAwesomeIcon  icon={faHome} style={{margin:"15px 5px 5px 10px", fontSize:"12px",color:"darkgray"}}/>
                <p style={{ fontSize:"13px",marginTop:"10px"}}>C-1/351/1,GDIC Makarpura, Vadodara-3901012,Gujarat, India</p>
            </div>
        </div>
        <div className="contact">
            <div style={{display:"flex"}}>
                <FontAwesomeIcon icon={faBusinessTime} style={{color:"darkgray",margin:"10px"}}/>
                <h6 style={{marginTop:"7px",whiteSpace:"nowrap"}}>Hours of Operation</h6>
                <FontAwesomeIcon  icon={faEdit} style={{color:"rgb(207, 11, 11)",marginLeft:"110px", marginTop:"7px"}}/>
            </div>
            <div style={{display:"flex"}}>
                <FontAwesomeIcon  icon={faClock} style={{margin:"15px 5px 5px 10px", fontSize:"12px",color:"darkgray"}}/>
                <p style={{ fontSize:"13px",marginTop:"10px"}}>Monday to Friday - 9:00 am to 6:00 pm</p>
            </div>
        </div>
        <div className="contact">
            <div style={{display:"flex"}}>
                <FontAwesomeIcon icon={faLink} style={{color:"darkgray",margin:"10px"}}/>
                <h6 style={{marginTop:"7px",whiteSpace:"nowrap"}}>Social Media &  Links</h6>
                <FontAwesomeIcon  icon={faEdit} style={{color:"rgb(207, 11, 11)",marginLeft:"100px", marginTop:"7px"}}/>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{margin:"5px 10px 0px 15px", lineHeight:"4px"}}>
                    <FontAwesomeIcon onClick={() => window.open('https://www.google.com','_blank')} icon={faGlobe} size="lg" style={{margin:"15px 5px 5px 10px",color:"darkgray"}}/>
                    <p style={{fontSize:"10px"}}>Website</p>
                </div>
                <div style={{margin:"5px 10px 0px 15px", lineHeight:"4px"}}>
                    <FontAwesomeIcon onClick={() => window.open('https://www.instagram.com','_blank')}  icon={faInstagram} size="lg" style={{margin:"15px 5px 5px 10px",color:"darkgray"}}/>
                    <p style={{fontSize:"10px"}}>Instagram</p>
                </div>
                <div style={{margin:"5px 10px 0px 15px", lineHeight:"4px"}}>
                    <FontAwesomeIcon onClick={() => window.open('https://www.facebook.com','_blank')} icon={faFacebook} size="lg" style={{margin:"15px 5px 5px 10px",color:"darkgray"}}/>
                    <p style={{fontSize:"10px"}}>Facebook</p>
                </div>
                <div style={{margin:"5px 10px 0px 15px", lineHeight:"4px"}}>
                    <FontAwesomeIcon onClick={() => window.open('https://www.twitter.com','_blank')} icon={faTwitter} size="lg" style={{margin:"15px 5px 5px 10px",color:"darkgray"}}/>
                    <p style={{fontSize:"10px",marginLeft:"3px"}}>Twitter</p>
                </div>
                
                
            </div>
        </div>
        <div className="contact">
            <div style={{display:"flex"}}>
                <FontAwesomeIcon icon={faQuoteLeft} style={{color:"darkgray",margin:"10px"}}/>
                <h6 style={{marginTop:"7px"}}>Statement</h6>
                <FontAwesomeIcon  icon={faEdit} style={{color:"rgb(207, 11, 11)",marginLeft:"180px", marginTop:"7px"}}/>
            </div>
            <div style={{display:"flex"}}>
                <FontAwesomeIcon  icon={faCommentSms} style={{margin:"15px 5px 5px 10px", fontSize:"12px",color:"darkgray"}}/>
                <p style={{ fontSize:"13px",marginTop:"10px"}}>We think it we ink it</p>
            </div>
        </div>
      
   
       {showContact && <Contact showContact={showContact} setShowContact={setShowContact} data={contactData} setNewData = {refreshData}  />} 
       
    </div>)
}

export default Info;