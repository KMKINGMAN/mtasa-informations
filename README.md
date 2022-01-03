<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/kingmandev"><img src="https://media.discordapp.net/attachments/927559693168164905/927606672967471114/1.png?width=1025&height=415" width="546" alt="mtasa-informations" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/kingmandev"><img src="https://img.shields.io/discord/776201963762221077?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/mtasa-informations"><img src="https://img.shields.io/npm/v/mtasa-informations" alt="npm version" /></a>
  </p>
</div>

## About

mtasa-informations is a powerful [Node.js](https://nodejs.org) module that allows you to easily interact with the MTA SA API



## Installation

**Node.js required.**  

```sh-session
npm install mtasa-informations
yarn add mtasa-informations
pnpm add mtasa-informations
```

## Example usage


```sh-session
npm install mtasa-informations
```
simple example :
```js
const KINGMAN = require("mtasa-informations")
;(async()=>{
    new KINGMAN({ip: "87.98.182.70", port: 22003})
    .getServerInfo()
    .then((res)=> {
        console.log(res)
    })
    .catch((err)=> {
        console.log(err)
    })
})()

```


## Help

If you don't understand something in the pkgs, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [KMCodes Server](https://discord.gg/kingmandev).
