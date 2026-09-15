---
title: Editor de código (Geany)
description: Geany, el editor simple que usamos para cursar Introducción a la Programación y Programación Estructurada.
---

Para programar en **Introducción a la Programación** y **Programación Estructurada** usamos [Geany](https://www.geany.org/).

## ¿Por qué Geany?

- **Es simple y liviano**: arranca al instante y no abruma con opciones, ideal para arrancar a programar.
- **No tiene IA integrada**: así aprendés de verdad. Escribir el código vos, equivocarte y corregir es parte del aprendizaje; con el autocompletado de una IA no te llevás las herramientas que la carrera espera que internalices.
- **Multiplataforma y gratis**: corre en Windows, Linux y macOS, y es software libre.
- **Standard en la carrera**: es el editor que se usa en clase tanto para Python como para C.

## Instalación

- **Windows**: bajá el instalador desde la [página oficial](https://www.geany.org/download/releases/). Para Python, instalá [Python](https://www.python.org/downloads/) aparte y marcá la opción de agregarlo al PATH durante la instalación.
- **Linux**: está en los repos de todas las distros; por ejemplo `sudo apt install geany` (Debian/Ubuntu) o `sudo pacman -S geany` (Arch).
- **macOS**: podés usar el instalador oficial o `brew install --cask geany`.

## ¿Cómo se usa?

1. Creá un archivo nuevo y guardalo con la extensión correcta: `.py` para Python o `.c` para C. Geany resalta la sintaxis según la extensión.
2. Escribí tu código y ejecutalo con el botón de **ejecutar** (o <kbd>F5</kbd>). Geany detecta el intérprete de Python o el compilador de C automáticamente.
3. La salida y los errores aparecen en el panel inferior. Además de <kbd>F5</kbd>, podés compilar desde el menú **Generar → Compilar** sin ejecutar.

## Consejos

- Configurá el tamaño de la fuente en **Editar → Preferencias → Interfaz**: vas a estar muchas horas mirando la pantalla.
- Usá el navegador de símbolos (panel lateral derecho) para saltar entre funciones en archivos de C grandes.
- En Python podés indentar y desindentar bloques de código seleccionados con <kbd>Tab</kbd> y <kbd>Shift</kbd> + <kbd>Tab</kbd>.
