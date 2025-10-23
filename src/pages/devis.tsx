import { useState } from "react";
import { Ship, Plane, Package, Calculator, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Devis() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    typeService: "",
    typeMarchandise: "",
    destination: "",
    longueur: "",
    largeur: "",
    hauteur: "",
    articleSpecifique: "",
    quantite: "1",
    transportTerrestre: "non",
    pointEnlevement: "",
    pointLivraison: "",
    message: ""
  });

  const [prixCalcule, setPrixCalcule] = useState(0);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Grille de prix complète
  const prixArticles = {
    "Canapé 2 places": 250,
    "Canapé 3 places": 350,
    "Canapé 4 places": 450,
    "Canapé 5 places": 550,
    "Canapé 6 places": 660,
    "Congélateur +500L": 550,
    "Congélateur 150-250L": 275,
    "Congélateur 251-490L": 350,
    "Cuisinière +4 foyers": 175,
    "Cuisinière -4 foyers": 160,
    "Cantine 100cm": 140,
    "Cantine 80/90cm": 125,
    "Fût Orange vide": 30,
    "Fût Orange 220L": 170,
    "Groupe Électrogène": 220,
    "Lave-linge +10Kg": 180,
    "Lave-linge 6-10Kg": 165,
    "Matelas": 100,
    "Micro-ondes": 40,
    "Moteur véhicule": 400,
    "Réfrigérateur 140cm": 220,
    "Réfrigérateur 170cm": 280,
    "Réfrigérateur 190cm": 310,
    "Réfrigérateur Américain": 400,
    "Réfrigérateur chambre": 120,
    "Salon complet": 800,
    "TV jusqu'à 30 pouces": 100,
    "TV jusqu'à 40 pouces": 150,
    "TV 50 pouces et +": 300,
    "Vélo adulte": 75,
    "Vélo enfant": 35,
    "Pied de brocante": 500
  };

  const calculerPrix = () => {
    let prix = 0;

    if (formData.articleSpecifique && formData.articleSpecifique !== "Calcul par dimensions"){
      prix = prixArticles[formData.articleSpecifique as keyof typeof prixArticles] 
      * parseInt(formData.quantite || "1");

    } else if (formData.longueur && formData.largeur && formData.hauteur) {
      const volumeM3 = (parseFloat(formData.longueur) * parseFloat(formData.largeur) * parseFloat(formData.hauteur)) / 1000000;
      
      let prixM3 = 0;
      if (formData.typeMarchandise === "Brocante") {
        prixM3 = formData.destination === "Douala" ? 450 : 500;
      } else if (formData.typeMarchandise === "Alimentation") {
        prixM3 = formData.destination === "Douala" ? 500 : 550;
      } else if (formData.typeMarchandise === "Carreaux") {
        prixM3 = 700;
      }
      
      prix = volumeM3 * prixM3 * parseInt(formData.quantite || "1");
    }

    setPrixCalcule(prix);
    return prix;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (["longueur", "largeur", "hauteur", "typeMarchandise", "destination", "articleSpecifique", "quantite"].includes(name)) {
      setTimeout(calculerPrix, 100);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const prixFinal = calculerPrix();

    // Simulation d'envoi (remplacez par EmailJS)
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Votre demande de devis a été envoyée avec succès ! Nous vous contacterons sous 24h."
      });

      setFormData({
        nom: "", prenom: "", email: "", telephone: "", typeService: "",
        typeMarchandise: "", destination: "", longueur: "", largeur: "",
        hauteur: "", articleSpecifique: "", quantite: "1",
        transportTerrestre: "non", pointEnlevement: "", pointLivraison: "", message: ""
      });
      setPrixCalcule(0);
      setLoading(false);
    }, 2000);

    /* Décommentez pour utiliser EmailJS:*/
    
    const templateParams = {
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      telephone: formData.telephone,
      typeService: formData.typeService,
      typeMarchandise: formData.typeMarchandise,
      destination: formData.destination,
      dimensions: formData.longueur && formData.largeur && formData.hauteur 
        ? `${formData.longueur}cm x ${formData.largeur}cm x ${formData.hauteur}cm`
        : "Non spécifié",
      articleSpecifique: formData.articleSpecifique || "Non spécifié",
      quantite: formData.quantite,
      transportTerrestre: formData.transportTerrestre,
      pointEnlevement: formData.pointEnlevement || "Non spécifié",
      pointLivraison: formData.pointLivraison || "Non spécifié",
      message: formData.message,
      prixEstime: `${prixFinal.toFixed(2)} €`
    };

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );
      // ... succès
    } catch (error) {
      // ... erreur
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#040AC6] via-[#000000] to-[#040AC6] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#FF000A] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center gap-4 mb-6">
            <Calculator className="w-12 h-12 text-white" />
            <Package className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Demande de <span className="text-[#FF000A]">Devis</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#FF000A] to-white mx-auto mb-6"></div>
          
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Obtenez une estimation instantanée pour votre expédition maritime ou aérienne
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100">
            
            {/* Informations personnelles */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#040AC6] to-[#FF000A] rounded-lg flex items-center justify-center text-white font-bold">1</div>
                Vos informations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom *</label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                    placeholder="+32 XXX XX XX XX"
                  />
                </div>
              </div>
            </div>

            {/* Type de service */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#040AC6] to-[#FF000A] rounded-lg flex items-center justify-center text-white font-bold">2</div>
                Type de service
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, typeService: "Maritime" }))}
                  className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                    formData.typeService === "Maritime"
                      ? "border-[#040AC6] bg-[#040AC6]/5 shadow-lg"
                      : "border-gray-200 hover:border-[#040AC6]/50"
                  }`}
                >
                  <Ship className={`w-8 h-8 mx-auto mb-3 ${formData.typeService === "Maritime" ? "text-[#040AC6]" : "text-gray-400"}`} />
                  <p className="font-semibold text-gray-900">Transport Maritime</p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, typeService: "Aérien" }))}
                  className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                    formData.typeService === "Aérien"
                      ? "border-[#040AC6] bg-[#040AC6]/5 shadow-lg"
                      : "border-gray-200 hover:border-[#040AC6]/50"
                  }`}
                >
                  <Plane className={`w-8 h-8 mx-auto mb-3 ${formData.typeService === "Aérien" ? "text-[#040AC6]" : "text-gray-400"}`} />
                  <p className="font-semibold text-gray-900">Transport Aérien</p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, typeService: "Conteneur" }))}
                  className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                    formData.typeService === "Conteneur"
                      ? "border-[#040AC6] bg-[#040AC6]/5 shadow-lg"
                      : "border-gray-200 hover:border-[#040AC6]/50"
                  }`}
                >
                  <Package className={`w-8 h-8 mx-auto mb-3 ${formData.typeService === "Conteneur" ? "text-[#040AC6]" : "text-gray-400"}`} />
                  <p className="font-semibold text-gray-900">Location Conteneur</p>
                </button>
              </div>
            </div>

            {/* Détails de la marchandise */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#040AC6] to-[#FF000A] rounded-lg flex items-center justify-center text-white font-bold">3</div>
                Détails de votre marchandise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Type de marchandise *</label>
                  <select
                    name="typeMarchandise"
                    value={formData.typeMarchandise}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="Brocante">Brocante</option>
                    <option value="Alimentation">Alimentation (sans vin)</option>
                    <option value="Carreaux">Carreaux</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Destination *</label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="Douala">Douala</option>
                    <option value="Yaoundé">Yaoundé</option>
                    <option value="Autre">Autre destination</option>
                  </select>
                </div>
              </div>

              {/* Article spécifique */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Article spécifique (optionnel)</label>
                <select
                  name="articleSpecifique"
                  value={formData.articleSpecifique}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                >
                  <option value="">Calcul par dimensions</option>
                  <optgroup label="Canapés">
                    <option value="Canapé 2 places">Canapé 2 places - 250€</option>
                    <option value="Canapé 3 places">Canapé 3 places - 350€</option>
                    <option value="Canapé 4 places">Canapé 4 places - 450€</option>
                    <option value="Canapé 5 places">Canapé 5 places - 550€</option>
                    <option value="Canapé 6 places">Canapé 6 places - 660€</option>
                  </optgroup>
                  <optgroup label="Électroménager">
                    <option value="Congélateur +500L">Congélateur +500L - 550€</option>
                    <option value="Congélateur 150-250L">Congélateur 150-250L - 275€</option>
                    <option value="Congélateur 251-490L">Congélateur 251-490L - 350€</option>
                    <option value="Cuisinière +4 foyers">Cuisinière +4 foyers - 175€</option>
                    <option value="Cuisinière -4 foyers">Cuisinière -4 foyers - 160€</option>
                    <option value="Lave-linge +10Kg">Lave-linge +10Kg - 180€</option>
                    <option value="Lave-linge 6-10Kg">Lave-linge 6-10Kg - 165€</option>
                    <option value="Micro-ondes">Micro-ondes - 40€</option>
                  </optgroup>
                  <optgroup label="Réfrigérateurs">
                    <option value="Réfrigérateur 140cm">Réfrigérateur 140cm - 220€</option>
                    <option value="Réfrigérateur 170cm">Réfrigérateur 170cm - 280€</option>
                    <option value="Réfrigérateur 190cm">Réfrigérateur 190cm - 310€</option>
                    <option value="Réfrigérateur Américain">Réfrigérateur Américain - 400€</option>
                    <option value="Réfrigérateur chambre">Réfrigérateur chambre - 120€</option>
                  </optgroup>
                  <optgroup label="Fûts">
                    <option value="Fût Orange vide">Fût Orange vide - 30€</option>
                    <option value="Fût Orange 220L">Fût Orange 220L - 170€</option>
                  </optgroup>
                  <optgroup label="Autres articles">
                    <option value="Cantine 100cm">Cantine 100cm - 140€</option>
                    <option value="Cantine 80/90cm">Cantine 80/90cm - 125€</option>
                    <option value="Matelas">Matelas - 100€</option>
                    <option value="TV jusqu'à 30 pouces">TV jusqu'à 30 pouces - 100€</option>
                    <option value="TV jusqu'à 40 pouces">TV jusqu'à 40 pouces - 150€</option>
                    <option value="TV 50 pouces et +">TV 50 pouces et + - 300€</option>
                    <option value="Vélo adulte">Vélo adulte - 75€</option>
                    <option value="Vélo enfant">Vélo enfant - 35€</option>
                    <option value="Pied de brocante">Pied de brocante - 500€</option>
                    <option value="Salon complet">Salon complet - 800€</option>
                    <option value="Moteur véhicule">Moteur véhicule - 400€</option>
                    <option value="Groupe Électrogène">Groupe Électrogène - 220€</option>
                  </optgroup>
                </select>
              </div>

              {/* Dimensions ou quantité */}
              {(!formData.articleSpecifique || formData.articleSpecifique === "Calcul par dimensions") ? (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Dimensions du colis (en cm)</label>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <input
                        type="number"
                        name="longueur"
                        value={formData.longueur}
                        onChange={handleChange}
                        placeholder="Longueur"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        name="largeur"
                        value={formData.largeur}
                        onChange={handleChange}
                        placeholder="Largeur"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        name="hauteur"
                        value={formData.hauteur}
                        onChange={handleChange}
                        placeholder="Hauteur"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Quantité</label>
                  <input
                    type="number"
                    name="quantite"
                    value={formData.quantite}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                  />
                </div>
              )}
            </div>

            {/* Transport terrestre */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#040AC6] to-[#FF000A] rounded-lg flex items-center justify-center text-white font-bold">4</div>
                Transport terrestre (optionnel)
              </h2>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Avez-vous besoin d'un transport terrestre en Belgique ?</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, transportTerrestre: "oui" }))}
                    className={`flex-1 px-6 py-3 border-2 rounded-lg font-semibold transition-all ${
                      formData.transportTerrestre === "oui"
                        ? "border-[#040AC6] bg-[#040AC6] text-white"
                        : "border-gray-200 text-gray-700 hover:border-[#040AC6]"
                    }`}
                  >
                    Oui
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, transportTerrestre: "non" }))}
                    className={`flex-1 px-6 py-3 border-2 rounded-lg font-semibold transition-all ${
                      formData.transportTerrestre === "non"
                        ? "border-[#040AC6] bg-[#040AC6] text-white"
                        : "border-gray-200 text-gray-700 hover:border-[#040AC6]"
                    }`}
                  >
                    Non
                  </button>
                </div>
              </div>

              {formData.transportTerrestre === "oui" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Point d'enlèvement</label>
                    <input
                      type="text"
                      name="pointEnlevement"
                      value={formData.pointEnlevement}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                      placeholder="Adresse de départ"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Point de livraison</label>
                    <input
                      type="text"
                      name="pointLivraison"
                      value={formData.pointLivraison}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors"
                      placeholder="Adresse d'arrivée"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Message */}
            <div className="mb-10">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message ou informations complémentaires</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#040AC6] focus:outline-none transition-colors resize-none"
                placeholder="Détails supplémentaires sur votre expédition..."
              ></textarea>
            </div>

            {/* Estimation de prix */}
            {prixCalcule > 0 && (
              <div className="mb-10 p-8 bg-gradient-to-br from-[#040AC6]/5 to-[#FF000A]/5 rounded-2xl border-2 border-[#040AC6]/20">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Estimation du prix</p>
                  <p className="text-5xl font-bold text-[#040AC6] mb-3">{prixCalcule.toFixed(2)} €</p>
                  <p className="text-sm text-gray-600">
                    * Prix indicatif pouvant varier selon la valeur marchande et les services additionnels
                  </p>
                </div>
              </div>
            )}

            {/* Status messages */}
            {status.message && (
              <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                status.type === "success" ? "bg-green-50 border-2 border-green-200" : "bg-red-50 border-2 border-red-200"
              }`}>
                {status.type === "success" ? (
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <p className={status.type === "success" ? "text-green-800" : "text-red-800"}>
                  {status.message}
                </p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#040AC6] to-[#FF000A] text-white font-bold py-5 rounded-xl hover:shadow-2xl hover:shadow-[#040AC6]/30 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  Envoyer ma demande de devis
                </>
              )}
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Nous vous répondrons sous 24 heures ouvrées
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}