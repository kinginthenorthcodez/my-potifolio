const express = require('express');
const cors = require('cors');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const router = express.Router();

// server details

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);
const HTTP_PORT = 5000;
app.listen(HTTP_PORT, () => {
  console.log('Server running on port %PORT%'.replace('%PORT%', HTTP_PORT));
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);
});

const contactEmail = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: '*******@gmail.com',
    pass: '',
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to send!');
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  const mail = {
    from: name,
    to: '******@gmail.com',
    subject: 'Contact Form Submission -potifolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: 'Message Sent!' });
    }
  });
});
