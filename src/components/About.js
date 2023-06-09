import React from 'react'
import { Container, Image, Stack } from 'react-bootstrap'
import cvPic from "../assets/POZA.png"
import "../css/About.css"
import { AiFillHtml5 } from "react-icons/ai"
import { FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa"
import { BsGit } from "react-icons/bs"
import { IoLogoJavascript } from "react-icons/io"
import { IoLogoFirebase } from "react-icons/io5"
import { SiRedux } from "react-icons/si"

function About() {
    const skills = [{
        name: "HTML",
        icon: AiFillHtml5,
    },
    {
        name: "CSS",
        icon: FaCss3Alt,
    },
    {
        name: "JavaScript",
        icon: IoLogoJavascript,
    },
    {
        name: "ReactJs",
        icon: FaReact,
    },
    {
        name: "Firebase",
        icon: IoLogoFirebase,
    },
    {
        name: "Redux",
        icon: SiRedux,
    },
    {
        name: "Bootstrap",
        icon: FaBootstrap,
    },
    {
        name: "Git",
        icon: BsGit,
    }]

    return (
        <Container
            as="section"
            fluid
            id="about"
            className='min-vh-100 bg-black pt-5 position-relative'
        >
            <Image src={cvPic} alt="cvPic" className='position-absolute top-0 start-0 translate-middle-x h-100 d-none d-sm-block cv-img' />
            <Container
                className='min-vh-100 d-flex flex-column position-relative'
            >
                <Stack
                    direction='vertical'
                    gap={4}
                    className='justify-content-center ms-auto text-start'
                    style={{ maxWidth: "1000px" }}
                >
                    <h1 className='text-warning display-1'>
                        ABOUT ME
                    </h1>
                    <p className='text-white fs-5'>
                        I am a passionate and hard-working person who thrives on turning complex problems into elegant, user-friendly applications. I'm looking forward to an entry-level position in front end development. I strongly believe that you can achieve anything if you are willing to learn and work hard enough. I do have the passion and the ability to learn fast. I am driven to collaborate, contribute, and create applications that enhance user experiences.
                        I am highly adaptable and eager to learn new technologies and frameworks as front-end development evolves.
                    </p>
                </Stack>
                <Stack
                    direction='vertical'
                    className='ms-auto justify-content-start'
                    gap={4}
                    style={{ maxWidth: "1000px" }}
                >
                    <h1 className='text-warning skill-text display-1 text-start'>
                        SKILLS
                    </h1>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='flex-wrap justify-content-center justify-content-md-start'
                    >
                        {skills.map((icon, index) => {
                            return (
                                <span key={index} className='text-white fs-4'>
                                    <icon.icon style={{ width: "100px" }} className='display-2' /> <br />
                                    {icon.name}
                                </span>
                            )
                        })}
                    </Stack>
                </Stack>
            </Container>
        </Container >
    )
}

export default About