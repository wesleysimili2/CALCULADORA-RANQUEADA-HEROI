


function calcRanked(victory, defeat){
    return victory - defeat;
}

let winrate = calcRanked(400, 100)


    if(winrate < 10){
        console.log(`O Herói tem de saldo de ${winrate} está no nível de FERRO`)
    }
    else if(winrate >= 11 && winrate <= 20){ 
        consoles.log(`O HeróiD tem de saldo de ${winrate} está no nível de  BRONZE`)
  
    }else if(winrate >= 11 && winrate <= 50){ 
        console.log(`O Herói tem de saldo de ${winrate} está no nível de PRATA`)

    }else if(winrate >= 51 && winrate <= 80){   
        console.log(`O Herói tem de saldo de ${winrate} está no nível de OURO`)

    }else if(winrate >=81 && winrate <= 90){ 
        console.log(`O Herói tem de saldo de ${winrate} está no nível de DIAMANTE`)

    }else if(winrate >= 91 && winrate <= 100) { 
        console.log(`O Herói tem um saldo de ${winrate}. Ele está no nível de LENDÁRIO`);

    } else{ 
        console.log(`O Herói tem um saldo de ${winrate}. Ele está no nível de IMORTAL`);

    }

    
