// Dark Mode 
var themeColor = document.querySelector('.day-night');
var selector = document.getElementById('themeSelector');
var body = document.querySelector('body');

themeColor.addEventListener( "click", changeTheme);

function toLight(){

    body.classList.remove('dark');
    selector.classList.replace('fa-sun', 'fa-moon');


}

function toDark(){

    body.classList.add('dark');
    selector.classList.replace('fa-moon', 'fa-sun');

}

function changeTheme() {
    // Verify and change the theme!
    body.classList.contains('dark') ? 
    toLight() :       
    toDark();
}
