import React from 'react'
import { Container, Nav, NavLink } from 'react-bootstrap'
import NavBar from 'react-bootstrap/Navbar'

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
        <NavBar bg='black' variant="dark" className='py-0' expand="md" fixed="top">
            <Container fluid className='p-2'>
                <NavBar.Toggle aria-controls="mobile-menu" className='ms-auto' />
                <NavBar.Collapse id="mobile-menu" className='justify-content-center'>
                    <Nav>
                        {navLinks.map((link, index) => {
                            return (
                                <NavLink key={index} href={link.ref} className='fs-5 my-2 my-md-0 mx-md-3'>
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