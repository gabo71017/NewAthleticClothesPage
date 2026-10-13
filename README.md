# New Athletic Clothes · Tienda web (versión simple)

Tienda de suplementos con catálogo, carrito y pedido por WhatsApp, hecha con **solo 3 archivos**: `index.html`, `styles.css` y `app.js`. No necesita instalar nada, ni compilar, ni servidor: funciona en GitHub Pages, Cloudflare Pages, Netlify o cualquier hosting estático, en la raíz del dominio o en una subcarpeta.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Estructura fija: marquesina, header, footer, botones flotantes y carrito lateral |
| `styles.css` | Todo el diseño en blanco y negro, adaptado a celular, tablet y escritorio |
| `app.js` | Configuración, productos, textos legales y funcionamiento de la tienda |
| `logo.png` | Tu logo horizontal (NAC horitzontal.png renombrado). En el header y el footer se vuelve blanco solo |
| `logo-1x1.png` | Ícono de la pestaña del navegador (opcional) |
| `og.png` | Imagen al compartir el enlace en redes, 1200 × 630 (opcional) |

Las tres imágenes no van en texto: súbelas tú al repositorio, junto a `index.html`. Si falta `logo.png`, el header muestra el texto "NEW ATHLETIC".

## Publicar en GitHub Pages

1. En tu repositorio, crea (o reemplaza) `index.html`, `styles.css`, `app.js` y `README.md` y pega el contenido de cada uno. Sube también `logo.png`.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, elige tu rama (por ejemplo `main`) y la carpeta `/ (root)`. Guarda.
3. En uno o dos minutos la página estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

> ⚠️ Las reglas de GitHub Pages no permiten usarlo como hosting gratuito de una tienda o negocio en línea. Sirve para probar y mostrar la página; para vender, publica estos mismos archivos en Cloudflare Pages (**Workers & Pages → Create → Pages → Upload assets** y arrastra la carpeta).

## Qué se edita en `app.js`

Todo está al principio del archivo, en tres secciones:

1. **CONFIGURACIÓN**
   - `SITE`: número de WhatsApp, mensaje prellenado, redes sociales, marquesina y medios de pago.
   - `HERO`, `FRANJAS`, `FILA_1` y `FILA_2`: banners y franjas.
   - `SECCIONES`: títulos y cantidades de productos del inicio.
   - `CATEGORIAS`, `MARCAS` y `MENU`: categorías, marcas y menú. "Mi Cuenta" está desactivado con `activo: false`.
2. **PRODUCTOS**: la lista `PRODUCTOS`. Copia un bloque `{ ... }` y cambia los datos:
   ```js
   { id: "p033", nombre: "Creatina 300 g", slug: "creatina-300g", categoria: "creatinas", marca: "titan-labs",
     descripcion: "Texto del producto…", imagenes: ["fotos/creatina-300g.webp"],
     precio: 139000, precioOferta: 129000, stock: 10, masVendido: true, nuevo: true },
   ```
   - `precioOferta` es opcional. Si lo pones, la tarjeta muestra "¡Oferta!" y el precio anterior tachado.
   - `variantes` es opcional, para sabor o tamaño, cada uno con su precio y su stock (mira los ejemplos de la lista). Si los precios cambian según la variante, la tarjeta muestra el rango "desde – hasta".
   - Con `stock: 0` el producto aparece como "Agotado".
   - Los 32 productos actuales son de ejemplo (`ejemplo: true`). Bórralos cuando cargues los tuyos.
3. **TEXTOS LEGALES**: completa los datos `[ENTRE CORCHETES]`. ⚠️ Son una plantilla y **deben ser revisados por un abogado** antes de publicar.

## Fotos y banners

Crea una carpeta `fotos/` en el repositorio y escribe la ruta sin barra inicial, por ejemplo `"fotos/hero-1.webp"`. Así funciona también en una subcarpeta de GitHub Pages.

| Imagen | Tamaño recomendado |
|---|---|
| Producto (cuadrada, fondo blanco) | 800 × 800 px, < 120 KB |
| Banner del inicio | 2560 × 853 px (3:1), < 300 KB |
| Imágenes verticales de las filas | 800 × 1000 px (4:5), < 150 KB |
| Franja "Clic aquí" (opcional) | 1920 × 400 px |

Convierte las fotos a WebP y redúcelas con [squoosh.app](https://squoosh.app) antes de subirlas.

## Cómo funciona

- Las páginas usan direcciones con `#`, por ejemplo `#/producto/whey-gold-demo`, `#/categoria/creatinas`, `#/ofertas`, `#/combos`, `#/carrito` y `#/legal/politica-de-datos`. Por eso funcionan en cualquier hosting sin configuración extra.
- El carrito se guarda en el navegador del cliente (`localStorage`). Al pulsar "Finalizar pedido" se abre WhatsApp con los productos, las variantes, las cantidades, el subtotal, el total, el nombre y la ciudad.
- El nombre y la ciudad no se guardan en ningún servidor: solo viajan en el mensaje que el cliente decide enviar. La página no usa cookies, analítica ni píxeles.
- **Limitación frente a la versión Next.js:** como todo se dibuja con JavaScript en una sola página, Google indexa peor cada producto por separado, y no hay `sitemap.xml` por producto. Para empezar y vender por WhatsApp funciona bien; si más adelante el posicionamiento en Google es prioridad, conviene volver a la versión Next.js.

## Probar en tu computador

Abre `index.html` con doble clic. Si alguna imagen no carga, usa un servidor local: en la carpeta de los archivos, corre `python -m http.server` y abre `http://localhost:8000`.
