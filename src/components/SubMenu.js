
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"
function SubMenu() {

    const [toggleState, setToggleState] = useState(1)

    const handleSelect = (index) => {
        setToggleState(index)
    }

    return (
        <div className='submenu'>
            <Nav variant="tabs" onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link onClick={() => handleSelect(1)}><Link className={toggleState === 1 ? "sub_links active" : "sub_links"}>Info</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => handleSelect(2)}><Link className={toggleState === 2 ? "sub_links active" : "sub_links"}>FAQ</Link></Nav.Link>
                   
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => handleSelect(3)}><Link className={toggleState === 3 ? "sub_links active" : "sub_links"}>Complaints and Feedback</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => handleSelect(4)}><Link className={toggleState === 4 ? "sub_links active" : "sub_links"}>Privacy Policy</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => handleSelect(5)}><Link className={toggleState === 5 ? "sub_links active" : "sub_links"}>Terms & Conditions</Link></Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default SubMenu;