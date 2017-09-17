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
  public instrucao: string = 'Traduza a Frase:'
  public resposta: String;
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase);
  }

  ngOnInit() {    
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value);  
    //console.log(this.resposta);
      
  }
  
  public verificarResposta(): void {
    //console.log('Verificar resposta:', this.resposta);
    //trocar pergunta da rodada
    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('A tradução está correta!')
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)
      
      /* teste de progresso
      console.log(this.progresso);*/
      
      this.rodadaFrase = this.frases[this.rodada]
    }
    else{
      alert('Você errou !!!')
    }
    
  }

}
