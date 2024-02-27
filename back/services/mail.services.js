import { createTransport } from "nodemailer";
import {google} from "googleapis"
const OAuth2 = google.auth.OAuth2


async function SendUserEmail(email) {


    const transporter = createTransport({
      service: 'Gmail',
      auth: {
        type: 'OAuth2',
        user: 'huellasacasa.app@gmail.com',
        pass: 'Huellasacasa01!',
        clientId: "310466289574-umbhqff2ud2923iofmb66rpjbbipffa2.apps.googleusercontent.com",
        clientSecret: "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",
        refreshToken:"1//04LfOIIXVjHPtCgYIARAAGAQSNwF-L9IriPdvqXqk1ej55RofdI3l90szRGepSSQtjvqn2LYOs6tkzcAes_wstch-bc4IwEQ2j-w"
      }
    });

    const messageOptions = {
        from: 'huellasacasa.app@gmail.com',
        to: email,
        subject: 'Gracias por unirte a "Huellas a casa"',
        text: 'Esperamos que nuestra app nos acerque cada vez mas a que todas las mascotas perdidas vuelvan a encontrar a sus dueños',
        // html: '<img src="cid:huellasacasa.app@gmail.com" />',
        // attachments:[{
        //     filename:"portada_inicio_ilustracion_mascotas.png",
        //     path: "front/src/assets/img/portada_inicio_ilustracion_mascotas.png",
        //     cid: "huellasacasa.app@gmail.com"
        // }] 
    }

    try {
        const info = await transporter.sendMail(messageOptions);
        return info
    } catch (error) {
        console.log({error});
        return error
    }

}

export {SendUserEmail}
