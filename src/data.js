// import icons
import {
  FaFacebookF,
  FaInstagram,
  FaUber,
  FaPhoneVolume,
  FaBicycle,
  FaBeer
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chefAmel.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.jpg';
import Avatar2 from '../src/assets/img/testimonial/avatar2.jpg';
import Avatar3 from '../src/assets/img/testimonial/avatar3.jpg';
import Avatar4 from '../src/assets/img/testimonial/avatar4.jpg';
import Avatar5 from '../src/assets/img/testimonial/avatar5.jpg';
// import menu images
import baklawa from '../src/assets/img/menu/baklawa.jpg'
import chicken from '../src/assets/img/menu/chicken.jpg'
import couscous from '../src/assets/img/menu/couscous.jpg'
import falafel from '../src/assets/img/menu/falafel.jpg'
import falafels from '../src/assets/img/menu/falafels.jpg'
import forkpotato from '../src/assets/img/menu/forkpotato.jpg'
import fries from '../src/assets/img/menu/fries.jpg'
import fries1 from '../src/assets/img/menu/fries1.jpg'
import fry from '../src/assets/img/menu/fry.jpg'
import heart from '../src/assets/img/menu/heart.jpg'
import items from '../src/assets/img/menu/items.jpg'
import plate from '../src/assets/img/menu/plate.jpg'
import plate1 from '../src/assets/img/menu/plate1.jpg'
import plate3 from '../src/assets/img/menu/plate3.jpg'
import plate4 from '../src/assets/img/menu/plate4.jpg'
import plate5 from '../src/assets/img/menu/plate5.jpg'
import plates from '../src/assets/img/menu/plates.jpg'
import plates6 from '../src/assets/img/menu/plates6.jpg'
import potato from '../src/assets/img/menu/potato.jpg'
import salad from '../src/assets/img/menu/salad.jpg'
import salad1 from '../src/assets/img/menu/salad1.jpg'
import salad2 from '../src/assets/img/menu/salad2.jpg'
import salad3 from '../src/assets/img/menu/salad3.jpg'
import shawarma from '../src/assets/img/menu/shawarma.jpg'
import shawarma1 from '../src/assets/img/menu/shawarma1.jpg'
import sweetpotatos from '../src/assets/img/menu/sweetpotatos.jpg'
import sweetpotatos1 from '../src/assets/img/menu/sweetpotatos1.jpg'
import veggiecross from '../src/assets/img/menu/veggiecross.jpg'
import wrap from '../src/assets/img/menu/wrap.jpg'
import wrap1 from '../src/assets/img/menu/wrap1.jpg'
import wrap2 from '../src/assets/img/menu/wrap2.jpg'
import wrap3 from '../src/assets/img/menu/wrap3.jpg'
import wrapbox from '../src/assets/img/menu/wrapbox.jpg'

export const navData = [
  { href: '/', name: 'home' },
  { href: '#about', name: 'about' },
  { href: '/#menu', name: 'menu' },
  { href: '/#team', name: 'team' },
  { href: '/#testimonial', name: 'testimonials' },
  { href: '/#booking', name: 'book a table' },
  { href: '/#contact', name: 'contact' },
];

export const socialData = [
  { href: 'https://www.facebook.com/Amirresto2016/', icon: <FaFacebookF /> },
  { href: 'https://www.instagram.com/amircaferesto/', icon: <FaInstagram />},
  { href: 'https://www.ubereats.com/ca/store/amir-jean-talon/Fu98HXjsQWWlVANcyl0j0A?utm_campaign=place-action-link&utm_medium=organic&utm_source=google', icon: <FaUber />},
];
export const DineData = [
  { className: '', href: 'https://livraison.restoamir.com/menu', target: 'blank', rel: 'noopener',  icon: <FaBicycle /> },
  { className: 'blink', href: 'tel:514-254-2222', target: 'blank', rel: 'noopener', icon: <FaPhoneVolume />},
  { className: '', href: '/#booking', icon: <FaBeer />},
];


export const aboutData = {
  pretitle: 'our story',
  title: 'What We Offer',
  subtitle:
    "Venez découvrir le meilleur de la cuisine Libanaise & Tunisienne chez Amir Restaurant. Notre restaurant vous offre une expérience culinaire unique, alliant tradition et modernité. De l'houmous aux brochettes en passant par les couscous et les bricks, notre carte vous transportera au cœur des saveurs du Maghreb et du Proche-Orient. Et pour les lève-tard, notre brunch vous fera démarrer la journée du bon pied. Nos plats sont préparés avec des ingrédients frais et de qualité, pour vous garantir une explosion de saveurs à chaque bouchée. Réservez votre table dès maintenant chez Amir Restaurant.",
  image: AboutImg,
};


export const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.',
  sub2: 'Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.',
  name: 'Amal Bjaoui', 
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  image: 'img/hero/logo.png',
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Laa nourriture de ce restaurant se distingue de tous les autres Amir! La bouffe est exquise et bien fraîche, ses plats sont variés et très différents des autres franchises, l’accueil est chaleureux, les sourires sont magnifique, la propreté est au RDV, la décoration est belle, ect...',
      image: Avatar1,
      name: 'Souad Siala',
    },
    {
      message:
        '-Excellent choix un dîner, souper ou un petit déjeuner tunisien libanais. bravo  Fast delivery· Outdoor dining · Romantic atmosphere · Indoor dining · Chic décor · Large menu · Tasting menus · Healthy options · Hip atmosphere · Cheap eats · Large portions · Great dessert · Fine dining',
      image: Avatar2,
      name: 'Dhaou Ennaceur',
    },
    {
      message:
        '-Quel endroit chaleureux et convivial. nous avons été reçu avec beaucoup de chaleur humaine. Le concept café-bistrot + resto est une idée géniale. Merci de nous avoir accueillis pour l\'événement #FemmesExceptionnelles',
      image: Avatar3,
      name: 'Barbara Augustin',
    },
    {
      message:
        '-Accueil chaleureux et la bouffe est plus que délicieuse pour des prix raisonables. Bravo Amel pour la café turque , c\'était un délice',
      image: Avatar4,
      name: 'Jihene Bayar',
    },
    {
      message:
        '-Très bonne ambiance familiale pendant ce mois sacré..plats vraiment succulent; et avec la décoration artisanale je me suis senti au Maroc. Service et personnel à la hauteur. bonne continuation',
      image: Avatar5,
      name: 'Bouchra AB',
    },
  ],
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 11AM - 11PM daily, or book online with OpenTable. Reservations required for parties of 4 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

export const newsletterData = {
  title: 'join our newsletter',
  subtitle: 'Get latest news & updates in your inbox.',
  placeholder: 'Subscribe our delicious dishes',
  btnText: 'subscribe now',
};

export const footerData = {
  contact: {
    title: 'contact location',
    address: '5230 Jean-Talon E Saint-Leonard Montreal, QC H1S1L1 ',
    phone: '(514) 254-2222',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'Monday - Sunday',
        hours: '11:00 AM - 11:00 PM',
      },

    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: 'https://www.facebook.com/Amirresto2016', icon: <FaFacebookF /> },
      { href: 'https://www.instagram.com/amircaferesto/', icon: <FaInstagram /> },
      { href: 'https://www.ubereats.com/ca/store/amir-jean-talon/Fu98HXjsQWWlVANcyl0j0A?utm_campaign=place-action-link&utm_medium=organic&utm_source=google', icon: <FaUber />},
    ],
  },
};

export const slides = [
  {
    title: "Dessert",
    subtitle: "Baklava",
    description: "Pâte phyllo croustillante remplies d'un mélange sucré et noisette, arrosées de sirop de miel.",
    image: baklawa
  },
  {
    title: "Menu",
    subtitle: "Poulet Fumé",
    description: "Poulet juteux et tendre à la peau croustillante, infusé d'épices libanaises aromatiques.",
    image: chicken
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: shawarma
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: shawarma1
  },
  {
    title: "Menu",
    subtitle: "Couscous",
    description: "Des perles moelleuses de semoule, regorgeant de saveurs méditerranéennes.",
    image: couscous
  },
  {
    title: "Entrée",
    subtitle: "Falafel",
    description: "Croustillant à l'extérieur, moelleux et savoureux à l'intérieur, fait de pois chiches, d'herbes et d'épices.",
    image: falafel
  },
  {
    title: "",
    subtitle: "",
    description: "Un goût délicieux et épicé qui fond dans la bouche, accompagné d'une sauce tahini crémeuse.",
    image: falafels
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: forkpotato
  },
  {
    title: "Entrée",
    subtitle: "Frites au Four",
    description: "Des frites croustillantes à l'extérieur et moelleuses à l'intérieur, assaisonnées d'herbes et d'épices méditerranéennes.",
    image: fries
  },
  {
    title: "Entrée",
    subtitle: "Frites",
    description: "L'accompagnement parfait pour compléter votre plat principal, ajoutant une texture et une saveur supplémentaires.",
    image: fries1
  },
  {
    title: "Entrée",
    subtitle: "",
    description: "Des bâtonnets de pommes de terre dorés et croustillants, servis avec une sauce maison.",
    image: fry
  },
  {
    title: "",
    subtitle: "Ensemble",
    description: "Profitez d'un repas qui rassemble, avec des plats authentiques et délicieux, pour un moment de partage inoubliable.",
    image: heart
  },
  {
    title: "Meu",
    subtitle: "Famille",
    description: "Partagez un assortiment de plats savoureux avec vos amis et votre famille, pour une expérience culinaire conviviale.",
    image: items
  },
  {
    title: "Entrée",
    subtitle: "Patate",
    description: "Des patates douces grillées à la perfection, épicées avec des saveurs méditerranéennes et sucrées avec du miel.",
    image: potato
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: salad
  },
  {
    title: "Entrée",
    subtitle: "Salade",
    description: "Une salade fraîche et croquante, pleine de saveurs, pour ajouter de la couleur et de la vitalité à votre assiette..",
    image: salad3
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: salad1
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: salad2
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: plate
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: plate1
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: plate3
  },
  {
    title: "Sandwich",
    subtitle: "Wrap",
    description: "Des lamelles de viande marinées et grillées à la perfection, enveloppées dans un pain pita moelleux, pour un plat traditionnel libanais.",
    image: wrap
  },
  {
    title: "Sandwich",
    subtitle: "Wrap",
    description: "Des saveurs intenses et épicées, mélangées avec des légumes frais et de la sauce tahini, pour un shawarma irrésistible.",
    image: wrap1
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: plate4
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: plate5
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: plates
  },
  {
    title: "Entrée",
    subtitle: "Patates Douces",
    description: "Des patates douces croustillantes, assaisonnées d'épices et servies avec une sauce douce et crémeuse, pour un accompagnement parfait.",
    image: sweetpotatos
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: sweetpotatos1
  },
  {
    title: "",
    subtitle: "Ensemble",
    description: "Partagez un repas copieux avec vos proches, dans une ambiance chaleureuse et conviviale, pour créer des souvenirs inoubliables.",
    image: veggiecross
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: plates6
  },
  {
    title: "",
    subtitle: "Wrap Box",
    description: "Un délicieux assortiment de wraps savoureux, garnis de légumes frais et de viandes grillées, pour un repas facile à emporter!!!",
    image: wrapbox
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: wrap2
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: wrap3
  },

];

