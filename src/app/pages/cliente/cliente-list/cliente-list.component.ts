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
  constructor(public clienteService:ClienteService) { }

  ngOnInit() {
    this.clienteBuscar=new Cliente("","","","","");
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

    this.cliente=null;
    this.selectedRow=null;

    
    

   


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
    this.cliente=new Cliente("","","","","")
    this.selectedRow=null;

  }
}

