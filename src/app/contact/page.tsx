"use client";
import React, { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Loader2,
  CheckCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
// Couleurs (utilisées directement)
const COULEUR_PRINCIPALE = "#9ad1bc"; // Vert d'eau/Menthe
const COULEUR_FOND_PALE = "#f7fafc"; // Gris très clair pour contraster le fond principal

// ----------------------------------------------------------------------
// 1. Section d'Introduction (Héro de la page Contact)
// ----------------------------------------------------------------------

const ContactHero: React.FC = () => (
  <div className="bg-gray-900 text-white py-20 md:py-28 px-4 text-center">
    <div className="container mx-auto">
      <MessageSquare
        className="w-12 h-12 mx-auto mb-4"
        style={{ color: COULEUR_PRINCIPALE }}
      />
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        Discutons de Votre Projet
      </h1>
      <p className="text-gray-300 text-xl max-w-3xl mx-auto">
        Nous sommes prêts à écouter vos défis et à concevoir ensemble des
        solutions numériques qui propulseront votre entreprise.
      </p>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// 2. Section de Carte (Simulée)
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 3. Composant de la Section Contact (Votre code légèrement adapté)
// ----------------------------------------------------------------------

/**
 * Composant de la Section Contact (le cœur de la page)
 */
const ContactFormSection: React.FC = () => {
  // 1. Référence pour le formulaire
  const form = useRef<HTMLFormElement>(null);

  // 2. États pour gérer l'affichage (chargement et succès)
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  React.useEffect(() => {
    emailjs.init("P7emsHzln0ke6neHj");
  }, []);
  // 3. Fonction d'envoi
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "service_kre9kid", // Remplacez par votre Service ID
        "template_lbv0kez", // Remplacez par votre Template ID
        form.current,
        "P7emsHzln0ke6neHj" // Remplacez par votre Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setIsSending(false);
          form.current?.reset(); // Réinitialise le formulaire
        },
        (error) => {
          console.error(error.text);
          alert("Une erreur est survenue, veuillez réessayer.");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      className={`w-full text-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}
      style={{ backgroundColor: COULEUR_PRINCIPALE }}
    >
      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-12 text-center text-black">
          Prise de Contact
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-white p-4 md:p-8 rounded-lg shadow-2xl">
          {/* Colonne Gauche : Infos */}
          <div className="flex flex-col space-y-10 p-4 md:p-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
                Démarrons notre{" "}
                <span style={{ color: COULEUR_PRINCIPALE }}>
                  Collaboration !
                </span>
              </h2>
            </div>

            <div className="space-y-8 text-gray-800">
              <div className="flex items-start space-x-4">
                <MapPin
                  className={`w-6 h-6 flex-shrink-0 mt-1`}
                  style={{ color: COULEUR_PRINCIPALE }}
                />
                <div>
                  <p className="text-lg font-bold text-black">
                    Adresse du Bureau :
                  </p>
                  <p className="text-gray-600">Sénégal, Dakar</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone
                  className={`w-6 h-6 flex-shrink-0 mt-1`}
                  style={{ color: COULEUR_PRINCIPALE }}
                />
                <div>
                  <p className="text-lg font-bold text-black">Téléphone :</p>
                  <p className="text-gray-600">+221 76 191 28 77</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail
                  className={`w-6 h-6 flex-shrink-0 mt-1`}
                  style={{ color: COULEUR_PRINCIPALE }}
                />
                <div>
                  <p className="text-lg font-bold text-black">Email :</p>
                  <p className="text-gray-600">sentechstores@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire */}
          <div
            className={`p-8 md:p-12`}
            style={{ backgroundColor: COULEUR_PRINCIPALE }}
          >
            {isSent ? (
              // Message de succès après envoi
              <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
                <CheckCircle className="w-16 h-16 text-black" />
                <h3 className="text-2xl font-bold text-black">
                  Message Envoyé !
                </h3>
                <p className="text-white">
                  Merci, nous vous répondrons sous 24h.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="bg-black text-white px-6 py-2 rounded mt-4"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-2 text-black">
                  Envoyez-nous un Message
                </h3>
                <p className="text-white/90 mb-8">
                  Nous recevons vos demandes sur sentechstores@gmail.com
                </p>

                <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                  <div className="relative">
                    <input
                      name="from_name" // Très important pour EmailJS
                      type="text"
                      placeholder="Votre Nom..."
                      className={`w-full bg-white/10 text-black p-4 border-b-2 border-black focus:border-black focus:outline-none transition-colors placeholder:text-black/60`}
                      required
                    />
                  </div>

                  <div className="relative">
                    <input
                      name="user_phone"
                      type="tel"
                      placeholder="Numéro de Téléphone"
                      className={`w-full bg-white/10 text-black p-4 border-b-2 border-black focus:border-black focus:outline-none transition-colors placeholder:text-black/60`}
                      required
                    />
                    <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/60" />
                  </div>

                  <div className="relative">
                    <input
                      name="user_email"
                      type="email"
                      placeholder="Adresse E-mail"
                      className={`w-full bg-white/10 text-black p-4 border-b-2 border-black focus:border-black focus:outline-none transition-colors placeholder:text-black/60`}
                      required
                    />
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/60" />
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Votre Message..."
                      rows={4}
                      className={`w-full bg-white/10 text-black p-4 border-b-2 border-black focus:border-black focus:outline-none transition-colors placeholder:text-black/60`}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full bg-black text-white font-semibold py-4 mt-6 hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2`}
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="animate-spin w-5 h-5" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <span>Envoyer le Message →</span>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// 4. Page Contact Complète (Export par défaut)
// ----------------------------------------------------------------------

/**
 * La Page Contact complète
 */
const ContactPage: React.FC = () => {
  return (
    <div className="Contact-Page">
      <ContactHero />
      <ContactFormSection />

      {/* Ici, vous pouvez ajouter le Footer */}
    </div>
  );
};

export default ContactPage;
