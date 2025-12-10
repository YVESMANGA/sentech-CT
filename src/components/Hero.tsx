"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
// Importation des icônes Play/Pause du composant original pour la clarté

// ----------------------------------------------------------------------
// 1. Définitions des Types et des Données
// ----------------------------------------------------------------------

/**
 * Interface pour les données de chaque diapositive du carrousel.
 */
interface DiapoData {
  id: number;
  titreHaut: string;
  titreBas: string;
  description: string;
  texteBouton: string;
  cheminImage: string; // URL ou chemin vers l'image de fond
}

/**
 * Tableau contenant toutes les diapositives du carrousel.
 */
const diapositives: DiapoData[] = [
  {
    id: 1,
    titreHaut: "Votre Partenaire",
    titreBas: "Solutions IT",
    description:
      "Nous concevons et implémentons des infrastructures numériques robustes et sécurisées, adaptées aux défis de votre croissance future.",
    texteBouton: "Découvrir Invite",
    cheminImage: "/h3.jpg",
  },
  {
    id: 2,
    titreHaut: "Sécurisez et",
    titreBas: "Modernisez",
    description:
      "De l'audit de cybersécurité à la migration Cloud, nous transformons votre IT pour garantir performance et conformité.",
    texteBouton: "Nos Services",
    cheminImage: "/h2.jpg",
  },
  {
    id: 3,
    titreHaut: "L'Innovation",
    titreBas: "À Portée de Main",
    description:
      "Accélérez votre transformation digitale avec nos experts en développement logiciel sur mesure et en intégration IA.",
    texteBouton: "Nous Contacter",
    cheminImage: "h4.jpg",
  },
];

// ----------------------------------------------------------------------
// 2. Composant Principal HeroSection
// ----------------------------------------------------------------------

const HeroSection: React.FC = () => {
  const [indexDiapoActuelle, setIndexDiapoActuelle] = useState(0);
  const [estEnPause, setEstEnPause] = useState(false);
  const tempsIntervalle = 8000; // 8 secondes entre les diapositives

  // Constantes de couleur Tailwind (#9ad1bc est utilisé directement)
  const COULEUR_PRINCIPALE = "#9ad1bc";

  // Détermine la diapositive actuelle pour l'affichage
  const diapoActuelle = useMemo(
    () => diapositives[indexDiapoActuelle],
    [indexDiapoActuelle]
  );

  // Fonction pour passer à la diapositive suivante
  const diapoSuivante = useCallback(() => {
    setIndexDiapoActuelle((prevIndex) => (prevIndex + 1) % diapositives.length);
  }, []);

  // Logique pour le carrousel automatique (Intervalle)
  useEffect(() => {
    if (estEnPause) return;

    const interval = setInterval(() => {
      diapoSuivante();
    }, tempsIntervalle);

    // Nettoyage de l'intervalle
    return () => clearInterval(interval);
  }, [estEnPause, diapoSuivante, tempsIntervalle]);

  // Fonction pour changer manuellement la diapo et mettre en pause temporaire
  const allerADiapo = (index: number) => {
    setIndexDiapoActuelle(index);
    setEstEnPause(true);
    // Reprend après 10 secondes d'interaction manuelle
    setTimeout(() => setEstEnPause(false), 10000);
  };

  return (
    // Conteneur principal
    <section className="relative w-full min-h-[700px] bg-black text-white overflow-hidden">
      {/* 1. Arrière-plan de la Diapo: Images avec transition de fondu (Fade) */}
      {diapositives.map((diapo, index) => (
        <div
          key={diapo.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
          style={{
            backgroundImage: `url(${diapo.cheminImage})`,
            // Contrôle l'opacité pour le fondu entre les images
            opacity: index === indexDiapoActuelle ? 1 : 0,
            // Z-index pour s'assurer que l'image visible est au-dessus des autres images invisibles
            zIndex: index === indexDiapoActuelle ? 10 : 5,
          }}
        >
          {/* Overlay sombre pour faciliter la lecture du texte blanc */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* 2. Colonne latérale gauche pour les points de navigation */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-6 z-30 hidden md:block">
        <div className="flex flex-col space-y-4">
          {diapositives.map((_, index) => (
            <div
              key={index}
              onClick={() => allerADiapo(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                // Points de navigation: couleur principale
                index === indexDiapoActuelle
                  ? `bg-[${COULEUR_PRINCIPALE}] w-4 h-4` // Actif
                  : `bg-[${COULEUR_PRINCIPALE}]/50 hover:bg-[${COULEUR_PRINCIPALE}]/70` // Inactif
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* 3. Contenu Textuel et Bouton Pause (Superposé, z-index élevé) */}
      <div className="grid md:grid-cols-2 h-full absolute inset-0 z-20">
        <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 relative">
          {/* Conteneur de contenu: la clé force l'animation `fadeIn` à chaque changement */}
          <div
            key={diapoActuelle.id + "_content"}
            className="animate-fadeIn transition duration-1000 ease-out"
          >
            {/* Titre Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
              <span className={`text-[${COULEUR_PRINCIPALE}] block`}>
                {diapoActuelle.titreHaut}
              </span>
              <span className="block mt-2">{diapoActuelle.titreBas}</span>
            </h1>

            {/* Ligne de séparation */}
            <div
              className={`w-16 h-1 bg-[${COULEUR_PRINCIPALE}] mt-4 mb-8`}
            ></div>

            {/* Sous-texte / Description */}
            <p className="text-gray-300 max-w-lg text-lg">
              {diapoActuelle.description}
            </p>

            {/* Bouton CTA: Ajout de 'rounded-lg' pour un arrondi distinct */}
            <div className="mt-10">
              <a
                href="#cta"
                className={`inline-flex items-center px-8 py-3 text-lg font-semibold bg-[${COULEUR_PRINCIPALE}] text-black transition duration-300 hover:bg-[${COULEUR_PRINCIPALE}]/90 rounded-lg`}
              >
                {diapoActuelle.texteBouton}
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

          {/* Bouton Pause/Lecture */}
          <button
            onClick={() => setEstEnPause(!estEnPause)}
            className={`absolute bottom-5 left-5 p-3 rounded-full bg-white/10 hover:bg-white/20 transition text-[${COULEUR_PRINCIPALE}] border border-[${COULEUR_PRINCIPALE}] z-40`}
            aria-label={
              estEnPause ? "Lire le carrousel" : "Mettre le carrousel en pause"
            }
          >
            {estEnPause ? (
              // Icône Play
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 19l12-7L6 5v14z" />
              </svg>
            ) : (
              // Icône Pause
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </button>
        </div>

        {/* La deuxième colonne reste vide mais maintient la grille */}
        <div></div>
      </div>
    </section>
  );
};

export default HeroSection;
