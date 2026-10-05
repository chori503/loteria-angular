# Lotería Angular

Aplicación web desarrollada con Angular que simula el juego tradicional de la lotería, permitiendo visualizar cartas y recrear la dinámica del juego de forma digital.

## Descripción

Este proyecto es una aplicación frontend construida con Angular 22 que implementa una versión digital del clásico juego de lotería. Está orientado a demostrar el manejo de componentes, eventos y renderizado dinámico, así como la integración de una interfaz moderna utilizando ng-zorro.

## Funcionalidades

- Las cartas se barajan y se cantan una por una, con su verso y un contador de segundos.
- **Barra espaciadora**: comenzar juego, gritar ¡Lotería! y volver a jugar. **P**: pausar / reanudar.
- **Pausa** desde el ícono del encabezado, sin perder la fracción de segundo.
- Tira con las **cartas que ya salieron** durante el juego.
- Al gritar ¡Lotería!: buscador de cartas (ignora acentos) y **verificación de tableros**, mostrando qué cartas del tablero ya salieron y cuáles faltan.
- **Ajustes** que se guardan en el navegador: segundos por carta y **cantar las cartas en voz alta** (desactivado por defecto).
- Las cartas se descargan una sola vez al inicio (WebP, ~0.7 MB en total) y se muestran desde memoria.
- Diseño adaptable a escritorio, tablet y celular (vertical y horizontal).

## Tecnologías utilizadas

Angular 22  
TypeScript  
RxJS  
ng-zorro-antd  
HTML5 / CSS3  

## Estructura del proyecto

src/  
 ├── app/            Componentes principales  
 ├── assets/         Imágenes (cartas de lotería)  
 ├── environments/   Configuración por ambiente  
 └── index.html  
scripts/  
 └── convert-cards.py   Genera las cartas WebP recortadas a partir de los PNG  
.github/workflows/  
 └── deploy.yml         Deploy automático a GitHub Pages  

## Cartas

Los PNG originales (512×512 con borde transparente) están en `src/assets/img/cards/` y no se publican. La app usa las versiones `.webp` recortadas. Si agregas o cambias una carta, pon el PNG en esa carpeta y regenera los WebP:

```bash
pip install pillow
python scripts/convert-cards.py
```

## Instalación

Clonar el repositorio:
```bash
git clone https://github.com/chori503/loteria-angular.git
```
```bash
cd loteria-angular
```
Instalar dependencias:
```bash
npm install
```
## Ejecución en local
```bash
npm start
```

Abrir en el navegador:

http://localhost:4200/

## Build del proyecto
```bash
npx ng build
```
Esto generará la carpeta:

dist/loteria

## Deploy en GitHub Pages

### Automático (recomendado)

Cada push a `main` corre los tests, compila y publica la app con GitHub Actions (`.github/workflows/deploy.yml`). También se puede lanzar a mano desde la pestaña **Actions**.

Configuración, una sola vez: en el repositorio ve a **Settings → Pages → Build and deployment → Source** y elige **GitHub Actions**.

### Manual

Instalar dependencia:

```bash
npm install angular-cli-ghpages --save-dev
```
Generar build con base-href:

```bash
npx ng build --base-href /loteria-angular/
```
Publicar en GitHub Pages:
```bash
npx angular-cli-ghpages --dir=dist/loteria
```
Acceder a la aplicación:
```bash
https://chori503.github.io/loteria-angular/
```
## Notas importantes

El nombre correcto de la carpeta de salida es dist/loteria
Es necesario usar --base-href /loteria-angular/ para que funcione en GitHub Pages
Ejecuta el build desde PowerShell o CMD: Git Bash convierte `/loteria-angular/` en una ruta de Windows y la página queda en blanco (si usas Git Bash, antepón `MSYS_NO_PATHCONV=1`)
Este proyecto usa Angular 22 y requiere Node.js 22.22+ o 24.15+ (probado con Node 24.21)

## Mejoras pendientes

Ideas para próximas versiones:

1. **Modo cantor + jugadores**: una pantalla grande canta las cartas y cada jugador marca su tablero desde su teléfono, con frijolitos virtuales.
2. **Evitar que la pantalla se apague** durante el juego (Wake Lock API) y botón de pantalla completa.
3. **App instalable y sin internet (PWA)**: con un service worker que guarde las cartas, se podría jugar sin conexión e instalar en el teléfono.

## Autor
https://github.com/chori503
