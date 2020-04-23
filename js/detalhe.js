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

    let divLinha = document.createElement('hr')
    divLinha.setAttribute('class', 'mt-5 border border-dark')

    let divMais = document.createElement('h4')
    divMais.setAttribute('class', 'mt-4')
    divMais.textContent = 'LEIA MAIS'
    
    divDetalhe.appendChild(divHeading)
    divDetalhe.appendChild(divParag)
    divDetalhe.appendChild(divLinha)
    divDetalhe.appendChild(divMais)

    if(id>4){
        for(let index=0; index<4; index++){
            let noticiaMais = listaDeNoticias[index]

            let divParagMais = document.createElement('p')

            let divLinkMais = document.createElement('a')
            divLinkMais.setAttribute('class','text-capitalize text-info')
            divLinkMais.setAttribute('href', 'detalhe.html?id='+ (index+1))
            divLinkMais.textContent = noticiaMais.title

            divParagMais.appendChild(divLinkMais)
            divDetalhe.appendChild(divParagMais)
            
        }
    } else{
        for(let index=0; index<5; index++){
            if(index != (id-1)){
                let noticiaMais = listaDeNoticias[index]
    
                let divParagMais = document.createElement('p')
    
                let divLinkMais = document.createElement('a')
                divLinkMais.setAttribute('class','text-capitalize text-info')
                divLinkMais.setAttribute('href', 'detalhe.html?id='+ (index+1))
                divLinkMais.textContent = noticiaMais.title
    
                divParagMais.appendChild(divLinkMais)
                divDetalhe.appendChild(divParagMais)
            } 
            
        }
    }

}

noticiaDetalhe(id)