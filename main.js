class entidade{
    nome;
    nivel;
    hp;
    dano;

    constructor(nome, nivel, hp, dano){
        this.nome = nome;
        this.nivel = nivel;
        this.hp = hp;
        this.dano = dano;
    }
}

class player extends entidade{
    super(nome, nivel, hp, dano);

    
}


class boss extends entidade{
    super(nome, nivel, hp, dano);

    
}

class cripper extends entidade{
    super(nome, nivel, hp, dano);

    crippers;

    constructor(quantidade){
        this.crippers = new Array(quantidade);
            for(let i=0; i < quantidade; i++){
                this.crippers[i] = new cripper("Zezinho", 3, 20, 1);
            }  
                  
    }

}


let zidero = new player("Zidero", 20, 100, 10);
let horda = new cripper(10);
let abigail = new boss("Abigail, morreu e num viu", 15, 100, 7);