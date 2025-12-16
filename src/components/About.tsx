import React from "react";

// ----------------------------------------------------------------------
// 1. Définitions des Types et des Données
// ----------------------------------------------------------------------

// Les données des compétences pour les barres de progression
interface Competence {
  label: string;
  pourcentage: number;
}

// Données adaptées pour une entreprise de services informatiques
const competences: Competence[] = [
  { label: "Maintenance", pourcentage: 92 },
  { label: "Développement Logiciel", pourcentage: 85 },
  { label: "Installation Systeme Reseaux ", pourcentage: 95 },
];

// Chemin de l'image (à remplacer par l'importation réelle de votre image)
const cheminImageEquipe = "/a1.webp";

// Couleurs (utilisées directement pour la portabilité sans config Tailwind)
const COULEUR_PRINCIPALE = "#9ad1bc"; // Vert d'eau/Menthe
const COULEUR_SECONDAIRE = "#f469b3"; // Rose Vif

// ----------------------------------------------------------------------
// 2. Composant Principal AboutSection
// ----------------------------------------------------------------------

/**
 * Section "À Propos" avec image, texte et barres de progression
 */
const AboutSection: React.FC = () => {
  return (
    // Conteneur principal : Fond blanc, padding généreux, texte noir par défaut
    <section className="w-full bg-white text-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Éléments de design décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Lignes stylisées décoratives - utilise la couleur principale */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Exemple de forme décorative */}
          <path
            d="M0 10 C 20 5, 40 15, 60 10, 80 5, 100 0"
            stroke={COULEUR_PRINCIPALE}
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Grille principale à deux colonnes */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Colonne 1: Image de l'équipe et badges */}
        <div className="relative">
          {/* Image de l'équipe */}
          <img
            src={cheminImageEquipe}
            alt="Trois membres de l'équipe souriants"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />

          {/* Petite icône carrée/point en bas à gauche (couleur principale) */}
          <div
            className={`absolute bottom-4 left-4 p-2 bg-[${COULEUR_PRINCIPALE}] border-2 border-[${COULEUR_PRINCIPALE}] flex items-center justify-center`}
          >
            <div className={`w-2 h-2 bg-[${COULEUR_PRINCIPALE}]`}></div>
          </div>
        </div>

        {/* Colonne 2: Contenu Textuel et Compétences */}
        <div>
          {/* Titre Principal */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
            Nous transformons votre{" "}
            <span className={`text-[${COULEUR_PRINCIPALE}]`}>stratégie</span>{" "}
            numérique en succès.
          </h2>

          {/* Texte Descriptif adapté à l'IT */}
          <p className="text-gray-700 mb-10 max-w-lg">
            Avec plus d'une décennie d'expérience en IT, nous nous positionnons
            comme une agence pionnière dans les solutions d'infrastructure et le
            développement sur mesure. Nos structures agiles et nos processus
            centrés sur l'innovation garantissent une excellence opérationnelle.
          </p>

          {/* Barres de Progression des Compétences */}
          <div className="space-y-6 mb-10">
            {competences.map((competence) => (
              <div key={competence.label} className="w-full">
                {/* Libellé et Pourcentage */}
                <div className="flex justify-between items-center mb-1">
                  <span className="text-lg font-medium text-gray-800">
                    {competence.label}
                  </span>
                  <span
                    className={`text-lg font-bold text-[${COULEUR_SECONDAIRE}]`}
                  >
                    {competence.pourcentage}%
                  </span>
                </div>

                {/* Barre de Progression */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`bg-[${COULEUR_SECONDAIRE}] h-2.5 transition-all duration-1000 ease-out`}
                    style={{ width: `${competence.pourcentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Ajout d'un bouton CTA pour compléter la section */}
          <a
            href="/contact"
            className={`inline-flex items-center px-8 py-3 text-lg font-semibold bg-[${COULEUR_PRINCIPALE}] text-black transition duration-300 hover:bg-[${COULEUR_PRINCIPALE}]/90 rounded-lg`}
          >
            Parler à un Expert
            {/* Icône de flèche simple */}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
