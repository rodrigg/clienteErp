import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../models/cliente';

@Pipe({
  name: 'buscadorCliente',
  pure:false
})
export class BuscadorClientePipe implements PipeTransform {

  transform(clientes:Cliente[] , buscarCliente:Cliente):Cliente[] {
    let filtroClientes=clientes;    
    if(buscarCliente && buscarCliente.nombre!=""){
      filtroClientes= clientes.filter(producto => producto.nombre.toLowerCase().indexOf(buscarCliente.nombre.toLocaleLowerCase())>-1  );
                            
    }
    if (buscarCliente && buscarCliente.telefono!=""){
      filtroClientes= clientes.filter(producto => producto.telefono.toLowerCase().indexOf(buscarCliente.telefono.toLocaleLowerCase())>-1);
    }
    if (buscarCliente && buscarCliente.direccion!=""){
        filtroClientes= clientes.filter(producto => producto.direccion.toLowerCase().indexOf(buscarCliente.direccion.toLocaleLowerCase())>-1);                         
     }
     
     return filtroClientes;

  }




}

