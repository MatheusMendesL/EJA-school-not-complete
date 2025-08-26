const functionsModel = require("../models/progression_model");
const { response } = require("../utils/functions");

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
