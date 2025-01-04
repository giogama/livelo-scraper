import { Router } from "express";
//import { createUserController } from "./services/CreateUser";
//import { scraperRRVController } from './services/01-ScrapperRRV';

const router = Router();

/*
router.get('/', (req: Request, res: Response) => {
    
    return res.status(200).send("Livelo Scraper is active");
});
*/

router.get('/livelo', (req, res) => {
    
    //return scraperRRVController.handle(req, res);
});

// router.post('/user', (req, res) => {
//     return createUserController.handle(req, res);
// });

export { router };