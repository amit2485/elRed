import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faArrowLeft, faContactBook, faTrashCan, faEdit, faEnvelope, faPhone, faHome, faClock, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from "@fortawesome/free-regular-svg-icons"



function Contact({ showContact, setShowContact, data, setNewData }) {


    let copy;
    const [show, setShow] = useState(showContact);
    const [contactData, setContactData] = useState(data)
    const [editData, showEditData] = useState(false)
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [active, setActive] = useState(null)
    let [boxCountContact, setBoxCountContact] = useState(0)
    const[newContact, setNewContact] = useState([])

    const handleClose = () => {
        setShow(false);
        setShowContact(false)
        showEditData(false)
    }

    const handleDelete = (id) => {
        const newData = contactData.filter(item => item.id !== id)
        setContactData(newData);
        setNewData(newData);

    }

    const handleEdit = (id) => {

        showEditData(true)
        const oldData = contactData.find(item => item.id === id)
        setEmail(oldData.email)
        setContact(oldData.contact)
        setActive(id)
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        let copy = [...contactData];
        if(editData){
            if(email){
                copy[active].email=Array(email) ;
               }
               if(contact){
                copy[active].contact=Array(contact);
               }
             showEditData(false)
        }
        if(boxCountContact >= 1){

             for(var i = 0; i < newContact.length; i++){
                contactData[active].contact.push(Object.values(newContact[i]))
            }
            setNewContact(" ")
          
        }
        setNewData(copy);
       
       
    }

    const addTextBox = () => {
        
        boxCountContact = boxCountContact + 1
        setBoxCountContact(boxCountContact)
       
    }

    const handleContactBox = (e) => {
        const {name, value} = e.target;
        setNewContact((prevData) => {
            return [...prevData,{[name]:value}]

        })
       
    }



    return (<Modal className="contact_popup" style={{ borderRadius: "0px" }} show={show} onHide={handleClose}>

        <div style={{ display: "flex" }}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "black", margin: "15px 0 0 20px" }} />
            <p style={{ margin: "10px 0px 0px 10px", color: "black", fontWeight: "bold" }}>Contacts</p>
        </div>

        {!editData ? <div>
            {contactData.map((contact, index) => {
                let cntct = "";
                if (contact.contact.length > 1) {
                  

                    for (var i = 0; i < contact.contact.length; i++) {
                        cntct = cntct + contact.contact[i] + " / ";
                    }
                    cntct = cntct.slice(0, -2)
                }
                else {
                    cntct = contact.contact;
                }
                return (
                    <div className="contact_card" key={index}>
                        <div style={{ display: "flex" }}>
                            <FontAwesomeIcon icon={faContactBook} style={{ color: "darkgray", margin: "10px" }} />
                            <h6 style={{ marginTop: "7px", display: "inline-block", whiteSpace: "nowrap", width: "100px" }}>{contact.team}</h6>
                            <FontAwesomeIcon onClick={() => handleDelete(contact.id)} icon={faTrashCan} style={{ color: "rgb(207, 11, 11)", marginLeft: "70px", marginTop: "7px" }} />
                            <FontAwesomeIcon onClick={() => handleEdit(contact.id)} icon={faEdit} style={{ color: "rgb(207, 11, 11)", paddingLeft: "20px", marginTop: "7px" }} />
                        </div>
                        <div style={{ lineHeight: "10px" }}>
                            <div style={{ display: "flex" }}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ margin: "15px 5px 5px 10px", fontSize: "12px", color: "darkgray" }} />
                                <p style={{ fontSize: "13px", marginTop: "15px" }}>{contact.email}</p>
                            </div>
                            <div style={{ display: "flex" }}>
                                <FontAwesomeIcon icon={faPhone} style={{ margin: "0px 5px 5px 10px", fontSize: "12px", color: "darkgray" }} />
                                <p style={{ marginTop: "0px", fontSize: "13px" }}>{cntct}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose} >
                    Save Changes
                </Button>
            </Modal.Footer>
        </div> :
            <div>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3" style={{ margin: "30px 0px 0px 20px" }} controlId="formBasicEmail">
                        <Form.Label style={{ color: "black", fontWeight: "bold", fontSize: "13px" }}>Email ID</Form.Label>
                        <Form.Control type="text"
                            className='text1'
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)} />

                        <Button className='btn1'> <FontAwesomeIcon icon={faCirclePlus} style={{ marginRight: "5px" }} />Add More</Button>
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ margin: "30px 0px 0px 20px" }} controlId="formBasicEmail">
                        <Form.Label style={{ color: "black", fontWeight: "bold", fontSize: "13px" }}>Contact Number</Form.Label>
                        <Form.Control
                            type="text"
                            className='text1'
                            placeholder="Enter contact"
                            name="conBox0"
                            onChange={(e) => setContact(e.target.value)}
                            value={contact} />

                            {}
                            {Array.from(Array(boxCountContact), (e, i) => {
                            return(<Form.Control key={i}
                            style={{marginTop:"5px"}}
                            type="text"
                            name={`conBox${i+1}`}
                            className='text1'
                            onChange={(e) => handleContactBox(e)}
                             />)
                            })
                            }
                        
                        <Button className='btn1' onClick={() => addTextBox()}> <FontAwesomeIcon icon={faCirclePlus} style={{ marginRight: "5px" }} />Add More</Button>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="danger" type='submit'  >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </div>}
        {/* <Button variant="danger" style={{color:"rgb(207, 11, 11)"}}>Save</Button> */}


    </Modal>

    )
}

export default Contact;