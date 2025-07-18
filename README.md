Este es un nuevo proyecto [**React Native**](https://reactnative.dev), iniciado utilizando[`@react-native-community/cli`](https://github.com/react-native-community/cli).
```sh
# Using npm
npx @react-native-community/cli init nombredelproyecto

```

# Empezando

> **Note**: asegúrese de haber completado la guía [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment)  antes de continuar.

## Step 1: iniciacion de este Proyecto

Primero, necesitarás ejecutar Metro , la herramienta de compilación de JavaScript para React Native.

Para iniciar el servidor de desarrollo Metro, ejecute el siguiente comando desde la raíz de su proyecto React Native:

```sh
# Using npm
npm start android

```

## Step 2: Instalación de los fundamento de react-navigation
-- [**React Navigation**](https://reactnavigation.org/) --

```sh
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
```

en la carpeta MainActivity.kt se copia estas lineas
```sh
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
    }
```
debe importar este paquete
```sh
import android.os.Bundle;
```

## Paso 3: Stack navigator

se instala el stack
```sh
npm install @react-navigation/stack
npm install react-native-gesture-handler
npm install @react-native-masked-view/masked-view
```
se importan en el punto mas alto de aplicación app
 ```sh
import 'react-native-gesture-handler';
```
se pone en la parte mas alta de la aplicación app
```sh
<NavigationContainer>
```
se crea archivo creat navigator..

## Paso 3: Estrutura de directorios

todo lo de React native
 ```sh
Presentation
```
logica de negocio, codigo de typescript
 ```sh
infrastructure
domain
```

api para el codigo externo
theme tema global de la aplicaion
helpers clases para simplificar el codigo, funciones especiales para ocupar o adaptaciones
 ```sh
config
    api  
    helpers
    theme
```

casos de usos, para traer la informacion de un pokemos o todos los pokemones
 ```sh
actions
```

entities son los objectos que nosotros vamos a ocupar, hacer nuestro propio codigo sin depender,
    es nuestro modelo
 ```sh
domain
    entities 
```

los mappers tomar la informacion de api y pasarla a las entities
 ```sh
infrastructure
    mappers
    interfaces
```

## Paso 3: Estrutura de directorios

-- [**React Paper**](https://reactnativepaper.com//) --

```sh
npm install react-native-paper
npm install react-native-safe-area-context

```
en el punto mas alto de la aplicacion . ejemplo App

```sh
<PaperProvider>
```
