'use strict'

const User = use('App/Models/User');

class UserController {
    
    async index() {
        return await User.query().fetch();
    }
    
    async store({ request }) {
        let data = request.only(['username', 'email', 'password']);
        let newUser = await User.create(data);
        return newUser;
    }
    
    async show({ params }) {
        return await User.findOrFail(params.id);
    }
    
    async destroy({ params }) {
        let user = await User.findOrFail(params.id);
        await user.delete();
        return 'ok';
    }
    
    async update({ request, params }) {
        let data = request.only(['username', 'email', 'password']);
        let user = await User.findOrFail(params.id);
        await user.merge(data);
        await user.save();
        return 'ok';
    }
    
}

module.exports = UserController
