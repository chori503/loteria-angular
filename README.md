# Lotería Angular

Aplicación web desarrollada con Angular que simula el juego tradicional de la lotería, permitiendo visualizar cartas y recrear la dinámica del juego de forma digital.

## Descripción

Este proyecto es una aplicación frontend construida con Angular 11 que implementa una versión digital del clásico juego de lotería. Está orientado a demostrar el manejo de componentes, eventos y renderizado dinámico, así como la integración de una interfaz moderna utilizando ng-zorro.

## Tecnologías utilizadas

Angular 11  
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

Instalar dependencia compatible con Node 14:

```bash
npm install angular-cli-ghpages@0.6 --save-dev
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
Este proyecto usa Angular 11 y es compatible con Node.js 14

## Autor
https://github.com/chori50
