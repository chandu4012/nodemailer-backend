const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());

// POST API to send mail
app.post('/send-mail', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "pcstech2022@gmail.com",
        pass: "iahk ebbn oloo pwun"
      }
    });

    // Mail options
    const mailOptions = {
      from: "pcstech2022@gmail.com",
      to: "manjuterashna97@gmail.com",
      subject: subject,
      text: text
    };

    // Send mail
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Mail sent successfully!' });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ message: 'Failed to send mail', error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
