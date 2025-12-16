"use client";
import React from "react";
import { Cpu, Cloud, Shield, Lightbulb, TrendingUp, Zap } from "lucide-react";

// ----------------------------------------------------------------------
// 1. Définitions des Types et des Données
// ----------------------------------------------------------------------

/**
 * Interface pour les données d'une carte de service
 */
interface CarteServiceData {
  id: number;
  icone: React.ElementType;
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
    icone: Cpu,
    titre: "Développement Logiciel Sur Mesure",
    description:
      "Conception et réalisation d'applications web, mobiles et d'entreprise optimisées pour la performance et l'évolutivité.",
    cheminImageCarte:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    icone: Cloud,
    titre: "Gestion Infrastructure Cloud",
    description:
      "Migration, optimisation et maintenance de vos systèmes sur les principales plateformes Cloud (AWS, Azure, GCP).",
    cheminImageCarte:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    icone: Shield,
    titre: "Maintence Infrastructures & Cybersécurité",
    description:
      "Audits de sécurité, tests d'intrusion et mise en œuvre de politiques de protection des données pour une résilience maximale.",
    cheminImageCarte:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=80",
  },
];

interface EtapeProcessus {
  id: number;
  icone: React.ElementType;
  titre: string;
  description: string;
}

/**
 * Les données pour la section Processus
 */
const etapesProcessus: EtapeProcessus[] = [
  {
    id: 1,
    icone: Lightbulb,
    titre: "1. Découverte & Stratégie",
    description:
      "Analyse approfondie de vos besoins, de votre marché et de vos objectifs pour définir une feuille de route technique claire.",
  },
  {
    id: 2,
    icone: Cpu,
    titre: "2. Conception & Développement",
    description:
      "Application de méthodologies Agiles pour la construction itérative de la solution avec des cycles de feedback rapides.",
  },
  {
    id: 3,
    icone: TrendingUp,
    titre: "3. Déploiement & Optimisation",
    description:
      "Mise en production sécurisée suivie d'une phase de monitoring, de support continu et d'optimisations.",
  },
];

// Couleurs (utilisées directement)
const COULEUR_PRINCIPALE = "#9ad1bc"; // Vert d'eau/Menthe
const COULEUR_ACCENT_SECONDAIRE = "#f469b3"; // Rose Vif

// ----------------------------------------------------------------------
// 2. Sections de la Page
// ----------------------------------------------------------------------

/**
 * Section Héro de la Page Services
 */
const HeroSection: React.FC = () => (
  <div className="bg-gray-900 text-white py-24 md:py-36 px-4">
    <div className="container mx-auto max-w-4xl text-center">
      <p
        className="text-xl font-semibold mb-4"
        style={{ color: COULEUR_PRINCIPALE }}
      >
        NOTRE EXPERTISE, VOTRE CROISSANCE
      </p>
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        Des Solutions IT <span className="text-white">Conçues</span> pour
        l'Excellence
      </h1>
      <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
        Nous vous aidons à naviguer dans la complexité numérique en fournissant
        des services personnalisés, fiables et à la pointe de la technologie.
      </p>
    </div>
  </div>
);

/**
 * Composant de la Section Services (Votre code original adapté)
 */
const ServicesSectionComponent: React.FC = () => {
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
              <span style={{ color: COULEUR_PRINCIPALE }}>stratégie</span> et
              expertise technique.
            </h2>
            {/* Ligne de soulignement : Couleur principale */}
            <div
              className="w-16 h-1 mt-4"
              style={{ backgroundColor: COULEUR_PRINCIPALE }}
            ></div>
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
              // Gestion des styles dynamiques/hover via style inline et événements
              className={`relative h-[400px] border-b-4 border-transparent transition duration-300 group overflow-hidden`}
              style={{
                transition: "border-color 0.3s ease-in-out",
              }}
              // Survol pour changer la bordure
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderBottomColor =
                  COULEUR_ACCENT_SECONDAIRE)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderBottomColor = "transparent")
              }
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
                    className={`p-4 inline-block mb-6 transition duration-300`}
                    style={{ backgroundColor: COULEUR_PRINCIPALE }}
                  >
                    <service.icone className="w-8 h-8 text-black stroke-[3px]" />
                  </div>

                  {/* Titre */}
                  <h3
                    className={`text-xl font-bold transition duration-300 text-white`}
                    // Survol pour changer la couleur du titre
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = COULEUR_PRINCIPALE)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#FFFFFF")
                    }
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

/**
 * Section Processus de Travail
 */
const ProcessSection: React.FC = () => (
  <section className="bg-gray-50 py-20 md:py-32 px-4">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-4">
        Notre Processus Agile
      </h2>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-16">
        Clarté, transparence et collaboration sont au cœur de notre méthode pour
        garantir le succès de votre projet.
      </p>

      {/* Étapes du processus */}
      <div className="relative grid md:grid-cols-3 gap-12">
        {/* Ligne de connexion décorative (seulement pour les écrans larges) */}
        <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gray-200 z-0 mx-auto max-w-4xl"></div>

        {etapesProcessus.map((etape) => (
          <div
            key={etape.id}
            className="relative z-10 text-center bg-white p-6 rounded-lg shadow-md"
          >
            {/* Cercle et Icône */}
            <div
              className={`w-16 h-16 rounded-full inline-flex items-center justify-center bg-white border-4 mx-auto mb-6`}
              style={{ borderColor: COULEUR_PRINCIPALE }}
            >
              <etape.icone className="w-8 h-8 text-black" />
            </div>

            <h3 className="text-xl font-bold text-black mb-3">{etape.titre}</h3>
            <p className="text-gray-700 text-sm">{etape.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/**
 * Section Appel à l'Action (CTA)
 */
const CTASection: React.FC = () => (
  <div className="bg-gray-900 py-20 md:py-24 px-4">
    <div className="container mx-auto text-center">
      <Zap
        className="w-12 h-12 mx-auto mb-4"
        style={{ color: COULEUR_ACCENT_SECONDAIRE }}
      />
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Prêt à transformer votre IT ?
      </h2>
      <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
        Contactez nos experts dès aujourd'hui pour une consultation gratuite et
        sans engagement.
      </p>
      <button
        className={`text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105`}
        style={{ backgroundColor: COULEUR_ACCENT_SECONDAIRE }}
      >
        Démarrer un Projet
      </button>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// 3. Page Services Complète (Export par défaut)
// ----------------------------------------------------------------------

/**
 * La Page Services complète, sans encapsulation Layout
 */
const ServicesPage: React.FC = () => {
  // Ici, vous ajouteriez l'en-tête et le pied de page si vous n'utilisiez pas de Layout
  return (
    <div className="Services-Page">
      <HeroSection />
      <ServicesSectionComponent />
      <ProcessSection />
      <CTASection />
      {/* Placez ici un pied de page (Footer) si nécessaire */}
    </div>
  );
};

export default ServicesPage;
