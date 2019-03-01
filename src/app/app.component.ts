import {Component} from '@angular/core';

@Component({
  selector :'app-root',
  templateUrl:'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent{

  nome:string = "joao";
  valor:string= "";
  clique():void{

  alert('boa noite'+this.valor);

  }
}
