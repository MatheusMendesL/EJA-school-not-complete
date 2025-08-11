const conn = require('../config/database');

// resolve: promise com sucesso
// reject: promise com algum erro, vem com um if normalmente

function add_user(data) {

    // resolve é caso ser resolvido e reject se for rejeitado por um motivo, como !data e error = true
    return new Promise((resolve, reject) => {
        if (!data) return reject(new Error('You need to put a data'));

        const query_sql = 'INSERT INTO users(name, email, tel, password, created_at ) VALUES (?, ?, ?, ?, NOW())';
        conn.query(query_sql, [data.name, data.email, data.tel, data.password], (error, results) => {
            if (error) return reject(error);
            resolve({ query_sql, affectedRows: results.affectedRows });
        });
    });
}

module.exports = { add_user };
