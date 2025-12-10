"use client";
import React, { useState } from "react";
// Importation des icônes
import { Menu, X, Search, ShoppingCart, ArrowRight } from "lucide-react";

/**
 * Interface pour les éléments de navigation
 */
interface NavItem {
  label: string;
  href: string;
}

/**
 * Les liens de navigation visibles dans la barre
 */
const navItems: NavItem[] = [
  { label: "Acceuil", href: "/" },
  { label: "A propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Equipes", href: "/team" },
];

/**
 * Composant de la Barre de Navigation
 * Utilise la couleur principale : #9ad1bc (primary-custom)
 */
const Navbar: React.FC = () => {
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Définition des classes de la couleur personnalisée pour la lisibilité
  const primaryTextColor = "text-primary-custom";
  const primaryBgColor = "bg-primary-custom";
  const primaryHoverClass = "hover:text-primary-custom";
  const primaryGradient = "from-primary-custom to-primary-custom/80"; // Dégradé simple utilisant la couleur

  return (
    <header className="sticky top-0 z-50 w-full bg-[#9ad1bc] shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* 1. Logo */}
        <div className="flex items-center space-x-2 text-white text-2xl font-bold">
          <img
            src="logo.png" // Chemin d'exemple à modifier
            alt="invite Logo"
            className="w-22 h-22 object-contain" // w-6 h-6 pour une taille similaire au SVG précédent
          />
          <span className="text-black">SenTech</span>
        </div>

        {/* 2. Menu de Navigation (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-black transition duration-300 ${primaryHoverClass} font-medium`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* 3. Icônes et CTA (Desktop) */}
        <div className="flex items-center space-x-4 rounded">
          {/* Icônes de Recherche et Panier (Visibles sur tous les écrans > mobile) */}

          {/* Bouton CTA "Contact" */}
          <a
            href="/contact"
            // Utilisation du dégradé personnalisé : bg-gradient-to-r from-[#9ad1bc] to-[#9ad1bc]/80
            className={`flex items-center px-6 py-3 bg-white text-black font-semibold bg-gradient-to-r ${primaryGradient} hover:from-primary-custom/90 hover:to-primary-custom/70 transition duration-300 shadow-lg rounded`}
          >
            Contact
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>

          {/* Bouton Menu Burger (Mobile) */}
          <button
            className="text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* 4. Menu Mobile (Dropdown) */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100 py-2" : "max-h-0 opacity-0"
        } bg-black border-t border-gray-800 absolute w-full`}
      >
        <div className="flex flex-col space-y-2 px-4 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 text-gray-300 hover:bg-gray-800 ${primaryHoverClass} transition duration-200 rounded-md`}
            >
              {item.label}
            </a>
          ))}
          {/* Ajout des icônes pour mobile pour la complétude */}
          <div className="flex space-x-4 py-2 border-t border-gray-700 mt-2">
            <button
              className={`text-gray-300 transition ${primaryHoverClass}`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" /> Search
            </button>
            <button
              className={`text-gray-300 transition ${primaryHoverClass}`}
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" /> Cart
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
