import express from 'express';
import { getSummonerByName } from '../middleware/axiosMiddleWare';

//Create the router for posts
const summonerRouter = express.Router();

//Get all posts
summonerRouter.get('/:name', getSummonerByName);

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
export default summonerRouter;
