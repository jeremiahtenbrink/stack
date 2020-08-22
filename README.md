<h1 align="center">Welcome to @jeremiah_tenbrink/stack 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@jeremiah_tenbrink/stack" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@jeremiah_tenbrink/stack.svg">
  </a>
  <a href="https://jeremiahtenbrink.github.io/queue" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/jeremiahtenbrink/stack/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/jeremiahtenbrink/stack/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/jeremiahtenbrink/stack" />
  </a>
<a href="https://codeclimate.com/github/jeremiahtenbrink/stack/maintainability"><img src="https://api.codeclimate.com/v1/badges/22861f9c6270a507ff6e/maintainability" /></a>
<a href="https://codeclimate.com/github/jeremiahtenbrink/stack/test_coverage"><img src="https://api.codeclimate.com/v1/badges/22861f9c6270a507ff6e/test_coverage" /></a>
</p>

## Discription

Javascript implementation of a stack.

## Documentation
<a href="https://jeremiahtenbrink.github.io/stack/">
Read documentation here.
</a>


## Install

### Npm

```sh
npm install @jeremiah_tenbrink/stack
```

### Yarn

```shell script
yarn install @jeremiah_tenbrink/stack
```

## Usage

```javascript
import {Stack} from "@jeremiah_tenbrink/stack";

const stack = new Stack();
stack.push("some item")
stack.push("some item2")
stack.push("some item3")

while (!stack.isEmpty()){
  const current = stack.pop();
  console.log(current)
}
```

## Run tests

```sh
npm run test
```

## Author

<a href="https://www.youracclaim.com/badges/f767c1ec-2b50-4901-a250-49b6d9467d37">
<img src="https://github-badge.vercel.app/api/badges/author/JeremiahTenbrink" alt="Full-Stack Web Development + Technical Interviewing" height="300" />
</a>

<a href="https://www.linkedin.com/in/jeremiahtenbrink/">
<img src="https://github-badge.vercel.app/api/badges/portfolio/tenbrink.dev" height="25"/>
</a>
<a href="https://www.linkedin.com/in/jeremiahtenbrink/">
<img src="https://github-badge.vercel.app/api/badges/linkedin/@JeremiahTenbrink" height="25"/>
</a>
<a href="https://github.com/jeremiahtenbrink">
<img src="https://github-badge.vercel.app/api/badges/github/@JeremiahTenbrink" height="25"/>
</a>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jeremiahtenbrink/stack/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Jeremiah Tenbrink](https://github.com/jeremiahtenbrink)

This project is [MIT](https://github.com/jeremiahtenbrink/stack/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
