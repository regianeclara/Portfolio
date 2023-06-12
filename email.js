//Formulário de cadastro
const nodemailer = require('nodemailer');

const user = process.env.EMAIL;
const pass = process.env.SENHA;

let transporter = nodemailer.createTransport({
        host: "outlook.com",
        port: process.env.PORTA,
        secure: true,
        auth: {user, pass}
    });


    transporter.sendMail({
        from: user,
        to: "regianeclara@outlook.com",
        replyTo: "email",
        subject: "Contato via site",
        text: "Regiane, esta pessoa abaixo fez contato com você via site. A mensagem dela é: ",
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.log(err);
    })
    
dotenv.config();

