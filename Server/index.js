const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { WebSocketServer } = require('ws');
const http = require('http');

dotenv.config('.env');

const app = express();
const server = http.createServer(app);

// WebSocket server
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('New WebSocket connection');
    
    ws.on('message', (message) => {
        console.log('Received:', message);
        
        // Echo the message back to the client
        ws.send(`You said: ${message}`);
    });
    
    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
});

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: process.env.REACT_APP_URL,
    methods: ['GET', 'POST']
}));

// Route to handle registration submission
app.post('/register', upload.single('payment_proof'), (req, res) => {
    try {
        const formData = req.body;
        const file = req.file;

        const emailContent = `
            Author Name: ${formData.author_name}
            Author Email: ${formData.author_email}
            Author Phone: ${formData.author_mobile}
            Paper ID: ${formData.paper_id}
            Paper Title: ${formData.paper_title}
            Organization: ${formData.organization}
            Nationality: ${formData.nationality}
            Category: ${formData.category}
            Amount Paid: ${formData.amount_paid}
            Transaction ID: ${formData.transaction_id}
            Date of Transaction: ${formData.date_of_transaction}
        `;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, 
            auth: {
                user: '2024nationalconference@gmail.com', 
                pass: 'npef dmbr kqmf awdn'   
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: formData.author_email,
            to: '2024nationalconference@gmail.com', 
            subject: 'New DV-NVC Registration',
            text: emailContent,
            attachments: file ? [{ filename: file.originalname, content: file.buffer }] : []
        };

        console.log(emailContent);

        console.log('Sending email...');
        console.log('Email content:', emailContent);

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Error sending email');
            } else {
                console.log('Email sent:', info.response);
                res.status(200).send('Registration successful');
            }
        });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).send('Error submitting form');
    }
});

// Route to handle form submission 
app.post('/submission', upload.single('paper'), (req, res) => {
    try {
        const subData = req.body;
        const attachment = req.file;

        const emailContent = `
            Corresponding Author Name: ${subData.author_name}
            Corresponding Author Affiliation: ${subData.author_affiliation}
            Corresponding Author Email: ${subData.author_email}
            Corresponding Author Mobile Number: ${subData.author_mobile}
            Paper Title: ${subData.paper_title}
            Number Of Pages: ${subData.number_of_pages}
            Abstract: ${subData.abstract}
        `;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: '2024nationalconfernece@gmail.com',
                pass: 'npef dmbr kqmf awdn'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: subData.author_email,
            to: '2024nationalconfernece@gmail.com',
            subject: 'New DV-NVC Submission',
            text: emailContent,
            attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : []
        };

        console.log('Sending email...');
        console.log('Email content:', emailContent);

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Error sending email');
            } else {
                console.log('Email sent:', info.response);
                res.status(200).send('Submission successful');
            }
        });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).send('Error submitting form');
    }
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
