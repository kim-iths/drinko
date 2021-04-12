window.onload = function(){
    getDrinkInfo()
}


async function getDrinkInfo(){
    let image = document.getElementById('image-showcase')
    let imageBackground = document.getElementById('image-background')
    let content = document.getElementById('drink-info-content')

    const params = new URLSearchParams(document.location.search);
    const id = params.get("id");
    
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id

    console.log('url: ', url)

    const response = await fetch(url)
    const data = await response.json()
    let drinks = data.drinks

    let drink = drinks[0]

    //drink properties
    let drinkName = drink.strDrink
    let imageUrl = drink.strDrinkThumb
    let category = drink.strCategory
    let alcoholic = drink.strAlcoholic
    let glass = drink.strGlass
    let ingredients = ['']
    let measures = ['']

    //get all ingredients and measures for the drink
    for(let i = 1; i <= 15; i++){
        let ingredientIndex = 'strIngredient' + i
        let measureIndex = 'strMeasure' + i

        ingredients[i] = drink[ingredientIndex]
        measures[i] = drink[measureIndex]

        if(ingredients[i] === null){
            ingredients.length = i
            break
        }
    }

    for(let i = 0; i < ingredients.length; i++){
        console.log(measures[i] + ingredients[i])
    }


    //set and create elements with drink info
    image.setAttribute('src', imageUrl)
    image.setAttribute('alt', drinkName)
    imageBackground.setAttribute('src', imageUrl)
    imageBackground.setAttribute('alt', drinkName)

    let drinkNameElement = document.createElement('p')

    content.appendChild(drinkNameElement)
    drinkNameElement.innerText = drinkName


}