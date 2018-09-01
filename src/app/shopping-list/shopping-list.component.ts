import { Component, OnInit } from '@angular/core';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  allowclick:boolean=false;
  serverName:any;
  serverCreate=false;
  serverStatus="";
  serverCreatedStatus="No server created!"
  constructor() {
    
    setTimeout(()=>{
      this.allowclick=true;
    },3000);    

    this.serverStatus=Math.random() >0.5 ? "offline":"online"
  }

  ngOnInit() {
  
  }
  getServerStatus(){
    return this.serverStatus;
  }
  serverCreated(){
    console.log('click')
    this.serverCreate=true;
    this.serverCreatedStatus="Server has been created!  "+this.serverName
  }
  onUpdateServerName(event: Event){
    console.log(event)
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  getColor(){
    return this.serverStatus === "online" ? "green":"red"
  }
}
