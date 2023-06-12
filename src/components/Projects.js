import React from 'react'
import { Button, Col, Container, Image, Row, Stack } from 'react-bootstrap'
import project1 from "../assets/project.jpg"

function Projects() {
    return (
        <Container
            as="section"
            fluid
            id="projects"
            className='min-vh-100 bg-black'
        >
            <Container
                className='py-0 py-md-5 min-vh-100 d-flex align-items-center'
            >
                <Row
                    className='mx-auto'
                    style={{ maxWidth: "1000px" }}
                >
                    <Col lg={12}>
                        <Stack
                            direction='horizontal'
                            gap={2}
                            className='justify-content-between flex-wrap mt-5'
                        >
                            <h1
                                className='text-warning display-3 text-start'
                            >
                                HireChef-Website
                            </h1>
                            <div>
                                <Button
                                    href="https://github.com/AdriandGrigore/HireChef-Website"
                                    target='_blank'
                                    size='md'
                                    variant="outline-warning"
                                    className='mx-2 my-1'
                                >
                                    Github
                                </Button>
                                <Button
                                    href="https://hirechef-website.web.app/"
                                    target='_blank'
                                    size='md'
                                    variant="outline-warning"
                                    className='mx-2 my-1'
                                >
                                    Website
                                </Button>
                            </div>
                        </Stack>
                    </Col>
                    <Col
                        lg={12}
                        className='mb-4 me-auto text-white fs-5 text-start mt-4 mb-4'
                    >
                        <p>
                            Planning an important event can be frustrating at times. Finding a good chef or the right menu is not an easy task.
                            This project helps users by presenting a list of professional chefs and a selection of fine menus to choose from.
                            <br />
                            Users can create an account or log in with the preset demo user credentials to book a meeting, access their meetings, and view their ratings.
                            Users can edit or delete their meetings.
                            They have the option to rate the chef they collaborated with (the rate button will appear only if the meeting date has passed).
                            On the ratings page, users can view or delete their ratings.
                        </p>
                    </Col>
                    <Col
                        lg={12}
                        className='d-none d-md-block '
                    >
                        <Image
                            fluid
                            src={project1}
                            style={{
                                filter: "grayscale(1)",
                                borderRadius: "200px 0px 200px 0px",
                                width: "750px"
                            }}
                            className='d-block ms-auto'
                        />
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}

export default Projects