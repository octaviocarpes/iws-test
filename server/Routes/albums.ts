import express from 'express';
import { AlbumsController } from '../Controllers';

export class AlbumsRoute {
  private router: express.Router;
  public static instance: AlbumsRoute;

  public static getInstance(): AlbumsRoute {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new AlbumsRoute();
    }
    return this.instance;
  }

  private constructor() {
    this.router = express.Router();
    this.buildRoutes();
  }

  private buildRoutes(): void {
    this.getAlbumsRoute();
    this.getAlbumByIdRoute();
  }

  private getAlbumsRoute(): void {
    this.router.get('', (req, res) => {
      AlbumsController.getInstance()
        .getAlbums()
        .then(response => {
          res.status(200).send(response);
        })
        .catch(error => {
          res.send(error);
        });
    });
  }

  private getAlbumByIdRoute(): void {
    this.router.get('/:id', (req, res) => {
      AlbumsController.getInstance()
        .getAlbumById(req.params.id)
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
