"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var axiosMiddleWare_1 = require("../middleware/axiosMiddleWare");
//Create the router for posts
var summonerRouter = express.Router();
//Get all posts
summonerRouter.get('/:name', axiosMiddleWare_1.getSummonerByName);
// //Create new post
// postsRouter.post('/', async (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description,
//     });
//     try {
//         const savedPost = await post.save();
//         res.status(201).json(savedPost);
//     } catch (error) {
//         res.status(400).json({ message: error });
//     }
// });
// //Delete post by ID
// postsRouter.delete('/:postID', getPost, async (req: Request, res: GetPostResponse) => {
//     try {
//         const deletedPost = await Post.deleteOne({ _id: res?.post });
//         res.json(deletedPost);
//     } catch (error) {
//         res.json({ message: error });
//     }
// });
// //Update post by ID
// postsRouter.patch('/:postID', getPost, async (req: Request, res: GetPostResponse) => {
//     try {
//         const updatedPost = await Post.updateOne({ _id: res?.post }, { $set: { title: req.body.title } });
//         res.json(updatedPost);
//     } catch (error) {
//         res.json({ message: error });
//     }
// });
//Exports the router which will point back to this file and decide which function to use
exports.default = summonerRouter;
//# sourceMappingURL=summoner.js.map