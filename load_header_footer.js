let header = document.querySelector('#header')
let footer = document.querySelector('#footer')

header.innerHTML = '<div id="nav-container">'
+ '<a href="index.html" id="home" class="nav-item">Home</a>' 
+ '<a href="one.html" id="one" class="nav-item">Browse</a>'
+ '<a href="" id="two" class="nav-item">Contact</a>'
+ '</div>'
+ '<div id="search-field">'
+ '<input type="text" id="input" placeholder="Search">'
+ '<button id="search-button"><i class="fas fa-search"></i></button>'
+ '</div>'

footer.innerHTML = '<p>Results from ' 
+ '<a href="https://www.thecocktaildb.com/api.php">TheCocktailDB</a></p>'

let searchButton = document.getElementById('search-button')
let input = document.getElementById('input')

searchButton.addEventListener('click', e => {
    console.log('tja')
    location.href = 'search.html'
    sessionStorage.setItem('query', input.value)
})

input.addEventListener("keyup", e => {
    if(e.keyCode === 13){
        searchButton.click()
    }
})