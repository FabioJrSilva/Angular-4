import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a Frase:';
  public resposta: String = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;

  public atualizaFrase(): void {
    //modifica a frase
    this.rodadaFrase = this.frases[this.rodada]
    // limpando as respostas
    this.resposta = ''
  }

  constructor() {
    this.atualizaFrase();
    console.log(this.rodadaFrase);
  }

  ngOnInit() {    
  }

  public atualizaResposta(resposta: Event): void {
    //captura o valor digitado
    this.resposta = ((<HTMLInputElement>resposta.target).value);
      
  }  
  
  public verificarResposta(): void {      

    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('A tradução está correta!')
      //trocar pergunta da rodada
      this.rodada++
      //atalizar a barra de progresso
      this.progresso = this.progresso + (100 / this.frases.length)  
      //chamada da função pra mudar a frase
      this.atualizaFrase();     
    }
    else{
      alert('Você errou !!!')
    }
            
  }

}
