import React from 'react'
import { Button, Container, Stack } from 'react-bootstrap'
import "../css/Hero.css"

function Hero() {
    return (
        <>
            <Container
                as="section"
                fluid
                className='vh-100 px-0 background'
                id="#"
            >
                <Stack
                    direction='vertical'
                    className='text-white fw-bold h-100'
                >
                    <Container
                        fluid
                        className='h-100 d-flex flex-column align-items-center justify-content-center'
                    >
                        <p className='fw-light fs-4 text-info opacity-75'>
                            console
                            <span className='text-warning'>.log</span>
                            <span className='text-light'>("Hi there")</span>
                        </p>
                        <h1 className='display-1' style={{ letterSpacing: "3px" }}>
                            I'm Adrian Grigore
                        </h1>
                        <p className='opacity-75 text-warning mt-4 typewriter'>
                            FRONT END DEVELOPER
                        </p>
                    </Container>
                    <Container
                        className='mb-5'
                    >
                        <Button
                            variant="outline-light"
                            href="#projects"
                            className='see-projects-button'
                        >
                            See my projects
                        </Button>
                    </Container>
                </Stack>
            </Container >
        </>
    )
}

export default Hero