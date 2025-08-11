-- Tabela dos usuários:
CREATE TABLE users (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    tel VARCHAR(15) NOT NULL,
    password VARCHAR(255) NOT NULL,
    xp INT NOT NULL DEFAULT 0,
    ranking INT NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL
);

-- Tabela do progresso dos usuários nas lições:
CREATE TABLE user_progress (
    id_user INT NOT NULL,
    api_lesson_id VARCHAR(100) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    score INT DEFAULT 0,
    completed_at DATETIME NULL,
    PRIMARY KEY (id_user, api_lesson_id),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
);

-- Tabela para organização da API 
CREATE TABLE api_lessons_cache (
    api_lesson_id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    matter VARCHAR(100) NOT NULL,
    content TEXT,
    last_updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
