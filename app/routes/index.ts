
// /app/routes/index.ts
import { Request, Response } from "express";
import * as postsController from '../controllers/articles';

export class Routes {


    public routes(app: any): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send('Hello Good World!');
            });

        // create a new articles 
        app.route('/api/create').post(postsController.createArticle);
        app.route('/updatepost/:id').put(postsController.updatePost);
        app.route('/getsinglepost/:id').get(postsController.getSinglePost);
        app.route('/api/posts').get(postsController.getAllPosts);
        app.route('/my-post').get(postsController.fetchPostbyUserId);



    }
}
