# Generador de Paletas de Colores

Página que en base a **3 colores** genera una paleta de colores con distintos **"steps" (pasos)**, en base a [interpolación lineal](https://en.wikipedia.org/wiki/Linear_interpolation), de los colores **RGB**.

Hay distintas funciones más que no fueron aplicadas, la idea era buscar alguna relación en base a los valores **RGB**, tomando como base las paletas de colores de [tailwindcss](https://tailwindcss.com/docs/customizing-colors).

si bien había una relación entre los colores, no era tan simple como una función lineal, por lo que se optó por la interpolación lineal. [Analizando la paleta de colores de tailwindcss](https://github.com/alexbgh1/color-palette/blob/main/colors_testing/plot_colors.ipynb)

## Preview

[Visitar la página](https://color-palette-eosin.vercel.app/)

### Incial

![Inicial](https://i.imgur.com/dFhRH8x.png)

### Guardando paletas (LocalStorage)

![Guardando paletas](https://i.imgur.com/owCZv4T.png)

### Modo oscuro

![Modo oscuro](https://i.imgur.com/M9pIk1s.png)

## Tecnologías

- [React](https://es.reactjs.org/)
- [Next.js 13/app](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Características consideradas

- [x] Generar paleta de colores en base a 3 colores
- [x] Generar paleta de colores en base a un "step" (pasos)
- [x] Guardar paletas en LocalStorage
- [x] Exportar la paleta de colores como .txt
- [x] Modo oscuro

## Soporte CSS

- [x] Desktop
- [x] Tablet
- [x] Mobile
