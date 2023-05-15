import React from "react";
import { Button, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faGift,faUserFriends,faHandHoldingHand,faBoxesStacked} from '@fortawesome/free-solid-svg-icons'
import {faObjectGroup,faStarHalfStroke,faMessage,faMoneyBill1,faQuestionCircle} from "@fortawesome/free-regular-svg-icons"



import logo from "../images/a-t-inks-logo.png";

function Menubar() {
  return (
    <div className="menubar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Image className="logo_img" src={logo} />

        <div className="link">
          <FontAwesomeIcon icon={faObjectGroup} style={{ marginRight: "10px" }}/> 
          <Link to="/home" className="menu_item">Dashboard</Link>
        </div>
        <div className="link">
          <FontAwesomeIcon icon={faGift} style={{ marginRight: "10px" }} />
          <Link to="/home" className="menu_item">Orders</Link>
        </div>
        <div className="link">
          <FontAwesomeIcon icon={faUserFriends} style={{ marginRight: "10px" }} />
          <Link to="/home" className="menu_item">Team members</Link>
        </div>
        <div className="link">
          <FontAwesomeIcon icon={faHandHoldingHand} style={{ marginRight: "10px" }} />
          <Link to="/home" className="menu_item">Partners</Link>
        </div>
        <div className="link">
          <FontAwesomeIcon icon={faBoxesStacked} style={{ marginRight: "10px" }} />
          <Link to="/home" className="menu_item" >Products Listing</Link>
        </div>
        <div className="link">
        <FontAwesomeIcon icon={faTrophy} style={{ marginRight: "10px" }}/>
          <Link to="/home" className="menu_item">Award and Honours</Link>
        </div>
        <div className="link" style={{color:"rgb(207, 11, 11)"}}>
          <FontAwesomeIcon icon={faMessage} style={{ marginRight: "10px" }} />
          <Link to="/home" className="menu_item" style={{color:"rgb(207, 11, 11)"}}>About Us</Link>
        </div>
        <div className="link">
          <FontAwesomeIcon icon={faMoneyBill1} style={{ marginRight: "10px" }} />
          <Link to="/home" className="menu_item">Payments</Link>
        </div>
      </Nav>
      <div className="lower_bar" style={{fontSize:"13px"}}>
      <FontAwesomeIcon icon={faQuestionCircle} style={{ marginRight: "10px" }} />
        <h6>Need help ?</h6>
        <p>Our support team is at your disposal.</p>
        <Button variant="dark" size="sm" style={{fontSize:"14px"}}>Get Help</Button>
      </div>
    </div>
  );
}

export default Menubar;
