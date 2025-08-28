async function lessons() {
  const urlParams = window.location.search;
  const params = new URLSearchParams(urlParams);
  const token = localStorage.getItem("token");
  const codified_id = params.get("id");
  const id = atob(codified_id);

  const matter = await fetch("get_matter_id/" + id, {
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
      // ver oq devolve e separar por levels

      return data;
    });

  document
    .querySelectorAll("#matter")
    .forEach((e) => (e.textContent = data.data.name));

  // ver oq essa desgraça devolve e arrumar qlq coisa
  console.log(matter);
  fetch("lesson/matter/" + id, {
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
      const div = document.querySelector("#topics");
      const title_data = data.data.title;

      title_data.forEach((e) => {
        // passar card/btn
        console.log(e);

        const btn = document.createElement("button");
        btn.id = data.data.id_lesson;
        const id_teste = btn.id;
        btn.classList.add(""); // classes p add dps do bootstrap
        btn.textContent = e;
        div.appendChild(btn);

        btn.addEventListener("click", () => {
          fetch("lesson/" + id_teste, {
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
              router.navigate("/task?lesson_id=" + id_teste);
              console.log(data.data);
            });
        });
      });
    });
}

lessons();
