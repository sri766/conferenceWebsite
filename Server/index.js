const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');

const app = express();

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
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
                user: 'srisanthseth28@gmail.com', 
                pass: 'nxgg yuyj aqyd wbsm'   
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: formData.author_email,
            to: 'srisanthseth28@gmail.com', 
            subject: 'New Form Submission',
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
                res.status(200).send('Registration successfully');
            }
        });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).send('Error submitting form');
    }
});

// Route to handle form submission


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
