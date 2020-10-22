'use strict'

const Post = use('App/Models/Post');

class PostController {
    
    async index() {
        return await Post.query().orderBy('created_at', 'desc').fetch();
    }
    
    async store({ request }) {
        let data = request.only(['user', 'title', 'content']);
        let newPost = await Post.create(data);
        return newPost;
    }
    
    async show({ params }) {
        return await Post.findOrFail(params.id);
    }
    
    async destroy({ params }) {
        let post = await Post.findOrFail(params.id);
        await post.delete();
        return 'ok';
    }
    
    async update({ request, params }) {
        let data = request.only(['user', 'title', 'content']);
        let post = await Post.findOrFail(params.id);
        await post.merge(data);
        await post.save();
        return 'ok';
    }
    
    async getByUser({ params }) {
        return await Post.query().where('user', '=', params.user).fetch();
    }

    async like({ request }) {
        let data = request.only(['postId']);
        let post = await Post.findOrFail(data.postId);
        let likes = post.$attributes.likes + 1;
        await post.merge({ likes });
        await post.save(); 
        return post.$attributes.likes;
    }
    
}

module.exports = PostController
