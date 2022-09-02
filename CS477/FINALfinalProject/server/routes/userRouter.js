"use strict";
/*eslint-disable */

const multer = require('multer');
const express = require('express');
const router = express.Router();
const path= require('path')

const logincontroller = require('../controllers/logincontroller');
const userInfoController = require('../controllers/userInfoController')


const storage = multer.diskStorage({
    destination: './public/images',
    filename: function (req, file, cb) {
        cb(Date.now() + path.extname(file.originalname));
    }
});

router.get('/', logincontroller.homepage);
router.post('/login', logincontroller.login);
router.post('/signup', logincontroller.signup);
router.get('/authenticate', logincontroller.authenticate);
router.post('/user/search', userInfoController.findUser);
router.post('/follow', userInfoController.follow);
router.post('/unfollow', userInfoController.unfollow);
router.get('/user/:username', userInfoController.fetchProfile);
router.get('/tweets/:uid/:pageNo', userInfoController.getTweets);
router.post('/tweets', userInfoController.saveTweet);
router.delete('/tweets', userInfoController.deleteTweet);
router.delete('/:uid', userInfoController.deleteUser);
//router.post('/upload', multer({ storage: storage }).single('myImage'));

module.exports = router;