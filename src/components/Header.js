import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/a-t-inks-logo.png";
import profile_img from "../images/crop-circle.png";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCartShopping } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <Navbar bg="light" variant="light" style={{width:"100%",display:"inline-flex"}}>
      
          <Image className="header_img" src={logo} />

          <Form className="search_box">
            <Form.Control 
              type="search"
              placeholder="&#xF002; Search..."
              style={{ fontFamily: "Arial, FontAwesome" }}
              aria-label="Search"
            />
          </Form>
          <Button className="checkout" variant="dark">
            <FontAwesomeIcon className="cart_icon" icon={faCartShopping} />
            Checkout(200)
          </Button>
         
        
        <div className="user_profile" style={{ marginRight: "20px" }}>
            <Image
              src={profile_img}
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <p
              style={{
                marginRight: "10px",
                justifyContent: "center",
                textJustify: "center",
                marginTop: "15px",
              }}
            >
              admin
            </p>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ textJustify: "center" }}
            />
          </div>
      </Navbar>
    </div>
  );
}

export default Header;
