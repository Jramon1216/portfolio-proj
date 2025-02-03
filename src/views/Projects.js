import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from '../styles/Projects.module.scss';
import simpleChat from '../assets/img/project/simpleChat.png'
import todo from '../assets/img/project/todo.png'
import AWSDemo from '../assets/video/AWS Citizens Demo.mp4'


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: 'black',
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
    flexDirection: 'row',
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    minWidth: '150px',
    backgroundColor: 'rgba(0, 0, 0, .03)',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
}));

export default function Projects() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Python Django ToDo List w/ Authentication</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <a href="https://github.com/Jramon1216/Python-Django-ToDo-List" target='_blank' rel="noopener noreferrer">
                        <img src={todo} className={styles.projectImg} alt="Python Django ToDo List Project Image" />
                    </a>
                    <Typography>
                        This project was my first experience using Django's class-based views and Template Language to create a static web page.
                        I implemented some unique features and took a different approach from the tutorial to deepen my understanding of Django.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Simple Chat App</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <a href="https://github.com/Jramon1216/simple-website" target='_blank' rel="noopener noreferrer">
                        <img src={simpleChat} className={styles.projectImg} alt="Simple Chat App Project Image" />
                    </a>

                    <Typography>
                        Developed as part of a job interview, this project is a front-end mock-up of a messaging service using Django endpoints.
                        Built in just 5 days, it employs axios and async-await for backend communication and message retrieval. As well as a couple AWS services like EC2, S3, RDS, and CDN.
                        I plan to make another version with a local API to simulate this project as well as add some more features
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>AWS Citizens</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <video className={styles.projectImg} controls>
                            <source src={AWSDemo} type='video/mp4'></source>
                        </video>
                        <a href="https://github.com/Jramon1216/AWS-portfolio-proj" target='_blank' rel="noopener noreferrer">
                            <p style={{
                                "text-align": "center",
                                "padding-right": "10px"
                            }}>Project link</p>
                        </a>
                    </div>

                    <Typography>
                        A project completed during my time at <a href='https://perscholas.org/' target='_blank' rel="noopener norefferer">Per Scholas</a> to demonstrate my understanding of AWS and its technologies.
                        Scan a unique QR code to instantly access a user's profile with details like their name and email. 
                        This web app is built with React and leverages AWS technologies such as S3 for storage, API Gateway for routing requests, DynamoDB for data storage, and Lambda for serverless processing.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}