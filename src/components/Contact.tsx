"use client";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

// Couleurs (utilisées directement)
const COULEUR_PRINCIPALE = "#9ad1bc"; // Vert d'eau/Menthe

/**
 * Composant de la Section Contact
 */
const ContactSection: React.FC = () => {
  return (
    // Fond de la section : Couleur principale
    <section
      className={`w-full bg-[${COULEUR_PRINCIPALE}] text-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}
    >
      <div className="container mx-auto relative z-10">
        {/* Grand titre en surbrillance */}
        <h2 className="text-5xl md:text-7xl font-extrabold mb-12 text-center text-black">
          Contact
        </h2>

        {/* Conteneur principal: Infos (Blanc) + Formulaire (Couleur Principale) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-white p-4 md:p-8 rounded-lg shadow-2xl">
          {/* Colonne Gauche: Titre et Infos de Contact (Sur fond blanc) */}
          <div className="flex flex-col space-y-10 p-4 md:p-8">
            {/* Titre */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
                Démarrons notre{" "}
                <span className={`text-[${COULEUR_PRINCIPALE}]`}>
                  Collaboration !
                </span>
              </h2>
            </div>

            {/* Informations de Contact */}
            <div className="space-y-8 text-gray-800">
              {/* Adresse */}
              <div className="flex items-start space-x-4">
                <MapPin
                  className={`w-6 h-6 text-[${COULEUR_PRINCIPALE}] flex-shrink-0 mt-1`}
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
                  className={`w-6 h-6 text-[${COULEUR_PRINCIPALE}] flex-shrink-0 mt-1`}
                />
                <div>
                  <p className="text-lg font-bold text-black">
                    Numéro de Téléphone :
                  </p>
                  <p className="text-gray-600">+221 76 452 105</p>
                </div>
              </div>

              {/* Adresse E-mail */}
              <div className="flex items-start space-x-4">
                <Mail
                  className={`w-6 h-6 text-[${COULEUR_PRINCIPALE}] flex-shrink-0 mt-1`}
                />
                <div>
                  <p className="text-lg font-bold text-black">
                    Adresse E-mail :
                  </p>
                  <p className="text-gray-600">info@sentech.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite: Formulaire de Contact (Sur fond couleur principale) */}
          <div className={`bg-[${COULEUR_PRINCIPALE}] p-8 md:p-12`}>
            <h3 className="text-2xl font-bold mb-2 text-black">
              Contactez-nous
            </h3>
            <p className="text-white/90 mb-8">
              Nous travaillons avec des leaders ambitieux qui façonnent
              l'avenir, et non ceux qui le subissent.
            </p>

            <form className="space-y-6">
              {/* Champ Nom */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Votre Nom..."
                  // Fond transparent (simulé par le fond de la div), bordure noire
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

export default ContactSection;
