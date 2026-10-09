// Campos do formulário
const f_titulo = document.querySelector("#f_titulo")
const f_tipo = document.querySelector("#f_tipo")
const f_tema = document.querySelector("#f_tema")
const f_tempo = document.querySelector("#f_tempo")
const f_data = document.querySelector("#f_data")
const f_status = document.querySelector("#f_status")

// Mensagens de validação
const erroTitulo = document.querySelector("#erroTitulo")
const erroTipo = document.querySelector("#erroTipo")
const erroTema = document.querySelector("#erroTema")
const erroTempo = document.querySelector("#erroTempo")
const erroData = document.querySelector("#erroData")

const btnAdicionar = document.querySelector("#btnAdicionar")
const listaEstudos = document.querySelector("#listaEstudos")

const estudos = []

const validarCampos = () => {
    let camposValidos = true

    const titulo = f_titulo.value.trim()
    const tipo = f_tipo.value
    const tema = f_tema.value.trim()
    const tempo = f_tempo.value
    const data = f_data.value

    erroTitulo.textContent = ""
    erroTipo.textContent = ""
    erroTema.textContent = ""
    erroTempo.textContent = ""
    erroData.textContent = ""

    if (titulo === "") {
        erroTitulo.textContent = "*Campo obrigatório"
        camposValidos = false
    }

    if (tipo === "") {
        erroTipo.textContent = "*Campo obrigatório"
        camposValidos = false
    }

    if (tema === "") {
        erroTema.textContent = "*Campo obrigatório"
        camposValidos = false
    }

    if (tempo === "") {
        erroTempo.textContent = "*Campo obrigatório"
        camposValidos = false
    } else if (Number(tempo) <= 0 || !Number.isInteger(Number(tempo))) {
        erroTempo.textContent = "*Informe um tempo inteiro maior que zero."
        camposValidos = false
    }

    if (data === "") {
        erroData.textContent = "*Campo obrigatório"
        camposValidos = false
    } else if (!f_data.validity.valid) {
        erroData.textContent = "*Informe uma data válida entre 1900 e 2099."
        camposValidos = false
    }

    return camposValidos
}

btnAdicionar.addEventListener("click", () => {
    const camposValidos = validarCampos()

    if (camposValidos === false) {
        return
    }

    alert("Tudo válido!")

})