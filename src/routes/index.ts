import { Router } from 'express';
import { indexWelcom } from '../controllers/index';

const router = Router();

router.route('/').get(indexWelcom);

export default router;
