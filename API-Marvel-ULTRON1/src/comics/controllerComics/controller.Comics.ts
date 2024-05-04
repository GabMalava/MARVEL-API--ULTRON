import { Request, Response } from "express";
import  comicsService from '../serviceComics/service.Comics';

const API_URL = "https://gateway.marvel.com:443/v1/public/series/1067/comics?apikey=f1d75b477233f6295f2e168358f0b9ed&ts=1&hash=ae8761b32df4792b243892e608a4661b"

class comicsController {

    async create(req: Request, res: Response){
        const createdComics = await comicsService.create(req.body)
        res.status(201)
        return res.json(createdComics )
    }

    async findAll(req: Request, res: Response) {
        const foundComics = await comicsService.findAll()
        res.status(200)
        return res.json(foundComics)
    }

    async findById(req: Request, res: Response) {
        const foundComic = await comicsService.findById(req.params.id)
        res.status(200)
        return res.json(foundComic)
    }

    
    async update(req: Request, res: Response) {
        const updatedComics = await comicsService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedComics)
    }
   
    async delete(req: Request, res: Response) {
        const deletedComics = await comicsService.delete(req.params.id)
        res.status(200)
        return res.json(deletedComics)
    }

    //Rotas auxiliares

    async fetchComics(req: Request, res: Response) {
        try {
          await comicsService.fetchAndStoreComics();
          res.json({ message: "The comics has been saved." });
        } catch (error) {
          console.error(error);
        }
      }
    
    }


export default new comicsController()