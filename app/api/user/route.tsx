import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

//https://zenn.dev/nenenemo/articles/59ca1b03fcf234
//https://qiita.com/kad/items/365f292b6d78fa161fef

// export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, message, email } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email, // sender address
    to: 'shiro.white.ffffff@gmail.com', // list of receivers
    subject: 'From YK portfolio', // Subject line
    text: 'req.body?.message', // plain text body
    html: `
    <h3>Inquiry</h3>
    <li>Name: ${name}</li>
    <li>Email: ${email}</li>
    <li>Message: ${message}</li>
    `, // html body
  };

  await transporter.sendMail(mailOptions);

  return NextResponse.json({ message: 'Email sent successfully' });

  // try {
  //   let info = await transporter.sendMail(mailOptions);
  //   console.log('Email sent: ' + info.response);
  //   res.status(200).json({ message: 'Email sent successfully' });
  // } catch (error) {
  //   console.error('Error sending email: ', error);
  //   res.status(500).json({ message: 'Error sending email' });
  // }
};

// import { NextResponse } from 'next/server';

// export async function GET() {
//   return NextResponse.json({
//     name: 'Mike',
//   });
// }

//mkdir -p app/api/user && touch app/api/user/route.tsx
