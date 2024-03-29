"use strict";
/*eslint-disable */
const User = require('../models/users');
const Tweet = require('../models/tweets');
const responseInfo = require('../models/responseInfo');
const { ObjectId } = require('mongodb');
const multer = require('multer');
var url = require('url');
const path=require('path')






const storage = multer.diskStorage({
    destination: './public/images',
    filename: function (req, file, cb) {
        cb(null, file.filename + "-" + Date.now() + path.extname(file.originalname));
    }
});

exports.upload = multer({ storage: storage }).single('myImage');



exports.saveTweet = async (req, res, next) => {
    const tweet = await new Tweet(req.body).save();
    res.status(200).json(tweet);
};



exports.findUser = async (req, res, next) => {
    const currentUserId = req.body.currentUserId;
    try {
        const usrs = await User.find({ username: { $regex: req.body.username, $options: "i" } });
        const currentUser = await User.findById(currentUserId);
        const usersFound = {
            following: [],
            notFollowing: []
        }
        for (let user of usrs) {
            if (currentUser.following.includes(user._id) && user._id.toString() !== currentUser._id.toString()) {
                usersFound.following.push(user);
            } else if (user._id.toString() !== currentUser._id.toString()) {
                usersFound.notFollowing.push(user);
            }
        }
        if (!usersFound.following.length && !usersFound.notFollowing.length) {
            res.status(400).json(new responseInfo(true, "User by that name not FOUND", null));
        } else {
            res.status(200).json(new responseInfo(false, null, usersFound));
        }
    } catch (error) {
        res.status(400).json(new responseInfo(true, "User by that name not FOUND 123", null));
    }

};

exports.follow = async (req, res, next) => {
    let currentUser = req.body.currentUser;
    let currentUserObj = await User.findOne({ username: currentUser });
    let userToFollow = await User.findOne({ username: req.body.userToFollow });
    try {
        const follow = await User.updateOne({ username: currentUser }, { $push: { following: userToFollow._id.toString() } });
        const saveFollower = await User.updateOne({ username: userToFollow.username }, { $push: { followers: currentUserObj._id.toString() } });
        res.status(200).json(new responseInfo(false, null, follow));
    } catch (error) {
        res.status(400).json(new responseInfo(true, "follow failed", null));
    }
};

exports.unfollow = async (req, res, next) => {
    let currentUser = req.body.currentUser;
    let currentUserObj = await User.findOne({ username: currentUser });
    let userToUnfollow = await User.findOne({ username: req.body.userToUnfollow });
    try {
        const unfollow = await User.updateOne({ username: currentUser }, { $pull: { following: userToUnfollow._id } });
        const removeFollower = await User.updateOne({ username: userToUnfollow.username }, { $pull: { followers: currentUserObj._id } });
        res.status(200).json(new responseInfo(false, null, unfollow));
    } catch (error) {
        res.status(400).json(new responseInfo(true, "unfollow failed", null));
    }
};

exports.fetchProfile = async (req, res, next) => {
    const username = req.params.username;
    try {
        const userInfo = await User.findOne({ username }).populate('following').populate('followers');
        res.status(200).json(new responseInfo(false, null, userInfo));
    } catch {
        res.status(400).json(new responseInfo(true, 'profile fetch failed', null));
    }
}

exports.getTweets = async (req, res, next) => {
    const users = await User.findOne({ _id: new ObjectId(req.params.uid) }, "following");
    let tweets = await Tweet.find({ user: { $in: users.following } }).sort({ timePosted: -1 }).skip(+req.params.pageNo * 5).limit(5).populate('user');
    res.status(200).json(tweets);
}



exports.deleteTweet = async (req, res, next) => {
    let tweet = await Tweet.findById(new ObjectId(req.body.postId));
    if (tweet) {
        if (req.body.userId === tweet.user.toString()) {
            await Tweet.findByIdAndDelete(new ObjectId(req.body.postId));
            res.send("Deleted")
        }
    }
    else res.send("Try again");
}

exports.deleteUser = async (req, res, next) => {
    let userId = req.params.uid
    console.log("User id is ", userId)
    try {
        await Tweet.deleteMany({ user: new ObjectId(userId) });
        await User.updateMany({ $pull: { followers: new ObjectId(userId) } })
        await User.updateMany({ $pull: { following: new ObjectId(userId) } })
        await User.findByIdAndDelete(new ObjectId(userId))
        res.json("Succes");
    }
    catch {
        res.json("Wouppsiii");
    }
}