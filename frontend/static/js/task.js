async function task(){

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
        headers:{
             "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
        }
    }).then(response => {
        if (response.status == 200) return response.json();
        throw new Error("Erro para devolver os dados");
    }).then(data => {return data})


    // ver retorno
    console.log(tasks)

    // passar p os lugares da task.html

    // pegar id da materia

}

task()