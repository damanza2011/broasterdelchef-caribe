// ==============================================================
// BROASTER DEL CHEF CARIBE - APP LOGIC & DIGITAL MENU ENGINE
// Proyecto Piloto Fondo Emprender SENA • Regional Atlántico
// ==============================================================

// 1. DATA DE LAS SEDES DEL PILOTO
const SEDES_CARIBE = {
    'soledad': {
        id: 'soledad',
        nombre: 'Local 1: Barrio Soledad',
        tipo: 'Restaurante Full Popular',
        badge: 'Local Popular',
        direccion: 'Calle 30 # 21-45 (Cerca a Hipódromo), Soledad',
        telefono: '3125123149',
        whatsapp: '573125123149',
        horario: 'Lun - Dom: 11:00 AM - 10:30 PM',
        tiempoEntrega: '25 - 35 min',
        cobertura: 'Soledad Centro, Hipódromo, Salamanca, Costa Hermosa, Los Almendros, Malambo.',
        costoEnvio: 3000,
        servicios: ['Comedor con Mesas', 'Para Llevar', 'Domicilio WhatsApp', 'Los Helados del Chef'],
        icono: 'fa-store',
        estado: 'Abierto Ahora',
        destacado: 'Mayor volumen en barrio popular'
    },
    'simon-bolivar': {
        id: 'simon-bolivar',
        nombre: 'Local 2: Simón Bolívar / Murillo',
        tipo: 'Restaurante Full Popular',
        badge: 'Local Popular',
        direccion: 'Calle 45 (Av. Murillo) # 5B-12, Barranquilla',
        telefono: '3005201641',
        whatsapp: '573005201641',
        horario: 'Lun - Dom: 11:00 AM - 10:30 PM',
        tiempoEntrega: '30 - 40 min',
        cobertura: 'Simón Bolívar, La Victoria, Rebolo, Montes, San Roque, Chiquinquirá.',
        costoEnvio: 3500,
        servicios: ['Comedor con Mesas', 'Para Llevar', 'Domicilio WhatsApp', 'Los Helados del Chef'],
        icono: 'fa-shop',
        estado: 'Abierto Ahora',
        destacado: 'Corredor Transmetro Murillo'
    },
    'cocina-oculta': {
        id: 'cocina-oculta',
        nombre: 'Sede 3: Cocina Oculta Caribe (Dark Kitchen)',
        tipo: 'Dark Kitchen Hub 100% Digital',
        badge: 'Cocina Oculta',
        direccion: 'Cra 43 # 72-10 (Hub Logístico Digital), Barranquilla',
        telefono: '3045678901',
        whatsapp: '573045678901',
        horario: 'Lun - Dom: 11:30 AM - 11:00 PM',
        tiempoEntrega: '20 - 30 min',
        cobertura: 'Centro, Boston, El Prado, Bellavista, Alto Prado, Riomar, Villa Carolina.',
        costoEnvio: 4000,
        servicios: ['100% Delivery Digital', 'Despacho Exprés Web', 'Rappi / Domicilios WhatsApp'],
        icono: 'fa-motorcycle',
        estado: 'Abierto Ahora',
        destacado: 'Hub tecnológico de alta velocidad'
    }
};

// 2. CATÁLOGO COMPLETO DE PRODUCTOS (CON BRUSH & BRANDING DEL CHEF)
const PRODUCTOS_DATA = [
    // --- COMBOS BROASTER CRUJIENTES ---
    {
        id: 'c-personal',
        nombre: 'Combo Personal Crunch (2 Presas)',
        categoria: 'personales',
        popular: true,
        precio: 18900,
        imagen: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80',
        descripcion: '2 presas doradas de pollo broaster con receta secreta (+10 años), papas a la francesa crujientes, arepa con mantequilla, ensalada coleslaw y gaseosa 250ml.',
        presas: '2 Presas Seleccionadas',
        badge: '⭐ El Más Pedido'
    },
    {
        id: 'c-duo',
        nombre: 'Combo Dúo Caribeño (4 Presas)',
        categoria: 'personales',
        popular: true,
        precio: 27400,
        imagen: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=700&q=80',
        descripcion: 'Precio de referencia del Plan de Negocio SENA ($27.400). 4 presas de pollo broaster crujiente, 2 porciones de papas, 2 arepitas, miel artesanal y 2 gaseosas.',
        presas: '4 Presas (Pechuga, Muslo, Ala y Contramuslo)',
        badge: '🔥 Precio Fondo Emprender'
    },
    {
        id: 'c-trio',
        nombre: 'Combo Trío Crunch (6 Presas)',
        categoria: 'personales',
        popular: false,
        precio: 39900,
        imagen: 'https://images.unsplash.com/photo-1527477378408-1bc8b603d7c5?auto=format&fit=crop&w=700&q=80',
        descripcion: '6 presas de pollo broaster marinadas con la receta secreta, papas familiares, arepitas paisas, salsas de la casa y gaseosa 1.5 Litros.',
        presas: '6 Presas Mixtas',
        badge: 'Crujiente al Máximo'
    },
    {
        id: 'c-familiar-8',
        nombre: 'Combo Familiar Caribe (8 Presas)',
        categoria: 'familiares',
        popular: true,
        precio: 52900,
        imagen: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80',
        descripcion: '8 presas jugosas con apanado escamoso broaster, canastilla doble de papas a la francesa, 4 arepas fritas, salsa tártara del Chef y gaseosa 1.5L.',
        presas: '8 Presas Variadas',
        badge: '👨‍👩‍👧‍👦 Favorito de Familias'
    },
    {
        id: 'c-balde-12',
        nombre: 'Mega Balde Broaster (12 Presas)',
        categoria: 'familiares',
        popular: false,
        precio: 72900,
        imagen: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=700&q=80',
        descripcion: 'Balde gigante con 12 presas recién fritas en freidora de alta presión, porción extra de papas, 6 arepas, salsas variadas y 2 gaseosas 1.5L.',
        presas: '12 Presas Seleccionadas',
        badge: '👑 El Rey de la Fiesta'
    },

    // --- BURGERS & TENDERS ---
    {
        id: 'b-crispy',
        nombre: 'Broaster Burger Crispy Chef',
        categoria: 'burgers',
        popular: true,
        precio: 21900,
        imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
        descripcion: 'Pechuga entera apanada estilo broaster crujiente, queso cheddar fundido, tocineta ahumada, lechuga fresca, tomate y salsa tártara en pan brioche artesanal con papas.',
        presas: 'Pechuga 180g Crujiente',
        badge: '🍔 100% Pechuga'
    },
    {
        id: 't-alitas-bbq',
        nombre: 'Alitas Broaster Glaseadas (8 Unds)',
        categoria: 'burgers',
        popular: false,
        precio: 24900,
        imagen: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80',
        descripcion: '8 alitas crujientes bañadas en tu salsa favorita (BBQ Ahumada del Chef, Miel Mostaza o Picante Suave) acompañadas de bastones de apio y papas.',
        presas: '8 Alitas Completas',
        badge: 'Salsa a Elección'
    },
    {
        id: 't-tenders',
        nombre: 'Tenders de Pollo Apanados (6 Unds)',
        categoria: 'burgers',
        popular: false,
        precio: 19900,
        imagen: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80',
        descripcion: '6 filetes de solomillo de pechuga extra crocantes con miel mostaza artesanal y porción de papas fritas doradas.',
        presas: '6 Tenders 100% Pechuga',
        badge: 'Sin Hueso'
    },

    // --- LÍNEA GOURMET: LOS HELADOS DEL CHEF (55% MARGEN) ---
    {
        id: 'h-sundae-maracuya',
        nombre: 'Sundae Crunch Maracuyá Caribe',
        categoria: 'helados',
        popular: true,
        precio: 6500,
        imagen: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80',
        descripcion: 'Helado suave artesanal de vainilla gourmet bañado con reducción de maracuyá costeño natural y lluvia crocante de galleta waffle.',
        presas: 'Vaso Gourmet 8oz',
        badge: '🍨 Los Helados del Chef'
    },
    {
        id: 'h-copa-oreo',
        nombre: 'Copa Broaster Oreo & Arequipe',
        categoria: 'helados',
        popular: true,
        precio: 8500,
        imagen: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80',
        descripcion: 'Helado artesanal doble capa con trozos de galleta Oreo original, generoso arequipe colombiano y crema chantilly.',
        presas: 'Copa Gourmet 12oz',
        badge: '🍨 Los Helados del Chef'
    },
    {
        id: 'h-cono-doble',
        nombre: 'Cono Doble Artesanal Waffle',
        categoria: 'helados',
        popular: false,
        precio: 4500,
        imagen: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=700&q=80',
        descripcion: 'Galleta cono waffle horneada con dos bolas de helado suave a elección (Vainilla Francesa, Fresa Silvestre o Chocolate Suizo).',
        presas: 'Cono Waffle Frito',
        badge: '🍨 Los Helados del Chef'
    },
    {
        id: 'h-malteada',
        nombre: 'Malteada Espesa Chocolate Belga',
        categoria: 'helados',
        popular: false,
        precio: 9900,
        imagen: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80',
        descripcion: 'Malteada espesa batida al instante con helado premium, leche entera de hacienda, sirope de chocolate y toque de canela.',
        presas: 'Vaso 16oz con Sorbeto',
        badge: '🍨 Los Helados del Chef'
    },

    // --- BEBIDAS Y ACOMPAÑAMIENTOS ---
    {
        id: 'a-papas',
        nombre: 'Porción de Papas a la Francesa',
        categoria: 'bebidas',
        popular: false,
        precio: 5500,
        imagen: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80',
        descripcion: 'Papas corte delgado fritas al punto exacto con sal marina y salsas tártara y tomate.',
        presas: 'Porción 200g',
        badge: 'Acompañamiento'
    },
    {
        id: 'a-gaseosa-15',
        nombre: 'Gaseosa Postobón / Coca-Cola 1.5L',
        categoria: 'bebidas',
        popular: false,
        precio: 7500,
        imagen: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80',
        descripcion: 'Manzana Postobón, Colombiana, Cuatro o Coca-Cola bien fría para compartir.',
        presas: 'Botella 1.5 Litros',
        badge: 'Bebida Familiar'
    }
];

// 3. ESTADO GLOBAL DE LA APP
let sedeActualId = localStorage.getItem('broaster_sede_activa') || 'soledad';
let carrito = JSON.parse(localStorage.getItem('broaster_carrito') || '[]');
let categoriaFiltro = 'todos';
let busquedaFiltro = '';
let heroSwiperInstance = null;
let heladosSwiperInstance = null;

// 4. INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    initSwipers();
    renderSedes();
    actualizarSedeUI(sedeActualId);
    renderProductos();
    renderHeladosCarrusel();
    renderCarrito();
});

// 5. SWIPER INITS
function initSwipers() {
    heroSwiperInstance = new Swiper('.heroSwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    heladosSwiperInstance = new Swiper('.heladosSwiper', {
        slidesPerView: 1.2,
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        }
    });
}

// 6. RENDER DE SEDES CARIBE (MEJORADA VS OFICIAL)
function renderSedes() {
    const grid = document.getElementById('sedesGrid');
    if (!grid) return;

    grid.innerHTML = Object.values(SEDES_CARIBE).map(sede => {
        const esActiva = sede.id === sedeActualId;
        const borderClase = esActiva ? 'border-crunch-500 shadow-xl shadow-crunch-500/10' : 'border-white/10 hover:border-white/20';

        return `
            <div class="sede-card ${esActiva ? 'active-sede' : ''} bg-carbon-800/90 rounded-3xl p-6 border ${borderClase} transition duration-300 flex flex-col justify-between relative overflow-hidden" id="card-sede-${sede.id}">
                ${esActiva ? `
                    <div class="absolute -top-1 right-6 bg-gradient-to-r from-crunch-500 to-crunch-600 text-carbon-950 font-black text-[10px] uppercase px-3 py-1 rounded-b-xl shadow">
                        <i class="fas fa-check-circle mr-1"></i> Punto Seleccionado
                    </div>
                ` : ''}

                <div>
                    <!-- Header Sede -->
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 rounded-2xl ${sede.id === 'cocina-oculta' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-broaster-500/20 text-broaster-400'} flex items-center justify-center text-xl shrink-0">
                            <i class="fas ${sede.icono}"></i>
                        </div>
                        <div>
                            <span class="text-[10px] uppercase tracking-wider font-extrabold ${sede.id === 'cocina-oculta' ? 'text-emerald-400' : 'text-crunch-400'}">
                                ${sede.badge}
                            </span>
                            <h3 class="text-base font-extrabold text-white leading-tight">
                                ${sede.nombre}
                            </h3>
                        </div>
                    </div>

                    <!-- Datos Clave -->
                    <div class="space-y-2 text-xs text-slate-300 mb-4">
                        <div class="flex items-start gap-2">
                            <i class="fas fa-map-marker-alt text-broaster-500 mt-0.5 shrink-0"></i>
                            <span class="text-slate-300 font-medium">${sede.direccion}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i class="fas fa-motorcycle text-crunch-400 shrink-0"></i>
                            <span>Entrega: <strong>${sede.tiempoEntrega}</strong> • Domicilio $${sede.costoEnvio.toLocaleString('es-CO')}</span>
                        </div>
                        <div class="flex items-center gap-2 text-emerald-400 font-bold">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>${sede.estado} • ${sede.horario}</span>
                        </div>
                    </div>

                    <!-- Cobertura de Barrios -->
                    <div class="bg-carbon-900/80 rounded-2xl p-3 mb-4 border border-white/5 text-[11px]">
                        <strong class="text-white block mb-0.5"><i class="fas fa-shield-alt text-crunch-400 mr-1"></i> Cobertura:</strong>
                        <p class="text-slate-400 leading-relaxed">${sede.cobertura}</p>
                    </div>

                    <!-- Servicios incluidos -->
                    <div class="flex flex-wrap gap-1.5 mb-5">
                        ${sede.servicios.map(s => `
                            <span class="bg-white/5 border border-white/5 text-slate-300 text-[10px] px-2 py-0.5 rounded-lg">
                                ${s}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <!-- Botón de Selección / Pedido Directo -->
                <div class="pt-3 border-t border-white/5 flex items-center gap-2">
                    <button onclick="cambiarSede('${sede.id}')" class="flex-1 ${esActiva ? 'bg-crunch-500 text-carbon-950 hover:bg-crunch-400' : 'bg-white/10 text-white hover:bg-white/15'} font-extrabold text-xs py-3 px-4 rounded-xl transition flex items-center justify-center gap-2">
                        <i class="fas ${esActiva ? 'fa-check' : 'fa-hand-pointer'}"></i>
                        <span>${esActiva ? 'Sede Activa' : 'Elegir esta Sede'}</span>
                    </button>
                    <a href="https://wa.me/${sede.whatsapp}?text=${encodeURIComponent('¡Hola ' + sede.nombre + '! Quiero información del menú y domicilios.')}" target="_blank" class="w-11 h-11 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition border border-emerald-500/30" title="Chatear con este punto">
                        <i class="fab fa-whatsapp text-lg"></i>
                    </a>
                </div>

            </div>
        `;
    }).join('');
}

// 7. CAMBIO DE SEDE
function cambiarSede(sedeId) {
    if (!SEDES_CARIBE[sedeId]) return;
    sedeActualId = sedeId;
    localStorage.setItem('broaster_sede_activa', sedeId);

    actualizarSedeUI(sedeId);
    renderSedes();
    renderCarrito(); // actualiza costo de envio y telefono

    // Notificación Toast
    mostrarToast(`Punto activo cambiado a: ${SEDES_CARIBE[sedeId].nombre}`);
}

function actualizarSedeUI(sedeId) {
    const sede = SEDES_CARIBE[sedeId];
    if (!sede) return;

    // Header selects
    const headerSelect = document.getElementById('sedeHeaderSelect');
    if (headerSelect) headerSelect.value = sedeId;

    const carritoSelect = document.getElementById('carritoSedeSelect');
    if (carritoSelect) carritoSelect.value = sedeId;

    // Labels
    const sedeMovilLabel = document.getElementById('sedeMovilLabel');
    if (sedeMovilLabel) sedeMovilLabel.innerText = `Sede: ${sede.nombre.split(':')[1] || sede.nombre}`;

    const nombreSedeBanner = document.getElementById('nombreSedeActivaBanner');
    if (nombreSedeBanner) nombreSedeBanner.innerText = sede.nombre;

    const carritoSedeLabel = document.getElementById('carritoSedeLabel');
    if (carritoSedeLabel) carritoSedeLabel.innerText = `Sede: ${sede.nombre}`;

    const carritoEnvio = document.getElementById('carritoEnvio');
    if (carritoEnvio) carritoEnvio.innerText = `$${sede.costoEnvio.toLocaleString('es-CO')}`;
}

// 8. RENDER DE PRODUCTOS
function renderProductos() {
    const grid = document.getElementById('productosGrid');
    const noResultados = document.getElementById('noResultados');
    if (!grid) return;

    let filtrados = PRODUCTOS_DATA;

    // Filtro por categoría
    if (categoriaFiltro === 'populares') {
        filtrados = filtrados.filter(p => p.popular);
    } else if (categoriaFiltro !== 'todos') {
        filtrados = filtrados.filter(p => p.categoria === categoriaFiltro);
    }

    // Filtro por texto de búsqueda
    if (busquedaFiltro.trim() !== '') {
        const query = busquedaFiltro.toLowerCase().trim();
        filtrados = filtrados.filter(p => 
            p.nombre.toLowerCase().includes(query) || 
            p.descripcion.toLowerCase().includes(query) ||
            p.presas.toLowerCase().includes(query)
        );
    }

    if (filtrados.length === 0) {
        grid.innerHTML = '';
        noResultados.classList.remove('hidden');
        return;
    } else {
        noResultados.classList.add('hidden');
    }

    grid.innerHTML = filtrados.map(prod => {
        const esHelado = prod.categoria === 'helados';
        const cardBorder = esHelado ? 'border-helados-500/30 hover:border-helados-500' : 'border-white/10 hover:border-crunch-500/50';

        return `
            <div class="product-card bg-carbon-800 rounded-3xl overflow-hidden border ${cardBorder} flex flex-col justify-between shadow-lg">
                <!-- Imagen con Badge -->
                <div class="relative h-48 sm:h-52 overflow-hidden group">
                    <img src="${prod.imagen}" alt="${prod.nombre}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='https://elbroasterdelchef.com.co/image/pollo-broaster.jpg';">
                    <div class="absolute inset-0 bg-gradient-to-t from-carbon-900 via-transparent to-transparent"></div>
                    
                    <span class="absolute top-3 left-3 bg-carbon-950/80 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-white/10 shadow">
                        ${prod.badge}
                    </span>

                    <span class="absolute bottom-3 right-3 bg-carbon-950/90 text-crunch-400 font-extrabold text-xs px-2.5 py-1 rounded-xl border border-crunch-500/30">
                        ${prod.presas}
                    </span>
                </div>

                <!-- Info y Contenido -->
                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="text-base font-extrabold text-white leading-snug hover:text-crunch-400 transition">
                            ${prod.nombre}
                        </h3>
                        <p class="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                            ${prod.descripcion}
                        </p>
                    </div>

                    <div class="pt-4 mt-4 border-t border-white/5 flex items-center justify-between gap-2">
                        <div>
                            <span class="text-[10px] text-slate-400 block font-semibold">Precio</span>
                            <span class="text-lg font-black text-white">
                                $${prod.precio.toLocaleString('es-CO')}
                            </span>
                        </div>

                        <div class="flex items-center gap-1.5">
                            <button onclick="agregarAlCarrito('${prod.id}')" class="bg-broaster-600 hover:bg-broaster-500 text-white font-extrabold text-xs py-2.5 px-3.5 rounded-xl shadow-md transition flex items-center gap-1.5 transform active:scale-95" title="Añadir a mi pedido">
                                <i class="fas fa-plus"></i>
                                <span class="hidden sm:inline">Agregar</span>
                            </button>
                            <button onclick="pedirDirectoWhatsApp('${prod.id}')" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs p-2.5 rounded-xl transition" title="Pedir este producto directo por WhatsApp">
                                <i class="fab fa-whatsapp text-sm"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        `;
    }).join('');
}

// 9. RENDER CARRUSEL HELADOS DEL CHEF
function renderHeladosCarrusel() {
    const wrapper = document.getElementById('heladosCarruselWrapper');
    if (!wrapper) return;

    const helados = PRODUCTOS_DATA.filter(p => p.categoria === 'helados');

    wrapper.innerHTML = helados.map(h => `
        <div class="swiper-slide">
            <div class="bg-carbon-800 rounded-3xl overflow-hidden border border-helados-500/20 p-4 h-full flex flex-col justify-between">
                <div>
                    <div class="relative h-40 rounded-2xl overflow-hidden mb-3">
                        <img src="${h.imagen}" alt="${h.nombre}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://elbroasterdelchef.com.co/image/logo-helados.png';">
                        <span class="absolute bottom-2 left-2 bg-helados-500 text-white text-[10px] font-black px-2 py-0.5 rounded-lg shadow">
                            55% Margen
                        </span>
                    </div>
                    <h4 class="font-extrabold text-white text-sm">${h.nombre}</h4>
                    <p class="text-[11px] text-slate-400 mt-1 line-clamp-2">${h.descripcion}</p>
                </div>
                <div class="pt-3 mt-3 border-t border-white/5 flex items-center justify-between">
                    <span class="text-crunch-400 font-extrabold text-sm">$${h.precio.toLocaleString('es-CO')}</span>
                    <button onclick="agregarAlCarrito('${h.id}')" class="bg-helados-500 hover:bg-helados-600 text-white font-bold text-xs px-3 py-1.5 rounded-xl transition">
                        + Agregar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// 10. FILTROS Y BÚSQUEDA
function filtrarCategoria(cat) {
    categoriaFiltro = cat;
    
    // Actualizar botones UI
    document.querySelectorAll('#categoriasBar button').forEach(btn => {
        if (btn.getAttribute('data-cat') === cat) {
            btn.classList.add('active', 'bg-broaster-600', 'text-white', 'shadow-md');
            btn.classList.remove('bg-carbon-800', 'text-slate-300');
        } else {
            btn.classList.remove('active', 'bg-broaster-600', 'text-white', 'shadow-md');
            btn.classList.add('bg-carbon-800', 'text-slate-300');
        }
    });

    renderProductos();
}

function filtrarPorTexto(valor) {
    busquedaFiltro = valor;
    const btnLimpiar = document.getElementById('limpiarBusquedaBtn');
    if (btnLimpiar) {
        if (valor.trim().length > 0) {
            btnLimpiar.classList.remove('hidden');
        } else {
            btnLimpiar.classList.add('hidden');
        }
    }
    renderProductos();
}

function limpiarBusqueda() {
    const input = document.getElementById('busquedaInput');
    if (input) input.value = '';
    busquedaFiltro = '';
    const btnLimpiar = document.getElementById('limpiarBusquedaBtn');
    if (btnLimpiar) btnLimpiar.classList.add('hidden');
    renderProductos();
}

// 11. CARRITO DE COMPRAS INTERACTIVO
function toggleCarrito() {
    const drawer = document.getElementById('carritoDrawer');
    const panel = document.getElementById('carritoPanel');
    const backdrop = document.getElementById('carritoBackdrop');

    if (panel.classList.contains('translate-x-full')) {
        drawer.classList.remove('pointer-events-none');
        backdrop.classList.remove('opacity-0');
        panel.classList.remove('translate-x-full');
    } else {
        panel.classList.add('translate-x-full');
        backdrop.classList.add('opacity-0');
        setTimeout(() => drawer.classList.add('pointer-events-none'), 300);
    }
}

function agregarAlCarrito(productoId) {
    const prod = PRODUCTOS_DATA.find(p => p.id === productoId);
    if (!prod) return;

    const itemExistente = carrito.find(item => item.id === productoId);
    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({
            id: prod.id,
            nombre: prod.nombre,
            precio: prod.precio,
            imagen: prod.imagen,
            cantidad: 1
        });
    }

    guardarCarrito();
    renderCarrito();
    mostrarToast(`Agregado al pedido: ${prod.nombre}`);

    // Si el carrito estaba cerrado, abrimos brevemente o resaltamos
    const contador = document.getElementById('carritoContador');
    if (contador) {
        contador.classList.add('animate-bounce');
        setTimeout(() => contador.classList.remove('animate-bounce'), 1000);
    }
}

function cambiarCantidadCarrito(productoId, delta) {
    const item = carrito.find(i => i.id === productoId);
    if (!item) return;

    item.cantidad += delta;
    if (item.cantidad <= 0) {
        carrito = carrito.filter(i => i.id !== productoId);
    }

    guardarCarrito();
    renderCarrito();
}

function eliminarDelCarrito(productoId) {
    carrito = carrito.filter(i => i.id !== productoId);
    guardarCarrito();
    renderCarrito();
}

function guardarCarrito() {
    localStorage.setItem('broaster_carrito', JSON.stringify(carrito));
}

function renderCarrito() {
    const lista = document.getElementById('carritoLista');
    const contador = document.getElementById('carritoContador');
    const subtotalEl = document.getElementById('carritoSubtotal');
    const totalEl = document.getElementById('carritoTotal');
    const totalHeaderEl = document.getElementById('carritoTotalHeader');
    const sede = SEDES_CARIBE[sedeActualId] || SEDES_CARIBE['soledad'];

    const totalUnidades = carrito.reduce((acc, curr) => acc + curr.cantidad, 0);
    const subtotal = carrito.reduce((acc, curr) => acc + (curr.precio * curr.cantidad), 0);
    const costoEnvio = subtotal > 0 ? sede.costoEnvio : 0;
    const total = subtotal + costoEnvio;

    if (contador) contador.innerText = totalUnidades;
    if (subtotalEl) subtotalEl.innerText = `$${subtotal.toLocaleString('es-CO')}`;
    if (totalEl) totalEl.innerText = `$${total.toLocaleString('es-CO')}`;
    if (totalHeaderEl) totalHeaderEl.innerText = `$${total.toLocaleString('es-CO')}`;

    if (!lista) return;

    if (carrito.length === 0) {
        lista.innerHTML = `
            <div class="text-center py-12 text-slate-500">
                <i class="fas fa-shopping-basket text-4xl mb-3 text-slate-600"></i>
                <p class="font-bold text-white text-sm">Tu carrito está vacío</p>
                <p class="text-xs text-slate-400 mt-1">Explora nuestro menú y añade tu combo favorito.</p>
                <button onclick="toggleCarrito()" class="mt-4 bg-broaster-600 hover:bg-broaster-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition">
                    Ver Menú
                </button>
            </div>
        `;
        return;
    }

    lista.innerHTML = carrito.map(item => `
        <div class="bg-carbon-800 p-3 rounded-2xl border border-white/5 flex items-center justify-between gap-3">
            <img src="${item.imagen}" alt="${item.nombre}" class="w-14 h-14 rounded-xl object-cover shrink-0" onerror="this.onerror=null; this.src='https://elbroasterdelchef.com.co/image/pollo-broaster.jpg';">
            
            <div class="flex-1 min-w-0">
                <h4 class="text-xs font-bold text-white truncate">${item.nombre}</h4>
                <div class="text-xs font-extrabold text-crunch-400 mt-0.5">
                    $${(item.precio * item.cantidad).toLocaleString('es-CO')}
                </div>
            </div>

            <!-- Botones Incremento / Decremento -->
            <div class="flex items-center gap-1.5 bg-carbon-900 rounded-xl p-1 border border-white/5">
                <button onclick="cambiarCantidadCarrito('${item.id}', -1)" class="w-6 h-6 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 flex items-center justify-center text-xs">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="text-xs font-black text-white px-1.5">${item.cantidad}</span>
                <button onclick="cambiarCantidadCarrito('${item.id}', 1)" class="w-6 h-6 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 flex items-center justify-center text-xs">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <!-- Botón Eliminar -->
            <button onclick="eliminarDelCarrito('${item.id}')" class="text-slate-500 hover:text-broaster-500 text-xs p-1">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// 12. ENVIAR PEDIDO POR WHATSAPP A LA SEDE SELECCIONADA
function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        alert('Por favor agrega al menos un combo o helado a tu pedido.');
        return;
    }

    const sede = SEDES_CARIBE[sedeActualId] || SEDES_CARIBE['soledad'];
    const nombreCliente = document.getElementById('pedidoClienteNombre').value.trim() || 'Cliente';
    const direccionCliente = document.getElementById('pedidoClienteDireccion').value.trim();
    const metodoPago = document.getElementById('pedidoMetodoPago').value;

    if (!direccionCliente) {
        alert('Por favor digita tu dirección y barrio de entrega en Barranquilla/Soledad.');
        document.getElementById('pedidoClienteDireccion').focus();
        return;
    }

    const subtotal = carrito.reduce((acc, curr) => acc + (curr.precio * curr.cantidad), 0);
    const total = subtotal + sede.costoEnvio;

    let mensaje = `*🍗 ¡HOLA BROASTER DEL CHEF CARIBE!* \n`;
    mensaje += `Quiero confirmar mi pedido para despacho desde la sede:\n`;
    mensaje += `📍 *${sede.nombre}* (${sede.direccion})\n\n`;
    mensaje += `*DATOS DE ENTREGA:*\n`;
    mensaje += `👤 *Cliente:* ${nombreCliente}\n`;
    mensaje += `🏠 *Dirección y Barrio:* ${direccionCliente}\n`;
    mensaje += `💳 *Método de Pago:* ${metodoPago}\n\n`;
    mensaje += `*DETALLE DE MI PEDIDO:*\n`;

    carrito.forEach((item, index) => {
        mensaje += ` ${index + 1}. ${item.cantidad}x ${item.nombre} - $${(item.precio * item.cantidad).toLocaleString('es-CO')}\n`;
    });

    mensaje += `\nSubtotal: $${subtotal.toLocaleString('es-CO')}\n`;
    mensaje += `Domicilio: $${sede.costoEnvio.toLocaleString('es-CO')}\n`;
    mensaje += `*TOTAL A PAGAR: $${total.toLocaleString('es-CO')}*\n\n`;
    mensaje += `🚀 _Pedido generado desde el portal oficial Broaster del Chef Caribe._`;

    const url = `https://wa.me/${sede.whatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// 13. PEDIDO DIRECTO DE UN SOLO PRODUCTO
function pedirDirectoWhatsApp(productoId) {
    const prod = PRODUCTOS_DATA.find(p => p.id === productoId);
    if (!prod) return;

    const sede = SEDES_CARIBE[sedeActualId] || SEDES_CARIBE['soledad'];
    let mensaje = `*🍗 ¡HOLA ${sede.nombre.toUpperCase()}!* \n`;
    mensaje += `Deseo pedir directamente el siguiente producto:\n\n`;
    mensaje += `👉 *${prod.nombre}*\n`;
    mensaje += `💰 *Precio:* $${prod.precio.toLocaleString('es-CO')}\n`;
    mensaje += `📦 *Detalles:* ${prod.presas}\n\n`;
    mensaje += `¿Tienen disponibilidad para envío inmediato a mi barrio?`;

    const url = `https://wa.me/${sede.whatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// 14. MODAL FONDO EMPRENDER
function abrirModalFondoEmprender() {
    const modal = document.getElementById('modalFondoEmprender');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function cerrarModalFondoEmprender() {
    const modal = document.getElementById('modalFondoEmprender');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// 15. UTILIDADES & TOAST
function scrollToSedes() {
    const sedesSec = document.getElementById('sedes');
    if (sedesSec) {
        sedesSec.scrollIntoView({ behavior: 'smooth' });
    }
}

function mostrarToast(mensaje) {
    let toast = document.getElementById('broasterToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'broasterToast';
        toast.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-carbon-950 text-white border border-crunch-500/40 px-4 py-2.5 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2 pointer-events-none transition-all duration-300 opacity-0 translate-y-3';
        document.body.appendChild(toast);
    }

    toast.innerHTML = `<i class="fas fa-check-circle text-crunch-400"></i> <span>${mensaje}</span>`;
    toast.classList.remove('opacity-0', 'translate-y-3');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-3');
    }, 2800);
}
