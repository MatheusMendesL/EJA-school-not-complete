async function task() {

    const token = localStorage.getItem("token");
    const urlParams = window.location.search;
    const params = new URLSearchParams(urlParams);
    const id_lesson = params.get("lesson_id");
    const id_matter = params.get("matter_id")
    const id = atob(id_lesson);

    document.querySelector("#back").addEventListener("click", (e) => {
        e.preventDefault()
        router.navigate("/lessons?id=" + id_matter)
    })

    const tasks = await fetch('task/lesson/' + id, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    }).then(response => {
        if (response.status == 200) return response.json();
        throw new Error("Erro para devolver os dados");
    }).then(data => { return data })


    // ver retorno
    console.log(tasks)

    let index = 0
    let percentage = 10

    function showQuestion() {
        const q = tasks.data[index];

        document.querySelector("#question").innerText = q.question;
        document.querySelector("#optionA").innerText = q.option_a;
        document.querySelector("#optionB").innerText = q.option_b;
        document.querySelector("#optionC").innerText = q.option_c;
        document.querySelector("#optionD").innerText = q.option_d;
        document.querySelector("#number").textContent = index + 1
        document.querySelector('.progress-fill').style.width = `${percentage}%`;
    }


    let correto = 0
    let errado = 0


    function checkAnswer(answer) {
        const q = tasks.data[index];

        // na escola, passar aq oq é correto e errado

        document.querySelector('.btn_submit').addEventListener('click', (e) => {
            e.preventDefault()
            if (answer === q.correct) {
                // fetch p api de acerto
            } else {
                // fetch p api de erro
            }

            index++;
            percentage += 10
            if (index < tasks.data.length) {

                // pede p acalmar, primeira mente ele tem q mostrar se está correto
                showQuestion();
            } else {
                // passar p pagina de xp
            }
        })


    }




    document.querySelector("#optionA").addEventListener("click", () => checkAnswer("option_a"));
    document.querySelector("#optionB").addEventListener("click", () => checkAnswer("option_b"));
    document.querySelector("#optionC").addEventListener("click", () => checkAnswer("option_c"));
    document.querySelector("#optionD").addEventListener("click", () => checkAnswer("option_d"));

    showQuestion()

}

task()