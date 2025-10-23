import { Award, Ship, Plane, Globe, Shield } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Jean Dupont",
      role: "Directeur Général",
      image: "./avatar.png",
      description: "15 ans d'expérience en logistique internationale",
    },
    {
      name: "Marlyse Kend",
      role: "Directrice des Opérations",
      image: "./avatar.png",
      description: "Experte en transport maritime et aérien",
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Des services de transport sécurisés et ponctués, garantissant la sécurité de vos marchandises",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Des solutions logistiques de qualité supérieure avec un suivi en temps réel",
    },
    {
      icon: Globe,
      title: "Réseau Global",
      description: "Une présence internationale pour des expéditions partout dans le monde",
    },
    {
      icon: Ship,
      title: "Innovation",
      description: "Des technologies modernes pour optimiser vos chaînes d'approvisionnement",
    },
  ];

  const services = [
    {
      icon: Ship,
      title: "Transport Maritime",
      description: "Solutions complètes pour le fret maritime international"
    },
    {
      icon: Plane,
      title: "Transport Aérien",
      description: "Expéditions rapides et sécurisées par voie aérienne"
    }
  ];

  return (
    <div className="bg-white">
      {/* Section Hero */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('./hero.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#040AC6]/70 via-[#000000]/80 to-[#040AC6]/70"></div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#FF000A] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#040AC6] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-6 flex justify-center gap-4">
            <Ship className="w-12 h-12 text-white animate-pulse" />
            <Plane className="w-12 h-12 text-white animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Votre Partenaire en <span className="bg-gradient-to-r from-[#FF000A] to-[#040AC6] bg-clip-text text-transparent">Transport International</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#FF000A] via-white to-[#040AC6] mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-10">
            Excellence, fiabilité et innovation dans le transport maritime et aérien depuis plus de 15 ans
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-[#FF000A] text-white font-semibold rounded-lg hover:bg-[#CC0008] hover:shadow-2xl hover:shadow-[#FF000A]/50 transform hover:scale-105 transition-all duration-300">
              Découvrir nos services
            </button>
            <button className="px-8 py-4 bg-white text-[#040AC6] font-semibold rounded-lg hover:bg-gray-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Demander un devis
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services principaux */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#040AC6] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#040AC6]/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#040AC6] to-[#FF000A] rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#040AC6] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-gray-100">
              <img src="./hero.jpg" alt="Notre entreprise" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040AC6]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-semibold text-lg">15+ ans d'excellence</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <span className="inline-block px-5 py-2 bg-[#040AC6]/10 text-[#040AC6] rounded-full text-sm font-bold mb-6 border border-[#040AC6]/20">NOTRE HISTOIRE</span>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Une expertise reconnue en <span className="text-[#040AC6]">transport international</span>
            </h2>
            
            <p className="text-gray-700 mb-5 leading-relaxed text-lg">
              Depuis notre création, nous nous sommes imposés comme un acteur majeur du transport maritime et aérien, offrant des solutions logistiques sur mesure à nos clients à travers le monde.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Notre expertise couvre l'ensemble de la chaîne logistique : du transport de marchandises jusqu'à la livraison finale, en passant par le dédouanement et le stockage. Nous combinons efficacité, sécurité et ponctualité pour garantir votre satisfaction.
            </p>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border-l-4 border-[#FF000A]">
              <Award className="w-6 h-6 text-[#FF000A] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Certification internationale</p>
                <p className="text-gray-600 text-sm">Normes ISO et accréditations mondiales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-[#040AC6]/10 text-[#040AC6] rounded-full text-sm font-bold mb-6 border border-[#040AC6]/20">NOS VALEURS</span>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Les piliers de notre <span className="text-[#040AC6]">excellence</span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Des principes qui guident notre engagement envers chaque client</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#040AC6]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#040AC6] to-[#FF000A] rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#040AC6] transition-colors duration-300">{value.title}</h3>
                
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <span className="inline-block px-5 py-2 bg-[#FF000A]/10 text-[#FF000A] rounded-full text-sm font-bold mb-6 border border-[#FF000A]/20">NOTRE PERFORMANCE</span>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Des chiffres qui témoignent de notre <span className="text-[#040AC6]">expertise</span>
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-5 text-lg">
              Chaque jour, nous travaillons pour améliorer nos services et dépasser les attentes de nos clients. Notre engagement se reflète dans nos résultats.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-10">
              Avec un réseau mondial et des partenaires de confiance, nous assurons des expéditions sécurisées et ponctuelles vers plus de 150 destinations.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-[#040AC6]/5 to-[#040AC6]/10 rounded-2xl hover:shadow-lg transition-all duration-300 border border-[#040AC6]/20">
                <p className="text-4xl font-bold text-[#040AC6] mb-2">10K+</p>
                <p className="text-sm text-gray-700 font-medium">Expéditions/an</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-[#FF000A]/5 to-[#FF000A]/10 rounded-2xl hover:shadow-lg transition-all duration-300 border border-[#FF000A]/20">
                <p className="text-4xl font-bold text-[#FF000A] mb-2">98%</p>
                <p className="text-sm text-gray-700 font-medium">Satisfaction</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-[#040AC6]/5 to-[#040AC6]/10 rounded-2xl hover:shadow-lg transition-all duration-300 border border-[#040AC6]/20">
                <p className="text-4xl font-bold text-[#040AC6] mb-2">150+</p>
                <p className="text-sm text-gray-700 font-medium">Destinations</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 order-1 md:order-2 group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-gray-100">
              <img src="./foodstreet.jpg" alt="Performance" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF000A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-[#040AC6]/10 text-[#040AC6] rounded-full text-sm font-bold mb-6 border border-[#040AC6]/20">NOTRE ÉQUIPE</span>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Une équipe <span className="text-[#040AC6]">d'experts</span> à votre service
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Des professionnels qualifiés et passionnés par la logistique internationale</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border-2 border-gray-100 hover:border-[#040AC6]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#040AC6]/0 to-[#FF000A]/0 group-hover:from-[#040AC6]/5 group-hover:to-[#FF000A]/5 transition-all duration-500"></div>

                <div className="relative p-10 flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#040AC6] to-[#FF000A] rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <img src={member.image} alt={member.name} className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl transform group-hover:scale-110 transition-all duration-500" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#040AC6] transition-colors duration-300">{member.name}</h3>
                  
                  <p className="text-[#FF000A] font-semibold mb-4 text-lg">{member.role}</p>
                  
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="relative bg-gradient-to-br from-[#040AC6] via-[#000000] to-[#040AC6] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#FF000A] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center gap-6 mb-8">
            <Ship className="w-16 h-16 text-white animate-pulse" />
            <Plane className="w-16 h-16 text-white animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Prêt à expédier vos marchandises ?</h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-100 leading-relaxed">
            Contactez-nous dès aujourd'hui pour un devis personnalisé et découvrez comment nous pouvons optimiser votre chaîne logistique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FF000A] text-white rounded-lg font-bold hover:bg-[#CC0008] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF000A]/50">
              <span>Demander un devis</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <button className="group inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-[#040AC6] transition-all duration-300 hover:scale-105">
              <span>Nos services</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}