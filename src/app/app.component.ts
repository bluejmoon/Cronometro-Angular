import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mensaje = '';

  actualizar(tiempo:number){
    this.mensaje = tiempo + ' (Se actualiza cada 10 segundos)';
  }
}
