import { useRef, useState } from 'react'; 
import emailjs from '@emailjs/browser';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Send,
  MessageCircle,
  Globe,
  Plane,
  Ship,
  Package,
  Headphones,
  ArrowRight
} from 'lucide-react';

interface ContactProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
  web?: { label: string; url: string };
  serviceId?: string;
  templateId?: string;
  publicKey?: string;
}

export const Contact = ({
  title = "Contactez HLS",
  description = "Une question sur nos services de transport ? Notre équipe d'experts est disponible pour vous accompagner dans tous vos projets d'expédition internationale.",
  phone = "+229 XX XX XX XX",
  email = "contact@hls-transport.com",
  address = "Cotonou, Littoral, Bénin",
  web = { label: "www.hls-transport.com", url: "https://hls-transport.com" },
  serviceId = "service_xxxxx",
  templateId = "template_xxxxx",
  publicKey = "your_public_key"
}: ContactProps) => {

  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    serviceType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setMessage('');
    setMessageType('');

    interface EmailJSError {
      text: string;
    }

    interface EmailJSSuccess {
      status: number;
      text: string;
    }

    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current as HTMLFormElement,
        publicKey
      )
      .then(
        (_result: EmailJSSuccess) => {
          setMessage('Votre demande a été envoyée avec succès ! Un expert HLS vous contactera dans les 24h.');
          setMessageType('success');
          setFormData({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            subject: '',
            serviceType: '',
            message: ''
          });
          formRef.current?.reset();
          setLoading(false);
          
          setTimeout(() => {
            setMessage('');
            setMessageType('');
          }, 5000);
        },
        (error: EmailJSError) => {
          setMessage("Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par téléphone.");
          setMessageType('error');
          console.error(error);
          setLoading(false);
        }
      );
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      value: phone,
      link: `tel:${phone.replace(/\s/g, '')}`,
      subtitle: "Lun-Sam: 8h-18h",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Mail,
      title: "Email",
      value: email,
      link: `mailto:${email}`,
      subtitle: "Réponse sous 24h",
      color: "from-[#FF000A] to-red-600"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: address,
      link: "https://maps.google.com",
      subtitle: "Voir sur la carte",
      color: "from-purple-600 to-indigo-600"
    },
    {
      icon: Globe,
      title: "Site Web",
      value: web.label,
      link: web.url,
      subtitle: "En savoir plus",
      color: "from-green-600 to-emerald-600"
    }
  ];

  const services = [
    { icon: Plane, label: "Groupage Aérien", color: "text-blue-600" },
    { icon: Ship, label: "Groupage Maritime", color: "text-cyan-600" },
    { icon: Package, label: "Logistique Complète", color: "text-purple-600" }
  ];

  return (
    <section className="relative min-h-screen pt-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#040AC6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#FF000A]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 py-20">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#040AC6]/10 backdrop-blur-sm rounded-full border border-[#040AC6]/20 mb-6">
            <Headphones className="w-5 h-5 text-[#040AC6]" />
            <span className="text-[#040AC6] font-semibold">Support Client 24/7</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            {title.split(' ')[0]}{' '}
            <span className="bg-gradient-to-r from-[#040AC6] to-[#FF000A] bg-clip-text text-transparent">
              {title.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mx-auto flex max-w-screen-xl flex-col lg:flex-row justify-between gap-12 px-6">
          
          {/* Info Section */}
          <div className="flex flex-col gap-8 lg:w-5/12">
            {/* Contact Methods Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#040AC6] to-[#FF000A] rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                Nous Contacter
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-transparent hover:bg-gradient-to-br hover:from-gray-50 hover:to-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-500 mb-1 uppercase tracking-wide">
                        {method.title}
                      </p>
                      <p className="text-gray-900 font-bold mb-1 break-words group-hover:text-[#040AC6] transition-colors">
                        {method.value}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        {method.subtitle}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Services Card */}
            <div className="bg-gradient-to-br from-[#040AC6] to-blue-700 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Package className="w-7 h-7" />
                Nos Services
              </h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold">{service.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-white/90 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Devis gratuit et sans engagement
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-gradient-to-br from-[#FF000A] to-red-600 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Clock className="w-7 h-7" />
                Horaires
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border-b border-white/20">
                  <span className="font-semibold">Lundi - Vendredi</span>
                  <span className="font-black">8h - 18h</span>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white/20">
                  <span className="font-semibold">Samedi</span>
                  <span className="font-black">9h - 14h</span>
                </div>
                <div className="flex justify-between items-center p-4">
                  <span className="font-semibold">Dimanche</span>
                  <span className="font-black">Fermé</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-white/90 flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  Support d'urgence 24/7 disponible
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 border-2 border-green-200 hover:border-green-300 transition-colors">
              <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Réponse Immédiate ?
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Contactez-nous sur WhatsApp pour un devis express !
              </p>
              <a
                href={`https://wa.me/${phone.replace(/\s|\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all transform hover:scale-105 font-bold shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Discuter sur WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-7/12">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 hover:shadow-3xl transition-shadow duration-300"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-black text-gray-900 mb-2 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#040AC6] to-[#FF000A] rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  Demande de Contact
                </h2>
                <p className="text-gray-600">
                  Remplissez ce formulaire et un expert vous recontactera sous 24h
                </p>
              </div>

              {/* Success/Error Message */}
              {message && (
                <div className={`mb-8 p-6 rounded-2xl border-2 flex items-start gap-4 animate-fade-in ${
                  messageType === 'success' 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}>
                  {messageType === 'success' ? (
                    <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className={`font-black text-lg mb-1 ${
                      messageType === 'success' ? 'text-green-900' : 'text-red-900'
                    }`}>
                      {messageType === 'success' ? 'Message envoyé !' : 'Erreur'}
                    </h3>
                    <p className={messageType === 'success' ? 'text-green-700' : 'text-red-700'}>
                      {message}
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* First & Last Name */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstname" className="text-sm font-bold text-gray-700 mb-2 block">
                      Prénom *
                    </Label>
                    <Input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Jean"
                      required
                      value={formData.firstname}
                      onChange={handleInputChange}
                      className="h-12 border-2 focus:border-[#040AC6] rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastname" className="text-sm font-bold text-gray-700 mb-2 block">
                      Nom *
                    </Label>
                    <Input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Dupont"
                      required
                      value={formData.lastname}
                      onChange={handleInputChange}
                      className="h-12 border-2 focus:border-[#040AC6] rounded-xl"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jean.dupont@email.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 border-2 focus:border-[#040AC6] rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Téléphone *
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+229 XX XX XX XX"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12 border-2 focus:border-[#040AC6] rounded-xl"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <Label htmlFor="serviceType" className="text-sm font-bold text-gray-700 mb-2 block">
                    Type de service *
                  </Label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full h-12 border-2 focus:border-[#040AC6] rounded-xl px-4 bg-white"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="aerien">Groupage Aérien</option>
                    <option value="maritime">Groupage Maritime</option>
                    <option value="logistique">Logistique Complète</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject" className="text-sm font-bold text-gray-700 mb-2 block">
                    Sujet *
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Ex: Demande de devis pour envoi vers la France"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="h-12 border-2 focus:border-[#040AC6] rounded-xl"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-sm font-bold text-gray-700 mb-2 block">
                    Votre message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre besoin en détail (destination, poids estimé, dimensions, etc.)..."
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="min-h-[180px] border-2 focus:border-[#040AC6] rounded-xl resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-14 text-lg font-black rounded-xl transition-all transform shadow-xl ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#040AC6] to-[#FF000A] hover:from-[#FF000A] hover:to-[#040AC6] hover:scale-105 hover:shadow-2xl text-white"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-6 h-6" />
                      Envoyer ma demande
                    </span>
                  )}
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Vos données sont sécurisées et confidentielles
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-20 px-6">
          <div className="max-w-screen-xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-8 bg-gradient-to-r from-gray-50 to-white border-b">
              <h3 className="text-3xl font-black text-gray-900 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#040AC6] to-[#FF000A] rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                Notre Localisation
              </h3>
              <p className="text-gray-600 mt-2 font-semibold">
                {address}
              </p>
            </div>
            <div className="h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7438524363584!2d2.4286895!3d6.3654745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjEnNTUuNyJOIDLCsDI1JzQzLjMiRQ!5e0!3m2!1sfr!2sbj!4v1234567890" 
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;