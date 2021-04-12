let header = document.querySelector('#header')
let footer = document.querySelector('#footer')

header.innerHTML = '<a href="index.html" id="home" class="nav-item">home</a>' 
+ '<a href="one.html" id="one" class="nav-item">one</a>'
+ '<a href="two.html" id="two" class="nav-item">two</a>'
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