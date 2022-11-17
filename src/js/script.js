export class homePage {
    static formulario = document.querySelector("#form__login")

    static validarLogin() {
        [this.formulario].forEach(element => {
            element.addEventListener("keyup", (e) => {
                const valueInput = e.target.value.trim().toLowerCase()
                const idLocal = e.target.id
                if (idLocal == "input__email") {
                    if (!valueInput.includes("@") || valueInput.length < 10) {
                        e.target.classList.add("input-error")
                        e.target.classList.remove("input-valid")
                    } else {
                        e.target.classList.add("input-valid")
                        e.target.classList.remove("input-error")
                    }
                }

                if (idLocal == "input__password") {
                    const valor = e.target.value
                    if (valor.length >= 16 || ! valor.includes('1','2','3','4','5','6','7','8','9','0')) {
                        e.target.classList.add("input-error")
                        e.target.classList.remove("input-valid")
                    } else {
                        e.target.classList.add("input-valid")
                        e.target.classList.remove("input-error")
                    }
                }
            })
        })
    }

    static modalsOpening() {
        const modais = document.querySelectorAll("[data-modal-control]")
        modais.forEach(element => {
            element.addEventListener("click", (e) => {
                const click = element.getAttribute('data-modal-control')
                const elementoId = document.getElementById(click)
                elementoId.classList.toggle("hidden")
            })
        })
    }
}