import React from 'react'
import { Container, Nav, NavLink } from 'react-bootstrap'
import NavBar from 'react-bootstrap/Navbar'
import "../css/Navbar.css"

function Navbar() {
    const navLinks = [{
        name: "HOME",
        ref: "/#",
    },
    {
        name: "ABOUT ME",
        ref: "#about",
    },
    {
        name: "PROJECTS",
        ref: "#projects",
    },
    {
        name: "CONTACT ME",
        ref: "#contact",
    }]

    return (
        <NavBar bg='black' className='py-0' expand="md" fixed="top">
            <Container fluid className='p-2'>
                <NavBar.Toggle aria-controls="mobile-menu" id="navTogg" className='ms-auto' />
                <NavBar.Collapse id="mobile-menu" className='justify-content-center'>
                    <Nav>
                        {navLinks.map((link, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    href={link.ref}
                                    className='fs-5 my-2 my-md-0 mx-md-3 link-light navLinks'
                                    onClick={() => {
                                        if (window.innerWidth <= 767) {
                                            document.getElementById("navTogg").click()
                                        }
                                    }}
                                >
                                    {link.name}
                                </NavLink>
                            )
                        })}
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    )
}

export default Navbar 