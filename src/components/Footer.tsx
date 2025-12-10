"use client";
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  ArrowRight,
  Mail,
  Code, // Remplacé par Code pour un logo IT
} from "lucide-react";

// Couleurs (utilisées directement)
const COULEUR_PRINCIPALE = "#9ad1bc"; // Vert d'eau/Menthe

/**
 * Composant de la Section Footer (Pied de Page)
 */
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-4 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Colonne 1: Logo et Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              {/* Placeholder de Logo IT (utilisant l'icône Code) */}
              <div
                className={`p-2 bg-[${COULEUR_PRINCIPALE}] rounded-full flex items-center justify-center`}
              >
                <img
                  src="logo.png" // Chemin d'exemple à modifier
                  alt="invite Logo"
                  className="w-22 h-22 object-contain" // w-6 h-6 pour une taille similaire au SVG précédent
                />
              </div>
              <span
                className={`text-3xl font-extrabold text-[${COULEUR_PRINCIPALE}]`}
              >
                SenTech
              </span>
            </div>

            <p className="text-gray-400 max-w-sm text-sm">
              Nous relevons les défis avec passion pour créer des solutions
              numériques innovantes et sur mesure pour le secteur de la
              technologie.
            </p>

            <a
              href="/about"
              // Bouton "À Propos" : inversé pour un fond blanc (couleur principale en hover)
              className={`inline-flex items-center px-6 py-3 text-black font-semibold bg-white transition duration-300 hover:bg-[${COULEUR_PRINCIPALE}] text-sm`}
            >
              À Propos de Nous
            </a>
          </div>

          {/* Colonne 2: Newsletter et Réseaux Sociaux */}
          <div className="space-y-6">
            <h3
              className={`text-2xl font-bold mb-4 border-b-2 border-black/0 pb-1 inline-block text-[${COULEUR_PRINCIPALE}]`}
            >
              Newsletter
            </h3>

            <p className="text-gray-400 text-sm">
              Abonnez-vous à notre newsletter pour recevoir nos dernières mises
              à jour et actualités IT.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="w-full bg-gray-900 text-white p-4 border border-gray-700 focus:border-white focus:outline-none placeholder:text-gray-500"
              />
              {/* Bouton d'envoi de la newsletter (Couleur principale) */}
              <button
                className={`bg-[${COULEUR_PRINCIPALE}] text-black p-4 transition-colors hover:bg-[${COULEUR_PRINCIPALE}]/80`}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Liens Sociaux (Couleur principale au survol) */}
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className={`text-gray-400 hover:text-[${COULEUR_PRINCIPALE}] transition`}
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className={`text-gray-400 hover:text-[${COULEUR_PRINCIPALE}] transition`}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className={`text-gray-400 hover:text-[${COULEUR_PRINCIPALE}] transition`}
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Colonne 3: Infos Officielles */}
          <div className="space-y-6">
            <h3
              className={`text-2xl font-bold mb-4 border-b-2 border-white/0 pb-1 inline-block text-[${COULEUR_PRINCIPALE}]`}
            >
              Informations Officielles
            </h3>

            {/* Adresse */}
            <div className="flex items-start space-x-3">
              <MapPin
                className={`w-5 h-5 text-[${COULEUR_PRINCIPALE}] flex-shrink-0 mt-1`}
              />
              <p className="text-gray-400 text-sm">
                Senegal
                <br />
                Dakar
              </p>
            </div>

            {/* Téléphone */}
            <div className="flex items-start space-x-3">
              <Phone
                className={`w-5 h-5 text-[${COULEUR_PRINCIPALE}] flex-shrink-0 mt-1`}
              />
              <p className="text-gray-400 text-sm">+221 76 452 105</p>
            </div>

            {/* Horaires */}
            <div>
              <p
                className={`text-lg font-bold mb-2 text-[${COULEUR_PRINCIPALE}]`}
              >
                Heures d'Ouverture :
              </p>
              <p className="text-gray-400 text-sm">Lun - Sam : 8h00 - 17h00,</p>
              <p className="text-gray-400 text-sm">Dimanche : FERMÉ</p>
            </div>
          </div>
        </div>

        {/* Ligne de Copyright */}
        <div className="text-center mt-12 pt-4 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SenTech IT Services. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
