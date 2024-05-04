import { Request, Response } from "express";
import  criadoresService from '../serviceCriadores/service.Criadores';

const API_URL = "https://gateway.marvel.com:443/v1/public/series/1067/creators?apikey=f1d75b477233f6295f2e168358f0b9ed&ts=1&hash=ae8761b32df4792b243892e608a4661b"

class criadoresController {

    async create(req: Request, res: Response){
        const createdCriadores = await criadoresService.create(req.body)
        res.status(201)
        return res.json(createdCriadores )
    }

    async findAll(req: Request, res: Response) {
        const foundCriadores = await criadoresService.findAll()
        res.status(200)
        return res.json(foundCriadores)
    }

    async findById(req: Request, res: Response) {
        const foundCriador = await criadoresService.findById(req.params.id)
        res.status(200)
        return res.json(foundCriador)
    }

    
    async update(req: Request, res: Response) {
        const updatedCriadores = await criadoresService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedCriadores)
    }
   
    async delete(req: Request, res: Response) {
        const deletedCriadores = await criadoresService.delete(req.params.id)
        res.status(200)
        return res.json(deletedCriadores)
    }

     //Rotas auxiliares

     async fetchCreator(req: Request, res: Response) {
        try {
          await criadoresService.fetchAndStoreCreators();
          res.json({ message: "The Creators has been saved in BD" });
        } catch (error) {
          console.error(error);
        }
      }


}

export default new criadoresController()