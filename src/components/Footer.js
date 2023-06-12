import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ImLocation } from "react-icons/im"
import { AiOutlinePhone, AiFillGithub, AiFillLinkedin } from "react-icons/ai"

function Footer() {
    return (
        <Container
            className='bg-black bg-gradient'
            id="contact"
            as="footer"
            style={{ minHeight: "250px" }}
            fluid
        >
            <Row
                className='text-white py-3'
                style={{ minHeight: "inherit" }}
            >
                <Col
                    lg={4}
                    className='d-flex flex-column align-items-center justify-content-center fs-5 my-2'
                >
                    <ImLocation
                        className='display-5 mb-3 text-warning'
                        style={{ width: "100px" }}
                    />
                    <p className='mb-2'>
                        Sibiu
                    </p>
                    <p>
                        Romania
                    </p>
                </Col>
                <Col
                    lg={4}
                    className='d-flex flex-column align-items-center justify-content-center fs-5 my-2'
                >
                    <AiOutlinePhone
                        className='display-5 mb-3 text-warning'
                        style={{ width: "100px" }}
                    />
                    <p className='mb-2'>
                        0748938855
                    </p>
                    <p>
                        grigorenicolaeadrian@yahoo.com
                    </p>
                </Col>
                <Col
                    lg={4}
                    className='d-flex align-items-center justify-content-center fs-5 my-2'
                >
                    <Button
                        href='https://github.com/AdriandGrigore'
                        target='_blank'
                        variant='outline-warning'
                        className='border-0 mx-3'>
                        <AiFillGithub
                            className='fs-1'
                        />
                    </Button>
                    <Button
                        href='https://www.linkedin.com/in/adrian-grigore-762058251/'
                        target='_blank'
                        variant='outline-warning'
                        className='border-0  mx-3'
                    >
                        <AiFillLinkedin
                            className='fs-1'
                        />
                    </Button>
                </Col>
            </Row>
        </Container >
    )
}

export default Footer