export class Cliente{
    nome;
    _cpf;

    get cpf(){
       return this._cpf;
    }

    contructor(nome,cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}