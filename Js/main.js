// Dark Mode 
var themeColor = document.querySelector('.day-night');
var selector = document.getElementById('themeSelector');
var body = document.querySelector('body');

themeColor.addEventListener("click", changeTheme);

function toLight() {

    body.classList.remove('dark');
    selector.classList.replace('fa-sun', 'fa-moon');


}

function toDark() {

    body.classList.add('dark');
    selector.classList.replace('fa-moon', 'fa-sun');

}

function changeTheme() {
    // Verify and change the theme!
    body.classList.contains('dark') ?
        toLight() :
        toDark();
}


// Nav/ Pages animations

var
    nav = document.querySelectorAll('li');
    allNav = nav.length;
    sec = document.querySelectorAll('.section');
    

for (i = 0; i < allNav; i++) {

    // isola cada botão dentro de uma estrutura de repetição
    const a = nav[i].querySelector("a");


    a.addEventListener('click', function () {

        

        for (i = 0; i < sec.length; i++) {

            // tira todos os back-section
            sec[i].classList.remove('back-section');
            

        }
        for( j = 0 ; j < allNav ; j++){
            // Retira as classe de animação dos itens  
            if(nav[j].querySelector('i').classList.contains('flutter')){
                nav[j].querySelector('i').classList.remove('flutter')
            }         
        }

        for ( n = 0; n < allNav; n++) {
            if (nav[n].querySelector('a').classList.contains('active')) {
                // add back-section ao elemento atual antes da troca
                sec[n].classList.add('back-section');

            }
            // retira a classe ativo do elemento anterior
            nav[n].querySelector('a').classList.remove('active');
            
        }
        // adiciona ativo ao novo elemento
        this.classList.add('active');
        
        
        showSection(this,this.children[0])
    })


}


function showSection(element,icon) {

    for (i = 0; i < sec.length; i++) {

        sec[i].classList.remove('active');
        
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");

    // adiciona animação ao novo elemento
    icon.classList.add('flutter')

}
