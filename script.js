function troca(){
    var pic = document.getElementById("carta");
    var text = document.getElementById("cartatexto");
    var num = Math.random() * 10;
    console.log(num);
    if (num < 3) {
        pic.src="https://i.gifer.com/R4yV.gif";
        text.innerHTML = "A concorrência olhando o site novo."
    }
    else if ( 3 < num && num < 5 ){
        pic.src="https://i.gifer.com/5mZn.gif";
        text.innerHTML = "Nossa equipe trabalhando."
    }
    else if ( 5 < num && num < 6 ){
        pic.src="https://i.gifer.com/QmVN.gif";
        text.innerHTML = "Estágiario no primeiro dia."
    }
    else if ( 6 < num && num < 7 ){
        pic.src="https://i.gifer.com/JDhA.gif";
        text.innerHTML = "As outras empresas..."
    }
    else if ( 7 < num && num < 10 ){
        pic.src="https://i.gifer.com/6Xeg.gif";
        text.innerHTML = "Estamos trabalhando duro pra você."
    }
}


