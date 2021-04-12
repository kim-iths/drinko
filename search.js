let query = sessionStorage.getItem('query')

document.getElementById('query-text').innerText += ' \'' + query + '\':'

window.onload = function(){
    let suffix = 'search.php?s=' + query 
    console.log(suffix)
    getData(suffix)
}