const conn = require('../config/database');

// resolve: promise com sucesso
// reject: promise com algum erro, vem com um if normalmente

function get_user_data(data){
    return new Promise((resolve, reject) => {
        if(!data) return reject(new Error('You need an id'))

        const query_sql = 'SELECT * FROM users WHERE id_user = ?'

        conn.query(query_sql, [data.id], (error, results) => {
            if(error) return reject(error)
                resolve({ query_sql, affectedRows: results.length, data: results })
        })
    })
}

function signup(data) {

    // resolve é caso ser resolvido e reject se for rejeitado por um motivo, como !data e error = true
    return new Promise((resolve, reject) => {
        if (!data) return reject(new Error('You need to put data'));

        var password = btoa(data.password)

        const query_sql = 'INSERT INTO users(name, email, tel, password, created_at ) VALUES (?, ?, ?, ?, NOW())';
        conn.query(query_sql, [data.name, data.email, data.tel, password], (error, results) => {
            if (error) return reject(error);
            resolve({ query_sql, affectedRows: results.affectedRows });
        });
    });
}

function login(data) {
    return new Promise((resolve, reject) => {
        if (!data) return reject(new Error('You need to put data'))

        const password = btoa(data.password)
        const query_sql = 'SELECT * FROM users WHERE email = ? AND password = ?'
        conn.query(query_sql, [data.email, password], (error, results) => {
            if (error) return reject(error)
            if (results.length === 0) return reject(new Error('Email or password incorrect'))
            resolve({ query_sql, affected_rows: results.length, data: results })
        })
    })
}


function get_level_xp() {

}

function update_xp_level(){

}

module.exports = { get_user_data, signup, login, get_level_xp, update_xp_level };
