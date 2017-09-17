import { Component, OnInit, Input } from '@angular/core';
import { PainelComponent } from '../painel/painel.component'
@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  /*usar @ para chamar a função Input de decoração para passar parametros de classes pai para classes filhos, 
  ex:  painel.component >>>> progresso.component da variavel 'progresso' */
  
  @Input() public progresso: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
