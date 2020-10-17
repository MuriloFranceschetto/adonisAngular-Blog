'use strict'

const Follow = use('App/Models/Follow');
const Error = use('App/Exceptions/ErrorException');

class FollowController {
    
    async store({ request }) {
        let data = request.only(['user', 'follower']);
        if (data.user === data.follower) throw new Error('não é possivel um usuário seguir ele mesmo!');
        let newFollow = await Follow.create(data);
        return newFollow;
    }
    
    async show({ params }) {
        return await Follow.findOrFail(params.id);
    }
    
    async destroy({ params }) {
        let follow = await Follow.findOrFail(params.id);
        await follow.delete();
        return 'ok';
    }
    
    async getByUser({ params }) {
        return await Follow.query().where('user', '=', params.user).fetch();
    }

}

module.exports = FollowController
