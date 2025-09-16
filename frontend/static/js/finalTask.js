function finalTask() {
    document.querySelector('.btnHome').addEventListener('click', () => {
        router.navigate('/home')
    })

    const hash = window.location.hash;
    const queryString = hash.split("?")[1];
    const params = new URLSearchParams(queryString);

    const correct = params.get("corrects");
    const xp = params.get("xp");

    document.querySelector("#xp").textContent = xp;

    const percentage = `${correct}0%`;
    document.querySelector('.progress-fill').style.width = percentage;
    document.querySelector('#percentage').textContent = percentage;

    document.querySelector("#correct").textContent = correct;

    if(correct <= 3){
        document.querySelector('#messageAfter').classList.add('alert-danger');
        document.querySelector('#messageAfter').textContent = "Estude mais!";
    } else if(correct <= 6) {
        document.querySelector('#messageAfter').classList.add('alert-warning');
        document.querySelector('#messageAfter').textContent = "Precisa melhorar!";
    } else {
        document.querySelector('#messageAfter').classList.add('alert-success');
        document.querySelector('#messageAfter').textContent = "Muito bem!";
    }
}

finalTask();
