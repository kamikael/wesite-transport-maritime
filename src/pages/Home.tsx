import React, { useEffect, useRef , useState} from "react";
import { NavLink } from "react-router-dom";
import { Star } from "lucide-react";
import { 
  Plane, 
  Ship, 
  Package, 
  Globe, 
  Clock, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Anchor,
  MapPin,
  Users,
  Award,
  Zap,
  Phone,
  Navigation
} from 'lucide-react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Plane,
      title: "Groupage Aérien",
      description: "Transport rapide et sécurisé par voie aérienne pour vos envois urgents",
      features: ["Livraison 48-72h", "Suivi en temps réel", "Sécurité maximale"],
      color: "from-blue-600 to-blue-800",
      delay: "0"
    },
    {
      icon: Ship,
      title: "Groupage Maritime",
      description: "Solutions économiques pour vos envois volumineux par voie maritime",
      features: ["Tarifs compétitifs", "Capacité illimitée", "Expertise portuaire"],
      color: "from-cyan-600 to-blue-600",
      delay: "200"
    },
    {
      icon: Package,
      title: "Logistique Complète",
      description: "Gestion de bout en bout de votre chaîne d'approvisionnement",
      features: ["Entreposage", "Dédouanement", "Distribution"],
      color: "from-indigo-600 to-purple-600",
      delay: "400"
    }
  ];

  const stats = [
    { icon: Globe, value: "50+", label: "Pays desservis", delay: "0" },
    { icon: Package, value: "10K+", label: "Colis livrés/an", delay: "100" },
    { icon: Users, value: "2K+", label: "Clients satisfaits", delay: "200" },
    { icon: Award, value: "15+", label: "Ans d'expérience", delay: "300" }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Rapidité",
      description: "Délais de livraison optimisés pour tous vos envois"
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Assurance et protection de vos marchandises"
    },
    {
      icon: TrendingUp,
      title: "Fiabilité",
      description: "Taux de livraison à temps de 99.5%"
    },
    {
      icon: Zap,
      title: "Efficacité",
      description: "Processus optimisés et automatisés"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Marie Dupont",
      company: "Import Solutions",
      comment: "Service impeccable ! HLS a géré notre premier envoi maritime avec professionnalisme. Suivi transparent et livraison dans les délais.",
      rating: 5,
      avatar: "M"
    },
    {
      id: 2,
      name: "Jean-Paul Martin",
      company: "Tech Global",
      comment: "Pour nos envois urgents, le groupage aérien de HLS est parfait. Rapidité, sécurité et tarifs compétitifs. Je recommande vivement !",
      rating: 5,
      avatar: "J"
    },
    {
      id: 3,
      name: "Sophie Laurent",
      company: "Fashion Import",
      comment: "Partenaire de confiance depuis 3 ans. L'équipe est réactive et trouve toujours des solutions adaptées à nos besoins logistiques.",
      rating: 5,
      avatar: "S"
    }
  ];

  const destinations = [
    { region: "Europe", countries: "25+ pays", icon: "🇪🇺" },
    { region: "Afrique", countries: "15+ pays", icon: "🌍" },
    { region: "Asie", countries: "10+ pays", icon: "🌏" },
    { region: "Amériques", countries: "8+ pays", icon: "🌎" }
  ];

  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
 
  useEffect(() => {
    imagesRef.current.forEach((img) => {
      if (img && img.naturalHeight > img.naturalWidth) {
        // Si l'image est plus haute que large, on la tourne en rectangle
        img.classList.add("rotate-90", "scale-105");
      }
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen pt-8 flex items-center justify-center bg-cover bg-center overflow-hidden " style={{ backgroundImage: "url('./hero.jpg')" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#040AC6]/70 via-[#000000]/80 to-[#040AC6]/70"></div>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-64 h-64 bg-[#FF000A] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#040AC6] rounded-full blur-3xl animate-pulse"></div>
              </div>
              <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF000A] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#040AC6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-white/20 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-[#FF000A]/30 rounded-full animate-pulse"></div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold text-sm">
                Leader du Transport International
              </span>
            </div>

            {/* Main Title - Animated */}
            <h1 
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Transport
              </span>
              <span className="block bg-gradient-to-r from-[#FF000A] via-red-400 to-[#FF000A] bg-clip-text text-transparent drop-shadow-2xl mt-2">
                Maritime & Aérien
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              Des solutions logistiques <span className="text-[#FF000A] font-bold">sur mesure</span> pour connecter votre entreprise au monde entier
            </p>

            {/* Quick Info Pills */}
            <div 
              className={`flex flex-wrap items-center justify-center gap-6 mb-12 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">50+ Destinations</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Service 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">100% Sécurisé</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-6 justify-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <NavLink
                to="/devis"
                className="group relative px-10 py-5 bg-gradient-to-r from-[#FF000A] to-red-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-500 overflow-hidden transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Package className="w-6 h-6" />
                  Demander un devis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </NavLink>

              <NavLink
                to="/suivi-colis"
                className="group px-10 py-5 bg-white/10 backdrop-blur-md text-white text-lg font-bold rounded-full border-2 border-white/30 hover:bg-white hover:text-[#040AC6] transition-all duration-500 transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Suivre mon colis
                </span>
              </NavLink>
            </div>

            {/* Stats Bar */}
            <div 
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-black text-white mb-1 group-hover:text-[#FF000A] transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-300 uppercase tracking-wider">Découvrir</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
        </div>
      </section>


     {/* Why Choose Us Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#040AC6] to-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff), linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff)',
              backgroundSize: '80px 140px'
            }}
          ></div>
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold text-sm">Pourquoi HLS ?</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Votre Partenaire{" "}
                <span className="bg-gradient-to-r from-[#FF000A] to-red-400 bg-clip-text text-transparent">
                  de Confiance
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Avec plus de 15 ans d'expertise dans le transport international, HLS vous offre des solutions logistiques fiables et personnalisées.
              </p>

              {/* Advantages Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {advantages.map((advantage, index) => (
                  <div 
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <advantage.icon className="w-10 h-10 text-[#FF000A] mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF000A] transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <NavLink
                  to="/about"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#040AC6] font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Découvrir HLS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </NavLink>
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#040AC6] transition-all duration-300"
                >
                  Nous contacter
                </NavLink>
              </div>
            </div>

            {/* Right Stats */}
            <div className="flex-1 text-4xl sm:text-5xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 sm:-mr-1 -mr-4">
                  <div className=" font-black text-white mb-2 ">99.5%</div>
                  <div className="text-sm text-gray-300">Livraisons à temps</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 mt-8">
                  <div className=" font-black text-white mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Support client</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 -mt-4">
                  <div className=" font-black text-white mb-2">50+</div>
                  <div className="text-sm text-gray-300">Pays couverts</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 mt-4">
                  <div className=" font-black text-white mb-2">2K+</div>
                  <div className="text-sm text-gray-300">Clients actifs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#040AC6]/10 rounded-full mb-4">
              <Star className="w-5 h-5 text-[#040AC6]" />
              <span className="text-[#040AC6] font-semibold text-sm">Témoignages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Ce que disent nos{" "}
              <span className="bg-gradient-to-r from-[#040AC6] to-[#FF000A] bg-clip-text text-transparent">
                clients
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre priorité
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-[#040AC6]/10 group-hover:text-[#040AC6]/20 transition-colors duration-300">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#040AC6] to-[#FF000A] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  "{testimonial.comment}"
                </p>

                {/* Verified Badge */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="bg-[#040AC6] text-white text-xs px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Client vérifié
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Services Section - Detailed */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#040AC6] to-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
              <Package className="w-5 h-5 text-[#FF000A]" />
              <span className="text-white font-semibold text-sm">Nos Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Solutions{" "}
              <span className="bg-gradient-to-r from-[#FF000A] to-red-400 bg-clip-text text-transparent">
                Sur Mesure
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des services adaptés à chaque besoin de transport international
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#FF000A] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <NavLink
                  to="/services"
                  className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-[#FF000A] transition-colors duration-300"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </NavLink>

                {/* Decorative Element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#040AC6]/10 rounded-full mb-4">
              <Navigation className="w-5 h-5 text-[#040AC6]" />
              <span className="text-[#040AC6] font-semibold text-sm">Comment ça marche</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Un processus{" "}
              <span className="bg-gradient-to-r from-[#040AC6] to-[#FF000A] bg-clip-text text-transparent">
                simple et efficace
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la demande de devis à la livraison finale en 4 étapes
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#040AC6] via-[#FF000A] to-[#040AC6] transform -translate-y-1/2 -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Demande de devis",
                  description: "Remplissez notre formulaire en ligne avec les détails de votre envoi",
                  icon: Package,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  number: "02",
                  title: "Validation & Paiement",
                  description: "Recevez votre devis personnalisé et validez votre commande",
                  icon: CheckCircle,
                  color: "from-green-500 to-green-600"
                },
                {
                  number: "03",
                  title: "Collecte & Transit",
                  description: "Nous collectons votre colis et gérons tout le transport international",
                  icon: Ship,
                  color: "from-purple-500 to-purple-600"
                },
                {
                  number: "04",
                  title: "Livraison",
                  description: "Réception de votre colis à destination avec suivi en temps réel",
                  icon: MapPin,
                  color: "from-red-500 to-red-600"
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-8">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#040AC6] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#040AC6] to-[#FF000A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <NavLink
              to="/devis"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#040AC6] to-[#FF000A] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Package className="w-5 h-5" />
              Commencer maintenant
              <ArrowRight className="w-5 h-5" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Global Coverage Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#040AC6] to-black text-white overflow-hidden">
        {/* Background Globe Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-white rounded-full"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
              <Globe className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold text-sm">Couverture Mondiale</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Présents sur{" "}
              <span className="bg-gradient-to-r from-[#FF000A] to-red-400 bg-clip-text text-transparent">
                5 Continents
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Un réseau international pour connecter votre entreprise partout dans le monde
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 text-center overflow-hidden"
              >
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#040AC6]/20 to-[#FF000A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {destination.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#FF000A] transition-colors duration-300">
                    {destination.region}
                  </h3>
                  <p className="text-gray-400">{destination.countries}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Anchor, text: "Partenaires portuaires majeurs" },
              { icon: Plane, text: "Accords aéroportuaires exclusifs" },
              { icon: Shield, text: "Assurance internationale incluse" }
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#040AC6] to-[#FF000A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-semibold">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#040AC6] via-blue-600 to-[#FF000A] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">Démarrez aujourd'hui</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Prêt à expédier votre{" "}
              <span className="relative inline-block">
                <span className="relative z-10">prochain colis ?</span>
                <div className="absolute bottom-2 left-0 right-0 h-4 bg-yellow-300/30 -rotate-1"></div>
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Rejoignez plus de 2000 entreprises qui nous font confiance pour leurs envois internationaux
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <NavLink
                to="/devis"
                className="group relative px-10 py-5 bg-white text-[#040AC6] text-lg font-bold rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-500 overflow-hidden transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Package className="w-6 h-6" />
                  Obtenir un devis gratuit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </NavLink>

              <NavLink
                to="/contact"
                className="group px-10 py-5 bg-transparent text-white text-lg font-bold rounded-full border-2 border-white hover:bg-white hover:text-[#040AC6] transition-all duration-500 transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <Phone className="w-6 h-6" />
                  Parler à un expert
                </span>
              </NavLink>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 border-t border-white/20">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">Devis en 24h</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">Sans engagement</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">Support 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
