const conn = require("../config/database");

function get_tasks(id) {
  return new Promise((resolve, reject) => {
    const query_sql = "SELECT * FROM task WHERE lesson_id = ?";
    conn.query(query_sql, [id], (error, results) => {
      if (error) return reject(new Error("erro"));

      resolve({
        query_sql,
        affectedRows: results.length,
        data: results,
      });
    });
  });
}

function get_task_by_id(id) {
  return new Promise((resolve, reject) => {
    const query_sql = "SELECT * FROM task WHERE id_task = ?";
    conn.query(query_sql, [id], (error, results) => {
      if (error) return reject(new Error("erro"));

      resolve({
        query_sql,
        affectedRows: results.length,
        data: results,
      });
    });
  });
}

function answer(data) {
  let responses = {
    option_a: "A",
    option_b: "B",
    option_c: "C",
    option_d: "D",
  };

  return new Promise((resolve, reject) => {
    const query_sql = "SELECT * FROM task WHERE id_task = ? ";
    conn.query(query_sql, [data.id_task], (error, results) => {
      if (results.correct_answer == responses[data.answer]) {
        // correto
      }

      // p ca é incorreto
    });
  });
}

module.exports = {
  get_tasks,
  get_task_by_id,
  answer,
};
