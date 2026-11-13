# 🍗 Broaster del Chef Caribe
### Proyecto Piloto de Adquisición de Franquicia • Fondo Emprender SENA
**Centro Nacional Colombo Alemán (CNCA) - Regional Atlántico • Nodo TICs (Ficha 2879654)**  
**Líder de Proyecto y Arquitectura Digital:** Daniel Manzanera Salcedo

---

## 📌 Resumen Ejecutivo del Modelo Piloto
Este proyecto implementa el despliegue de franquicia oficial de **El Broaster del Chef** en la Región Caribe bajo un modelo tripartito:
1. **1 Cocina Oculta (Dark Kitchen Hub):** Ubicada estratégicamente para abastecer el 100% de la demanda digital de domicilios rápidos (20-30 min) en el área metropolitana de Barranquilla vía Web y WhatsApp.
2. **2 Locales Físicos en Barrios Populares:**
   * **Local 1 (Barrio Soledad):** Formato Restaurante Full (Calle 30) con atención en mesa, vitrina térmica de 3 bandejas y take-away.
   * **Local 2 (Barrio Simón Bolívar / Corredor Murillo):** Punto de alto tráfico peatonal y residencial en Barranquilla Sur.
3. **Doble Motor de Rentabilidad:** Integración de la línea complementaria **«Los Helados del Chef»** (heladería gourmet con 55% de margen sin regalías).

---

## 🚀 Estructura del Proyecto
* [`index.html`](index.html): Menú digital interactivo, carruseles de producto, selector de sede en tiempo real y modal con la sustentación del Fondo Emprender.
* [`styles.css`](styles.css): Paleta corporativa oficial (Rojo Broaster `#e63946`, Dorado Crunch `#f59e0b`, Los Helados del Chef `#00a8e8`).
* [`app.js`](app.js): Lógica de cambio de punto de venta, filtros por categoría, búsqueda instantánea, carrito interactivo y generador de pedidos por WhatsApp con sede dinámica.
* [`vercel.json`](vercel.json): Configuración de despliegue optimizado en Vercel.
* [`iniciar-broaster-caribe.bat`](iniciar-broaster-caribe.bat): Lanzador local con servidor HTTP en el puerto 3010.

---

## 🛠️ Ejecución Local
Hacer doble clic en `iniciar-broaster-caribe.bat` o abrir directamente `index.html` en el navegador.

## ☁️ Despliegue en Vercel
```bash
# Desde la carpeta C:\broasterdelchef-caribe
npx vercel
```
