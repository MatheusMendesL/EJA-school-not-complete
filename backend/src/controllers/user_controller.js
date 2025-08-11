const functionsModel = require('../models/user_model');
const { response } = require('../utils/functions');

// todas serão dessa forma

async function add_user(req, res) {
    const data = {
        name: req.params.name,
        email: req.params.email,
        tel: req.params.tel,
        password: req.params.pass
    }
    try {
        // me retorna o que a promise resolveu, no caso a query e as linhas afetadas, dps executa minha função
        // e espera o retorno da função
        const { query_sql, affectedRows } = await functionsModel.add_user(data);
        res.json(response('success', 'User added successfully', query_sql, affectedRows, null));
    } catch (error) {
        res.status(500).json(response('error', error.message, null, 0, null));
    }
}

module.exports = { add_user };


