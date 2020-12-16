import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {RegisterService} from '../register.service'
import { User } from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   user  = new User();
   isRegistered :boolean=false;
   messageData:String="";
  constructor(private registerService: RegisterService) { }

  @Input() public  parentData: any ;
  @Output() public eventEmmiter = new EventEmitter();
   ngOnInit(): void {
  }
  onClick(){
    this.emitEvent();
    this.registerService.addUser(this.user).subscribe(
     data => 
     {if(data=="saved"){
     this.isRegistered=true;
     this.messageData="Registered successfully";
     }else if(data=="User Exist"){
      this.isRegistered=true;
      this.messageData="User Already Exist";
     }
    }
    );
  }

  emitEvent(){
    this.eventEmmiter.emit('from child');
  }

}
