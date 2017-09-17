export class Coracao{    
    constructor (
        public cheio: boolean,
        public urlCoracaoCheio: string ='assets/coracao_Cheio.png',
        public urlCoracaoVazio: string ='assets/coracao_vazio.png'){

    }

    public exibeCoracao(): string {
        if(this.cheio){
            return this.urlCoracaoCheio;
        }
        else{
            return this.urlCoracaoVazio;
        }
    }
}