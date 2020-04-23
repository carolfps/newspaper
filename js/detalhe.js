let params = new URLSearchParams(document.location.search.substring(1))
let id = params.get("id")

let divDetalhe = document.getElementById('detalhe-noticia')

async function noticiaDetalhe(id){ 

    let noticias = await fetch('https://jsonplaceholder.typicode.com/posts')
    
    let listaDeNoticias = await noticias.json()

    let noticia = listaDeNoticias[id-1]

    let divHeading = document.createElement('h1')
    divHeading.setAttribute('class','text-capitalize font-weight-bold')
    divHeading.textContent = noticia.title

    let divParag = document.createElement('p')
    divParag.setAttribute('class','mt-4')
    divParag.textContent = noticia.body

    let voltar = document.createElement('a')
    voltar.setAttribute('class', 'btn btn-primary mt-4')
    voltar.setAttribute('href', 'index.html')
    voltar.textContent = 'Voltar'

    divDetalhe.appendChild(divHeading)
    divDetalhe.appendChild(divParag)
    divDetalhe.appendChild(voltar)

}

noticiaDetalhe(id)