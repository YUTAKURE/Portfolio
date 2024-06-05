// import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// export default function sendGmail(req: NextApiRequest, res: NextApiResponse) {
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.email',
//     port: 587,
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASSWORD,
//     },
//   });

//   transporter.sendMail({
//     from: req.body.email, // sender address
//     to: 'shiro.white.ffffff@gmail.com', // list of receivers
//     subject: req.body.name, // Subject line
//     text: req.body.message, // plain text body
//     html: '<b>Hello world?</b>', // html body
//   });
// }
