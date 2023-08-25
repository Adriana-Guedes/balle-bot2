
//função onclik / necessário chamar no html


function menuShow(){
    let menuMobile = document.querySelector('.cabecalho-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else{
        menuMobile.classList.add('open');
    }
}