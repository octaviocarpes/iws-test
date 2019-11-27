import express from 'express';
import { AlbumsRoute } from './albums';
import { BandsRoute } from './bands';

const router = express.Router();

router.use('/albums', AlbumsRoute.getInstance().getRoutes());
router.use('/bands', BandsRoute.getInstance().getRoutes());

export default router;
