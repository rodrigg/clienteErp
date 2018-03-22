import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
  providers:[ClienteService]
})
export class ClienteListComponent implements OnInit {
  public clienteLista:Cliente[];
  public cliente:Cliente;
  public clienteBuscar:Cliente;

  public selectedRow:number;
  constructor(public clienteService:ClienteService) { this.getClientes();
  }

  ngOnInit() {
    this.clienteBuscar=new Cliente("","","","","");




  }

  elegirCliente(cliente:Cliente,index){
    this.cliente= Object.assign({}, cliente);
    this.selectedRow = index;
  }

  borrarCliente(cliente:Cliente){
    this.clienteService.eliminarCliente(cliente).subscribe(data=>this.getClientes());
     }
  getClientes(){

    this.clienteService.getClientes().subscribe((clientes)=>
    {
      this.clienteLista=clientes;} );
  }
  resetearForm(){
    this.selectedRow=null;

  }
}

