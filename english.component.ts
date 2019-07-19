import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {
  count: number= 1;

  constructor() { }

  ngOnInit() {
  }

  scroll_right(){
    let e1= document.getElementById("img_1");
    let e2= document.getElementById("img_2");
    let e3= document.getElementById("img_3");
    // this.count++;
    if(!(e1.classList.contains("toggle"))){
      e1.classList.add("toggle");
      e2.classList.remove("toggle");
    }
    else if(!(e2.classList.contains("toggle"))){
      e2.classList.add("toggle");
      e3.classList.remove("toggle");
    }
    else if(!(e3.classList.contains("toggle"))){
      e3.classList.add("toggle");
      e1.classList.remove("toggle");
    }
  }

  scroll_left(){
    let e1= document.getElementById("img_1");
    let e2= document.getElementById("img_2");
    let e3= document.getElementById("img_3");
    // this.count++;
    if(!(e1.classList.contains("toggle"))){
      e1.classList.add("toggle");
      e3.classList.remove("toggle");
    }
    else if(!(e2.classList.contains("toggle"))){
      e2.classList.add("toggle");
      e1.classList.remove("toggle");
    }
    else if(!(e3.classList.contains("toggle"))){
      e3.classList.add("toggle");
      e2.classList.remove("toggle");
    }
  }

}
