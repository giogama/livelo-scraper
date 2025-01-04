
import { Browser, Page } from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function startBrowser(): Promise<Browser>{
	//let browser: VanillaPuppeteer['launch'];
    let browser: Browser;

	try {
        //"--disable-web-security",								
	    //"--disable-features=IsolateOrigins,site-per-process" 
	    console.log("Opening the browser......");
        puppeteer.use(StealthPlugin());
	    browser = await puppeteer.launch({
	        headless: false,
	        args: [
				"--no-sandbox",
				"--disable-setuid-sandbox" 
			]	        
	    });
	} catch (err) {
	    console.log("Could not create a browser instance => : ", err);
	}
	return browser;
}

export async function navigateToPage(urlTo: string, browser: Browser): Promise<Page>{
	try {

        const page:Page = await browser.newPage();
        console.log('navigating to:', urlTo);    
        await page.goto(urlTo, { waitUntil: 'networkidle2'});

		delay(5000);

        return page;
	} catch (err) {
	    console.log(`Could not navigato to Url ${urlTo} => : `, err);
	}
}