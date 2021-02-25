function random_number(){
    let aleatorio_number=Math.floor(Math.random()*13);
    let letra;
    switch (aleatorio_number) {
        case 1:
            letra='A';
            break;
        case 11:
            letra='J';
            break;
        case 12:
            letra='Q';
            break;
        case 0:
            letra='K';
            break;
        default:
            letra=aleatorio_number.toString();
            break;
    }
    return letra;
}
function random_card(){
    let aleatorio_number=Math.floor(Math.random()*4);
    return aleatorio_number;
}

let letra= random_number();
let elem= document.querySelector(".number");
elem.innerHTML="<h1>"+letra+"</h1>" ;

let number= random_card();
let element;
switch (number) {
    case 1:
        element = document.querySelector(".card_top");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card_bottom");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card1_top");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card1_bottom");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card2_top");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card2_bottom");
        element.parentNode.removeChild(element); 
        break;
    case 2:
        element = document.querySelector(".card1_top");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card1_bottom");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card2_top");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card2_bottom");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card3_top");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card3_bottom");
        element.parentNode.removeChild(element); 
        break;
    case 3:
        element = document.querySelector(".card1_top");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card1_bottom");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card_top");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card_bottom");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card3_top");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card3_bottom");
        element.parentNode.removeChild(element); 
        break;

    default:
        element = document.querySelector(".card_top");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card_bottom");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card2_top");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card2_bottom");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card3_top");
        element.parentNode.removeChild(element); 
        element = document.querySelector(".card3_bottom");
        element.parentNode.removeChild(element); 
        break;
}
