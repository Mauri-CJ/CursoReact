const apiKey = 'BuUlinrvyrtzKmTknLuKscBqUnn1s1NB'

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`) //retorna una promesa

httpCall //Promesas encadenadas
    .then(resp => resp.json()) //retorna en formato json la respuesta en forma de promesa
    .then(({data}) => {//La recibimos con otra promesa pero ya la data parseada 
        //Destructuramos la data que viene, sino tendriamos que hacer data.data...
        const {url} = data.images.original //Destructuramos tambien para la url
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch(console.warn) // El catch ya catchea todos los errores, aunque podemos hacer un catch por promesa

    