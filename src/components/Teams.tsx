"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Plus } from "lucide-react";

// ======================================================================
// ⚠️ ATTENTION: CODE CSS GLOBAL POUR CACHER LA BARRE DE DÉFILEMENT
// VOUS DEVEZ COPIER CE BLOC DANS VOTRE FICHIER CSS PRINCIPAL (ex: globals.css)
// ======================================================================
/*
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
*/
// ======================================================================

// --- DONNÉES ET INTERFACES ---
interface MembreEquipe {
  id: number;
  nom: string;
  role: string;
  cheminImage: string;
}

const membresEquipe: MembreEquipe[] = [
  {
    id: 1,
    nom: " Soumare Medoune",
    role: "DG",
    cheminImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    id: 2,
    nom: "Diagne Modou",
    role: "Ingénieur Logiciel Senior",
    cheminImage:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    id: 3,
    nom: "Diop Awa",
    role: "Spécialiste Cybersécurité",
    cheminImage:
      "https://images.unsplash.com/photo-1488426862288-54320957b6f6?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    id: 4,
    nom: "Ndong Charles",
    role: "Chef de Projet Agile",
    cheminImage:
      "https://images.unsplash.com/photo-1629424755106-93d395a12d38?auto=format&fit=crop&w=600&h=800&q=80",
  },
];

// Couleurs (utilisées directement)
const COULEUR_PRINCIPALE = "#9ad1bc"; // Vert d'eau/Menthe

// --- COMPOSANT TEAM CARD ---
/**
 * Carte de membre avec effet d'agrandissement et d'opacité conditionnels.
 */
const TeamCard: React.FC<{ member: MembreEquipe; isActive: boolean }> = ({
  member,
  isActive,
}) => {
  return (
    <div
      className={`relative flex-shrink-0 w-[280px] h-[400px] bg-black group overflow-hidden transition-all duration-700 ${
        isActive
          ? "opacity-100 transform scale-[1.03] shadow-xl z-20" // Active: Plus grand et plus visible
          : "opacity-70 transform scale-100 shadow-lg" // Inactive: Assombri et taille normale
      }`}
      style={{
        transformOrigin: "center right",
      }}
    >
      {/* Image du Membre */}
      <img
        src={member.cheminImage}
        alt={member.nom}
        className={`w-full h-full object-cover transition duration-500 ${
          isActive ? "opacity-80" : "opacity-60"
        }`}
      />

      {/* Arrière-plan sombre (Overlay) */}
      <div
        className={`absolute inset-0 bg-black/60 transition duration-500 ${
          isActive ? "group-hover:bg-black/40" : "bg-black/80"
        }`}
      ></div>

      {/* Nom en grand et vertical */}
      <div className="absolute top-0 right-0 h-full flex items-center p-4">
        <span
          className="text-7xl font-extrabold text-white opacity-10"
          style={{ writingMode: "vertical-rl", whiteSpace: "nowrap" }}
        >
          {member.nom}
        </span>
      </div>

      {/* Ligne d'accent verticale (Couleur Principale) */}
      <div
        className={`absolute inset-y-0 right-0 w-1 bg-[${COULEUR_PRINCIPALE}] transition duration-300 transform group-hover:w-2`}
      ></div>

      {/* Contenu du Bas de la Carte (Nom + Rôle + Bouton) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        {/* Bloc d'infos Nom/Rôle (Couleur Principale) */}
        <div className={`bg-[${COULEUR_PRINCIPALE}] p-3 text-black`}>
          <p className="text-lg font-bold">{member.nom}</p>
          <p className="text-sm font-medium">{member.role}</p>
        </div>

        {/* Bouton Plus stylisé (Couleur Principale) */}
        <button
          aria-label={`Voir les détails pour ${member.nom}`}
          className={`absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 p-3 bg-[${COULEUR_PRINCIPALE}] text-black shadow-lg hover:bg-[${COULEUR_PRINCIPALE}]/80 transition`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// --- COMPOSANT TEAM SECTION PRINCIPAL ---
/**
 * Section Team implémentant le défilement automatique du carrousel.
 */
const TeamSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [indexDiapoActuelle, setIndexDiapoActuelle] = useState(0);
  const intervalleDefilement = 4000; // 4 secondes
  const LARGEUR_CARTE = 280;
  const LARGEUR_ESPACE = 32;
  const pasDefilement = LARGEUR_CARTE + LARGEUR_ESPACE;

  const defilerProchaineCarte = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const nextIndex = (indexDiapoActuelle + 1) % membresEquipe.length;
      let newScrollLeft = nextIndex * pasDefilement;

      // Réinitialisation du défilement au début pour la boucle infinie
      if (nextIndex === 0) {
        newScrollLeft = 0;
      }

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setIndexDiapoActuelle(nextIndex);
    }
  }, [indexDiapoActuelle, pasDefilement]);

  useEffect(() => {
    const interval = setInterval(() => {
      defilerProchaineCarte();
    }, intervalleDefilement);
    return () => clearInterval(interval);
  }, [defilerProchaineCarte]);

  return (
    <section className="w-full bg-white text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Colonne 1: Titre et Description */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black">
              Nos{" "}
              <span className={`text-[${COULEUR_PRINCIPALE}]`}>Experts</span> en
              informatique
            </h2>
            {/* Ligne de soulignement : Couleur principale */}
            <div
              className={`w-16 h-1 bg-[${COULEUR_PRINCIPALE}] mt-4 mb-8`}
            ></div>
            <p className="text-gray-700 text-lg">
              Avec une décennie d'expérience, notre équipe d'experts est la
              force motrice derrière nos solutions innovantes. Nous privilégions
              une structure agile et axée sur les compétences pour garantir le
              succès de votre transformation numérique.
            </p>
          </div>

          {/* Colonne 2: Caroussel des Membres */}
          <div className="w-full overflow-x-hidden pb-6">
            <div
              ref={scrollContainerRef}
              // Classe 'scrollbar-hide' pour le masquage des barres via CSS global
              className="flex space-x-8 overflow-x-scroll scrollbar-hide"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {membresEquipe.map((member, index) => (
                <div key={member.id} style={{ scrollSnapAlign: "start" }}>
                  <TeamCard
                    member={member}
                    isActive={index === indexDiapoActuelle}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
