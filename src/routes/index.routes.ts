import { Router } from 'express';
import { indexWelcom } from '../controllers/index.controller';

const router = Router();

router.route('/').get(indexWelcom);

export default router;
