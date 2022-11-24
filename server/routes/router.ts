import express from 'express';
import profil from './profil';
import user from './user';

const router = express.Router();

router.use('/profil', profil);
router.use('/user', user);

export = router;
