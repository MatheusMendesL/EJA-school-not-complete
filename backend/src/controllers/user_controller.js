const functionsModel = require('../models/user_model');
const { response } = require('../utils/functions');

// todas serão dessa forma

async function get_user(req, res) {
    const get_data = {
        id: req.params.id
    }

    try{
        const { query_sql, affectedRows, data } = await functionsModel.get_user_data(get_data);
        res.json(response('success', 'Got user data successfully', query_sql, affectedRows, data));
    } catch(error){
        res.status(500).json(response('error', error.message, null, 0, null));
    }
}

async function signup(req, res) {
    const data = {
        name: req.params.name,
        email: req.params.email,
        tel: req.params.tel,
        password: req.params.pass
    }


    try {
        // me retorna o que a promise resolveu, no caso a query e as linhas afetadas, dps executa minha função
        // e espera o retorno da função
        const { query_sql, affectedRows } = await functionsModel.signup(data);
        res.json(response('success', 'User added successfully', query_sql, affectedRows, null));
    } catch (error) {
        res.status(500).json(response('error', error.message, null, 0, null));
    }
}


async function login(req, res){
    const loginData = {
        email: req.params.email,
        password: req.params.password
    }


    try{
        const { query_sql, affected_rows, data } = await functionsModel.login(loginData)
        res.json(response('success', 'Login was conclused successfully', query_sql, affected_rows, data))
    } catch (error) {
        res.status(500).json(response('error', error.message, null, 0, null));
    }
}

async function get_level_xp(req, res){


    res.send('teste')
    /* try{
        const { query_sql, affected_rows, data, level, xp} = await functionsModel.get_level_xp()
        res.json(response('success', `Your xp is: ${xp} and level: ${level}`, query_sql, affected_rows, data))
    } catch(error){
        res.status(500).json(response('error', error.message, null, 0, null));
    } */

}

async function update_xp_level(req, res){

}

module.exports = { get_user, signup, login, get_level_xp, update_xp_level};


