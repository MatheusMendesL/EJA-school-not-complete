const conn = require("../config/database");

/* CREATE TABLE user_progress (
    id_progress INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    lesson_id INT NOT NULL,
    matter_id INT NOT NULL
    completed TINYINT(1) NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT NOW(),
    updated_at DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    FOREIGN KEY (id_user) REFERENCES users(id_user) ON DELETE CASCADE,
    FOREIGN KEY (lesson_id) REFERENCES lesson(id_lesson) ON DELETE CASCADE,
    FOREIGN KEY (matter_id) REFERENCES matter(id_matter) ON DELETE CASCADE
); */


function get_progress(get_data) {
    return new Promise((resolve, reject) => {
        const query_sql = 'SELECT * FROM user_progress WHERE id_user = ? AND matter_id = ?'

        conn.query(query_sql, [get_data.id_user, get_data.matter_id], (error, results) => {
            if (error) return reject(error);
            resolve({
                query_sql,
                affectedRows: results.length,
                data: results,
            });
        })
    })
}


module.exports = {
    get_progress
}