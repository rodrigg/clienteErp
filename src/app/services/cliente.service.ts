import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Cliente } from '../models/cliente';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClienteService {
  private url="http://localhost:8080/api/v1/clientes";
  public listaClientes:Cliente;
  public clienteElegido:Cliente;
  constructor(private http:Http) { }
    
    getClientes():Observable<Cliente[]>{
      
      return this.http.get(this.url).map(cliente=>
                                        cliente.json());
    }
    getCliente(id:string):Observable<Cliente>{
      return this.http.get(this.url+"/"+id).map(cliente=>
                                        cliente.json());
    }
    agregarClientes(cliente:Cliente):Observable<Cliente>{

     
        return this.http.post(this.url,cliente).map((cliente)=>cliente.json());
        
      
    }
    modificarClientes(cliente:Cliente):Observable<Cliente>{
      return  this.http.put(this.url+"/"+cliente._id,cliente).map((cliente)=>cliente.json());
    }
    eliminarCliente(cliente:Cliente){

     return this.http.delete(this.url+"/"+cliente._id)

    }


    
 }


