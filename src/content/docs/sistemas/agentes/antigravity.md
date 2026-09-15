---
title: Antigravity 2.0
description: Google Antigravity 2.0, la app de escritorio para orquestar agentes. Gratis para estudiantes con el plan Google AI Plus.
---

[Antigravity](https://antigravity.google/download) es la plataforma de agentes de código de Google, impulsada por Gemini. La versión **2.0** es la aplicación de escritorio independiente: una ventana propia donde le pedís tareas a los agentes, los ves trabajar en paralelo y te muestran lo que producen. Tiene ventanas nativas, paneles de agentes integrados y un espacio de ejecución completo.

Google lo describe así: *Dedicated desktop application with native windowing, integrated agent panels, and full execution workspace*. Está bastante "tirada" (no se anda con vueltas), pero es cómoda: te ocupás de qué querés que hagan los agentes y ellos del resto.

## Las diferencias entre las aplicaciones de Antigravity

En la página de descargas hay **varias formas** de usar Antigravity, y no todas son la misma aplicación:

| | Antigravity 2.0 (desktop) | Antigravity CLI | Antigravity IDE (standalone) |
| --- | --- | --- | --- |
| Interfaz | App de escritorio | Terminal (TUI) | IDE |
| Cómo laburás | Describís tareas, los agentes trabajan (sincrónico y asincrónico) | Teclado, todo desde la terminal | Escribís código y el agente te asiste |
| Varias tareas a la vez | Sí, varias en paralelo | En segundo plano sin bloquear la terminal | Una a la vez, en el editor |
| Ver el código que cambia | No directamente: revisás los artefactos que produce | No: salida en la terminal | Sí, línea por línea (aceptar/rechazar cambios) |
| Ideal para | Orquestar varios agentes y proyectos a la vez | SSH, sesiones remotas, flujo de terminal | Quien quiere programar con el agente al costado |
| Estado | La app estrella (es el futuro) | Liviana y práctica | Se mantiene, pero más "tirada" |

Todas corren sobre el **mismo harness de agentes**: cada una dale una ventana distinta a la misma inteligencia. Recomendación Google: usar la 2.0 **en conjunto con** tu editor (dual-wielding), no en reemplazo.

### Cuál bajar (y cuál no)

1. **Antigravity 2.0**: la app de escritorio, la que querés vos para arrancar.
2. **Antigravity CLI**: la misma potencia pero en terminal; la dejamos para más adelante, cuando quieras flujo por consola o por SSH.
3. **Antigravity IDE (standalone)**: cómodo pero "bastante tirado"; es para quien quiere programar directamente con el agente al costado, en el mismo editor.

:::caution
No descargues el **Antigravity SDK**: eso es **otra cosa**. Es una librería en Python para construir tus propios agentes con el harness de Antigravity, no la aplicación. Para empezar no lo necesitás.
:::

## Instalación

Bajá la **aplicación de escritorio** desde [antigravity.google/download](https://antigravity.google/download), eligiendo tu sistema:

| Plataforma | Requisitos |
| --- | --- |
| Windows | Windows 10 64 bits (x64 o ARM64) |
| macOS | 12 (Monterey) o más nuevo; x86 ya no está soportado |
| Linux | Debian 10 / Ubuntu 20 / Fedora 36 o equivalentes (glibc ≥ 2.28) |

:::note
Si ya tenías la Antigravity IDE instalada, al actualizar te pregunta si querés **reemplazar** la instalación; elegí Replace (es lo normal). Cuando lo hagas te ofrece reinstalar el IDE; si no ahora, lo podés re-bajar desde la misma página.
:::

## ¿Por qué te sale gratis?

Es de **Google**, y el motor de agentes se consume con las cuotas de los planes de Gemini de Google. Si activaste el beneficio de **Google AI Plus gratis para estudiantes**, ese mismo plan te corre las cuotas para usar Antigravity: para la carrera te sale **gratis** mientras la membresía esté activa.

:::tip
Si todavía no activaste el beneficio, hacelo primero: te pide el certificado de alumno regular de la UNLu y un Gmail, y son **12 meses gratis** de Google AI Plus (Gemini avanzado + cuotas de agentes + 400 GB). El plan se pide hasta el 31 de diciembre de 2026.
:::

Con el plan activo entrás a Antigravity con tu **misma cuenta de Gmail** y ya estás cubierto por las cuotas del plan Plus. Sin plan igual se puede usar, pero con cuotas de prueba más limitadas.

**[Ver Google AI Plus gratis para estudiantes](/unlu/beneficios/gemini-student/)**
