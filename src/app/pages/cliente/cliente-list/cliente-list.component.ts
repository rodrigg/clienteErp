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
  constructor(public clienteService:ClienteService) { }

  ngOnInit() {
    this.cliente=new Cliente("","","","","")
    this.getClientes();




  }
  agregarCliente(){
    if(this.cliente._id==="" || !this.cliente._id){
      this.clienteService.agregarClientes(this.cliente)
                         .subscribe((cliente)=>
                              this.clienteLista.push(cliente),
                              (error)=>console.log(error));
    }
    else{

      this.clienteService.modificarClientes(this.cliente)
      .subscribe((cliente)=>{ this.getClientes();
                             },
                 (error)=>console.log(error));
           
        
    }

    
    

   


  }
  elegirCliente(cliente:Cliente){
    this.cliente= Object.assign({}, cliente);
  }

  borrarCliente(cliente:Cliente){
    this.clienteService.eliminarCliente(cliente).subscribe(data=>this.getClientes());
     }
  getClientes(){

    this.clienteService.getClientes().subscribe((clientes)=>
    {
      this.clienteLista=clientes;} );
  }
}

