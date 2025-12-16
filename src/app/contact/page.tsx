"use client";
import React from "react";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

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

const MapSection: React.FC = () => (
  <section className={`w-full bg-[${COULEUR_FOND_PALE}] py-16 md:py-24 px-4`}>
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold text-center mb-8 text-black">
        Retrouvez-nous à Dakar
      </h3>
      <div className="h-96 w-full bg-gray-300 rounded-lg overflow-hidden shadow-xl flex items-center justify-center text-gray-700">
        {/* Simulation de l'intégration d'une carte (ex: Google Maps) */}
        <p className="text-xl font-semibold">
          [ESPACE RÉSERVÉ POUR CARTE INTERACTIVE (MAP)]
        </p>
      </div>
    </div>
  </section>
);

// ----------------------------------------------------------------------
// 3. Composant de la Section Contact (Votre code légèrement adapté)
// ----------------------------------------------------------------------

/**
 * Composant de la Section Contact (le cœur de la page)
 */
const ContactFormSection: React.FC = () => {
  return (
    // Fond de la section : Couleur principale
    <section
      className={`w-full text-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}
      style={{ backgroundColor: COULEUR_PRINCIPALE }}
    >
      <div className="container mx-auto relative z-10">
        {/* Titre (Centré, mais peut être retiré car le Hero est là) */}
        <h2 className="text-5xl md:text-7xl font-extrabold mb-12 text-center text-black">
          Prise de Contact
        </h2>

        {/* Conteneur principal: Infos (Blanc) + Formulaire (Couleur Principale) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-white p-4 md:p-8 rounded-lg shadow-2xl">
          {/* Colonne Gauche: Titre et Infos de Contact (Sur fond blanc) */}
          <div className="flex flex-col space-y-10 p-4 md:p-8">
            {/* Titre */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
                Démarrons notre{" "}
                <span style={{ color: COULEUR_PRINCIPALE }}>
                  Collaboration !
                </span>
              </h2>
            </div>

            {/* Informations de Contact */}
            <div className="space-y-8 text-gray-800">
              {/* Adresse */}
              <div className="flex items-start space-x-4">
                <MapPin
                  className={`w-6 h-6 flex-shrink-0 mt-1`}
                  style={{ color: COULEUR_PRINCIPALE }}
                />
                <div>
                  <p className="text-lg font-bold text-black">
                    Adresse du Bureau :
                  </p>
                  <p className="text-gray-600">Senegal</p>
                  <p className="text-gray-600">Dakar</p>
                </div>
              </div>

              {/* Numéro de Téléphone */}
              <div className="flex items-start space-x-4">
                <Phone
                  className={`w-6 h-6 flex-shrink-0 mt-1`}
                  style={{ color: COULEUR_PRINCIPALE }}
                />
                <div>
                  <p className="text-lg font-bold text-black">
                    Numéro de Téléphone :
                  </p>
                  <p className="text-gray-600">+221 76 191 28 77</p>
                </div>
              </div>

              {/* Adresse E-mail */}
              <div className="flex items-start space-x-4">
                <Mail
                  className={`w-6 h-6 flex-shrink-0 mt-1`}
                  style={{ color: COULEUR_PRINCIPALE }}
                />
                <div>
                  <p className="text-lg font-bold text-black">
                    Adresse E-mail :
                  </p>
                  <p className="text-gray-600">sentechstores@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite: Formulaire de Contact */}
          <div
            className={`p-8 md:p-12`}
            style={{ backgroundColor: COULEUR_PRINCIPALE }}
          >
            <h3 className="text-2xl font-bold mb-2 text-black">
              Envoyez-nous un Message
            </h3>
            <p className="text-white/90 mb-8">
              Nous répondons généralement sous 24h ouvrées.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Champ Nom */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Votre Nom..."
                  className={`w-full bg-white/10 text-black p-4 border-b-2 border-black focus:border-black focus:outline-none transition-colors placeholder:text-black/60`}
                  required
                />
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/60" />
              </div>

              {/* Champ Téléphone */}
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Numéro de Téléphone"
                  className={`w-full bg-white/10 text-black p-4 border-b-2 border-black focus:border-black focus:outline-none transition-colors placeholder:text-black/60`}
                  required
                />
                <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/60" />
              </div>

              {/* Champ Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Adresse E-mail"
                  className={`w-full bg-white/10 text-black p-4 border-b-2 border-black focus:border-black focus:outline-none transition-colors placeholder:text-black/60`}
                  required
                />
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/60" />
              </div>

              {/* Champ Message (Ajout d'un TextArea pour être complet) */}
              <div className="relative">
                <textarea
                  placeholder="Votre Message..."
                  rows={4}
                  className={`w-full bg-white/10 text-black p-4 border-b-2 border-black focus:border-black focus:outline-none transition-colors placeholder:text-black/60`}
                  required
                ></textarea>
              </div>

              {/* Bouton d'Envoi : Couleur noire pour un contraste maximal */}
              <button
                type="submit"
                className={`w-full bg-black text-white font-semibold py-4 mt-6 hover:bg-gray-800 transition-colors`}
              >
                Envoyer le Message →
              </button>
            </form>
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
