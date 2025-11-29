# Portafolio Profesional

Este proyecto es un portafolio personal moderno e interactivo construido con React y Vite. Incorpora elementos de diseño avanzados y funcionalidades de IA utilizando la API de Google Gemini.

## 🚀 Tecnologías Utilizadas

- **React 19**: Biblioteca principal para la construcción de la interfaz de usuario.
- **Vite**: Entorno de desarrollo rápido y herramienta de construcción.
- **TypeScript**: Superset de JavaScript para un código más robusto y tipado.
- **Lucide React**: Colección de iconos vectoriales ligeros.
- **Google Gemini AI**: Integración para un chat interactivo con IA (`GeminiChat`).
- **CSS Modules / Vanilla CSS**: Estilizado personalizado para un diseño premium.

## 📂 Estructura del Proyecto

El código está organizado de manera modular para facilitar su mantenimiento:

- **`src/App.tsx`**: Componente principal que orquesta la aplicación.
- **`src/components/`**: Contiene los componentes reutilizables:
  - `Hero.tsx`: Sección de bienvenida con impacto visual.
  - `AboutTerminal.tsx`: Presentación personal con estilo de terminal de comandos.
  - `Skills.tsx`: Visualización de habilidades técnicas.
  - `Projects.tsx`: Galería de proyectos destacados.
  - `Certifications.tsx`: Sección para mostrar logros y certificados.
  - `GeminiChat.tsx`: Chatbot impulsado por IA para interactuar con los visitantes.
  - `Contact.tsx`: Formulario e información de contacto.
  - `Navbar.tsx`: Navegación principal.

## 🛠️ Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio** (si aún no lo has hecho):
    ```bash
    git clone https://github.com/programador077/Portafolio.git
    cd Portafolio
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno**:
    Crea un archivo `.env.local` en la raíz del proyecto y añade tu clave API de Gemini:
    ```env
    VITE_GEMINI_API_KEY=tu_clave_api_aqui
    ```

4.  **Ejecutar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique la consola).

## 📦 Construcción para Producción

Para generar los archivos optimizados para producción:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist`.
