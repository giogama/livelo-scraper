import { IScraperResult } from './IScraperResult';
import { startBrowser, navigateToPage, delay } from './ScraperHelper'

export class LiveloScraper 
{
    async start():Promise<IScraperResult>
    {
        try{
            const browser = await startBrowser();
            const page = await navigateToPage('https://www.livelo.com.br', browser);
            await delay(40000);
            console.log('Completed');
            await browser.close();

            return {
                Message: "OK" 
            }    
        }
        catch(err){
            console.log(err)
        }
    }
}