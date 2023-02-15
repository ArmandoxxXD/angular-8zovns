import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
//import * as $ from "slick-carousel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() {
    document.body.style.margin = "0";
    document.body.style.display = "grid";
    document.body.style.height = "100vh";
    document.body.style.fontFamily = "Source Code Pro', monospace";
    document.body.style.background = "linear-gradient(#141e30, #243b55)";
   }

  ngOnInit(): void {
    window.location.href="#slide-1";
  }


}
