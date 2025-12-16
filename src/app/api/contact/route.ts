import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Récupération des identifiants SMTP depuis les variables d'environnement
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { nom, email, telephone, message } = data;

    if (!nom || !email || !message) {
      return NextResponse.json(
        { message: "Champs requis manquants" },
        { status: 400 }
      );
    }

    // Création du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // ou ton SMTP
      port: 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Envoi de l'email
    await transporter.sendMail({
      from: email,
      to: "sentechstores@gmail.com", // adresse de réception
      subject: `Nouveau message de ${nom}`,
      text: `
Nom: ${nom}
Téléphone: ${telephone}
Email: ${email}
Message: ${message}
      `,
    });

    return NextResponse.json({ message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi du mail." },
      { status: 500 }
    );
  }
}
