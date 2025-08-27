
async function lessons() {
  const urlParams = window.location.search;
  const params = new URLSearchParams(urlParams);
  const token = localStorage.getItem("token");
  const codified_id = params.get("id");
  const id = atob(codified_id)


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
      // ver oq devolve e separar por levels
      console.log(data);
    });
}

lessons()

