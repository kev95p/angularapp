import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  items:string[] = ['item 1','item 2','item 3'];
  activar:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  toggleMenu():void{
   this.activar = !this.activar;
  }

}
