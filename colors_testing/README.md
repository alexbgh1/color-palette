# Scrapping y "análisis" paleta de colores tailwindcss

La idea era scrappear las paletas de colores de **tailwindcss**, y analizarlas para ver si había alguna relación entre los colores, y así poder generar una paleta de colores en base a 3 colores.

## Scraping

El scrapping fue un poco innecesario porque tailwindcss tiene la paleta pública en **tailwind.config.js**, pero no lo leí.

```javascript
// tailwind.config.js
const colors = require("tailwindcss/colors");
console.log(colors);
```

## Sobre los datos

Se graficaron de distintas formas los datos, en donde por cada espacio de color se veía una curva que cambiaba ligeramente según la paleta de colores.

Esto se hizo por curiosidad para entender mejor cómo se formaban las paletas de colores, y si había alguna relación entre los colores. Pero no pude llegar a una solución que generalizará bien todas las paletas de colores.
