---
title: Editores recomendados
description: Zed y Visual Studio Code, editores más cómodos para el día a día, con un perfil sin IA para seguir aprendiendo bien.
---

Cuando ya tenés la base con Geany, estos editores son **más cómodos** para trabajar: mejor manejo de proyectos, terminal integrada, autocompletado de sintaxis y ecosistema de extensiones.

- [Zed](https://zed.dev/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [VSCodium](https://vscodium.com/) (variante libre de VS Code)

:::caution
VS Code y Zed vienen con **IA integrada** (Copilot en VS Code, Copilot/zeta en Zed). Para el período de estudio conviene crear un **perfil sin IA**: las sugerencias automáticas te resuelven los ejercicios y al momento de rendir o escribir código vos solo no podés. Es un poco más difícil de configurar, pero vale la pena. VSCodium, en cambio, **no trae IA de fábrica**: es la opción que menos cosas hay que apagar.
:::

## Zed

Editor minimalista escrito en Rust: ultrarrápido, con previsualización de diagnóstico y buen soporte de LSP para C y Python.

### Instalación

- **Windows**: instalador desde [zed.dev/download](https://zed.dev/download).
- **macOS**: mismo sitio, o `brew install --cask zed`.
- **Linux**: `curl -f https://zed.dev/install.sh | sh`, o paquete en los repos de tu distro (por ejemplo, `extra/zed` en Arch).

### Modo sin IA

1. Abrí la configuración con <kbd>Ctrl</kbd> + <kbd>,</kbd> (o **File → Settings**) y marcalo en `settings.json`.
2. Desactivá la IA globalmente:

```json
{
  "agent": { "enabled": false },
  "features": { "edit_prediction_provider": "none" }
}
```

3. Con eso desaparece el panel del agente y las predicciones de edición. Si preferís no cerrar la sesión, simplemente no inicies sesión con Copilot: Zed solo activa IA si te logueás.

## Visual Studio Code

El más usado en la industria: enorme ecosistema de extensiones, depurador gráfico (especialmente útil para C con C/C++ Extension) y terminal integrada.

### Instalación

- Windows/Linux/macOS: bajá el instalador de [code.visualstudio.com](https://code.visualstudio.com/). En Linux, alternativamente `sudo apt install code` (packages.microsoft.com) o el AUR en Arch.

### Modo sin IA: perfil "Estudio"

VS Code tiene **perfiles** (Settings Profiles) que permiten separar configuraciones. Vas a crear uno sin IA:

1. Abrí la paleta de comandos con <kbd>F1</kbd> y escribí **Profiles: Create Profile** → ponéle el nombre `Estudio`.
2. Con el perfil activo, abrí <kbd>F1</kbd> → **Copilot: Manage Agent Capabilities** o, más directo, desactivá la extensión de GitHub Copilot en este perfil: en el panel de extensiones, clic derecho en **GitHub Copilot** → **Disable (Workspace)**.
3. En **Settings** también podés apagar los ajustes relacionados:

```json
{
  "github.copilot.enable": { "*": false },
  "chat.commandCenter.enabled": false
}
```

:::tip
Podés alternar entre perfiles desde el ícono de engranaje (abajo a la izquierda). Armá también un perfil "Normal" con IA para practicar en tus proyectos personales de otra forma, y dejá el de **Estudio** fijo para lo de la carrera.
:::

:::note
Lo de "un poco más difícil de configurar" es cierto: Zed tiene menos menús (todo es JSON) y el modo sin IA de VS Code depende de cuidar qué extensiones habilitás por perfil. Si te trabás en algo durante la instalación o el armado del perfil, avisá en el aula virtual y lo agregamos acá.
:::

:::tip
Vale saber que VS Code incluye **telemetría que manda datos a Microsoft**. Si eso te molesta pero te gusta VS Code, esa es exactamente la razón por la que existe VSCodium.
:::

## VSCodium

La versión **open source** de VS Code, sin marcas de Microsoft ni telemetría: mismo editor, pero compilado del código MIT/Source de los repos de VS Code. No hay envío de métricas a Microsoft, ni rastreo, ni licenciamiento restrictivo, ni Copilot precargado: **sin IA y sin telemetría de fábrica**.

Es lo mismo que VS Code por fuera (interfaz, atajos, settings.json, perfiles): capaz de que tengas que mirar dos veces para saber cuál estás usando. La diferencia es lo que **no** trae dentro.

### Instalación

- **Windows/macOS**: instalador desde [vscodium.com](https://vscodium.com/), o `scoop install vscodium` / `brew install --cask vscodium`.
- **Linux**: `apt install codium` (repositorio de GitLab de VSCodium), `pacman -S vscodium` en Arch, o flatpak `com.vscodium.codium`.

### ¿Y las extensiones?

Por defecto VSCodium usa **Open VSX** (registro open source de extensiones) en lugar del Marketplace de Microsoft, que es de Microsoft y su licencia solo permite usarlo con sus builds oficiales. Casi todo lo importante está en Open VSX: las extensiones de **C/C++** (`llvm-vs-code-extensions.vscode-clangd` u `ms-vscode.cpptools`) y **Python** (`ms-python.python`) están disponibles.

:::note
Algunas extensiones exclusivas del Marketplace de Microsoft (por ejemplo Copilot) no están en Open VSX: justamente lo que estabas evitando. Si te falta alguna imprescindible, se puede apuntar VSCodium al Marketplace editando `product.json`, pero para estudiar no hace falta.
:::

## ¿Cuál elegir?

| | Zed | VS Code | VSCodium |
| --- | --- | --- | --- |
| Rendimiento | Ultra rápido, liviano | Más pesado (Electron) | Más pesado (Electron) |
| Ecosistema | Creciendo, limitado | Enorme | Enorme (Open VSX) |
| Depuración de C | Básica | Excelente (gráfica) | Excelente (gráfica) |
| Curva de configuración | JSON fácil | Interfaz + JSON | Interfaz + JSON |
| Sin IA | Configurando settings | Perfiles | De fábrica |
| Sin telemetría | Sí | No (Microsoft) | Sí |

Como regla general: **Zed** si querés algo rápido y simple de configurar; **VS Code** si querés depuración gráfica y más extensiones para el futuro (web, bases de datos, etc.); **VSCodium** si querés VS Code pero libre, sin IA y sin mandar métricas a Microsoft. Ninguno reemplaza a Geany en las materias iniciales de la carrera: son complementos cómodos para cuando ya sabés lo que estás haciendo.
