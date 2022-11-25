import express from 'express';
import profil from './profil';
import user from './user';
import product from './product';

const router = express.Router();

router.use('/profil', profil);
router.use('/user', user);
router.use('/product', product);

export = router;
