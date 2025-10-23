import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, Plane, Ship, Package, ChevronDown } from 'lucide-react';
import {
  Bars3Icon,
  XMarkIcon,
  MapPinIcon,
  PhoneIcon, 
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const navLinks = [
  { href: "/", label: "Accueil" },
  { 
    label: "Nos Services", 
    hasSubmenu: true,
    submenu: [
      { href: "/services/groupage-aerien", label: "Groupage Aérien", icon: Plane },
      { href: "/services/groupage-maritime", label: "Groupage Maritime", icon: Ship }
    ]
  },
  { href: "/galerie", label: "Galerie" },
  { href: "/about", label: "à propos" },
  { href: "/devis", label: "Devis" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" }
];

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-blue-400" }
  ];

  const contactInfo = [
    { icon: MapPinIcon, text: "Votre adresse, Ville, Pays" },
    { icon: PhoneIcon, text: "+XXX XX XX XX XX" },
    { icon: EnvelopeIcon, text: "contact@hls-transport.com" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header principal */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-2xl border-b border-gray-200' 
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo et nom de l'entreprise */}
            <NavLink 
              to="/" 
              className="group relative flex items-center gap-3"
            >
              {/* Logo avec icônes transport */}
              <div className="relative w-14 h-14">
                {/* Cercle principal */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#040AC6] to-[#0612F5] rounded-xl shadow-lg transform group-hover:rotate-12 transition-all duration-500 flex items-center justify-center">
                  <div className="relative">
                    <Plane className="w-5 h-5 text-white absolute -top-1 -right-1 transform rotate-45" />
                    <Ship className="w-6 h-6 text-white" />
                  </div>
                </div>
                {/* Accent rouge */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#FF000A] rounded-full border-2 border-white shadow-md"></div>
              </div>
              
              {/* Nom de l'entreprise */}
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-[#040AC6] tracking-tight group-hover:text-[#FF000A] transition-colors duration-500">
                  HLS
                </span>
                <span className="text-xs font-semibold text-gray-600 tracking-wider uppercase">
                  Transport International
                </span>
              </div>
              
              {/* Effet lumineux */}
              <div className="absolute inset-0 bg-[#040AC6]/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-150"></div>
            </NavLink>

           {/* Navigation desktop */}
<nav className="hidden lg:flex items-center gap-1">
  {navLinks.map((link) => (
    <div 
      key={link.label}
      className="relative"
      onMouseEnter={() => link.hasSubmenu && setActiveSubmenu(link.label)}
      
    >
      {link.hasSubmenu ? (
        <button
          type="button"
          className="group relative px-5 py-3 font-semibold text-sm overflow-hidden flex items-center gap-1 cursor-pointer"
        >
          {/* Fond animé au survol */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#040AC6] to-[#0612F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></span>

          {/* Texte */}
          <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
            {link.label}
          </span>

          {/* Icône pour sous-menu */}
          <ChevronDown className="w-4 h-4 relative z-10 text-black group-hover:text-white transition-all duration-300 transform group-hover:rotate-180" />

          {/* Soulignement rouge */}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FF000A] group-hover:w-3/4 transition-all duration-300"></span>
        </button>
      ) : (
        <NavLink
          to={link.href ? link.href : "#"}
          className="group relative px-5 py-3 font-semibold text-sm overflow-hidden flex items-center gap-1"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#040AC6] to-[#0612F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></span>
          <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
            {link.label}
          </span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FF000A] group-hover:w-3/4 transition-all duration-300"></span>
        </NavLink>
      )}

      {/* Sous-menu déroulant */}
      {link.hasSubmenu && activeSubmenu === link.label && (
        <div 
        onMouseLeave={() => setActiveSubmenu(null)}
        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
          {link.submenu?.map((sublink) => (
            <NavLink
            
              key={sublink.href}
              to={sublink.href}
              className="flex items-center gap-3 px-5 py-4 hover:bg-gradient-to-r hover:from-[#040AC6]/10 hover:to-[#FF000A]/10 transition-all duration-300 group/sub"
            >
              <div className="w-10 h-10 bg-[#040AC6]/10 rounded-lg flex items-center justify-center group-hover/sub:bg-[#040AC6] transition-all duration-300">
                <sublink.icon className="w-5 h-5 text-[#040AC6] group-hover/sub:text-white transition-colors duration-300" />
              </div>
              <span className="font-medium text-gray-700 group-hover/sub:text-[#040AC6]">
                {sublink.label}
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>


            {/* Actions (Menu + Bouton Suivre mon colis) */}
            <div className="flex items-center gap-3">
              {/* Bouton Menu Mobile */}
              <button
                onClick={toggleMenu}
                className="lg:hidden relative p-3 text-[#040AC6] hover:text-white focus:outline-none transition-all duration-300 group rounded-lg overflow-hidden"
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-[#040AC6] to-[#0612F5] transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></span>
                
                {isOpen ? (
                  <XMarkIcon className="h-7 w-7 relative z-10 transform rotate-0 group-hover:rotate-90 transition-transform duration-500" />
                ) : (
                  <Bars3Icon className="h-7 w-7 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                )}
              </button>

              {/* Bouton Suivre mon colis */}
              <NavLink
                to="/suivi-colis"
                className="group relative flex items-center gap-2 px-6 py-3 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl shadow-[#040AC6]/20"
              >
                {/* Fond dégradé */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#040AC6] to-[#0612F5]"></span>
                
                {/* Accent rouge qui apparaît */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF000A] to-[#FF3344] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                
                {/* Contenu */}
                <div className="relative z-10 flex items-center gap-2">
                  <Package className="w-5 h-5 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-bold text-sm text-white hidden sm:inline">
                    Suivre mon colis
                  </span>
                  <span className="font-bold text-sm text-white sm:hidden">
                    Suivi
                  </span>
                </div>

                {/* Effet de brillance */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      {/* Menu latéral mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav
        className={`fixed top-0 left-0 h-full w-full sm:w-[400px] bg-white z-50 transform transition-all duration-500 shadow-2xl lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* En-tête du menu latéral */}
        <div className="border-b border-gray-200 p-6 bg-gradient-to-r from-[#040AC6]/5 to-[#FF000A]/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#040AC6] to-[#0612F5] rounded-lg flex items-center justify-center shadow-lg">
                <Ship className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#040AC6]">Menu</span>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#040AC6] hover:bg-[#040AC6]/10 rounded-lg transition-all duration-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Liens de navigation */}
        <div className="flex flex-col gap-2 p-6 overflow-y-auto h-[calc(100%-200px)]">
          {navLinks.map((link) => (
            <div key={link.href}>
              <NavLink
                to={link.href ? link.href : "#"}
                className="group relative px-6 py-4 rounded-lg text-gray-800 font-semibold text-base transition-all duration-300 hover:translate-x-2 overflow-hidden flex items-center justify-between"
               onClick={() =>
                  link.hasSubmenu
                    ? setActiveSubmenu(activeSubmenu === link.label ? null : link.label)
                    : setIsOpen(false)
                }
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#040AC6]/10 to-[#FF000A]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></span>
                <span className="absolute inset-0 border border-[#040AC6]/20 group-hover:border-[#040AC6] rounded-lg transition-colors duration-300"></span>
                
                <span className="relative z-10">{link.label}</span>
                
                    {link.hasSubmenu && (
                  <ChevronDown
                    className={`w-5 h-5 text-[#040AC6] transition-transform ${
                      activeSubmenu === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </NavLink>

              {/* Sous-menu mobile */}
              {link.hasSubmenu && activeSubmenu === link.label && (
                <div className="ml-4 mt-2 space-y-2">
                  {link.submenu?.map((sublink) => (
                    <NavLink
                      key={sublink.href}
                      to={sublink.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#040AC6]/5 transition-all duration-300"
                    >
                      <sublink.icon className="w-4 h-4 text-[#040AC6]" />
                      <span className="text-sm text-gray-700">{sublink.label}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bouton CTA en bas */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
          <NavLink
            to="/suivi-colis"
            className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-[#040AC6] to-[#0612F5] text-white font-bold text-center hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Package className="w-5 h-5" />
            Suivre mon colis
          </NavLink>
        </div>
      </nav>

      <main className="">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-gray-900 via-black to-black text-white py-16 overflow-hidden">
        {/* Effet de particules en arrière-plan */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#040AC6] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#FF000A] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#040AC6] rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section principale */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Colonne 1: Logo et Description */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#040AC6] to-[#0612F5] rounded-lg flex items-center justify-center shadow-lg">
                  <Ship className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">
                  HLS
                </h2>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Votre partenaire de confiance pour le transport maritime et aérien international. Des solutions logistiques adaptées à vos besoins.
              </p>

              {/* Réseaux sociaux */}
              <div className="flex justify-center lg:justify-start gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`group relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            {/* Colonne 2: Navigation rapide */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6 text-[#040AC6]">Navigation Rapide</h3>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href ? link.href : "#"}
                    className="group relative inline-block py-2 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#040AC6] to-[#FF000A] group-hover:w-full transition-all duration-300"></span>
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Colonne 3: Contact */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold mb-6 text-[#040AC6]">Contactez-nous</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3 text-gray-300 hover:text-white transition-all duration-300 justify-center lg:justify-start"
                  >
                    <div className="w-10 h-10 bg-[#040AC6]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#040AC6]/40 transition-all duration-300">
                      <info.icon className="w-5 h-5 text-[#040AC6] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-sm leading-relaxed pt-2">{info.text}</span>
                  </div>
                ))}
              </div>

              {/* Horaires */}
              <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-[#040AC6]/20 hover:border-[#040AC6]/50 transition-all duration-300">
                <h4 className="text-sm font-semibold text-[#040AC6] mb-2">Horaires d'ouverture</h4>
                <p className="text-xs text-gray-400">Lun - Ven: 8h00 - 18h00</p>
                <p className="text-xs text-gray-400">Sam: 9h00 - 13h00</p>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#040AC6]/50 to-transparent mb-8"></div>

          {/* Section CTA */}
          <div className="bg-gradient-to-r from-[#040AC6]/10 to-[#FF000A]/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-[#040AC6]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Besoin d'un devis ?</h3>
                <p className="text-gray-400">Obtenez une estimation personnalisée pour vos envois</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink
                  to="/devis"
                  className="group relative px-8 py-3 bg-gradient-to-r from-[#040AC6] to-[#0612F5] text-white font-bold rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Demander un devis</span>
                </NavLink>

                <NavLink
                  to="/suivi-colis"
                  className="group relative px-8 py-3 border-2 border-[#FF000A] text-[#FF000A] font-bold rounded-lg overflow-hidden hover:bg-[#FF000A] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Suivre un colis</span>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} <span className="text-[#040AC6] font-bold">HLS Transport</span>. Tous droits réservés.
            </p>

            <div className="flex gap-6 text-sm text-gray-400">
              <NavLink to="/privacy" className="hover:text-[#040AC6] transition-colors duration-300">
                Confidentialité
              </NavLink>
              <span className="text-gray-600">|</span>
              <NavLink to="/terms" className="hover:text-[#040AC6] transition-colors duration-300">
                Conditions
              </NavLink>
              <span className="text-gray-600">|</span>
              <NavLink to="/mentions-legales" className="hover:text-[#040AC6] transition-colors duration-300">
                Mentions légales
              </NavLink>
            </div>
          </div>
        </div>

        {/* Barre décorative */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#040AC6] via-[#FF000A] to-[#040AC6]"></div>
      </footer>
    </div>
  );
};

export default Layout;