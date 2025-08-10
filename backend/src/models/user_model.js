const conn = require('../config/database');

// resolve: promise com sucesso
// reject: promise com algum erro, vem com um if normalmente

function add_user(name) {

    // resolve é caso ser resolvido e reject se for rejeitado por um motivo, como !name e error = true
    return new Promise((resolve, reject) => {
        if (!name) return reject(new Error('You need to put a data'));

        const query_sql = 'INSERT INTO user(name) VALUES (?)';
        conn.query(query_sql, [name], (error, results) => {
            if (error) return reject(error);
            resolve({ query_sql, affectedRows: results.affectedRows });
        });
    });
}

module.exports = { add_user };
