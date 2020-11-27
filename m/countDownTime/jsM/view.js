const view = {
    showTimer(data) {
        let domMobile = document.querySelector('.card-group')

            domMobile.innerHTML = ''

            for (let i = 0; i < data.length; i++) {
                let htmlMobile = `<div class="card">
                    <div class="card-body text-center">
                        <h1>${data[i].name}</h1>
                        <p class="timer${data[i].id}">Timer: </p>
                        <p>Score: 1500</p>
                        <button id="bt${data[i].id}" type="button" class="btn btn-success">Remove</button>
                    </div>
                </div>`
                domMobile.innerHTML += htmlMobile
                let D = new Date().getTime()
                distance = (data[i].timer + 60 * 1000) - D
                let t = Math.floor(distance / 1000)
                let interval = setInterval(function () {
                    t--;
                    $(`.timer${data[i].id}`).text(t);
                    if (t <= 0) {
                        clearInterval(interval)
                        document.querySelector(`.timer${data[i].id}`).innerHTML = "Bye"
                       let divN = ((document.querySelector(`.timer${data[i].id}`).parentElement).parentElement)
                       divN.classList.add('bg_green')
                    };
                }, 1000);
            }
            controller.removeControl()
    },

}