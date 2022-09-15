import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

  onSelectChange (event:any) {
    const cards = document.querySelectorAll('.example-card');
   if(cards){
    cards.forEach((element:any) => {
      if(element.dataset.type === event.target.value || event.target.value === "default"){
        element.style.display = "block"
      }else{
        element.style.display = "none"
      }

    });

  }
   }


}
