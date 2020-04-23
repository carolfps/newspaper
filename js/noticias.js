let divlistaDeNoticias = document.getElementById('lista-de-noticias')

async function listarNoticias(){ 

    let noticias = await fetch('https://jsonplaceholder.typicode.com/posts')
    
    let listaDeNoticias = await noticias.json()

    listaDeNoticias.forEach(noticia => {
           
        let divCol = document.createElement('div')
        divCol.setAttribute('class','col-md-3')
    
        let divCard = document.createElement('div')
        divCard.setAttribute('class','card mt-4')
    
        let divCardBody = document.createElement('div')
        divCardBody.setAttribute('class','card-body')
    
        let cardTitle = document.createElement('h5')
        cardTitle.setAttribute('class','card-title text-capitalize font-weight-bold')
        cardTitle.textContent = noticia.title
    
        let link = document.createElement('a')
        link.setAttribute('class', 'btn btn-primary')
        link.setAttribute('href', 'detalhe.html?id='+noticia.id)
        link.textContent = 'Ver notícia'
    
        divCard.appendChild(divCardBody)

        divCardBody.appendChild(cardTitle)
        divCardBody.appendChild(link)
    
        divCol.appendChild(divCard)

        divlistaDeNoticias.appendChild(divCol)

    });


}

listarNoticias()