import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
   cliente:Cliente;
  constructor(private clienteService:ClienteService,private route:Router,private _aRoute:ActivatedRoute) { }
     
  ngOnInit() {
        this._aRoute.url.subscribe((params)=>{
          let url=params.toString();
          this._aRoute.params.subscribe((params)=>{
            this.cargarCliente(url,params['id']);
          });   
        });
        
      
    
   } 
        
   agregarCliente(){
          if(this.cliente._id==="" || !this.cliente._id){
            this.clienteService.agregarClientes(this.cliente)
                              .subscribe((cliente)=>{ this.enviarURLClientes(); },
                                         (error)=>console.log(error));
           }
          else{

            this.clienteService.modificarClientes(this.cliente)
            .subscribe((cliente)=>{this.enviarURLClientes();},
                        (error)=>console.log(error));
         }                          
   }                  
             
   enviarURLClientes(){
    this.route.navigateByUrl('/',{skipLocationChange:true}).then(()=>
    this.route.navigate(['/clientes']));
  

  }           
  cargarCliente(url:string,id:string){
        if(url!='nuevo'){
          
          this.getCliente(id);
        }
        else if(url=='nuevo'){
          this.cliente=new Cliente("","","","","");
        }
    }                                  

  
   getCliente(id:string){

      this.clienteService.getCliente(id).subscribe((data)=>{
        this.cliente=data;
        },(error)=>{console.log(error)
      });
    }
  }                            
          
           

        
        


        


 

