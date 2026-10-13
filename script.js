/* ============================================================
   NEW ATHLETIC CLOTHES — tienda en un solo archivo de JavaScript
   1) CONFIGURACIÓN  2) PRODUCTOS  3) TEXTOS LEGALES  4) LÓGICA
   Para editar la tienda normalmente solo tocas las secciones 1, 2 y 3.
   ============================================================ */

/* ============================================================
   1) CONFIGURACIÓN — contacto, mensajes, menús y banners
   ============================================================ */
const SITE = {
  nombre: "New Athletic Clothes",
  whatsapp: "573241068362", // con indicativo, sin "+" ni espacios
  whatsappVisible: "+57 324 106 8362",
  mensajeWhatsapp: "Hola New Athletic, vengo de la web",
  redes: {
    instagram: "https://www.instagram.com/nathletic.c/",
    facebook: "", // vacío = no se muestra el ícono
    tiktok: "",
  },
  marquesina: ["ENVÍOS A TODO COLOMBIA", "¡GRACIAS POR ELEGIRNOS!", "PRODUCTOS ORIGINALES", "NEW ATHLETIC CLOTHES"],
  mediosPago: ["Transferencia bancaria", "Nequi", "Daviplata", "Contraentrega"],
};

// Banners grandes del inicio (proporción 3:1, ej. 2560×853). imagen: "" = recuadro gris
const HERO = [
  { imagen: "", etiqueta: "BANNER 1 · 2560 × 853", alt: "Suplementación con actitud", link: "#/ofertas" },
  { imagen: "", etiqueta: "BANNER 2 · 2560 × 853", alt: "Productos originales", link: "#/categoria/proteinas-limpias" },
];

// Franjas negras con botón "Clic aquí"
const FRANJAS = [
  { texto: "¿DUDAS CON TU SUPLEMENTO? ESCRÍBENOS", destino: "whatsapp", imagen: "" },
  { texto: "SÍGUENOS EN INSTAGRAM @NATHLETIC.C", destino: "instagram", imagen: "" },
];

// Filas de 3 imágenes verticales (4:5, ej. 800×1000)
const FILA_1 = [
  { imagen: "", etiqueta: "PROTEÍNAS", link: "#/categoria/proteinas-limpias" },
  { imagen: "", etiqueta: "CREATINAS", link: "#/categoria/creatinas" },
  { imagen: "", etiqueta: "PRE-ENTRENOS", link: "#/categoria/pre-entrenos" },
];
const FILA_2 = [
  { imagen: "", etiqueta: "COMBOS", link: "#/combos" },
  { imagen: "", etiqueta: "OFERTAS", link: "#/ofertas" },
  { imagen: "", etiqueta: "MULTIVITAMÍNICOS", link: "#/categoria/multivitaminicos" },
];

const SECCIONES = {
  masVendidos: { titulo: "SUPLEMENTOS MÁS VENDIDOS", limite: 20 },
  ofertas: { titulo: "SUPLEMENTOS EN OFERTA", limite: 12 },
  nuevos: { titulo: "NUEVOS SUPLEMENTOS", porPagina: 20 },
};

const CATEGORIAS = [
  { slug: "proteinas-limpias", nombre: "Proteínas limpias" },
  { slug: "hipercaloricos", nombre: "Hipercalóricos" },
  { slug: "pre-entrenos", nombre: "Pre-entrenos" },
  { slug: "quemadores", nombre: "Quemadores" },
  { slug: "aminoacidos", nombre: "Aminoácidos" },
  { slug: "creatinas", nombre: "Creatinas" },
  { slug: "glutaminas", nombre: "Glutaminas" },
  { slug: "multivitaminicos", nombre: "Multivitamínicos" },
  { slug: "snacks", nombre: "Snacks" },
  { slug: "termos-shakers", nombre: "Termos / Shakers" },
  { slug: "precursores-naturales", nombre: "Precursores naturales" },
];

// Marcas ficticias: reemplázalas por las tuyas
const MARCAS = [
  { slug: "titan-labs", nombre: "Titan Labs" },
  { slug: "andes-nutrition", nombre: "Andes Nutrition" },
  { slug: "iron-core", nombre: "Iron Core" },
  { slug: "pura-fuerza", nombre: "Pura Fuerza" },
  { slug: "volt-sports", nombre: "Volt Sports" },
  { slug: "nativa-fit", nombre: "Nativa Fit" },
  { slug: "max-pulse", nombre: "Max Pulse" },
  { slug: "cumbre-pro", nombre: "Cumbre Pro" },
  { slug: "nac-essentials", nombre: "NAC Essentials" },
];

const MENU = [
  { label: "Inicio", link: "#/" },
  { label: "Categorías", mega: "categorias" },
  { label: "Marcas", mega: "marcas" },
  { label: "Combos", link: "#/combos" },
  { label: "Ofertas", link: "#/ofertas" },
  { label: "Mi Cuenta", link: "#/mi-cuenta", activo: false }, // actívalo cuando exista login
];

/* ============================================================
   2) PRODUCTOS — precios en pesos sin puntos (139000 = $139.000)
   imagenes: ["fotos/mi-producto.webp"]  ·  [] = recuadro gris
   categoria/marca: usa los "slug" de arriba (o "combos")
   Todos estos productos son DE EJEMPLO: bórralos al cargar los tuyos.
   ============================================================ */
const PRODUCTOS = [
  { id: "p001", nombre: "Whey Isolate Demo 5 lb", slug: "whey-isolate-demo-5lb", categoria: "proteinas-limpias", marca: "titan-labs",
    descripcion: "Proteína aislada de suero de rápida absorción. Ideal después de entrenar para apoyar tu recuperación muscular.",
    imagenes: [], precio: 420000, precioOferta: 393000, stock: 10, masVendido: true, ejemplo: true,
    variantes: [
      { id: "vainilla", tipo: "sabor", nombre: "Vainilla", precio: 420000, precioOferta: 393000, stock: 6 },
      { id: "chocolate", tipo: "sabor", nombre: "Chocolate", precio: 420000, precioOferta: 393000, stock: 4 },
      { id: "fresa", tipo: "sabor", nombre: "Fresa", precio: 420000, precioOferta: 393000, stock: 0 },
    ] },
  { id: "p002", nombre: "Whey Gold Demo", slug: "whey-gold-demo", categoria: "proteinas-limpias", marca: "andes-nutrition",
    descripcion: "Mezcla de proteínas de suero con gran sabor. Disponible en varios tamaños.",
    imagenes: [], precio: 256000, stock: 15, masVendido: true, nuevo: true, ejemplo: true,
    variantes: [
      { id: "2lb", tipo: "tamaño", nombre: "2 lb", precio: 256000, stock: 8 },
      { id: "5lb", tipo: "tamaño", nombre: "5 lb", precio: 465000, stock: 5 },
      { id: "10lb", tipo: "tamaño", nombre: "10 lb", precio: 714000, stock: 2 },
    ] },
  { id: "p003", nombre: "Proteína Hidrolizada Demo 3 lb", slug: "proteina-hidrolizada-demo-3lb", categoria: "proteinas-limpias", marca: "iron-core",
    descripcion: "Proteína hidrolizada de absorción ultra rápida, baja en grasa y carbohidratos.",
    imagenes: [], precio: 480000, precioOferta: 444000, stock: 7, masVendido: true, ejemplo: true },
  { id: "p004", nombre: "Proteína de Carne Demo 4 lb", slug: "proteina-de-carne-demo-4lb", categoria: "proteinas-limpias", marca: "pura-fuerza",
    descripcion: "Proteína aislada de carne, sin lactosa. Una alternativa para estómagos sensibles.",
    imagenes: [], precio: 314000, precioOferta: 287000, stock: 3, masVendido: true, ejemplo: true },
  { id: "p005", nombre: "Proteína Vegana Demo 1.5 lb", slug: "proteina-vegana-demo-1-5lb", categoria: "proteinas-limpias", marca: "nativa-fit",
    descripcion: "Proteína vegetal de arveja y arroz, endulzada con stevia.",
    imagenes: [], precio: 99000, stock: 12, nuevo: true, ejemplo: true },
  { id: "p006", nombre: "Whey Elite Demo 5 lb", slug: "whey-elite-demo-5lb", categoria: "proteinas-limpias", marca: "cumbre-pro",
    descripcion: "Proteína concentrada y aislada con enzimas digestivas.",
    imagenes: [], precio: 385000, stock: 0, masVendido: true, ejemplo: true },
  { id: "p007", nombre: "Mass Gainer Demo 10 lb", slug: "mass-gainer-demo-10lb", categoria: "hipercaloricos", marca: "iron-core",
    descripcion: "Hipercalórico para aumentar masa muscular y peso de forma controlada.",
    imagenes: [], precio: 245000, precioOferta: 237000, stock: 9, masVendido: true, ejemplo: true },
  { id: "p008", nombre: "Mega Volumen Demo 6 lb", slug: "mega-volumen-demo-6lb", categoria: "hipercaloricos", marca: "titan-labs",
    descripcion: "Carbohidratos complejos y proteína para tus días de volumen.",
    imagenes: [], precio: 189000, stock: 6, nuevo: true, ejemplo: true },
  { id: "p009", nombre: "Pre-Entreno Explosivo Demo 30 serv.", slug: "pre-entreno-explosivo-demo-30", categoria: "pre-entrenos", marca: "volt-sports",
    descripcion: "Energía, enfoque y bombeo para tus entrenamientos más intensos.",
    imagenes: [], precio: 155000, precioOferta: 130000, stock: 8, masVendido: true, nuevo: true, ejemplo: true,
    variantes: [
      { id: "frutos-rojos", tipo: "sabor", nombre: "Frutos rojos", precio: 155000, precioOferta: 130000, stock: 5 },
      { id: "limonada", tipo: "sabor", nombre: "Limonada", precio: 155000, precioOferta: 130000, stock: 3 },
    ] },
  { id: "p010", nombre: "Pre-Entreno Original Demo", slug: "pre-entreno-original-demo", categoria: "pre-entrenos", marca: "max-pulse",
    descripcion: "El clásico pre-entreno, ahora en dos presentaciones.",
    imagenes: [], precio: 118000, stock: 14, masVendido: true, nuevo: true, ejemplo: true,
    variantes: [
      { id: "30", tipo: "tamaño", nombre: "30 servicios", precio: 118000, stock: 10 },
      { id: "60", tipo: "tamaño", nombre: "60 servicios", precio: 198000, stock: 4 },
    ] },
  { id: "p011", nombre: "Pre-Entreno Sin Estimulantes Demo", slug: "pre-entreno-sin-estimulantes-demo", categoria: "pre-entrenos", marca: "nac-essentials",
    descripcion: "Bombeo y rendimiento sin cafeína, para entrenar de noche.",
    imagenes: [], precio: 129000, stock: 0, nuevo: true, ejemplo: true },
  { id: "p012", nombre: "Quemador Termogénico Demo 60 caps.", slug: "quemador-termogenico-demo-60", categoria: "quemadores", marca: "volt-sports",
    descripcion: "Fórmula termogénica para apoyar tu plan de definición.",
    imagenes: [], precio: 110000, precioOferta: 95000, stock: 11, masVendido: true, ejemplo: true },
  { id: "p013", nombre: "L-Carnitina Líquida Demo", slug: "l-carnitina-liquida-demo", categoria: "quemadores", marca: "pura-fuerza",
    descripcion: "L-carnitina líquida de rápida absorción.",
    imagenes: [], precio: 85000, stock: 7, nuevo: true, ejemplo: true },
  { id: "p014", nombre: "BCAA 2:1:1 Demo 400 g", slug: "bcaa-demo-400g", categoria: "aminoacidos", marca: "andes-nutrition",
    descripcion: "Aminoácidos de cadena ramificada para tu recuperación.",
    imagenes: [], precio: 120000, precioOferta: 105000, stock: 6, masVendido: true, nuevo: true, ejemplo: true },
  { id: "p015", nombre: "EAA Recovery Demo 30 serv.", slug: "eaa-recovery-demo-30", categoria: "aminoacidos", marca: "cumbre-pro",
    descripcion: "Aminoácidos esenciales con electrolitos.",
    imagenes: [], precio: 135000, stock: 5, nuevo: true, ejemplo: true },
  { id: "p016", nombre: "Creatina Monohidratada Demo", slug: "creatina-monohidratada-demo", categoria: "creatinas", marca: "titan-labs",
    descripcion: "Creatina micronizada 100 % pura. Fuerza y potencia en cada repetición.",
    imagenes: [], precio: 139000, stock: 20, masVendido: true, ejemplo: true,
    variantes: [
      { id: "300g", tipo: "tamaño", nombre: "300 g", precio: 139000, stock: 12 },
      { id: "400g", tipo: "tamaño", nombre: "400 g", precio: 147000, stock: 8 },
    ] },
  { id: "p017", nombre: "Creatina Demo 500 g", slug: "creatina-demo-500g", categoria: "creatinas", marca: "iron-core",
    descripcion: "Creatina monohidratada sin sabor, se mezcla fácil con cualquier bebida.",
    imagenes: [], precio: 118000, stock: 15, masVendido: true, nuevo: true, ejemplo: true },
  { id: "p018", nombre: "Gomitas de Creatina Demo 120 und.", slug: "gomitas-de-creatina-demo-120", categoria: "creatinas", marca: "max-pulse",
    descripcion: "Tu dosis diaria de creatina en gomitas sin azúcar.",
    imagenes: [], precio: 125000, stock: 4, nuevo: true, ejemplo: true },
  { id: "p019", nombre: "Creatina Gold Demo 600 g", slug: "creatina-gold-demo-600g", categoria: "creatinas", marca: "nac-essentials",
    descripcion: "Creatina con niacina para mejor asimilación.",
    imagenes: [], precio: 116000, precioOferta: 104000, stock: 9, masVendido: true, nuevo: true, ejemplo: true },
  { id: "p020", nombre: "Glutamina Demo 300 g", slug: "glutamina-demo-300g", categoria: "glutaminas", marca: "andes-nutrition",
    descripcion: "L-glutamina pura para apoyar tu sistema inmune y tu recuperación.",
    imagenes: [], precio: 89000, stock: 10, masVendido: true, nuevo: true, ejemplo: true },
  { id: "p021", nombre: "Multivitamínico Demo 120 caps.", slug: "multivitaminico-demo-120", categoria: "multivitaminicos", marca: "nativa-fit",
    descripcion: "Vitaminas y minerales esenciales para tu día a día.",
    imagenes: [], precio: 72000, stock: 14, masVendido: true, nuevo: true, ejemplo: true },
  { id: "p022", nombre: "Omega 3 Demo 120 caps.", slug: "omega-3-demo-120", categoria: "multivitaminicos", marca: "pura-fuerza",
    descripcion: "EPA y DHA de alta pureza.",
    imagenes: [], precio: 75000, stock: 9, masVendido: true, nuevo: true, ejemplo: true },
  { id: "p023", nombre: "Vitamina D3 + K2 Demo 60 perlas", slug: "vitamina-d3-k2-demo-60", categoria: "multivitaminicos", marca: "cumbre-pro",
    descripcion: "Vitamina D3 y K2 para huesos fuertes.",
    imagenes: [], precio: 77000, stock: 0, nuevo: true, ejemplo: true },
  { id: "p024", nombre: "Barra de Proteína Demo x12", slug: "barra-de-proteina-demo-x12", categoria: "snacks", marca: "nac-essentials",
    descripcion: "Caja de 12 barras con 20 g de proteína cada una.",
    imagenes: [], precio: 96000, precioOferta: 84000, stock: 12, masVendido: true, nuevo: true, ejemplo: true,
    variantes: [
      { id: "chocolate", tipo: "sabor", nombre: "Chocolate", precio: 96000, precioOferta: 84000, stock: 6 },
      { id: "mani", tipo: "sabor", nombre: "Maní", precio: 96000, precioOferta: 84000, stock: 6 },
    ] },
  { id: "p025", nombre: "Bebida Energética Demo x12", slug: "bebida-energetica-demo-x12", categoria: "snacks", marca: "volt-sports",
    descripcion: "Paquete de 12 latas sin azúcar.",
    imagenes: [], precio: 168000, stock: 5, nuevo: true, ejemplo: true },
  { id: "p026", nombre: "Shaker NAC Demo 700 ml", slug: "shaker-nac-demo-700ml", categoria: "termos-shakers", marca: "nac-essentials",
    descripcion: "Shaker negro con logo New Athletic Clothes y compartimento para polvo.",
    imagenes: [], precio: 35000, stock: 25, masVendido: true, nuevo: true, ejemplo: true },
  { id: "p027", nombre: "Termo Acero Demo 1 L", slug: "termo-acero-demo-1l", categoria: "termos-shakers", marca: "nac-essentials",
    descripcion: "Termo de acero inoxidable que mantiene tu bebida fría por 24 horas.",
    imagenes: [], precio: 65000, stock: 8, nuevo: true, ejemplo: true },
  { id: "p028", nombre: "Tribulus Demo 90 caps.", slug: "tribulus-demo-90", categoria: "precursores-naturales", marca: "nativa-fit",
    descripcion: "Extracto natural de Tribulus terrestris.",
    imagenes: [], precio: 68000, stock: 6, nuevo: true, ejemplo: true },
  { id: "p029", nombre: "Ashwagandha Demo 60 caps.", slug: "ashwagandha-demo-60", categoria: "precursores-naturales", marca: "andes-nutrition",
    descripcion: "Adaptógeno natural para tu bienestar.",
    imagenes: [], precio: 72000, precioOferta: 64000, stock: 7, nuevo: true, ejemplo: true },
  { id: "p030", nombre: "Combo Volumen Demo", slug: "combo-volumen-demo", categoria: "combos", marca: "titan-labs",
    descripcion: "Mass Gainer 10 lb + Creatina 300 g + Shaker de regalo.",
    imagenes: [], precio: 410000, precioOferta: 369000, stock: 4, masVendido: true, ejemplo: true },
  { id: "p031", nombre: "Combo Definición Demo", slug: "combo-definicion-demo", categoria: "combos", marca: "volt-sports",
    descripcion: "Whey Isolate 2 lb + Quemador 60 caps. + L-Carnitina.",
    imagenes: [], precio: 390000, precioOferta: 349000, stock: 3, masVendido: true, nuevo: true, ejemplo: true },
  { id: "p032", nombre: "Combo Principiante Demo", slug: "combo-principiante-demo", categoria: "combos", marca: "nac-essentials",
    descripcion: "Proteína 2 lb + Creatina 300 g + Shaker NAC.",
    imagenes: [], precio: 420000, stock: 0, nuevo: true, ejemplo: true },
];

/* ============================================================
   3) TEXTOS LEGALES — ⚠️ plantilla general: deben ser revisados por un
   abogado. Reemplaza todo lo que esté [ENTRE CORCHETES].
   ============================================================ */
const RESP = "[NOMBRE O RAZÓN SOCIAL]", DOC = "[CC o NIT]", CORREO = "[CORREO DE CONTACTO]", CIUDAD = "[CIUDAD], Colombia";
const LEGALES = [
  { slug: "terminos-y-condiciones", titulo: "Términos y condiciones", fecha: "[FECHA]", secciones: [
    ["1. Quiénes somos", `New Athletic Clothes es una tienda de suplementos deportivos operada por ${RESP}, identificado con ${DOC}, con domicilio en ${CIUDAD}. Contacto: WhatsApp ${SITE.whatsappVisible} o ${CORREO}.`],
    ["2. Cómo funciona la compra", "Esta página es un catálogo. Al pulsar «Finalizar pedido» se abre WhatsApp con los productos de tu carrito, tu nombre y tu ciudad. El pedido se confirma solo cuando te respondemos con la disponibilidad, el valor del envío y el total. Los precios están en pesos colombianos. Las imágenes son de referencia."],
    ["3. Pagos", "Los medios de pago se coordinan por WhatsApp. Nunca te pediremos claves, códigos de verificación ni datos completos de tarjetas por chat."],
    ["4. Envíos", "Enviamos a todo Colombia por transportadora. Los tiempos son estimados. [DETALLA TIEMPOS Y COBERTURA]."],
    ["5. Uso responsable", "Los suplementos dietarios no son medicamentos ni reemplazan una alimentación balanceada. Consulta a un profesional de la salud antes de consumirlos, sobre todo si estás embarazada, en lactancia, eres menor de edad o tienes alguna condición médica."],
    ["6. Garantía y retracto", "Aplican la garantía legal y el derecho de retracto de la Ley 1480 de 2011 (Estatuto del Consumidor). Consulta nuestra política de Cambios y devoluciones."],
    ["7. Ley aplicable", "Estos términos se rigen por las leyes de Colombia. Si tienes una queja, escríbenos; también puedes acudir a la Superintendencia de Industria y Comercio (SIC)."],
  ] },
  { slug: "politica-de-datos", titulo: "Política de tratamiento de datos personales", fecha: "[FECHA]", secciones: [
    ["1. Responsable", `${RESP} (${DOC}), con domicilio en ${CIUDAD}, correo ${CORREO} y WhatsApp ${SITE.whatsappVisible}, es responsable del tratamiento de tus datos según la Ley 1581 de 2012 y sus decretos reglamentarios.`],
    ["2. Qué datos recogemos", "Esta página no tiene registro de usuarios ni guarda tus datos en servidores propios. Tu carrito se guarda solo en tu navegador. Al finalizar un pedido, tú decides enviarnos por WhatsApp tu nombre, ciudad y productos; para la entrega podemos pedirte dirección, teléfono y documento."],
    ["3. Para qué los usamos", "Gestionar y entregar tu pedido, coordinar el pago, atender garantías y reclamos, cumplir obligaciones legales y, solo si nos autorizas, enviarte promociones."],
    ["4. Tus derechos", "Conocer, actualizar, rectificar y suprimir tus datos; pedir prueba de la autorización; revocarla; y presentar quejas ante la SIC."],
    ["5. Cómo ejercerlos", `Escríbenos a ${CORREO} o al WhatsApp ${SITE.whatsappVisible}. Respondemos consultas en máximo 10 días hábiles y reclamos en máximo 15 días hábiles.`],
    ["6. Terceros", "WhatsApp (Meta) procesa los mensajes según sus políticas. Compartimos tus datos de entrega solo con la transportadora."],
  ] },
  { slug: "aviso-de-privacidad", titulo: "Aviso de privacidad", fecha: "[FECHA]", secciones: [
    ["Aviso", `${RESP} (${DOC}), responsable de New Athletic Clothes, informa que los datos que nos compartes (nombre, ciudad, dirección, teléfono y productos de tu pedido) se usarán para gestionar tus compras, entregas, pagos y garantías y, si lo autorizas, para enviarte información comercial. Esta página no usa analítica ni publicidad y no guarda tus datos en servidores propios. Puedes conocer, actualizar, rectificar y suprimir tus datos escribiendo a ${CORREO}.`],
  ] },
  { slug: "cambios-y-devoluciones", titulo: "Cambios y devoluciones", fecha: "[FECHA]", secciones: [
    ["1. Derecho de retracto", "Por ser una venta a distancia, puedes retractarte dentro de los 5 días hábiles siguientes a la entrega (art. 47, Ley 1480 de 2011). El producto debe estar sellado, sin uso y en su empaque original. El transporte de la devolución corre por tu cuenta y te reembolsamos dentro de los 30 días calendario siguientes. Por higiene, no aceptamos suplementos abiertos salvo por defecto de calidad."],
    ["2. Garantía", "Si un producto llega en mal estado, vencido, con el sello roto o diferente al pedido, escríbenos dentro de los [NÚMERO] días siguientes a la entrega con fotos. Lo cambiamos o te devolvemos el dinero sin costo."],
    ["3. Cómo solicitarlo", `WhatsApp ${SITE.whatsappVisible} o ${CORREO}, con tu nombre, el producto y el motivo.`],
  ] },
];

/* ============================================================
   4) LÓGICA DE LA TIENDA — no necesitas editar de aquí hacia abajo
   ============================================================ */
const $ = (sel, root = document) => root.querySelector(sel);
const main = $("#contenido");
const CART_KEY = "nac-carrito-v1";
const MAX_CANTIDAD = 20;

// Evita que un texto escrito por el cliente se interprete como HTML
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const normalizar = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

// ---------- Precios ----------
const cop = (n) => "$" + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const enOferta = (x) => x.precioOferta !== undefined && x.precioOferta < x.precio;
const precioFinal = (x) => (enOferta(x) ? x.precioOferta : x.precio);
const stockTotal = (p) => (p.variantes?.length ? p.variantes.reduce((s, v) => s + v.stock, 0) : p.stock);
const agotado = (p) => stockTotal(p) <= 0;
const tieneOferta = (p) => (p.variantes?.length ? p.variantes.some(enOferta) : enOferta(p));
const nombreCategoria = (slug) => (slug === "combos" ? "Combos" : CATEGORIAS.find((c) => c.slug === slug)?.nombre ?? slug);
const nombreMarca = (slug) => MARCAS.find((m) => m.slug === slug)?.nombre ?? slug;

function precioHTML(p) {
  if (p.variantes?.length) {
    const precios = p.variantes.map(precioFinal);
    const min = Math.min(...precios), max = Math.max(...precios);
    if (min !== max) return `${cop(min)} – ${cop(max)}`;
    const v = p.variantes[0];
    return enOferta(v) ? `<del>${cop(v.precio)}</del><ins>${cop(v.precioOferta)}</ins>` : cop(v.precio);
  }
  return enOferta(p) ? `<del>${cop(p.precio)}</del><ins>${cop(p.precioOferta)}</ins>` : cop(p.precio);
}
function precioTexto(p) {
  if (p.variantes?.length) {
    const precios = p.variantes.map(precioFinal);
    const min = Math.min(...precios), max = Math.max(...precios);
    return min === max ? cop(min) : `${cop(min)} – ${cop(max)}`;
  }
  return cop(precioFinal(p));
}

// ---------- WhatsApp ----------
const linkWhatsapp = (mensaje = SITE.mensajeWhatsapp) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensaje)}`;
function mensajePedido(items, nombre, ciudad) {
  const lineas = items.map((i, n) =>
    `${n + 1}. ${i.nombre}${i.variante ? " – " + i.variante : ""}\n   ${i.cantidad} × ${cop(i.precio)} = ${cop(i.precio * i.cantidad)}`);
  const sub = subtotal(items);
  return [`${SITE.mensajeWhatsapp} 👋`, "Quiero hacer este pedido:", "", ...lineas, "",
    `Subtotal: ${cop(sub)}`, `Total: ${cop(sub)} (envío por confirmar)`, "",
    `Nombre: ${nombre.trim()}`, `Ciudad: ${ciudad.trim()}`].join("\n");
}

// ---------- Carrito (se guarda en el navegador) ----------
let carrito = leerCarrito();
function leerCarrito() {
  try {
    const data = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    return Array.isArray(data) ? data.filter((i) => i && i.id && i.cantidad > 0 && typeof i.precio === "number") : [];
  } catch { return []; }
}
function guardarCarrito() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(carrito)); } catch { /* modo privado */ }
  actualizarContador();
}
const claveLinea = (i) => `${i.id}::${i.varianteId || ""}`;
const subtotal = (items) => items.reduce((s, i) => s + i.precio * i.cantidad, 0);
const unidades = () => carrito.reduce((s, i) => s + i.cantidad, 0);
const maxLinea = (i) => Math.min(i.stock ?? MAX_CANTIDAD, MAX_CANTIDAD);

function agregarAlCarrito(item) {
  const existente = carrito.find((i) => claveLinea(i) === claveLinea(item));
  if (existente) existente.cantidad = Math.min(existente.cantidad + item.cantidad, maxLinea(existente));
  else carrito.push({ ...item, cantidad: Math.min(item.cantidad, maxLinea(item)) });
  guardarCarrito();
  abrirDrawer();
}
function cambiarCantidad(clave, cantidad) {
  const item = carrito.find((i) => claveLinea(i) === clave);
  if (!item) return;
  if (cantidad <= 0) carrito = carrito.filter((i) => i !== item);
  else item.cantidad = Math.min(cantidad, maxLinea(item));
  guardarCarrito();
  refrescarCarrito();
}
function actualizarContador() {
  const n = unidades(), badge = $("#cartCount");
  badge.textContent = n;
  badge.hidden = n === 0;
  $("#cartBtn").setAttribute("aria-label", `Ver carrito (${n} ${n === 1 ? "producto" : "productos"})`);
}
// Si el carrito cambia en otra pestaña, se sincroniza
window.addEventListener("storage", (e) => { if (e.key === CART_KEY) { carrito = leerCarrito(); actualizarContador(); refrescarCarrito(); } });

/* ---------- Piezas visuales ---------- */
const ph = (texto = "", clase = "") => `<div class="ph ${clase}" aria-hidden="true">${esc(texto)}</div>`;
const imgOrPh = (src, alt, w, h, phTexto, phClase = "") =>
  src ? `<img src="${esc(src)}" alt="${esc(alt)}" width="${w}" height="${h}" loading="lazy" decoding="async" />` : ph(phTexto, phClase);

function tarjeta(p) {
  const out = agotado(p), oferta = tieneOferta(p) && !out, img = p.imagenes[0];
  return `<li><a class="card" href="#/producto/${p.slug}">
    <div class="card__img">
      ${img ? `<img src="${esc(img)}" alt="${esc(p.nombre)}" width="600" height="600" loading="lazy" decoding="async" class="${out ? "is-out" : ""}" />`
            : ph(p.ejemplo ? "Producto de ejemplo" : "Foto próximamente")}
      <div class="card__badges">${oferta ? '<span class="badge">¡Oferta!</span>' : ""}${out ? '<span class="badge badge--out">Agotado</span>' : ""}</div>
      <div class="card__overlay"><span>Ver producto</span></div>
    </div>
    <h3 class="card__name">${esc(p.nombre)}</h3>
    <p class="card__price price">${precioHTML(p)}</p>
  </a></li>`;
}

// Grilla con botón "Ver más"
function grilla(lista, { cinco = false, porPagina = 0 } = {}) {
  if (!lista.length) return `<p class="empty">Pronto tendremos productos aquí. ¡Vuelve pronto!</p>`;
  const id = "g" + Math.random().toString(36).slice(2, 8);
  const visibles = porPagina ? lista.slice(0, porPagina) : lista;
  const resto = lista.length - visibles.length;
  setTimeout(() => {
    const btn = document.getElementById(id + "-mas");
    if (!btn) return;
    let mostrados = porPagina;
    btn.addEventListener("click", () => {
      const siguientes = lista.slice(mostrados, mostrados + porPagina);
      document.getElementById(id).insertAdjacentHTML("beforeend", siguientes.map(tarjeta).join(""));
      mostrados += siguientes.length;
      const quedan = lista.length - mostrados;
      if (quedan <= 0) btn.parentElement.remove();
      else btn.textContent = `Ver más (${quedan})`;
    });
  });
  return `<ul class="grid ${cinco ? "grid--5" : ""}" id="${id}">${visibles.map(tarjeta).join("")}</ul>
    ${resto > 0 ? `<div class="more"><button class="btn" id="${id}-mas">Ver más (${resto})</button></div>` : ""}`;
}

const filaBanners = (fila) => `<section class="container" aria-label="Categorías destacadas"><ul class="banner-row">
  ${fila.map((b) => `<li><a class="banner" href="${b.link}">${imgOrPh(b.imagen, b.etiqueta, 800, 1000, "Imagen 800 × 1000")}
  <span class="banner__label">${esc(b.etiqueta)}</span></a></li>`).join("")}</ul></section>`;

const migas = (...partes) => `<nav class="crumbs" aria-label="Ruta de navegación"><a href="#/">Inicio</a> / ${partes.join(" / ")}</nav>`;

/* ---------- Páginas ---------- */
function paginaInicio() {
  const masVendidos = PRODUCTOS.filter((p) => p.masVendido).slice(0, SECCIONES.masVendidos.limite);
  const ofertas = PRODUCTOS.filter(tieneOferta).slice(0, SECCIONES.ofertas.limite);
  const nuevos = PRODUCTOS.filter((p) => p.nuevo);
  return `
  <h1 class="sr-only">New Athletic Clothes: suplementos deportivos originales en Colombia</h1>
  <section aria-label="Promociones principales">
    ${HERO.map((b, i) => `<a class="hero__item" href="${b.link}" aria-label="${esc(b.alt)}">
      ${b.imagen ? `<img src="${esc(b.imagen)}" alt="${esc(b.alt)}" width="2560" height="853" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} />`
                 : ph(b.etiqueta, i ? "ph--mid" : "ph--dark")}</a>`).join("")}
  </section>
  <section aria-label="Contáctanos">
    ${FRANJAS.map((f) => `<div class="strip" ${f.imagen ? `style="background-image:url('${esc(f.imagen)}')"` : ""}>
      <p>${esc(f.texto)}</p>
      <a class="btn btn--white" target="_blank" rel="noopener noreferrer" href="${f.destino === "whatsapp" ? linkWhatsapp() : SITE.redes.instagram}">Clic aquí</a>
    </div>`).join("")}
  </section>
  <section class="section container"><h2 class="title">${SECCIONES.masVendidos.titulo}</h2>${grilla(masVendidos)}</section>
  ${filaBanners(FILA_1)}
  <section class="section container"><h2 class="title">${SECCIONES.ofertas.titulo}</h2>${grilla(ofertas)}</section>
  ${filaBanners(FILA_2)}
  <section class="section container"><h2 class="title">${SECCIONES.nuevos.titulo}</h2>${grilla(nuevos, { cinco: true, porPagina: SECCIONES.nuevos.porPagina })}</section>`;
}

function paginaCatalogo(titulo, lista, subtitulo = "") {
  document.title = `${titulo} | ${SITE.nombre}`;
  return `<div class="page container">${migas(`<strong>${esc(titulo)}</strong>`)}
    <h1 class="title">${esc(titulo)}</h1>${subtitulo ? `<p class="subtitle">${esc(subtitulo)}</p>` : ""}
    <p class="count">${lista.length} ${lista.length === 1 ? "producto" : "productos"}</p>
    ${grilla(lista, { porPagina: 20 })}</div>`;
}

function buscar(q) {
  const palabras = normalizar(q).split(/\s+/).filter(Boolean);
  if (!palabras.length) return [];
  return PRODUCTOS.filter((p) => {
    const texto = normalizar(`${p.nombre} ${nombreMarca(p.marca)} ${nombreCategoria(p.categoria)}`);
    return palabras.every((w) => texto.includes(w));
  });
}

function paginaProducto(p) {
  document.title = `${p.nombre} | ${SITE.nombre}`;
  const variantes = p.variantes || [];
  const tipo = variantes[0]?.tipo === "tamaño" ? "Tamaño" : "Sabor";
  const relacionados = PRODUCTOS.filter((x) => x.categoria === p.categoria && x.id !== p.id).slice(0, 4);
  const catLink = p.categoria === "combos" ? "#/combos" : `#/categoria/${p.categoria}`;

  setTimeout(() => montarCompra(p, variantes, tipo));
  return `<div class="page container">
    ${migas(`<a href="${catLink}">${esc(nombreCategoria(p.categoria))}</a>`, `<strong>${esc(p.nombre)}</strong>`)}
    <div class="pdp">
      <div>
        <div class="pdp__main" id="galeria">${p.imagenes[0]
          ? `<img src="${esc(p.imagenes[0])}" alt="${esc(p.nombre)}" width="900" height="900" />`
          : ph(p.ejemplo ? "Producto de ejemplo" : "Foto próximamente")}</div>
        ${p.imagenes.length > 1 ? `<div class="thumbs">${p.imagenes.map((src, i) =>
          `<button class="${i ? "" : "is-active"}" data-src="${esc(src)}" aria-label="Ver imagen ${i + 1}"><img src="${esc(src)}" alt="" loading="lazy" /></button>`).join("")}</div>` : ""}
      </div>
      <div>
        <a class="pdp__brand" href="#/marca/${p.marca}">${esc(nombreMarca(p.marca))}</a>
        <h1 class="pdp__name">${esc(p.nombre)}</h1>
        ${p.ejemplo ? '<p class="pdp__demo">Producto de ejemplo</p>' : ""}
        <div id="compra"></div>
        <a class="btn btn--outline ask" target="_blank" rel="noopener noreferrer"
           href="${linkWhatsapp(`${SITE.mensajeWhatsapp}. Tengo una pregunta sobre: ${p.nombre}`)}">Pregúntanos por WhatsApp</a>
        <div class="desc"><h2>Descripción</h2><p>${esc(p.descripcion)}</p></div>
        <ul class="perks"><li>✓ Productos originales</li><li>✓ Envíos a todo Colombia</li><li>✓ Pago y envío coordinados por WhatsApp</li></ul>
      </div>
    </div>
    ${relacionados.length ? `<section class="related"><h2 class="title">También te puede interesar</h2>${grilla(relacionados)}</section>` : ""}
  </div>`;
}

// Selector de variante, cantidad y botón "Agregar al carrito"
function montarCompra(p, variantes, tipo) {
  const caja = $("#compra");
  if (!caja) return;
  let varianteId = (variantes.find((v) => v.stock > 0) || variantes[0])?.id;
  let cantidad = 1;

  const dibujar = () => {
    const v = variantes.find((x) => x.id === varianteId);
    const fuente = v || p, stock = v ? v.stock : p.stock, out = stock <= 0;
    const maximo = Math.max(1, Math.min(stock, MAX_CANTIDAD));
    caja.innerHTML = `
      <div class="pdp__price"><p class="price" aria-live="polite">${enOferta(fuente) ? `<del>${cop(fuente.precio)}</del>` : ""}${cop(precioFinal(fuente))}</p>
        ${enOferta(fuente) && !out ? '<span class="badge">¡Oferta!</span>' : ""}${out ? '<span class="badge badge--out">Agotado</span>' : ""}</div>
      ${variantes.length ? `<fieldset class="variants"><legend>${tipo}: <span>${esc(v?.nombre)}</span></legend><div class="variants__list">
        ${variantes.map((x) => `<button class="variant ${x.id === varianteId ? "is-active" : ""} ${x.stock <= 0 ? "is-out" : ""}" data-v="${esc(x.id)}" aria-pressed="${x.id === varianteId}">${esc(x.nombre)}${x.stock <= 0 ? '<span class="sr-only"> (agotado)</span>' : ""}</button>`).join("")}
      </div></fieldset>` : ""}
      <div class="buy">
        <div class="qty" role="group" aria-label="Cantidad">
          <button data-q="-1" aria-label="Restar uno" ${out || cantidad <= 1 ? "disabled" : ""}>−</button>
          <span aria-live="polite">${cantidad}</span>
          <button data-q="1" aria-label="Sumar uno" ${out || cantidad >= maximo ? "disabled" : ""}>+</button>
        </div>
        <button class="btn" id="agregar" ${out ? "disabled" : ""}>${out ? "Agotado" : "Agregar al carrito"}</button>
      </div>
      ${!out && stock <= 3 ? `<p class="low">¡Quedan pocas unidades (${stock})!</p>` : ""}`;

    caja.querySelectorAll("[data-v]").forEach((b) => b.addEventListener("click", () => { varianteId = b.dataset.v; cantidad = 1; dibujar(); }));
    caja.querySelectorAll("[data-q]").forEach((b) => b.addEventListener("click", () => { cantidad = Math.min(maximo, Math.max(1, cantidad + Number(b.dataset.q))); dibujar(); }));
    $("#agregar").addEventListener("click", () => {
      if (out) return;
      agregarAlCarrito({ id: p.id, slug: p.slug, nombre: p.nombre, varianteId: v?.id, variante: v ? `${tipo}: ${v.nombre}` : "",
        precio: precioFinal(fuente), cantidad, imagen: p.imagenes[0] || "", stock });
    });
  };
  dibujar();

  // Galería: miniaturas
  document.querySelectorAll(".thumbs button").forEach((b) => b.addEventListener("click", () => {
    $("#galeria img").src = b.dataset.src;
    document.querySelectorAll(".thumbs button").forEach((x) => x.classList.toggle("is-active", x === b));
  }));
}

// Línea del carrito (se usa en el panel lateral y en la página)
const lineaCarrito = (i, pequeña = false) => `<li class="line ${pequeña ? "line--sm" : ""}">
  <a class="line__img" href="#/producto/${esc(i.slug)}">${i.imagen ? `<img src="${esc(i.imagen)}" alt="" loading="lazy" />` : ph()}</a>
  <div class="line__body">
    <div class="line__top"><div>
      <a class="line__name" href="#/producto/${esc(i.slug)}">${esc(i.nombre)}</a>
      ${i.variante ? `<p class="line__meta">${esc(i.variante)}</p>` : ""}
      <p class="line__meta">${cop(i.precio)} c/u</p></div>
      <p class="line__total">${cop(i.precio * i.cantidad)}</p>
    </div>
    <div class="line__bottom">
      <div class="qty qty--sm" role="group" aria-label="Cantidad de ${esc(i.nombre)}">
        <button data-linea="${esc(claveLinea(i))}" data-n="${i.cantidad - 1}" aria-label="${i.cantidad === 1 ? "Quitar" : "Restar uno"}">−</button>
        <span>${i.cantidad}</span>
        <button data-linea="${esc(claveLinea(i))}" data-n="${i.cantidad + 1}" aria-label="Sumar uno" ${i.cantidad >= maxLinea(i) ? "disabled" : ""}>+</button>
      </div>
      <button class="link link--muted" data-linea="${esc(claveLinea(i))}" data-n="0">Quitar</button>
    </div>
  </div></li>`;

function paginaCarrito() {
  document.title = `Carrito | ${SITE.nombre}`;
  if (!carrito.length) {
    return `<div class="page container"><h1 class="title">Tu carrito</h1>
      <div class="empty"><p style="margin-bottom:32px">Tu carrito está vacío. ¡Elige tu próximo suplemento!</p><a class="btn" href="#/">Ir a la tienda</a></div></div>`;
  }
  const total = subtotal(carrito);
  return `<div class="page container" style="max-width:1100px"><h1 class="title">Tu carrito</h1>
    <div class="cart">
      <section aria-label="Productos del carrito">
        <ul class="cart__list">${carrito.map((i) => lineaCarrito(i)).join("")}</ul>
        <div class="cart__actions"><a class="link" href="#/">← Seguir comprando</a><button class="link link--muted" id="vaciar">Vaciar carrito</button></div>
      </section>
      <aside class="summary">
        <h2>Resumen del pedido</h2>
        <div class="summary__row"><span>Subtotal</span><strong>${cop(total)}</strong></div>
        <div class="summary__row summary__row--muted"><span>Envío</span><span>Por confirmar</span></div>
        <div class="summary__row summary__row--total"><span>Total</span><span>${cop(total)}</span></div>
        <form id="pedido" novalidate>
          <div class="field"><label for="nombre">Tu nombre</label><input id="nombre" autocomplete="name" maxlength="60" />
            <p class="field__error" id="errNombre" hidden>Escribe tu nombre.</p></div>
          <div class="field"><label for="ciudad">Ciudad</label><input id="ciudad" autocomplete="address-level2" maxlength="60" />
            <p class="field__error" id="errCiudad" hidden>Escribe tu ciudad.</p></div>
          <button class="btn btn--block" type="submit">Finalizar pedido</button>
          <p class="summary__note">Se abrirá WhatsApp con tu pedido listo para enviar. Allí coordinamos contigo el pago y el envío.
            Tu nombre y ciudad solo viajan en ese mensaje; no los guardamos en esta página. Consulta nuestra <a href="#/legal/politica-de-datos">política de datos</a>.</p>
        </form>
      </aside>
    </div></div>`;
}

function montarCarrito() {
  const form = $("#pedido");
  if (!form) return;
  $("#vaciar").addEventListener("click", () => { if (confirm("¿Vaciar el carrito?")) { carrito = []; guardarCarrito(); router(); } });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = $("#nombre").value, ciudad = $("#ciudad").value;
    const faltaN = nombre.trim().length < 2, faltaC = ciudad.trim().length < 2;
    $("#errNombre").hidden = !faltaN; $("#errCiudad").hidden = !faltaC;
    $("#nombre").setAttribute("aria-invalid", faltaN); $("#ciudad").setAttribute("aria-invalid", faltaC);
    if (faltaN || faltaC) return;
    window.open(linkWhatsapp(mensajePedido(carrito, nombre, ciudad)), "_blank", "noopener,noreferrer");
  });
}

function paginaLegal(doc) {
  document.title = `${doc.titulo} | ${SITE.nombre}`;
  return `<article class="legal"><h1 class="title">${esc(doc.titulo)}</h1><p class="legal__date">Última actualización: ${esc(doc.fecha)}</p>
    ${doc.secciones.map(([t, txt]) => `<h2>${esc(t)}</h2><p>${esc(txt)}</p>`).join("")}</article>`;
}

const pagina404 = () => `<div class="notfound"><strong>404</strong><h1 class="title" style="font-size:18px;margin:24px 0 0">Esta página no existe</h1>
  <p>Puede que el producto ya no esté disponible. ¡Sigue entrenando y mira lo que tenemos!</p><a class="btn" href="#/">Volver a la tienda</a></div>`;

/* ---------- Rutas (#/producto/x, #/categoria/x, #/carrito…) ---------- */
function router() {
  const [ruta, param = ""] = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
  document.title = `${SITE.nombre} | Suplementos deportivos en Colombia`;
  let html;
  if (!ruta) html = paginaInicio();
  else if (ruta === "categoria") {
    const c = CATEGORIAS.find((x) => x.slug === param);
    html = c ? paginaCatalogo(c.nombre, PRODUCTOS.filter((p) => p.categoria === c.slug)) : pagina404();
  } else if (ruta === "marca") {
    const m = MARCAS.find((x) => x.slug === param);
    html = m ? paginaCatalogo(m.nombre, PRODUCTOS.filter((p) => p.marca === m.slug)) : pagina404();
  } else if (ruta === "ofertas") html = paginaCatalogo("Ofertas", PRODUCTOS.filter(tieneOferta), "¡Aprovecha! Precios especiales por tiempo limitado.");
  else if (ruta === "combos") html = paginaCatalogo("Combos", PRODUCTOS.filter((p) => p.categoria === "combos"), "Todo lo que necesitas para tu objetivo, en un solo pedido.");
  else if (ruta === "buscar") {
    const r = buscar(param);
    html = r.length ? paginaCatalogo(`Resultados para “${param}”`, r)
      : `<div class="page container"><h1 class="title">Resultados para “${esc(param)}”</h1><p class="empty">No encontramos productos. Prueba con otra palabra o escríbenos por WhatsApp.</p></div>`;
  } else if (ruta === "producto") {
    const p = PRODUCTOS.find((x) => x.slug === param);
    html = p ? paginaProducto(p) : pagina404();
  } else if (ruta === "carrito") html = paginaCarrito();
  else if (ruta === "legal") {
    const d = LEGALES.find((x) => x.slug === param);
    html = d ? paginaLegal(d) : pagina404();
  } else html = pagina404();

  main.innerHTML = html;
  if (ruta === "carrito") montarCarrito();
  cerrarMenus();
  window.scrollTo({ top: 0, behavior: "instant" });
}
window.addEventListener("hashchange", router);

/* ---------- Carrito lateral ---------- */
const drawer = $("#drawer");
let focoAnterior = null;
function refrescarCarrito() {
  if (!drawer.hidden) dibujarDrawer();
  if (location.hash.startsWith("#/carrito")) {
    // Conserva lo escrito en el formulario al cambiar cantidades
    const n = $("#nombre")?.value || "", c = $("#ciudad")?.value || "";
    main.innerHTML = paginaCarrito(); montarCarrito();
    if ($("#nombre")) { $("#nombre").value = n; $("#ciudad").value = c; }
  }
}
function dibujarDrawer() {
  const body = $("#drawerBody");
  if (!carrito.length) {
    body.innerHTML = `<div class="drawer__empty"><p>Tu carrito está vacío. ¡Elige tu próximo suplemento!</p><button class="btn" data-close>Seguir comprando</button></div>`;
    return;
  }
  body.innerHTML = `<ul class="drawer__list">${carrito.map((i) => lineaCarrito(i, true)).join("")}</ul>
    <div class="drawer__foot">
      <div class="drawer__sub"><span>Subtotal</span><span>${cop(subtotal(carrito))}</span></div>
      <p class="drawer__hint">El envío se confirma por WhatsApp.</p>
      <a class="btn btn--block" href="#/carrito" data-close>Finalizar pedido</a>
      <button class="link" data-close>Seguir comprando</button>
    </div>`;
}
function abrirDrawer() {
  focoAnterior = document.activeElement;
  dibujarDrawer();
  drawer.hidden = false;
  document.body.style.overflow = "hidden";
  $(".drawer__head [data-close]").focus();
}
function cerrarDrawer() {
  drawer.hidden = true;
  document.body.style.overflow = "";
  focoAnterior?.focus?.();
}
drawer.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) cerrarDrawer(); });
$("#cartBtn").addEventListener("click", abrirDrawer);

// Botones de cantidad / quitar (panel y página del carrito)
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-linea]");
  if (b) cambiarCantidad(b.dataset.linea, Number(b.dataset.n));
});

/* ---------- Menú, mega menús, menú móvil y búsqueda ---------- */
const chev = `<svg viewBox="0 0 24 24" class="ico chev"><path d="m6 9 6 6 6-6" fill="none"/></svg>`;
const listaMega = (tipo) => (tipo === "categorias" ? CATEGORIAS : MARCAS).map((x) => ({ nombre: x.nombre, link: `#/${tipo === "categorias" ? "categoria" : "marca"}/${x.slug}` }));
const menuActivo = MENU.filter((m) => m.activo !== false);

$("#nav").innerHTML = `<ul class="nav__list">${menuActivo.map((m) => m.mega
  ? `<li class="nav__item--mega" data-mega="${m.mega}"><button class="nav__link" aria-expanded="false" aria-haspopup="true">${m.label}${chev}</button>
      <div class="mega" hidden><div class="mega__box"><ul class="mega__grid">${listaMega(m.mega).map((x) => `<li><a href="${x.link}">${esc(x.nombre)}</a></li>`).join("")}</ul></div></div></li>`
  : `<li><a class="nav__link" href="${m.link}">${m.label}</a></li>`).join("")}</ul>`;

document.querySelectorAll("[data-mega]").forEach((li) => {
  const btn = li.querySelector("button"), panel = li.querySelector(".mega");
  const abrir = (si) => { panel.hidden = !si; btn.setAttribute("aria-expanded", si); };
  li.addEventListener("mouseenter", () => abrir(true));
  li.addEventListener("mouseleave", () => abrir(false));
  btn.addEventListener("click", () => abrir(panel.hidden));
});

$("#mobileMenu").innerHTML = `<ul>${menuActivo.map((m) => m.mega
  ? `<li><button class="mobile-menu__link" aria-expanded="false">${m.label}${chev}</button>
      <ul class="mobile-menu__sub" hidden>${listaMega(m.mega).map((x) => `<li><a href="${x.link}">${esc(x.nombre)}</a></li>`).join("")}</ul></li>`
  : `<li><a class="mobile-menu__link" href="${m.link}">${m.label}</a></li>`).join("")}</ul>`;
$("#mobileMenu").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
  const sub = b.nextElementSibling, abrir = sub.hidden;
  sub.hidden = !abrir; b.setAttribute("aria-expanded", abrir); b.querySelector("svg").classList.toggle("rot", abrir);
}));

const iconoMenu = `<svg viewBox="0 0 24 24" class="ico ico--lg"><path d="M3 6h18M3 12h18M3 18h18" fill="none"/></svg>`;
const iconoCerrar = `<svg viewBox="0 0 24 24" class="ico ico--lg"><path d="M6 6l12 12M18 6 6 18" fill="none"/></svg>`;
$("#menuBtn").addEventListener("click", () => {
  const menu = $("#mobileMenu"), abrir = menu.hidden;
  menu.hidden = !abrir;
  $("#menuBtn").setAttribute("aria-expanded", abrir);
  $("#menuBtn").setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
  $("#menuBtn").innerHTML = abrir ? iconoCerrar : iconoMenu;
});

function cerrarMenus() {
  $("#mobileMenu").hidden = true;
  $("#menuBtn").innerHTML = iconoMenu;
  $("#menuBtn").setAttribute("aria-expanded", false);
  $("#searchPanel").hidden = true;
  $("#searchBtn").setAttribute("aria-expanded", false);
  document.querySelectorAll(".mega").forEach((m) => (m.hidden = true));
}
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { cerrarMenus(); if (!drawer.hidden) cerrarDrawer(); } });
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav__item--mega")) document.querySelectorAll(".mega").forEach((m) => (m.hidden = true));
});

// Búsqueda predictiva
$("#searchBtn").addEventListener("click", () => {
  const panel = $("#searchPanel"), abrir = panel.hidden;
  panel.hidden = !abrir;
  $("#searchBtn").setAttribute("aria-expanded", abrir);
  if (abrir) $("#searchInput").focus();
});
$("#searchInput").addEventListener("input", (e) => {
  const q = e.target.value.trim(), box = $("#searchResults");
  if (!q) { box.hidden = true; return; }
  const r = buscar(q).slice(0, 6);
  box.innerHTML = (r.length ? r.map((p) => `<a class="search__item" href="#/producto/${p.slug}">
      ${p.imagenes[0] ? `<img class="search__thumb" src="${esc(p.imagenes[0])}" alt="" />` : '<span class="search__thumb"></span>'}
      <span class="search__info"><span class="search__name">${esc(p.nombre)}</span><span class="search__meta">${esc(nombreMarca(p.marca))} · ${esc(nombreCategoria(p.categoria))}</span></span>
      <span class="search__price">${precioTexto(p)}</span></a>`).join("")
    : `<p class="search__empty">No encontramos productos para “${esc(q)}”.</p>`)
    + `<button type="submit" class="search__all">Ver todos los resultados</button>`;
  box.hidden = false;
});
$("#searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = $("#searchInput").value.trim();
  if (!q) return;
  $("#searchInput").value = ""; $("#searchResults").hidden = true;
  location.hash = `#/buscar/${encodeURIComponent(q)}`;
});

/* ---------- Partes fijas: marquesina, footer y flotantes ---------- */
const textoMarquesina = SITE.marquesina.map((m) => `${esc(m)} • `).join("");
$("#marquee").innerHTML = [0, 1, 2, 3].map(() => `<span>${textoMarquesina}</span>`).join("");
$("#footerLegal").innerHTML = LEGALES.map((d) => `<li><a href="#/legal/${d.slug}">${esc(d.titulo === "Política de tratamiento de datos personales" ? "Política de datos" : d.titulo)}</a></li>`).join("");
$("#payList").innerHTML = SITE.mediosPago.map((m) => `<li>${esc(m)}</li>`).join("");
const iconosRedes = {
  facebook: '<path stroke="none" d="M14 8V6.5c0-.8.2-1.5 1.5-1.5H17V2h-2.6C11.6 2 11 3.9 11 6v2H9v3h2v11h3V11h2.6l.4-3h-3Z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none"/><circle cx="12" cy="12" r="4" fill="none"/><circle cx="17.5" cy="6.5" r="1" stroke="none"/>',
  tiktok: '<path stroke="none" d="M16.6 2h-3.1v13.2a2.9 2.9 0 1 1-2.1-2.8V9.2a6 6 0 1 0 5.2 6V8.6a7.4 7.4 0 0 0 4.4 1.4V6.9a4.4 4.4 0 0 1-4.4-4.4V2Z"/>',
};
$("#social").innerHTML = Object.entries(SITE.redes).filter(([, url]) => url).map(([red, url]) =>
  `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="${red} (se abre en una pestaña nueva)"><svg viewBox="0 0 24 24" class="ico">${iconosRedes[red]}</svg></a></li>`).join("");
$("#year").textContent = new Date().getFullYear();
$("#waFloat").href = linkWhatsapp();

const toTop = $("#toTop");
window.addEventListener("scroll", () => {
  const ver = window.scrollY > 600;
  toTop.classList.toggle("is-visible", ver);
  toTop.tabIndex = ver ? 0 : -1;
}, { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0 }));

// Arranque
actualizarContador();
router();
