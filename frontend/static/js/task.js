async function task() {
    const token = localStorage.getItem("token");

    // ✅ Pegar query params do hash
    const hash = window.location.hash; // "#/task?lesson_id=NA==&matter_id=MQ=="
    const queryString = hash.split("?")[1]; // "lesson_id=NA==&matter_id=MQ=="
    const params = new URLSearchParams(queryString);

    const id_lesson = params.get("lesson_id");
    const id_matter = params.get("matter_id");
    const id = atob(id_lesson);

    const userStorage = localStorage.getItem("user");
    const user_data = JSON.parse(userStorage);
    const id_user = user_data[0].id_user;

    document.querySelector("#back").addEventListener("click", (e) => {
        e.preventDefault();
        router.navigate(`/lessons?id=${id_matter}`);
    });

    const tasks = await fetch("task/lesson/" + id, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    }).then(res => res.status === 200 ? res.json() : Promise.reject("Erro ao pegar tasks"));

    let index = 0;
    let percentage = 10;
    let correto = 0;
    let errado = 0;
    let xp = 0;
    let selectedAnswer = null;

    function showQuestion() {
        const q = tasks.data[index];
        document.querySelector("#question").innerText = q.question;
        document.querySelector("#optionA").innerText = q.option_a;
        document.querySelector("#optionB").innerText = q.option_b;
        document.querySelector("#optionC").innerText = q.option_c;
        document.querySelector("#optionD").innerText = q.option_d;
        document.querySelector("#number").textContent = index + 1;
        document.querySelector(".progress-fill").style.width = `${percentage}%`;

        const progressBar = document.querySelector('.progress-bg');
        progressBar.setAttribute('aria-valuenow', percentage);
        progressBar.setAttribute('aria-label', `Progresso da lição: ${percentage}%`);
        document.querySelector("#question-title").setAttribute('aria-label', `Questão ${index + 1}: ${q.question}`);

        selectedAnswer = null;
        ['A','B','C','D'].forEach(letter => {
            const label = document.querySelector(`#option${letter}`);
            label.classList.remove("correct", "error");
            label.setAttribute('aria-pressed', 'false');
        })

        document.querySelector("#optionA").focus();
    }

    function checkAnswer() {
        if (!selectedAnswer) return;
        const q = tasks.data[index];
        const selectedLabel = document.querySelector(`label[for=${selectedAnswer}]`);
        const correctLabel = document.querySelector(`label[for=${q.correct_answer}]`);

        if (selectedAnswer === q.correct_answer) {
            selectedLabel.classList.add("correct");
            correto++;
            xp += 50;
        } else {
            correctLabel.classList.add("correct");
            selectedLabel.classList.add("error");
            errado++;
            xp -= 25;
        }

        index++;
        percentage += 10;

        document.querySelector(".btn_submit").classList.add("d-none");
        document.querySelector(".btn_forward").classList.remove("d-none");
        document.querySelector(".btn_forward").focus();
    }

    function selectAnswer(letter) {
        selectedAnswer = letter;
        ['A','B','C','D'].forEach(l => {
            const label = document.querySelector(`#option${l}`);
            if (l === letter) {
                label.setAttribute('aria-pressed', 'true');
                label.setAttribute('aria-label', `Opção ${letter} selecionada`);
            } else {
                label.setAttribute('aria-pressed', 'false');
                label.setAttribute('aria-label', `Opção ${l}`);
            }
        })
    }

    ['A','B','C','D'].forEach(letter => {
        const label = document.querySelector(`#option${letter}`);
        label.addEventListener("click", () => selectAnswer(letter));
        label.addEventListener("keydown", (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectAnswer(letter);
            }
        });
    });

    document.querySelector(".btn_submit").addEventListener("click", (e) => {
        e.preventDefault();
        checkAnswer();
    });

    document.querySelector(".btn_forward").addEventListener("click", async (e) => {
        e.preventDefault();

        if (index < tasks.data.length) {
            document.querySelector(".btn_forward").classList.add("d-none");
            document.querySelector(".btn_submit").classList.remove("d-none");
            showQuestion();
        } else {
            // ✅ salvar progresso
            const data_progress = await fetch(`progress/${atob(id_matter)}/${id}/${id_user}`, {
                method: "GET",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
            }).then(res => res.json());

            if (!data_progress.data || data_progress.data.length === 0) {
                await fetch(`progress/add`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                    body: JSON.stringify({ user: id_user, lesson: id, matter: atob(id_matter) })
                });
            }

            // ✅ atualizar XP
            await fetch(`user/update_xp/${id_user}/${xp}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
            });

            // ✅ só então navegar
            router.navigate(`/finalTask?corrects=${correto}&xp=${xp}&id=${btoa(id_user)}`);
        }
    });

    showQuestion();
}

task();
