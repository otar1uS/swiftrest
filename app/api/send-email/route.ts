// import nodemailer from "nodemailer";

// // Configure the email transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.MY_EMAIL,
//     pass: process.env.MY_PASSWORD,
//   },
// });

// export default async function handler(req: Request) {
//   if (req.method === "POST") {
//     const { firstname, lastname, email, text, number } = req.body;

//     const mailOptions = {
//       from: "your-email@gmail.com",
//       to: "recipient-email@example.com",
//       subject: "New Form Submission",
//       text: `
//         First Name: ${firstname}
//         Last Name: ${lastname}
//         Email: ${email}
//         Text: ${text}
//         Number: ${number}
//       `,
//     };

//     try {
//       await transporter.sendMail(mailOptions);

//       return new Response({ message: "Form submitted successfully" });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       new Response({ message: "Failed to submit the form" });
//     }
//   } else {
//     new Response({ message: "Method Not Allowed" });
//   }
// }
