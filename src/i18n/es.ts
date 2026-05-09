import type { ca } from './ca';

export const es: typeof ca = {
  meta: {
    title: 'La Patum · Tapas & Más | Cocina casera en Vilanova i la Geltrú',
    description:
      'Restaurante La Patum en Vilanova i la Geltrú. Cocina mediterránea con toques ecuatorianos, arroces de autor, tapas originales y postres caseros. Reservas: 938 151 893.',
  },
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    specialties: 'Especialidades',
    menu: 'Carta',
    gallery: 'Galería',
    contact: 'Contacto',
    reserve: 'Reserva',
  },
  hero: {
    location: 'Vilanova i la Geltrú',
    tagline: 'Tapas & Más',
    intro:
      'Cocina casera con raíces mediterráneas y toques de Ecuador. Arroces de autor, tapas originales y postres hechos en casa, en el corazón del Passeig del Carme.',
    cta: 'Reservar mesa',
    secondaryCta: 'Ver la carta',
    stats: {
      hours: { value: '11—17h', label: 'Cada día' },
      tuesday: { value: 'Mar', label: 'Cerrado' },
      summer: { value: 'Verano', label: 'Noches vie—dom' },
      tapas: { value: '+25', label: 'Tapas a la carta' },
    },
    scroll: 'Sigue leyendo',
  },
  about: {
    eyebrow: 'Nuestra historia',
    titleLeft: 'Donde la cocina',
    titleHighlight: 'arde',
    titleRight: 'con pasión.',
    p1Pre: 'En ',
    brand: 'La Patum',
    p1Post:
      ' celebramos el fuego, la tradición y el placer de compartir mesa. Cocina casera con raíces',
    p1Italic1: 'mediterráneas',
    p1MidA: 'y toques bien marcados de',
    p1Italic2: 'cocina de Ecuador',
    p1End:
      ', donde cada plato lleva un equilibrio pensado y la calidez de un servicio cercano.',
    p2:
      'Estamos en el Passeig del Carme de Vilanova i la Geltrú: un espacio abierto al mediodía para disfrutar de arroces de autor, tapas originales y postres caseros. Cuando llega el verano, encendemos también las noches.',
    badge: { since: 'Desde', year: '2008' },
    pillars: [
      { icon: '🔥', title: 'Producto', text: 'Mercado fresco, pescado y carnes del Berguedà.' },
      { icon: '🍽️', title: 'Equilibrio', text: 'Menús pensados, postres caseros.' },
      { icon: '🌶️', title: 'Mestizaje', text: 'Mediterránea con toques ecuatorianos.' },
      { icon: '🎉', title: 'Catering', text: 'Bodas, eventos y celebraciones.' },
    ],
  },
  specialties: {
    eyebrow: 'Especialidades',
    titleLeft: 'Sabores que',
    titleHighlight: 'encienden',
    titleRight: 'la mesa.',
    intro:
      'Una cocina viva, donde conviven la cuna mediterránea y el alma ecuatoriana, con productos elegidos uno a uno.',
    items: [
      { icon: '🥘', title: 'Arroces de autor', desc: 'Caldosos, secos o melosos, siempre con el toque justo de socarrat e ingredientes de temporada.' },
      { icon: '🦐', title: 'Pescado y marisco', desc: 'Producto fresco del Mediterráneo, trabajado con sencillez para dejar hablar al sabor.' },
      { icon: '🥩', title: 'Carnes del Berguedà', desc: 'Carnes escogidas de montaña, cocinadas a fuego lento y servidas como mandan los clásicos.' },
      { icon: '🌮', title: 'Tapas originales', desc: 'Empanadillas colombianas, ceviches, buñuelos de bacalao y pequeños platos para compartir.' },
      { icon: '🍅', title: 'Cocina de mercado', desc: 'La pizarra cambia cada semana según lo que nos trae la mañana del puerto y la huerta.' },
      { icon: '🍰', title: 'Postres caseros', desc: 'Acabados hechos en casa cada día: cremas, pasteles y delicatessen de nuestro obrador.' },
    ],
  },
  menu: {
    eyebrow: 'Nuestra carta',
    titleLeft: 'Una',
    titleHighlight: 'selección',
    titleRight: 'para compartir.',
    intro:
      'Una muestra de nuestros platos. La carta cambia según mercado y temporada, así que en la pizarra siempre encontrarás alguna sorpresa.',
    sections: {
      tapas: { title: 'Tapas', sub: 'para compartir' },
      mains: { title: 'Principales', sub: 'arroces & brasa' },
      desserts: { title: 'Postres caseros', sub: 'hechos en casa' },
    },
    tapas: [
      { name: 'Buñuelos de bacalao', price: '8,50€', desc: 'Crujientes por fuera, melosos por dentro. Alioli suave y piel de limón.' },
      { name: 'Empanadillas colombianas', price: '7,90€', desc: 'Masa de maíz, relleno del día y salsa picante casera.' },
      { name: 'Ceviche del chef', price: '12,50€', desc: 'Pescado blanco del día, lima, cebolla morada, cilantro y maíz tostado.' },
      { name: 'Croquetas de la abuela', price: '6,90€', desc: 'Bechamel bien trabajada, jamón curado y pan fresco rallado.' },
    ],
    mains: [
      { name: 'Arroz meloso de marisco', price: '19,50€', desc: 'Fumet propio, cigalas, gambas y una chispa de azafrán.' },
      { name: 'Arroz seco con costilla ibérica', price: '17,90€', desc: 'Socarrat, setas y un punto de romero quemado.' },
      { name: 'Suquet de pescado', price: '21,00€', desc: 'Rape, gambas y patata confitada. Receta de toda la vida.' },
      { name: 'Entrecot del Berguedà', price: '23,50€', desc: 'A la brasa, sal en escamas, patatas a lo pobre y pimientos.' },
    ],
    desserts: [
      { name: 'Crema catalana flameada en mesa', price: '5,50€' },
      { name: 'Pastel de chocolate y naranja', price: '6,00€' },
      { name: 'Coulant de avellana del Berguedà', price: '6,50€' },
      { name: 'Espuma de mango y maracuyá', price: '5,90€' },
    ],
    note:
      'Para alérgenos e intolerancias, pregunta a nuestro personal. Disponemos de opciones vegetarianas y sin gluten.',
  },
  gallery: {
    eyebrow: 'Galería',
    titleLeft: 'El',
    titleHighlight: 'calor',
    titleRight: 'del local.',
    intro: 'Una muestra de lo que cocinamos y de lo que vivirás en nuestra mesa.',
    tiles: [
      { title: 'Hamburguesa de la casa', subtitle: 'Plato de carta' },
      { title: 'Ensalada con burrata', subtitle: 'Fresca y de mercado' },
      { title: 'Encebollado de pescado', subtitle: 'Receta ecuatoriana' },
      { title: 'Pastel casero', subtitle: 'Obrador propio' },
      { title: 'Postre con merengue', subtitle: 'Hecho en casa' },
    ],
    foot: 'Síguenos en Instagram para ver nuestras últimas creaciones.',
  },
  contact: {
    eyebrow: 'Reservas & contacto',
    titleLeft: 'Ven a',
    titleHighlight: 'encender',
    titleRight: 'mesa.',
    intro:
      'Para reservar, llámanos. Para eventos y catering, envíanos un mensaje y te hacemos una propuesta a medida.',
    blocks: {
      address: { title: 'Dónde estamos', line1: 'Passeig del Carme, 46', line2: '08800 Vilanova i la Geltrú' },
      phones: { title: 'Reservas' },
      hours: {
        title: 'Horario',
        rows: [
          { left: 'Lunes – Domingo', right: '11:00 – 17:00' },
          { left: 'Martes', right: 'Cerrado' },
          { left: 'Verano (15/05 – 30/08)', right: 'Vie – Dom noches' },
        ],
      },
    },
    cta1: 'Llama para reservar',
    cta2: 'Cómo llegar',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      phone: 'Teléfono',
      phonePlaceholder: '600 000 000',
      guests: 'Comensales',
      guestsPlaceholder: '2',
      date: 'Fecha preferida',
      message: 'Mensaje',
      messagePlaceholder: 'Alergias, ocasión especial, catering…',
      submit: 'Enviar petición',
      success: '¡Gracias! Te llamamos enseguida.',
      foot: 'Te responderemos lo antes posible para confirmar la reserva.',
    },
  },
  footer: {
    desc:
      'Cocina casera mediterránea con toques ecuatorianos en el corazón de Vilanova i la Geltrú. El fuego, la tradición y el placer de compartir mesa.',
    nav: 'Navegación',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
    motto: 'Fuego · Tradición · Sabor',
    poweredBy: 'Powered by',
  },
};
