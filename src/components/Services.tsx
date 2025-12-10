import React from "react";
import { Cpu, Cloud, Shield } from "lucide-react"; // Icônes adaptées à l'IT

// ----------------------------------------------------------------------
// 1. Définitions des Types et des Données
// ----------------------------------------------------------------------

/**
 * Interface pour les données d'une carte de service
 */
interface CarteServiceData {
  id: number;
  icone: React.ElementType; // Composant d'icône React
  titre: string;
  description: string;
  cheminImageCarte: string;
}

/**
 * Les données de la section Services (avec chemins d'images d'exemple)
 */
const services: CarteServiceData[] = [
  {
    id: 1,
    icone: Cpu, // Processeur / Développement
    titre: "Développement Logiciel Sur Mesure",
    description:
      "Conception et réalisation d'applications web, mobiles et d'entreprise optimisées pour la performance et l'évolutivité.",
    cheminImageCarte:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    icone: Cloud, // Cloud / Infrastructure
    titre: "Gestion Cloud & Infrastructure",
    description:
      "Migration, optimisation et maintenance de vos systèmes sur les principales plateformes Cloud (AWS, Azure, GCP).",
    cheminImageCarte:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    icone: Shield, // Cybersécurité
    titre: "Cybersécurité & Conformité",
    description:
      "Audits de sécurité, tests d'intrusion et mise en œuvre de politiques de protection des données pour une résilience maximale.",
    cheminImageCarte:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=80",
  },
];

// Couleurs (utilisées directement)
const COULEUR_PRINCIPALE = "#9ad1bc"; // Vert d'eau/Menthe
const COULEUR_ACCENT_SECONDAIRE = "#f469b3"; // Rose Vif (Utilisé ici pour l'accentuation de la bordure hover)

// ----------------------------------------------------------------------
// 2. Composant Principal ServicesSection
// ----------------------------------------------------------------------

/**
 * Composant de la Section Services
 */
const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Grand titre décoratif 'Services' en arrière-plan */}
      <h3 className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-[150px] md:text-[250px] font-extrabold text-gray-900/5 select-none pointer-events-none z-0">
        Services
      </h3>

      <div className="container mx-auto relative z-10">
        {/* En-tête de la section (Titre et Texte descriptif) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-16">
          {/* Titre et Soulignement */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
              Nous combinons{" "}
              <span className={`text-[${COULEUR_PRINCIPALE}]`}>stratégie</span>{" "}
              et expertise technique.
            </h2>
            {/* Ligne de soulignement : Couleur principale */}
            <div className={`w-16 h-1 bg-[${COULEUR_PRINCIPALE}] mt-4`}></div>
          </div>

          {/* Texte Descriptif */}
          <div className="mt-4 lg:mt-0">
            <p className="text-gray-700 max-w-xl text-lg">
              Forts de plus d'une décennie d'expérience, nous sommes reconnus
              comme une agence pionnière dans l'intégration de solutions IT. Nos
              équipes agiles et nos méthodologies centrées sur le design
              garantissent des résultats rapides et pertinents.
            </p>
          </div>
        </div>

        {/* Grille des Cartes de Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              // Bordure de survol: utilise la couleur secondaire rose pour créer un contraste fort
              className={`relative h-[400px] border-b-4 border-transparent transition duration-300 hover:border-[${COULEUR_ACCENT_SECONDAIRE}] group overflow-hidden`}
            >
              {/* Image de Fond (Positionnée en absolu et sombre) */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-500 group-hover:opacity-50"
                style={{ backgroundImage: `url(${service.cheminImageCarte})` }}
              >
                {/* Overlay sombre pour s'assurer que le texte blanc est lisible */}
                <div className="absolute inset-0 bg-black/70"></div>
              </div>

              {/* Contenu de la Carte (Positionné au-dessus de l'image) */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full">
                {/* Bloc Icône et Titre (En Haut) */}
                <div>
                  {/* Icône (Conteneur Couleur Principale) */}
                  <div
                    className={`p-4 bg-[${COULEUR_PRINCIPALE}] inline-block mb-6 transition duration-300`}
                  >
                    <service.icone className="w-8 h-8 text-black stroke-[3px]" />
                  </div>

                  {/* Titre */}
                  <h3
                    className={`text-xl font-bold transition duration-300 group-hover:text-[${COULEUR_PRINCIPALE}] text-white`}
                  >
                    {service.titre}
                  </h3>
                </div>

                {/* Description (En Bas) */}
                <div className="mt-auto">
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
