let drinkContainer = document.getElementById('content')
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'

async function getData(urlSuffix){
    //placeholder; gets all drinks that starts with 'a'
    let url = baseUrl + urlSuffix

    console.log('full url: ', url)
    
    const response = await fetch(url)
    
    const data = await response.json()
    
    let drinks = data.drinks
    
    drinks.forEach(d => {
        let el = createDrinkElement(d)
        drinkContainer.appendChild(el)
    });


}

function createDrinkElement(drink){
    let drinkName = drink.strDrink
    let imageUrl = drink.strDrinkThumb + '/preview'

    let drinkElement = document.createElement('div')
    drinkElement.className = 'drink-card'

    let imageElement = document.createElement('img')
    imageElement.setAttribute('src', imageUrl)
    imageElement.setAttribute('alt', drinkName)

    let drinkNameElement = document.createElement('p')
    drinkNameElement.innerText = drinkName

    drinkElement.appendChild(imageElement)
    drinkElement.appendChild(drinkNameElement)

    drinkElement.addEventListener('click', e => {
        console.log(drinkName)
        location.href = 'drink_info.html?id=' + drink.idDrink
    })
    
    return drinkElement
}