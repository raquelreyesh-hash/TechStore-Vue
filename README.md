# Techstore - Catálogo de productos SPA

Aplicación SPA desarrollada con Vue.

## Tecnologías utilizadas

- Vue.js
- Vue CLI
- Vuex
- Axios
- Vuetify
- Jest
- Cypress

## Arquitectura del proyecto

El proyecto sigue una arquitectura modular basada en componentes:

src/

components/
HeaderTs.vue
FooterTs.vue
ProductCard.vue

views/
ProductList.vue

services/
api.js

store/
modules/products.js

router/
index.js

App.vue
main.js

## Instalación

Clonar el repositorio:

git clone https://github.com/raquelreyesh-hash/TechStore-Vue.git

Entrar al proyecto:

cd techstore

Instalar dependencias:

npm install

## Ejecutar la aplicación

npm run serve

La aplicación se ejecutará en:

http://localhost:8080

## Ejecutar pruebas

npm run test:unit
npm run test:e2e

## API utilizada

Se utiliza la API pública:

https://fakestoreapi.com

Esta API proporciona datos de productos como:

- nombre
- precio
- imagen
- categoría
- descripción

## Justificación Técnica

Se utiliza Vue.js debido a su facilidad para crear interfaces reactivas y su arquitectura basada en componentes.

La gestión del estado se implementa con Vuex para centralizar los datos de productos y facilitar la comunicación entre componentes.

Axios se utiliza para realizar peticiones HTTP a la API REST, permitiendo manejar estados de carga y errores.

Para asegurar la calidad del software se implementaron pruebas unitarias con Jest y pruebas end-to-end con Cypress.

Finalmente, se incorpora una librería UI para mejorar la experiencia visual y garantizar un diseño responsive.

## Posibles Mejoras Futuras

- Sistema de favoritos
- Carrito de compras
- Autenticación de usuarios
- Búsqueda avanzada de productos
