import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  novaTarefa: string = '';
  exibirLista: boolean = true;
  tarefas = [{ nome: 'Tarefa A', concluida: false }];

  adicionarNovaTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
    }
  }

  tarefaConcluida(tarefa: any) {
    tarefa.concluida = true;
  }
}


