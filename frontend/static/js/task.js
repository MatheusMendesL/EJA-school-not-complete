// testar isso, a parte nv

async function task() {
  const token = localStorage.getItem("token");
  const urlParams = window.location.search;
  const params = new URLSearchParams(urlParams);
  const id_lesson = params.get("lesson_id");
  const id_matter = params.get("matter_id");
  const id = atob(id_lesson);
  const userStorage = localStorage.getItem("user");
  const user_data = JSON.parse(userStorage);
  const id_user = user_data[0].id_user;

  document.querySelector("#back").addEventListener("click", (e) => {
    e.preventDefault();
    router.navigate("/lessons?id=" + id_matter);
  });

  const tasks = await fetch("task/lesson/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw new Error("Erro para devolver os dados");
    })
    .then((data) => {
      return data;
    });

  // ver retorno
  console.log(tasks);

  let index = 0;
  let percentage = 10;

  function showQuestion() {
    const q = tasks.data[index];

    document.querySelector("#question").innerText = q.question;
    document.querySelector("#optionA").innerText = q.option_a;
    document.querySelector("#optionB").innerText = q.option_b;
    document.querySelector("#optionC").innerText = q.option_c;
    document.querySelector("#optionD").innerText = q.option_d;
    document.querySelector("#number").textContent = index + 1;
    document.querySelector(".progress-fill").style.width = `${percentage}%`;
  }

  let correto = 0;
  let errado = 0;
  let xp = 0;

  function checkAnswer(answer) {
    const q = tasks.data[index];

    document.querySelector(".btn_submit").addEventListener("click", (e) => {
      e.preventDefault();

      if (answer === q.correct) {
        document.querySelector(`#${answer}`).classList.add("correct");
        correto += 1;
        xp += 50;
      } else {
        document.querySelector(`#${q.correct}`).classList.add("correct");
        document.querySelector(`#${answer}`).classList.add("error");
        errado += 1;
        xp -= 25;
      }

      index++;
      percentage += 10;

      document.querySelector(".btn_submit").classList.add("d-none");
      document.querySelector(".btn_forward").classList.remove("d-none");

      document.querySelector(".btn_forward").addEventListener("click", (e) => {
        // tlvz tenha q remover os style dos btn, ai eu tiro aq

        e.preventDefault();
        if (index < tasks.data.length) {
          // pede p acalmar, primeiramente ele tem q mostrar se está correto
          document.querySelector(".btn_forward").classList.add("d-none");
          document.querySelector(".btn_submit").classList.remove("d-none");
          showQuestion();
        } else {
          fetch(`user/update_xp/${id_user}/${xp}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              if (response.status == 200) return response.json();
              throw new Error("Erro para devolver os dados");
            })
            .then((data) => {
              // nn vai ter retorno nenhum, mas é só p testa
              console.log(data);
            });
          router.navigate("/finalTask");
        }
      });
    });
  }

  document
    .querySelector("#optionA")
    .addEventListener("click", () => checkAnswer("option_a"));
  document
    .querySelector("#optionB")
    .addEventListener("click", () => checkAnswer("option_b"));
  document
    .querySelector("#optionC")
    .addEventListener("click", () => checkAnswer("option_c"));
  document
    .querySelector("#optionD")
    .addEventListener("click", () => checkAnswer("option_d"));

  showQuestion();
}

task();
