import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoverbox',
  templateUrl: './hoverbox.component.html',
  styleUrls: ['./hoverbox.component.scss']
})
export class HoverboxComponent implements OnInit {

  constructor() { }
  topWeres: any=[
    "T-Shirts",
    "Casual Shirts",
    "Formal Shirts",
    "Sweatshirts",
    "Sweaters",
    "Jackets",
    "Blazers & Coats",
    "Suits",
    "Rain Jackets"
  ]

  festiveWears:any = [
    "Kurtas & Kurta Sets",
    "Sherwanis",
    "Nehru Jackets",
    "Dhotis"
  ]

  bottomWears:any = [
    "Jeans",
    "Casual Trousers",
    "Formal Trousers",
    "Shorts",
    "Track Pants & Joggers",
    "Dhotis",
    "Tracksuits",
    "Swimwear"
  ]

  innerWears: any = [
    "Briefs & Trunks",
    "Boxers",
    "Vests",
    "Sleepwear & Loungewear",
    "Thermals"
  ]

  sportWeres:any= [
    "Sports Shoes",
    "Sports Sandals",
    "Active T-Shirts",
    "Track Pants & Shorts",
    "Tracksuits",
    "Jackets & Sweatshirts",
    "Sports Accessories",
    "Swimwear"
    
  ]
  gadgets:any= [
    "Smart Wearables",
    "Fitness Gadgets",
    "Headphones",
    "Speakers"
  ]
  ngOnInit(): void {
  }

}
