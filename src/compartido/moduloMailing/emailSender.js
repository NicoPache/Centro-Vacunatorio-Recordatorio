import nodemailer from "nodemailer";

function createEmailSender(user, pass) {
  const transporter = nodemailer.createTransport({
    /*host: "smtp.ethereal.email",
        port: 587,
        secure: false,*/
    service: "Gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  return {
    send: async (emailOptions) => {
      let info = await transporter.sendMail(emailOptions);
    },
  };
}

export { createEmailSender };
