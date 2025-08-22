console.log(localStorage.getItem("token"));
/* localStorage.clear() */

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
console.log(user);

document.querySelector("#name").textContent = user.name;

document.querySelector("#profile").addEventListener("click", () => {
  const id_user = user.id_user; // mudar qq q coisa p o certo
  const codified_id = btoa(id_user);
  router.navigate(`/profile?id=${codified_id}`);
});

document.querySelector("#level").textContent = user.level;
document.querySelector("#xp").textContent = user.xp;

// matters

const matters = await fetch("matter/get_matters", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => {
    if (response.status == 200) return response.json();
    throw new Error("Erro no login: " + response.status);
  })
  .then((data) => {
    if (data.status == "success") {
      // passar p dentro de cada materia
      // ver dps os dados

      const colors = [
        {
          Português: "background-color: #e74c3c;",
          Matemática: "background-color: #3498db",
          Ciências: "background-color: #2ecc71",
          História: "background-color: #8e5e3f",
          Geografia: "background-color: #f39c12",
        },
      ];
      // passar as cores p um array pra ficar mais bonito, ai dependendo doq vier ele retorna a cor
      const data_matters = data.data;
      data_matters.forEach((matter) => {
        document.querySelector(".matter").innerHTML = `<div class="card p-4">
            <div class="d-flex align-items-center gap-3 mb-2">
              <div class="d-flex align-items-center justify-content-center rounded-3 text-matematica bg-matematica"
                style="width: 40px; height: 40px;">
                <i class="fas fa-calculator fs-6"></i>
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
            <div class="progress mb-3" role="progressbar" aria-label="Progresso de Matemática" aria-valuenow="45"
              aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style="width: arrumar; ${colors.map((e) =>
                e.indexOF(matter)
              )};"></div>
            </div>
            <button class="btn btn-outline-secondary w-100 fs-7 py-1" type="button">
              Continuar
            </button>
          </div>`;
      });
    }
  });
