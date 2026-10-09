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
        erroTempo.textContent = "*Informe uma duração válida."
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

const formatarTexto = (texto) => {
    return texto
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(" ")
}

const exibirEstudos = () => {
    listaEstudos.innerHTML = ""

    estudos.forEach((estudo) => {

        const dataFormatada = estudo.data
            .split("-")
            .reverse()
            .join("/")

        const statusFormatado = estudo.status === "concluido"
            ? "Concluído"
            : "Pendente"

        const tipoFormatado = formatarTexto(estudo.tipo)

        const estudoCard = document.createElement("div")
        estudoCard.classList.add("estudo-card")

        const estudoTitulo = document.createElement("h3")
        estudoTitulo.textContent = estudo.titulo
        estudoCard.append(estudoTitulo)

        const estudoTipo = document.createElement("p")
        estudoTipo.textContent = `Tipo: ${tipoFormatado}`
        estudoCard.append(estudoTipo)

        const estudoTema = document.createElement("p")
        estudoTema.textContent = `Tema estudado: ${estudo.tema}`
        estudoCard.append(estudoTema)

        const estudoTempo = document.createElement("p")
        estudoTempo.textContent = `Tempo estudado: ${estudo.tempo} minutos`
        estudoCard.append(estudoTempo)

        const estudoData = document.createElement("p")
        estudoData.textContent = `Data do estudo: ${dataFormatada}`
        estudoCard.append(estudoData)

        const estudoStatus = document.createElement("p")
        estudoStatus.textContent = `Status: ${statusFormatado}`
        estudoCard.append(estudoStatus)

        listaEstudos.append(estudoCard)
    })
}

const limparCampos = () => {
    f_titulo.value = ""
    f_tipo.value = ""
    f_tema.value = ""
    f_tempo.value = ""
    f_data.value = ""
    f_status.value = "concluido"
}

btnAdicionar.addEventListener("click", () => {
    const camposValidos = validarCampos()

    if (!camposValidos) {
        return
    }

    const tituloFormatado = formatarTexto(f_titulo.value)
    const temaFormatado = formatarTexto(f_tema.value)

    const estudo = {
        titulo: tituloFormatado,
        tipo: f_tipo.value,
        tema: temaFormatado,
        tempo: Number(f_tempo.value),
        data: f_data.value,
        status: f_status.value
    }

    estudos.push(estudo)
    exibirEstudos()
    limparCampos()
})