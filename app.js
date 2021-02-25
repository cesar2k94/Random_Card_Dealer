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
        element.classList.replace('card_top', 'card1_top');
        element = document.querySelector(".card_bottom");
        element.classList.replace('card_bottom', 'card1_bottom');
        break;
    case 2:
        element = document.querySelector(".card_top");
        element.classList.replace('card_top', 'card2_top');
        element = document.querySelector(".card_bottom");
        element.classList.replace('card_bottom', 'card2_bottom');  
        break;
    case 3:
        element = document.querySelector(".card_top");
        element.classList.replace('card_top', 'card3_top');
        element = document.querySelector(".card_bottom");
        element.classList.replace('card_bottom', 'card3_bottom');
        break;
    default:
        break;
}
