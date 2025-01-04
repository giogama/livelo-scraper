import { Router, Request, Response } from 'express';
import { LiveloScraper } from './scrapers/LiveloScraper';
import { IScraperResult } from './scrapers/IScraperResult';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Is Active');
});

router.get('/livelo', async (req:Request, res:Response) => {
    const scraper = new LiveloScraper();
    const result:IScraperResult = await scraper.start();
    res.status(200).json(result);
});

export { router };