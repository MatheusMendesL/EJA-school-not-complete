async function lessons() {
  const urlParams = window.location.search;
  const params = new URLSearchParams(urlParams);
  const token = localStorage.getItem("token");
  const codified_id = params.get("id");
  const id = atob(codified_id);

  const matter = await fetch("matter/get_matter_id/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw new Error("Erro para devolver os dados");
    }).then(data =>{
      return data
    })

  document.querySelectorAll("#matter").forEach((e) => (e.textContent = matter.data[0].name));

  
  const data = await fetch("lesson/matter/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw new Error("Erro para devolver os dados");
    });

  const lessons = data.data; 
  const div = document.querySelector("#topics");

  const levels = {
    "básico": 1,
    "intermediário": 2,
    "avançado": 3
  };

  document.querySelectorAll('.btn-year').forEach(btnYear => {
    btnYear.addEventListener('click', () => {
      
      div.innerHTML = "";

      const filtered = lessons.filter(lesson => levels[lesson.level] == btnYear.id);

      filtered.forEach((lesson) => {
        const btn = document.createElement("button");
        btn.id = lesson.id_lesson;
        btn.textContent = lesson.title;
        btn.classList.add("btn", "btn-primary", "m-1");
        div.appendChild(btn);

        btn.addEventListener("click", () => {
          fetch("lesson/" + btn.id, {
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
              router.navigate("/task?lesson_id=" + btn.id);
              console.log(data.data);
            });
        });
      });
    });
  });
}

lessons();
