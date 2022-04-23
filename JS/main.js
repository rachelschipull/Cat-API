
document.querySelector('.button').addEventListener('click', getCat)

function getCat(){


fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {
        console.log(data[0].url)
        document.querySelector('img').src = data[0].url
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}