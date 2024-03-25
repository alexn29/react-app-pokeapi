# Pokédex

This project implements a Pokédex using the PokéAPI.

## Features

- Lists Pokémon.
- Search Pokémon by name.
- Navigate through pagination.
- View detailed information of Pokémon through a modal.

## Tech stack

- `@emotion/react`
- `@mantine/carousel`
- `@mantine/core`
- `@mantine/hooks`
- `@tabler/icons-react`
- `@tanstack/react-query`
- `embla-carousel-react`
- `typescript`
- `ESLint`
- `Prettier`
- `Craco`

## Requirements

```
- NodeJS v18.19.0
- Yarn
```

## Installation

```
# Clone this repository
git clone https://github.com/alexn29/react-app-pokeapi.git

# Navigate to the folder
cd react-app-pokeapi

# Use the NodeJS version from .nvmrc
nvm use

Note: if you are on windows and using gitbash, type the following:
nvm use $(cat .nvmrc)

# Once you select the correct nodejs version, now install the dependencies
yarn install

# Run in development mode
yarn start

# Finally, open your web browser and navigate to
http://localhost:3000/
```

## Live demo

[https://react-app-pokedex.web.app/](https://react-app-pokedex.web.app/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`

Analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs

### `yarn format`

Utilizes code formatting tools to ensure consistency and style across the entire project. Running `yarn format` automatically applies defined formatting rules, enhancing readability and helping maintain clean and organized code.
