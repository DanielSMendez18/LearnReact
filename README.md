# LearnReact

Hola! Este es un repositorio para estudiar y tener casos prácticos sobre los siguientes conceptos y principios.

**Fecha de creación: 04 nov 2024**

Documentación:

- https://globant.udemy.com/course/react-cero-experto/learn/lecture/19606256#overview
- https://globant.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595340#overview

## Pasos para Crear un proyecto nuevo con Vite

- Navega a la carpeta existente: Abre tu terminal y cambia al directorio donde quieres crear el proyecto.
- Usa el comando de Vite con npm: Ejecuta el siguiente comando para crear un proyecto Vite en la carpeta actual:

        npm create vite@lastest NameProyect

- Selecciona las opciones del proyecto: Vite te pedirá que elijas el framework y la variante. Selecciona React y luego elige JavaScript o TypeScript.
- Instala las dependencias: Después de crear el proyecto, instala las dependencias con:

        npm install

- Inicia el servidor de desarrollo:

        npm run dev

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname
    }
  }
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules
  }
})
```
