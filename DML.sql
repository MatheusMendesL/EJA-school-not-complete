-- Inserir matérias
INSERT INTO matter (name, description) VALUES
('Português', 'Estudo da língua portuguesa, gramática e literatura.'),
('Matemática', 'Estudo de números, formas, medidas e lógica.'),
('Ciências', 'Estudo do mundo natural, física, química e biologia.'),
('História', 'Estudo dos eventos passados e civilizações.'),
('Geografia', 'Estudo do espaço geográfico, clima e sociedades.');

-- ----------- Lições e perguntas -----------

-- PORTUGUÊS

INSERT INTO lesson (matter_id, title, content, level, created_at, updated_at) VALUES
-- 1º ano (básico)
(1, 'Fonética e Fonologia', 'Estudo dos sons da língua portuguesa.', 'básico', NOW(), NOW()),
(1, 'Morfologia', 'Classes gramaticais básicas.', 'básico', NOW(), NOW()),
(1, 'Sintaxe Básica', 'Noções de sujeito e predicado.', 'básico', NOW(), NOW()),
-- 2º ano (intermediário)
(1, 'Concordância Verbal e Nominal', 'Regras de concordância.', 'intermediário', NOW(), NOW()),
(1, 'Figuras de Linguagem', 'Metáfora, metonímia, hipérbole.', 'intermediário', NOW(), NOW()),
(1, 'Crase e Pontuação', 'Uso da crase e vírgulas.', 'intermediário', NOW(), NOW()),
-- 3º ano (avançado)
(1, 'Literatura Brasileira Moderna', 'Autores e movimentos literários.', 'avançado', NOW(), NOW()),
(1, 'Análise Sintática Avançada', 'Termos essenciais, integrantes e acessórios.', 'avançado', NOW(), NOW()),
(1, 'Interpretação de Texto', 'Compreensão e análise crítica.', 'avançado', NOW(), NOW());

-- Perguntas Português

INSERT INTO task (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, created_at, updated_at) VALUES
-- Fonética e Fonologia
(1, 'O que estuda a fonologia?', 'Os sons da língua', 'A gramática', 'O vocabulário', 'A semântica', 'A', NOW(), NOW()),
(1, 'Qual a diferença entre fonema e letra?', 'Fonema é som; letra é símbolo gráfico', 'Fonema é letra; letra é som', 'São a mesma coisa', 'Nenhuma', 'A', NOW(), NOW()),
(1, 'A palavra "casa" tem quantos fonemas?', '3', '4', '5', '2', 'B', NOW(), NOW()),
-- Morfologia
(2, 'Qual das opções é um verbo?', 'Casa', 'Correr', 'Azul', 'Livro', 'B', NOW(), NOW()),
(2, 'Substantivo é:', 'Nome de coisa', 'Ação', 'Qualidade', 'Lugar', 'A', NOW(), NOW()),
(2, 'Adjetivo expressa:', 'Qualidade', 'Ação', 'Nome', 'Verbo', 'A', NOW(), NOW()),
-- Sintaxe Básica
(3, 'Na frase "O menino correu", o sujeito é:', 'Menino', 'Correu', 'O', 'Frase sem sujeito', 'A', NOW(), NOW()),
(3, 'O predicado indica:', 'Ação ou estado do sujeito', 'Sujeito', 'Objeto', 'Verbo', 'A', NOW(), NOW()),
(3, 'Frase correta:', 'Eu viu', 'Eu vi', 'Eu ver', 'Eu vendo', 'B', NOW(), NOW()),
-- Concordância Verbal e Nominal
(4, 'Concordância correta:', 'Ele foram', 'Eles foram', 'Eles foi', 'Ele foram', 'B', NOW(), NOW()),
(4, 'Sujeito plural pede verbo:', 'Plural', 'Singular', 'Qualquer', 'Nenhum', 'A', NOW(), NOW()),
(4, 'Frase correta:', 'Nós vamos', 'Nós vai', 'Nós vão', 'Nós vou', 'A', NOW(), NOW()),
-- Figuras de Linguagem
(5, 'Metáfora é:', 'Comparação indireta', 'Comparação direta', 'Repetição', 'Exagero', 'A', NOW(), NOW()),
(5, 'Hipérbole é:', 'Exagero', 'Ironia', 'Comparação', 'Repetição', 'A', NOW(), NOW()),
(5, 'Metonímia é:', 'Substituição por associação', 'Repetição', 'Exagero', 'Negação', 'A', NOW(), NOW()),
-- Crase e Pontuação
(6, 'Uso correto da crase:', 'Vou à escola', 'Vou a escola', 'Vou ào escola', 'Vou aà escola', 'A', NOW(), NOW()),
(6, 'Vírgula usada para:', 'Separar elementos', 'Juntar frases', 'Substituir ponto', 'Eliminar palavras', 'A', NOW(), NOW()),
(6, 'Frase com vírgula correta:', 'Eu, gosto de sorvete', 'Eu gosto, de sorvete', 'Eu gosto de sorvete', 'Eu gosto de, sorvete', 'C', NOW(), NOW()),
-- Literatura Brasileira Moderna
(7, 'Quem foi Carlos Drummond de Andrade?', 'Poeta modernista', 'Romancista barroco', 'Dramaturgo clássico', 'Crítico literário', 'A', NOW(), NOW()),
(7, 'O Modernismo no Brasil começou em:', '1922', '1930', '1900', '1890', 'A', NOW(), NOW()),
(7, 'Movimento literário que rompeu com o passado:', 'Modernismo', 'Romantismo', 'Realismo', 'Classicismo', 'A', NOW(), NOW()),
-- Análise Sintática Avançada
(8, 'Termo que completa o sentido do verbo:', 'Complemento verbal', 'Sujeito', 'Adjunto adnominal', 'Predicado', 'A', NOW(), NOW()),
(8, 'Sujeito composto tem:', 'Mais de um núcleo', 'Só um núcleo', 'Não tem núcleo', 'Só verbo', 'A', NOW(), NOW()),
(8, 'Adjunto adnominal modifica:', 'Substantivo', 'Verbo', 'Adjetivo', 'Advérbio', 'A', NOW(), NOW()),
-- Interpretação de Texto
(9, 'Interpretação textual envolve:', 'Análise crítica', 'Decoração', 'Ortografia', 'Gramática', 'A', NOW(), NOW()),
(9, 'Identificar ideia principal é:', 'Resumo', 'Cópia', 'Comentário', 'Exposição', 'A', NOW(), NOW()),
(9, 'Inferir informações implícitas é:', 'Ler nas entrelinhas', 'Decorar o texto', 'Copiar', 'Escrever', 'A', NOW(), NOW());

-- MATEMÁTICA

INSERT INTO lesson (matter_id, title, content, level, created_at, updated_at) VALUES
-- 1º ano (básico)
(2, 'Números Reais e Operações', 'Propriedades dos números reais e operações básicas.', 'básico', NOW(), NOW()),
(2, 'Funções do 1º grau', 'Introdução às funções lineares.', 'básico', NOW(), NOW()),
(2, 'Geometria Básica', 'Formas, perímetros e áreas simples.', 'básico', NOW(), NOW()),
-- 2º ano (intermediário)
(2, 'Equações e Inequações', 'Resolução de equações e inequações.', 'intermediário', NOW(), NOW()),
(2, 'Funções do 2º grau', 'Estudo das parábolas.', 'intermediário', NOW(), NOW()),
(2, 'Geometria Analítica', 'Ponto, reta e circunferência.', 'intermediário', NOW(), NOW()),
-- 3º ano (avançado)
(2, 'Trigonometria', 'Razões trigonométricas e identidades.', 'avançado', NOW(), NOW()),
(2, 'Progressões', 'Progressões aritméticas e geométricas.', 'avançado', NOW(), NOW()),
(2, 'Estatística e Probabilidade', 'Noções básicas de estatística.', 'avançado', NOW(), NOW());

-- Perguntas Matemática

INSERT INTO task (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, created_at, updated_at) VALUES
-- 1º ano básico
(10, 'Qual o resultado de 5 + 8?', '12', '13', '14', '15', 'B', NOW(), NOW()),
(10, 'Função do 1º grau tem gráfico:', 'Parábola', 'Reta', 'Circunferência', 'Elipse', 'B', NOW(), NOW()),
(10, 'Qual a área de um quadrado de lado 4?', '8', '12', '16', '20', 'C', NOW(), NOW()),
-- 2º ano intermediário
(13, 'Qual é a solução da equação x² - 4 = 0?', 'x=2 ou -2', 'x=4', 'x=-4', 'x=0', 'A', NOW(), NOW()),
(13, 'Gráfico da função quadrática é:', 'Reta', 'Parábola', 'Circunferência', 'Linha', 'B', NOW(), NOW()),
(13, 'A equação 2x + 3 > 5 é uma:', 'Equação', 'Inequação', 'Função', 'Proporção', 'B', NOW(), NOW()),
-- 3º ano avançado
(16, 'Qual o seno de 90°?', '0', '1', '0,5', 'Não existe', 'B', NOW(), NOW()),
(16, 'Qual a fórmula da soma dos termos de uma PA?', 'S = (a1 + an)n/2', 'S = a1 x n', 'S = an - a1', 'S = n/2', 'A', NOW(), NOW()),
(16, 'Probabilidade é:', 'Chance de ocorrer um evento', 'Certeza', 'Impossibilidade', 'Número fixo', 'A', NOW(), NOW());

-- CIÊNCIAS

INSERT INTO lesson (matter_id, title, content, level, created_at, updated_at) VALUES
-- 1º ano (básico)
(3, 'Estrutura e Função das Células', 'Noções básicas sobre células.', 'básico', NOW(), NOW()),
(3, 'Reinos dos Seres Vivos', 'Classificação dos organismos.', 'básico', NOW(), NOW()),
(3, 'Ecossistemas', 'Interação entre organismos e ambiente.', 'básico', NOW(), NOW()),
-- 2º ano (intermediário)
(3, 'Genética Mendeliana', 'Herança genética simples.', 'intermediário', NOW(), NOW()),
(3, 'Física - Leis de Newton', 'Conceitos de força e movimento.', 'intermediário', NOW(), NOW()),
(3, 'Química - Ligações Químicas', 'Tipos e características.', 'intermediário', NOW(), NOW()),
-- 3º ano (avançado)
(3, 'Biotecnologia', 'Aplicações atuais na ciência.', 'avançado', NOW(), NOW()),
(3, 'Física Moderna', 'Relatividade e física quântica.', 'avançado', NOW(), NOW()),
(3, 'Ecologia Avançada', 'Dinâmicas de populações e biomas.', 'avançado', NOW(), NOW());

-- Perguntas Ciências

INSERT INTO task (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, created_at, updated_at) VALUES
-- 1º ano básico
(19, 'Qual a unidade básica da vida?', 'Célula', 'Molécula', 'Átomo', 'Órgão', 'A', NOW(), NOW()),
(19, 'Qual reino possui organismos unicelulares?', 'Animalia', 'Plantae', 'Protista', 'Fungi', 'C', NOW(), NOW()),
(19, 'O que é um ecossistema?', 'Comunidade e ambiente', 'Animal', 'Planta', 'Solo', 'A', NOW(), NOW()),
-- 2º ano intermediário
(22, 'Quem é considerado o pai da genética?', 'Mendel', 'Darwin', 'Pasteur', 'Newton', 'A', NOW(), NOW()),
(22, 'A segunda lei de Newton fala sobre:', 'Inércia', 'Força e aceleração', 'Ação e reação', 'Gravidade', 'B', NOW(), NOW()),
(22, 'Ligações químicas são:', 'Forças entre átomos', 'Elementos', 'Reações químicas', 'Células', 'A', NOW(), NOW()),
-- 3º ano avançado
(25, 'O que estuda a biotecnologia?', 'Aplicações tecnológicas em biologia', 'Geologia', 'Física', 'Química', 'A', NOW(), NOW()),
(25, 'Qual conceito está ligado à física quântica?', 'Dualidade onda-partícula', 'Gravidade', 'Inércia', 'Eletricidade', 'A', NOW(), NOW()),
(25, 'O que é um bioma?', 'Grande ecossistema', 'Animal', 'Planta', 'Reino', 'A', NOW(), NOW());

-- HISTÓRIA

INSERT INTO lesson (matter_id, title, content, level, created_at, updated_at) VALUES
-- 1º ano (básico)
(4, 'História do Brasil Colonial', 'Colonização e sociedade colonial.', 'básico', NOW(), NOW()),
(4, 'Sociedades Indígenas', 'Organização social e cultura.', 'básico', NOW(), NOW()),
(4, 'Era das Grandes Navegações', 'Explorações e descobertas.', 'básico', NOW(), NOW()),
-- 2º ano (intermediário)
(4, 'Revolução Industrial', 'Mudanças econômicas e sociais.', 'intermediário', NOW(), NOW()),
(4, 'Independência do Brasil', 'Processo e consequências.', 'intermediário', NOW(), NOW()),
(4, 'Era Napoleônica', 'Guerras e impacto na Europa.', 'intermediário', NOW(), NOW()),
-- 3º ano (avançado)
(4, 'Brasil República', 'Política e economia no século XX.', 'avançado', NOW(), NOW()),
(4, 'Movimentos Sociais no Brasil', 'Lutas e conquistas.', 'avançado', NOW(), NOW()),
(4, 'História Contemporânea Mundial', 'Guerra Fria e globalização.', 'avançado', NOW(), NOW());

-- Perguntas História

INSERT INTO task (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, created_at, updated_at) VALUES
-- 1º ano básico
(28, 'Quem descobriu o Brasil?', 'Pedro Álvares Cabral', 'Cristóvão Colombo', 'Vasco da Gama', 'Fernão de Magalhães', 'A', NOW(), NOW()),
(28, 'Qual era a principal atividade econômica no Brasil colonial?', 'Agricultura', 'Mineração', 'Indústria', 'Comércio', 'A', NOW(), NOW()),
(28, 'Qual a característica das sociedades indígenas?', 'Organização comunitária', 'Indivíduo isolado', 'Industrialização', 'Monarquia', 'A', NOW(), NOW()),
-- 2º ano intermediário
(31, 'Quando ocorreu a Revolução Industrial?', 'Século XVIII', 'Século XVII', 'Século XIX', 'Século XX', 'A', NOW(), NOW()),
(31, 'Quem foi Napoleão Bonaparte?', 'Imperador francês', 'Rei da Inglaterra', 'Presidente dos EUA', 'Czar da Rússia', 'A', NOW(), NOW()),
(31, 'Quando o Brasil se tornou independente?', '1822', '1889', '1808', '1500', 'A', NOW(), NOW()),
-- 3º ano avançado
(34, 'Qual foi a principal característica da República Velha?', 'Coronelismo', 'Monarquia', 'Ditadura', 'Democracia plena', 'A', NOW(), NOW()),
(34, 'O que marcou a Guerra Fria?', 'Conflito ideológico', 'Guerra aberta', 'União Europeia', 'Crise econômica', 'A', NOW(), NOW()),
(34, 'Globalização é:', 'Integração mundial', 'Isolamento', 'Colonização', 'Guerra', 'A', NOW(), NOW());

-- GEOGRAFIA

INSERT INTO lesson (matter_id, title, content, level, created_at, updated_at) VALUES
-- 1º ano (básico)
(5, 'Relevo e Hidrografia', 'Formas do relevo e rios.', 'básico', NOW(), NOW()),
(5, 'Climas do Brasil', 'Principais tipos climáticos.', 'básico', NOW(), NOW()),
(5, 'População e Demografia', 'Crescimento e distribuição.', 'básico', NOW(), NOW()),
-- 2º ano (intermediário)
(5, 'Geopolítica Mundial', 'Relações internacionais.', 'intermediário', NOW(), NOW()),
(5, 'Urbanização', 'Crescimento das cidades.', 'intermediário', NOW(), NOW()),
(5, 'Meio Ambiente e Sustentabilidade', 'Impactos e soluções.', 'intermediário', NOW(), NOW()),
-- 3º ano (avançado)
(5, 'Globalização Econômica', 'Fluxos e impactos econômicos.', 'avançado', NOW(), NOW()),
(5, 'Climatologia Avançada', 'Fatores climáticos complexos.', 'avançado', NOW(), NOW()),
(5, 'Desenvolvimento Regional', 'Disparidades econômicas.', 'avançado', NOW(), NOW());

-- Perguntas Geografia

INSERT INTO task (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, created_at, updated_at) VALUES
-- 1º ano básico
(37, 'Qual o maior rio do Brasil?', 'Amazonas', 'São Francisco', 'Paraná', 'Tietê', 'A', NOW(), NOW()),
(37, 'O que é relevo?', 'Formas da superfície terrestre', 'Clima', 'Vegetação', 'População', 'A', NOW(), NOW()),
(37, 'Clima tropical é:', 'Quente e úmido', 'Frio e seco', 'Temperado', 'Árido', 'A', NOW(), NOW()),
-- 2º ano intermediário
(40, 'O que é geopolítica?', 'Estudo das relações de poder entre países', 'Clima', 'Vegetação', 'Religião', 'A', NOW(), NOW()),
(40, 'Urbanização significa:', 'Crescimento das cidades', 'Desenvolvimento rural', 'Industrialização', 'Política', 'A', NOW(), NOW()),
(40, 'Sustentabilidade busca:', 'Preservação ambiental', 'Crescimento econômico sem limites', 'Uso excessivo de recursos', 'Poluição', 'A', NOW(), NOW()),
-- 3º ano avançado
(43, 'Globalização é:', 'Integração econômica e cultural', 'Isolamento econômico', 'Colonização', 'Guerra mundial', 'A', NOW(), NOW()),
(43, 'Climatologia estuda:', 'Os climas da Terra', 'Rios', 'Vegetação', 'Relevo', 'A', NOW(), NOW()),
(43, 'Desenvolvimento regional visa:', 'Reduzir desigualdades', 'Aumentar pobreza', 'Diminuir educação', 'Parar economia', 'A', NOW(), NOW());
