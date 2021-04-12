//gives the current nav item a different style
window.onload = function(){
    document.querySelector('#home').className = 'nav-item-current'
    getData('search.php?f=a')
}