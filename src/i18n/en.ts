import type { ca } from './ca';

export const en: typeof ca = {
  meta: {
    title: 'La Patum · Tapas & More | Home cooking in Vilanova i la Geltrú',
    description:
      'La Patum restaurant in Vilanova i la Geltrú. Mediterranean cuisine with Ecuadorian touches, signature rice dishes, original tapas and homemade desserts. Book: +34 938 151 893.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    specialties: 'Specialties',
    menu: 'Menu',
    gallery: 'Gallery',
    contact: 'Contact',
    reserve: 'Book',
  },
  hero: {
    location: 'Vilanova i la Geltrú',
    tagline: 'Tapas & More',
    intro:
      'Home cooking with Mediterranean roots and Ecuadorian touches. Signature rice dishes, original tapas and homemade desserts, in the heart of Passeig del Carme.',
    cta: 'Book a table',
    secondaryCta: 'See the menu',
    stats: {
      hours: { value: '11—17h', label: 'Every day' },
      tuesday: { value: 'Tue', label: 'Closed' },
      summer: { value: 'Summer', label: 'Fri—Sun nights' },
      tapas: { value: '+25', label: 'Tapas on the menu' },
    },
    scroll: 'Keep reading',
  },
  about: {
    eyebrow: 'Our story',
    titleLeft: 'Where the kitchen',
    titleHighlight: 'burns',
    titleRight: 'with passion.',
    p1Pre: 'At ',
    brand: 'La Patum',
    p1Post:
      ' we celebrate fire, tradition and the joy of sharing a table. Home cooking with',
    p1Italic1: 'Mediterranean',
    p1MidA: 'roots and clear notes of',
    p1Italic2: 'Ecuadorian cuisine',
    p1End:
      ', where every dish carries thoughtful balance and the warmth of close service.',
    p2:
      'You\'ll find us on Passeig del Carme in Vilanova i la Geltrú: an open space at midday for signature rice dishes, original tapas and homemade desserts. When summer arrives, we light up the nights too.',
    badge: { since: 'Since', year: '2008' },
    pillars: [
      { icon: '🔥', title: 'Product', text: 'Fresh market, fish and meat from Berguedà.' },
      { icon: '🍽️', title: 'Balance', text: 'Thoughtful menus, homemade desserts.' },
      { icon: '🌶️', title: 'Crossroads', text: 'Mediterranean with Ecuadorian touches.' },
      { icon: '🎉', title: 'Catering', text: 'Weddings, events and celebrations.' },
    ],
  },
  specialties: {
    eyebrow: 'Specialties',
    titleLeft: 'Flavours that',
    titleHighlight: 'light up',
    titleRight: 'the table.',
    intro:
      'A living kitchen where the Mediterranean cradle and Ecuadorian soul meet, with hand-picked ingredients.',
    items: [
      { icon: '🥘', title: 'Signature rice', desc: 'Brothy, dry or creamy — always with the right hint of socarrat and seasonal ingredients.' },
      { icon: '🦐', title: 'Fish & seafood', desc: 'Fresh Mediterranean produce, simply prepared so the flavour speaks for itself.' },
      { icon: '🥩', title: 'Berguedà meats', desc: 'Hand-picked mountain meats, slow-cooked and served the classic way.' },
      { icon: '🌮', title: 'Original tapas', desc: 'Colombian empanadas, ceviches, cod fritters and small plates to share.' },
      { icon: '🍅', title: 'Market cuisine', desc: 'Our blackboard changes weekly with what the harbour and garden bring.' },
      { icon: '🍰', title: 'Homemade desserts', desc: 'Daily finishes from our own bakery: creams, cakes and small delicacies.' },
    ],
  },
  menu: {
    eyebrow: 'Our menu',
    titleLeft: 'A',
    titleHighlight: 'selection',
    titleRight: 'to share.',
    intro:
      'A taste of our dishes. The menu changes with the market and season, so the blackboard always has a surprise.',
    sections: {
      tapas: { title: 'Tapas', sub: 'to share' },
      mains: { title: 'Mains', sub: 'rice & grill' },
      desserts: { title: 'Homemade desserts', sub: 'made in-house' },
    },
    tapas: [
      { name: 'Cod fritters', price: '€8.50', desc: 'Crispy outside, soft inside. Mild aioli and lemon zest.' },
      { name: 'Colombian empanadas', price: '€7.90', desc: 'Corn dough, daily filling and homemade hot sauce.' },
      { name: 'Chef\'s ceviche', price: '€12.50', desc: 'White fish of the day, lime, red onion, coriander and toasted corn.' },
      { name: 'Grandma\'s croquettes', price: '€6.90', desc: 'Well-worked béchamel, cured ham and fresh breadcrumbs.' },
    ],
    mains: [
      { name: 'Creamy seafood rice', price: '€19.50', desc: 'House fumet, langoustines, prawns and a hint of saffron.' },
      { name: 'Dry rice with Iberian rib', price: '€17.90', desc: 'Socarrat, mushrooms and a touch of charred rosemary.' },
      { name: 'Fish suquet', price: '€21.00', desc: 'Monkfish, prawns and confit potato. The traditional recipe.' },
      { name: 'Berguedà rib-eye', price: '€23.50', desc: 'Grilled, sea salt flakes, smashed potatoes and peppers.' },
    ],
    desserts: [
      { name: 'Crema catalana flambéed at table', price: '€5.50' },
      { name: 'Chocolate & orange cake', price: '€6.00' },
      { name: 'Berguedà hazelnut coulant', price: '€6.50' },
      { name: 'Mango & passion fruit foam', price: '€5.90' },
    ],
    note:
      'For allergens and intolerances, please ask our team. We have vegetarian and gluten-free options.',
  },
  gallery: {
    eyebrow: 'Gallery',
    titleLeft: 'The',
    titleHighlight: 'warmth',
    titleRight: 'of the place.',
    intro: 'A glimpse of what we cook and what you\'ll experience at our table.',
    tiles: [
      { title: 'House burger', subtitle: 'On the menu' },
      { title: 'Burrata salad', subtitle: 'Fresh from market' },
      { title: 'Fish encebollado', subtitle: 'Ecuadorian recipe' },
      { title: 'Homemade cake', subtitle: 'In-house bakery' },
      { title: 'Meringue dessert', subtitle: 'Made at home' },
    ],
    foot: 'Follow us on Instagram for our latest creations.',
  },
  contact: {
    eyebrow: 'Bookings & contact',
    titleLeft: 'Come',
    titleHighlight: 'light up',
    titleRight: 'a table.',
    intro:
      'To book, give us a call. For events and catering, send us a message and we\'ll tailor a proposal.',
    blocks: {
      address: { title: 'Where we are', line1: 'Passeig del Carme, 46', line2: '08800 Vilanova i la Geltrú' },
      phones: { title: 'Bookings' },
      hours: {
        title: 'Hours',
        rows: [
          { left: 'Monday – Sunday', right: '11:00 – 17:00' },
          { left: 'Tuesday', right: 'Closed' },
          { left: 'Summer (15/05 – 30/08)', right: 'Fri – Sun nights' },
        ],
      },
    },
    cta1: 'Call to book',
    cta2: 'Get directions',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      phone: 'Phone',
      phonePlaceholder: '+34 600 000 000',
      guests: 'Guests',
      guestsPlaceholder: '2',
      date: 'Preferred date',
      message: 'Message',
      messagePlaceholder: 'Allergies, special occasion, catering…',
      submit: 'Send request',
      success: 'Thanks! We\'ll call you back shortly.',
      foot: 'We\'ll reply as soon as possible to confirm your booking.',
    },
  },
  footer: {
    desc:
      'Mediterranean home cooking with Ecuadorian touches in the heart of Vilanova i la Geltrú. Fire, tradition and the joy of sharing a table.',
    nav: 'Navigation',
    contact: 'Contact',
    rights: 'All rights reserved.',
    motto: 'Fire · Tradition · Flavour',
    poweredBy: 'Powered by',
  },
};
