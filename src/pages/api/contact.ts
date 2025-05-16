import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import 'dotenv/config';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    // Verifica che tutti i campi siano presenti
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          message: 'Tutti i campi sono obbligatori',
        }),
        { status: 400 }
      );
    }

    // Verifica che le variabili d'ambiente siano impostate
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_PORT || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.EMAIL_TO) {
      console.error('Variabili d\'ambiente mancanti per la configurazione email');
      return new Response(
        JSON.stringify({
          message: 'Errore nella configurazione del server email',
        }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    
    const mailOptions = {
      from: `${process.env.EMAIL_FROM_NAME || 'Portfolio'} <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Nuovo contatto dal sito: ${subject}`,
      text: `
        Nome: ${name}
        Email: ${email}
        
        Messaggio:
        ${message}
      `,
      html: `
        <h2>Nuovo messaggio dal form di contatto</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Oggetto:</strong> ${subject}</p>
        <h3>Messaggio:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    // Invia l'email
    await transporter.sendMail(mailOptions);
    
    return new Response(
      JSON.stringify({
        message: 'Email inviata con successo',
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    
    return new Response(
      JSON.stringify({
        message: 'Si è verificato un errore nell\'invio dell\'email',
      }),
      { status: 500 }
    );
  }
}; 