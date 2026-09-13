# Guía de contribución

¡Gracias por querer aportar a **Wiki CODES**! 💚
Este proyecto lo construimos **por y para estudiantes**, así que toda ayuda suma: sumar material,
corregir errores, mejorar la redacción o proponer secciones nuevas.

## Antes de empezar

- Sé respetuoso y amable. Aplicamos el [Código de Conducta](CODE_OF_CONDUCT.md).
- Revisá si ya existe un _issue_ o una sección sobre el tema que querés tocar.
- Si tu idea es grande, abrí un _issue_ primero para charlarla con la comunidad.

## Formas de contribuir

- 📝 Agregar o actualizar apuntes, guías y recursos.
- 🐛 Corregir errores (contenido, enlaces rotos, ortografía).
- 🎨 Mejorar el diseño, la accesibilidad o la experiencia de uso.
- 💡 Proponer secciones, ideas y mejoras.

## Flujo de trabajo

1. **Hacé un fork** del repositorio (o pedí acceso como colaborador/a).
2. **Creá una rama** con un nombre claro:
   ```bash
   git checkout -b feat/apuntes-calculo
   ```
3. **Hacé tus cambios** y probá el sitio localmente.
4. **Validá la compilación** (obligatorio antes de subir):
   ```bash
   pnpm build
   ```
   No subas cambios si el build falla.
5. **Commit** con Conventional Commits **en español** (ver abajo).
6. **Abrí un Pull Request** explicando qué cambiaste y por qué.

## Convención de commits

Usamos [Conventional Commits](https://www.conventionalcommits.org) **en español**:

```
<tipo>(<ámbito opcional>): <descripción en español>
```

Tipos frecuentes: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`,
`chore`, `revert`.

Ejemplos:

```
feat(unlu): agregar calendario academico 2026
fix(sistemas): corregir correlatividades de Analisis I
docs(contributing): aclarar como validar el build
```

## Cómo agregar o editar contenido

El contenido vive en `src/content/docs/`. Cada archivo `.md` o `.mdx` es una página.

- `unlu/` → recursos de la UNLu.
- `sistemas/` → Licenciatura en Sistemas.
- `informatica/` → informática y sistemas.

Cada página empieza con un encabezado (_frontmatter_) así:

```md
---
title: Título de la página
description: Una descripción breve para buscadores y redes.
---

Acá va el contenido en Markdown.
```

Si agregás una página nueva dentro de una carpeta existente, aparece sola en el menú lateral.

## Estilo y tono

- Escribí en **español**, claro y directo, pensando en otros estudiantes.
- Preferí listas, ejemplos y pasos concretos.
- Cuidá la ortografía y los enlaces.

## ¿Dudas?

Escribinos en el [Discord](https://discord.gg/2hbjvN7KDH) o mirá la web del centro:
[codesunlu.tech](https://www.codesunlu.tech/).

¡Gracias por hacer la UNLu un poco más fácil entre todos! ❤️
