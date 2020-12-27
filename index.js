const puppeteer = require('puppeteer');
url = 'https://www.millipiyangoonline.com/super-loto/cekilis-sonuclari.63.2020';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const data = await page.evaluate(()=>{
        return document.querySelector('*'.outerHTML)
    });

    await page.evaluate(() => {
        console.log('here');
        let items = document.querySelectorAll('div.loto-numbers orange-loto')
        items.forEach((item) => {console.log(item);
            });
    })
    //const data = await page.evaluate(() => document.querySelector('*').outerHTML);
    /*
        const text = await page.evaluate(element => element.textContent, element[0]);
        console.log(text);
        */
        await page.pdf({ path: 'hackernews.pdf', format: 'A4' });
    
        await browser.close();
})();


/*
const puppeteer = require('puppeteer');

// run in a non-headless mode
const browser = await puppeteer.launch({
    headless: false,
    // slows down Puppeteer operationss
    lowMo: 100,// open dev tools
    devtools: true
});
const page = await browser.newPage();

*/

/*
const browserObject = require('./browser');
const scraperController = require('./pageController');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance)
*/

/*
const axios = require('axios');
const cheerio = require('cheerio');

url = 'https://www.millipiyangoonline.com/super-loto/cekilis-sonuclari.63.2020';

axios.get(url)
    .then(response => {
        console.log(response.data);
        let getData = html => {
            data = [];
            const $ = cheerio.load(html);
            $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
                data.push({
                    title: $(elem).text(),
                    link: $(elem).find('a.storylink').attr('href')
                });
            });
            console.log(data);
        }
        getData(response.data)
    })
    .catch(error => {
        console.log(error);
    })
*/