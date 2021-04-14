window.onload = function(){
    getDrinkInfo()
}


async function getDrinkInfo(){
    let image = document.getElementById('image-showcase')
    let imageBackground = document.getElementById('image-background')
    let content = document.getElementById('drink-info-content')
    let ingredientList = document.getElementById('ingredient-list')
    let drinkNameElement = document.getElementById('drink-name')
    let instructionsElement = document.getElementById('instructions')

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
    let instructions = drink.strInstructions
    let ingredients = ['']
    let measures = ['']
    
    let fullIngredientStrings = ['']

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



    
    
    //set and create elements with drink info
    image.setAttribute('src', imageUrl)
    image.setAttribute('alt', drinkName)
    imageBackground.setAttribute('src', imageUrl)
    imageBackground.setAttribute('alt', drinkName)
    
    drinkNameElement.innerText = drinkName
    instructionsElement.innerText = instructions
    
    for(let i = 1; i < ingredients.length; i++){
        if(measures[i] !== null){
            fullIngredientStrings[i] = measures[i].trim() + ' ' + ingredients[i]
            console.log(measures[i].trim() + ' ' + ingredients[i])
        } else {
            fullIngredientStrings[i] = ingredients[i]
            console.log(ingredients[i])
        }

        let li = document.createElement('li')
        li.innerText = fullIngredientStrings[i]

        ingredientList.appendChild(li)

    }
    
}