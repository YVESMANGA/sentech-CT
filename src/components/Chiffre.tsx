import React from "react";
import { Zap, Users, ShieldCheck, Smile } from "lucide-react"; // Remplacement des icônes pour mieux coller à l'IT

// ----------------------------------------------------------------------
// 1. Définitions des Types et des Données
// ----------------------------------------------------------------------

// Interface pour structurer les données de chaque statistique
interface Statistique {
  id: number;
  icone: React.ElementType;
  valeur: string;
  libelle: string;
}

// Données adaptées pour une entreprise de services informatiques
const statistiques: Statistique[] = [
  {
    id: 1,
    icone: Zap, // Icône Éclair (Projets réalisés)
    valeur: "456+",
    libelle: "Projets Réalisés",
  },
  {
    id: 2,
    icone: Users, // Icône Utilisateurs (Clients Actifs)
    valeur: "1.5K", // Changé de 15K à 1.5K pour plus de réalisme PME/IT
    libelle: "Clients Actifs",
  },

  {
    id: 4,
    icone: Smile, // Icône Sourire (Satisfaction Client)
    valeur: "100%",
    libelle: "Satisfaction Client",
  },
];

// Couleurs (utilisées directement)
const COULEUR_FOND = "#9ad1bc"; // Vert d'eau/Menthe (Fond de section)
const COULEUR_ACCENT = "#ffffff"; // Blanc (Couleur principale du texte et des icônes)

// ----------------------------------------------------------------------
// 2. Composant Principal StatsSection
// ----------------------------------------------------------------------

/**
 * Section des Statistiques et KPI avec bordures autour des chiffres
 */
const StatsSection: React.FC = () => {
  return (
    // Conteneur principal: Utilisation de votre couleur de fond #9ad1bc
    <section
      className={`w-full bg-[${COULEUR_FOND}] text-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}
    >
      {/* Motif décoratif de points en arrière-plan (maintenu en blanc pour le contraste) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Grille des statistiques à 4 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {statistiques.map((stat) => (
            <div
              key={stat.id}
              className="text-center flex flex-col items-center group relative p-4"
            >
              {/* Conteneur de l'Icône (Carré Blanc) */}
              <div
                className={`p-4 sm:p-6 bg-[${COULEUR_ACCENT}] shadow-2xl transition duration-300 transform group-hover:-translate-y-1`}
              >
                {/* Icône: couleur du fond pour créer l'effet de découpe */}
                <stat.icone
                  className={`w-8 h-8 sm:w-10 sm:h-10 text-white stroke-[3px]`}
                />
              </div>

              {/* Ligne de séparation verticale (pour simuler la bordure fine) */}
              <div className="w-px h-10 bg-white/50 my-4 hidden md:block"></div>

              {/* *** Le rectangle autour du chiffre *** */}
              <div
                className={`relative inline-block mt-4 mb-2 p-3 sm:p-4 border border-[${COULEUR_ACCENT}]`}
              >
                {/* Valeur Numérique */}
                {/* La couleur des chiffres est blanche pour contraster avec le fond #9ad1bc */}
                <p
                  className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[${COULEUR_ACCENT}] transition duration-300 group-hover:text-white/80`}
                >
                  {stat.valeur}
                </p>
                {/* L'accent (petit point) est conservé en blanc ici */}
                <div
                  className={`absolute top-0 right-0 w-1 h-1 bg-[${COULEUR_ACCENT}]`}
                ></div>
              </div>

              {/* Libellé */}
              {/* Le libellé est en noir pour l'accessibilité si le fond change légèrement, mais ici en blanc pour le contraste */}
              <p
                className={`text-white text-sm sm:text-base font-medium uppercase tracking-wider mt-4`}
              >
                {stat.libelle}
              </p>
            </div>
          ))}
        </div>

        {/* Lignes de séparation verticales entre les colonnes (plus discrètes) */}
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-full hidden md:flex justify-around -z-10">
          <div className="absolute inset-y-0 left-[25%] border-l border-white/30"></div>

          <div className="absolute inset-y-0 left-[75%] border-l border-white/30"></div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
