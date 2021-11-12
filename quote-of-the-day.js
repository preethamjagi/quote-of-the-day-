#!/usr/bin/env node
const express = require("express");
const axios = require("axios").default;
const chalk = require("chalk")

const app = express();

axios({
    method: "GET",
    url: "https://quotes.rest/qod",
    headers: {
        Accept: "application/json",
    },
}).then((res) => {
    const quote = res.data.contents.quotes[0].quote;
    const author = res.data.contents.quotes[0].author;

    const log = chalk.green.bold.bgBlack(`${quote} - ${author}`)
    
    console.log(log);
}).catch(err => console.log(err.message));

app.listen(process.env.PORT || 8000, () => {
    console.log(chalk.yellow.underline("\n\nQuote of Today: \n"));
})