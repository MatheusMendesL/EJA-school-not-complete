/* localStorage.clear() */
async function exec() {
  const userStorage = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const user_data = JSON.parse(userStorage);

  document.querySelector("#name").textContent = user_data[0].name;
  document.querySelector("#level").textContent = user_data[0].ranking;
  document.querySelectorAll("#xp").forEach((e) => {
    e.textContent = user_data[0].xp;
  });
  document.querySelector("progress").value = user_data[0].xp;

  // mudar rota do fetch
  const progressUser = await fetch("urlApi/idUser", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw new Error("Erro ao pegar os dados: " + response.status);
    })
    .then((data) => {
      //p testa
      console.log(data);
    });

  // testar se funciona
  console.log(progressUser);

  // matters
  fetch("matter/get_matters", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw new Error("Erro ao pegar os dados: " + response.status);
    })
    .then((data) => {
      if (data.status == "success") {
        const colors_background = {
          Português: "#e74c3c;",
          Matemática: " #3498db",
          Ciências: " #2ecc71",
          História: " #8e5e3f",
          Geografia: "#f39c12",
        };

        const colors = {
          Português: "#fff",
          Matemática: "#fff",
          Ciências: "#fff",
          História: "#fff",
          Geografia: "#fff",
        };

        const icons = {
          Português: "fas fa-book-open fs-6",
          Matemática: "fas fa-calculator fs-6",
          Ciências: "fas fa-atom fs-6",
          História: "fas fa-landmark fs-6",
          Geografia: "fas fa-globe fs-6",
        };

        const data_matters = data.data;
        data_matters.forEach((matter) => {
          const section = document.querySelector(".sec-matters");
          const card_matter = document.createElement("article");
          card_matter.classList.add("col-sm-6");
          card_matter.innerHTML = `
          <div class="card p-4">
            <div class="d-flex align-items-center gap-3 mb-2">
              <div class="d-flex align-items-center justify-content-center rounded-3"
                style="width: 40px; height: 40px; background-color:${
                  colors_background[matter.name]
                }; color:${colors[matter.name]};">
                <i class="${icons[matter.name]}"></i>
              </div>
              <div>
                <p class="fw-semibold fs-6 text-dark mb-0">${matter.name}</p>
                <p class="fs-7 text-secondary mb-0">0 de 12 lições</p>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center fs-7 text-dark-emphasis mb-1">
              <span>Progresso</span>
              <span>Tenho que fazer</span>
            </div>
            <div class="progress mb-3" role="progressbar" aria-label="Progresso de ${
              matter.name
            }" aria-valuenow="45"
              aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style="width: 45%; ${
                colors[matter.name]
              };"></div>
            </div>
            <button class="btnLesson btn btn-outline-secondary w-100 fs-7 py-1" type="button">
              Fazer lições
            </button>
          </div>
        `;

          // pega o botão dentro do card recém-criado
          const btn = card_matter.querySelector(".btnLesson");
          btn.addEventListener("click", () => {
            const id = btoa(matter.id_matter);
            router.navigate("/lessons?id=" + id);
          });

          section.appendChild(card_matter);
        });
      }
    });
}
