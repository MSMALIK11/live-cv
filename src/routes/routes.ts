import { Router } from 'express';
import { getImageByName } from '../controllers/getImageByName';

const router = Router();

router.get('/get-image-by-name', getImageByName);

router.get('/test', (_req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

export default router;
