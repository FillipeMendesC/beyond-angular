import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pup-up',
  standalone: true,
  templateUrl: './pup-up.component.html',
  styleUrls: ['./pup-up.component.css']
})
export class PupUpComponent {
  @Output() configuracoesClicado = new EventEmitter<void>();
  @Output() sairClicado = new EventEmitter<void>();

  aoClicarConfiguracoes() {
    this.configuracoesClicado.emit();
  }

  aoClicarSair() {
    this.sairClicado.emit();
  }
}