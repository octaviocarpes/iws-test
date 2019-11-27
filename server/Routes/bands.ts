import express from 'express';
import { BandsController, AlbumsController } from '../Controllers';

export class BandsRoute {
  private router: express.Router;
  public static instance: BandsRoute;

  public static getInstance(): BandsRoute {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new BandsRoute();
    }
    return this.instance;
  }

  private constructor() {
    this.router = express.Router();
    this.buildRoutes();
  }

  private buildRoutes(): void {
    this.getBandsRoute();
    this.getBandByIdRoute();
    this.getBandAlbums();
  }

  private getBandsRoute(): void {
    this.router.get('', (req, res) => {
      BandsController.getInstance()
        .getBands()
        .then(response => {
          res.status(200).send(response);
        })
        .catch(error => {
          res.send(error);
        });
    });
  }

  private getBandByIdRoute(): void {
    this.router.get('/:id', (req, res) => {
      BandsController.getInstance()
        .getBandById(req.params.id)
        .then(response => {
          res.status(200).send(response);
        })
        .catch(error => {
          res.send(error);
        });
    });
  }

  private getBandAlbums(): void {
    this.router.get('/albums/:id', (req, res) => {
      BandsController.getInstance()
        .getBandAlbums(req.params.id)
        .then(response => {
          res.status(200).send(response);
        })
        .catch(error => {
          res.send(error);
        });
    });
  }

  public getRoutes(): express.Router {
    return this.router;
  }
}
