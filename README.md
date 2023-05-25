# Study Lounge Library
Component Library for Study Lounge.

<hr>

## Build With

* Rollup
* Typescript
* Storybook
* Jest

## Getting Started

`npm install @HJyup/study-lounge-lib@0.1.1`


## Documentation

This Library has 3 common components: NavBar, Switch and Video.

This library uses **Rollup** to bundle all components into one file.

All components are exported as a module, so you can import them like this:

```js
import { ComponentName } from '@HJyup/study-lounge-lib'
```

All Components could be checked using **Storybook**.

To use **Storybook**: `storybook dev -p 6006`

To use **Jest**: `npm run test`

Tests covers all components and used in CI/CD to check any commits and pull requests.

## Usage

`Switch` component is a simple switch component that could be used to toggle dark mode.

`Video` component is a simple video component that could be used to play videos using `Hls.js`

`NavBar` component is a simple navigation bar component that could be used to navigate between pages.

## Dark Mode

This library supports dark mode. Switch component mainly uses for toggle mode in page.

Library has standard color palette for dark mode.
```scss
:root{
    --body-color: #FBFDFA;
    --navbar-color: #06C;
    --card-color: #FFF;
    --color-hover: #FFF;
    --alert-color: #E5F6FD;
    --primary-text-color: #000;
    --secondary-text-color: #000;
    --transition: all 200ms linear;
}

:root:has(#switch:checked){
    --body-color: #1F1F1F;
    --navbar-color: #01579b;
    --card-color: #292929;
    --alert-color: #06A;
    --color-hover: #4B4B4B;
    --primary-text-color: #E5E5E5;
    --secondary-text-color: #A3A3A3;
}
```

If you want to change this color palette, you can change it in `src/styles/global.scss` file rewriting `:root` directory.

## License
MIT License

# Author Details
The website was created by Danyil Butov.
[HJK - GitHub.](https://github.com/HJyup)