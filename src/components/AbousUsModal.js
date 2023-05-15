import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function AboutUSModal({isModal,showModal,setText,text}) {

   

    const [show, setShow] = useState(isModal);
    const [input,setInput] = useState();
    
    const handleClose = () => {
        setShow(false);
        showModal(false);
        //window.location.reload()
        
    }

    const handleUpdate = () => {
        setText(input)
        handleClose();
    }
    //const handleShow = () => setShow(true);

    return(
        <div    
      className="modal show"
      style={{ display: 'block', position: 'absolute', alignSelf:"center"}}
    >
       <Modal show={show} onHide={handleClose}>
        <Modal.Body>
           <Form>
             <Form.Group className="mb-3">
                <Form.Label style={{fontWeight:"bold"}}>Edit About Us</Form.Label>
                <Form.Control as="textarea" placeholder={text} rows={3} name="about_us" onChange={(e) => setInput(e.target.value) }/>
            </Form.Group>
           </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleUpdate}>
            update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}

export default AboutUSModal;