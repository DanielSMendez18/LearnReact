# LearnReact

Hola! Este es un repositorio para estudiar y tener casos prácticos sobre los siguientes conceptos y principios.

**Fecha de creación: 04 nov 2024**

Documentación:

- Curso Udemy Español: https://globant.udemy.com/course/react-cero-experto/learn/lecture/19606256#overview
- Curso Udemy Ingles: https://globant.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595340#overview
- React con TypeScript: https://es.react.dev/learn/typescript
- Eventos: https://es.react.dev/reference/react-dom/components/common#react-event-object
- Hooks (useState, ): https://es.react.dev/reference/react/hooks
- Unit Test con Jest: https://jestjs.io/docs/getting-started
- Jest con Testing React Apps: https://jestjs.io/docs/tutorial-react
- Testing Library: https://testing-library.com/

## Pasos para Crear un proyecto nuevo con Vite

- Navega a la carpeta existente: Abre tu terminal y cambia al directorio donde quieres crear el proyecto.
- Usa el comando de Vite con npm: Ejecuta el siguiente comando para crear un proyecto Vite en la carpeta actual:

        npm create vite@lastest NameProyect

- Selecciona las opciones del proyecto: Vite te pedirá que elijas el framework y la variante. Selecciona React y luego elige JavaScript o TypeScript.
- Instala las dependencias: Después de crear el proyecto, instala las dependencias con:

        npm install

- Inicia el servidor de desarrollo:

        npm run dev

## Documentación React

### 1. Componentes Funcionales

Un componente funcional en React es una función de JavaScript que devuelve JSX (JavaScript XML). Esta función sirve como un bloque de construcción fundamental para crear interfaces de usuario en aplicaciones React. A diferencia de los componentes de clase, los componentes funcionales son más simples y concisos, lo que los hace ideales para muchas situaciones.

**¿Cómo funciona un componente funcional?**

1. Definición: Se define una función de JavaScript que recibe un objeto props como argumento. Este objeto contiene los datos que se pasarán al componente.
2. Retorno de JSX: Dentro de la función, se devuelve el JSX que representa la estructura de la interfaz de usuario. Este JSX puede contener elementos HTML, otros componentes, y expresiones JavaScript.

**Ejemplo Básico**

```js
import React from 'react'

interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => {
  return <h1>Hola, {name}!</h1>
}

function App() {
  return <Greeting name="Mundo" />
}

export default App
```

En este ejemplo:

- Greeting es el nombre del componente.
- name es una propiedad que se pasa al componente y se utiliza para personalizar el saludo.

**Diferencia con un componente de clase**

Sintaxis básica

- Componente de Clase: Utiliza la sintaxis de clases de ES6 y necesita extender de React.Component.
- Componente Funcional: Es una función JavaScript o TypeScript que recibe props y devuelve JSX.

Manejo de estados

- Componente de Clase: Usa this.state y this.setState() para manejar el estado.
- Componente Funcional: Con la introducción de los hooks (como useState), los componentes funcionales también pueden manejar el estado sin necesidad de clases.

Ciclo de vida

- Componentes de Clase: Utilizan métodos específicos como componentDidMount, componentDidUpdate y componentWillUnmount para manejar el ciclo de vida.
- Componentes Funcionales: Utilizan el hook useEffect para gestionar el ciclo de vida de forma más flexible, ya que useEffect puede replicar el comportamiento de montaje, actualización y desmontaje de los componentes de clase.

### 2. Hooks

Nosotros tenemos los siguientes hooks

#### useState

useState es un hook de React que permite agregar estado a un componente funcional. Sin useState, el estado solo estaría disponible en componentes de clase, pero con este hook, los componentes funcionales también pueden tener y actualizar su propio estado.

Para usar useState, primero lo importas de React, y luego lo llamas con un valor inicial. Este valor puede ser cualquier tipo de dato, como un número, una cadena, un objeto o incluso un arreglo.

```js
const [state, setState] = useState(initialState)
```

Si usas TypeScript, puedes indicar explícitamente el tipo de dato de tu estado:

```js
const [count, setCount] = useState < number > 0
```

**_Revisar codigo en CounterApp.tsx_**

**_Revisar codigo en ProfileApp.tsx_**

### 3. Unit Test con Jest

Para trabajar con Jest debemos instalar las dependencias de desarrollo en el proyecto

        npm install --save-dev jest
        npm install --save-dev @types/jest
        npm install --save-dev ts-jest
        npm install --save-dev babel-jest @babel/core @babel/preset-env
        npm install --save-dev @babel/preset-typescript
        npm install --save-dev @babel/preset-react react-test-renderer
        npm install --save-dev jest-enviroment-jsdom

DOM Testing, necesitamos agregar una instalación adicional de testing-library para las pruebas del DOM

        npm install --save-dev @testing-library/react

Luego creamos y configuramos los archivos

- **bable.config.cjs**
- **jest.config.js**
- **jest.setup.js**

Tambien para evitar que salte un error modificamos el archivo **package.json** eliminando el campo "type": "module"

**Realizar pruebas unitarias**

Ahora con la configuración lista, podemos iniciar las pruebas unitarias de cada Componente funcional.

Para ello creamos una carpeta test, donde alojaremos los archivos .test.jsx

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
