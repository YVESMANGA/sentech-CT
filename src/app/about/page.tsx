import React from "react";
// Assurez-vous d'importer votre image et les définitions si elles sont dans un autre fichier
// import AboutSection from './AboutSection'; // Si vous voulez l'importer séparément

// ----------------------------------------------------------------------
// 1. Définitions des Types et des Données (Réutilisation de vos définitions)
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

// Chemins d'images (à remplacer par les importations réelles)
const cheminImageEquipe = "/logo.png"; // Réutilisé pour la section initiale
const cheminImageValeurs = "/a1.webp"; // Nouvelle image pour la section Valeurs

// Couleurs (utilisées directement pour la portabilité sans config Tailwind)
const COULEUR_PRINCIPALE = "#9ad1bc"; // Vert d'eau/Menthe
const COULEUR_SECONDAIRE = "#f469b3"; // Rose Vif

// Données pour la section Valeurs
interface Valeur {
  titre: string;
  description: string;
  icone: React.ReactNode; // Pour une icône React, par exemple de 'react-icons'
}

const valeursFondamentales: Valeur[] = [
  {
    titre: "Innovation Agile",
    description:
      "Adopter une approche flexible pour livrer rapidement des solutions performantes et évolutives.",
    icone: (
      <svg
        className={`w-8 h-8 text-[${COULEUR_SECONDAIRE}]`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    titre: "Transparence et Éthique",
    description:
      "Bâtir des relations de confiance par une communication honnête et des pratiques éthiques rigoureuses.",
    icone: (
      <svg
        className={`w-8 h-8 text-[${COULEUR_SECONDAIRE}]`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    titre: "Expertise Technique",
    description:
      "Maintenir un niveau d'excellence technique élevé grâce à la formation continue et la veille technologique.",
    icone: (
      <svg
        className={`w-8 h-8 text-[${COULEUR_SECONDAIRE}]`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.587 23.587 0 0112 15c-3.185 0-6.222-.601-9-1.745M19 8l2 4m-2-4l-2 4m-2 4h4M7 8l-2 4m-2-4l2 4m-2 4h4"
        />
      </svg>
    ),
  },
];

// ----------------------------------------------------------------------
// 2. Composant de la Page Complète "À Propos"
// ----------------------------------------------------------------------

/**
 * Composant de la Barre de Progression (Extrait de votre section initiale)
 */
const CompetenceBar: React.FC<{ competence: Competence }> = ({
  competence,
}) => (
  <div className="w-full">
    {/* Libellé et Pourcentage */}
    <div className="flex justify-between items-center mb-1">
      <span className="text-lg font-medium text-gray-800">
        {competence.label}
      </span>
      <span className={`text-lg font-bold text-[${COULEUR_SECONDAIRE}]`}>
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
);

/**
 * Composant principal de la Page "À Propos"
 */
const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-white text-black">
      {/* ---------------------------------- */}
      {/* A. Section Héro (Introduction) */}
      {/* ---------------------------------- */}
      <header className="bg-[#9ad1bc] pt-20 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-black">
            Notre Histoire{" "}
            <span className={`text-[${COULEUR_PRINCIPALE}]`}>IT</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la vision d'une transformation numérique à l'excellence
            opérationnelle. Découvrez qui nous sommes et comment nous propulsons
            nos clients vers l'avenir.
          </p>
        </div>
      </header>

      {/* ---------------------------------- */}
      {/* B. Section "Qui Sommes-Nous" (Votre Section Initiale Adaptée) */}
      {/* ---------------------------------- */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Colonne 1: Image de l'équipe et badges */}
          {/* AJOUT DE 'max-w-lg' et 'mx-auto' pour réduire la taille et centrer l'image */}
          <div className="relative order-2 lg:order-1 max-w-lg mx-auto">
            <img
              src={cheminImageEquipe}
              alt="Trois membres de l'équipe souriants"
              // L'image elle-même DOIT conserver 'w-full' pour remplir son nouveau conteneur réduit
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
            {/* Petit élément décoratif (positionnement inchangé) */}
            <div
              className={`absolute bottom-4 left-4 p-2 bg-[${COULEUR_PRINCIPALE}] border-2 border-[${COULEUR_PRINCIPALE}] flex items-center justify-center`}
            >
              <div className={`w-2 h-2 bg-[${COULEUR_PRINCIPALE}]`}></div>
            </div>
          </div>

          {/* Colonne 2: Contenu Textuel et Compétences */}
          <div className="order-1 lg:order-2">
            {/* Titre et Sous-titre */}
            <h3
              className={`text-xl font-semibold text-[${COULEUR_SECONDAIRE}] mb-2`}
            >
              UNE AGENCE À TAILLE HUMAINE
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Notre expertise est votre{" "}
              <span className={`text-[${COULEUR_PRINCIPALE}]`}>avantage</span>{" "}
              concurrentiel.
            </h2>

            {/* Texte Descriptif Plus Long */}
            <p className="text-gray-700 mb-6">
              Fondée en 2012, notre agence s'est rapidement imposée comme un
              partenaire de choix pour les PME et les grandes entreprises
              cherchant à optimiser leur infrastructure et à créer des outils
              logiciels sur-mesure. Nous ne faisons pas que fournir des
              services, nous intégrons nos équipes à votre écosystème pour
              garantir une synergie parfaite.
            </p>
            <p className="text-gray-700 mb-10">
              Notre engagement envers l'excellence opérationnelle est soutenu
              par une méthodologie rigoureuse, assurant la sécurité, la
              performance et la pérennité de toutes vos solutions numériques.
            </p>

            {/* Barres de Progression des Compétences */}
            <div className="space-y-6">
              {competences.map((competence) => (
                <CompetenceBar key={competence.label} competence={competence} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------- */}
      {/* C. Section Mission et Valeurs */}
      {/* ---------------------------------- */}
      <section className={`py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50`}>
        <div className="container mx-auto">
          {/* Titre de la Section */}
          <div className="text-center mb-16">
            <h3 className="text-xl font-semibold text-gray-500 mb-2">
              VISION & CULTURE
            </h3>
            <h2 className="text-4xl font-extrabold text-black">
              Nos Fondations : Mission et{" "}
              <span className={`text-[${COULEUR_SECONDAIRE}]`}>Valeurs</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Colonne 1: Mission et Objectif */}
            <div>
              <h4 className="text-3xl font-bold mb-4">Notre Mission</h4>
              <p className="text-gray-700 mb-6 text-lg">
                Propulser la performance numérique de nos clients en leur
                fournissant des solutions IT robustes, sécurisées et adaptées à
                la croissance de leur marché. Nous sommes les architectes
                discrets de leur succès technologique.
              </p>
              <img
                src={cheminImageValeurs}
                alt="Diagramme illustrant l'innovation et la collaboration"
                className="w-full h-auto object-cover rounded-lg shadow-lg mt-8"
              />
            </div>

            {/* Colonne 2: Valeurs Fondamentales (Liste) */}
            <div className="space-y-8">
              {valeursFondamentales.map((valeur, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 pt-1">{valeur.icone}</div>
                  <div>
                    <h5 className="text-2xl font-bold text-black mb-1">
                      {valeur.titre}
                    </h5>
                    <p className="text-gray-600">{valeur.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------- */}
      {/* D. Section Appel à l'Action Final */}
      {/* ---------------------------------- */}
      <section
        className={`bg-[${COULEUR_PRINCIPALE}] py-16 px-4 sm:px-6 lg:px-8`}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            Prêt à démarrer votre transformation numérique ?
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Contactez notre équipe pour une consultation gratuite.
          </p>
          <a
            href="/contact"
            className={`inline-flex items-center px-10 py-4 text-xl font-bold bg-white text-black rounded-lg transition duration-300 hover:bg-gray-100 shadow-xl`}
          >
            Discuter de Votre Projet
            <svg
              className="w-6 h-6 ml-3"
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
      </section>
    </div>
  );
};

export default AboutPage;
