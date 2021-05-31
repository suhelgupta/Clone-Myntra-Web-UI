import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  onlineShopings: any = [
    "Men",
    "Women",
    "Kids",
    "Home & Living",
    "Beauty",
    "Gift Cards"
  ]

  useFulLinks:any = [
    "Contact Us",
    "FAQ",
    "T&C",
    "Terms Of Use",
    "Track Orders",
    "Shipping",
    "Cancellation",
    "Returns",
    "Whitehat",
    "Blog",
    "Careers",
    "Privacy policy",
    "Site Map"
  ]

  popularSearchs = [
    "Makeup",
    "Dresses For Girls",
    "T-Shirts",
    "Sandals",
    "Headphones",
    "Babydolls",
    "Blazers For Men",
    "Handbags",
    "Ladies Watches",
    "Bags",
    "Sport Shoes",
    "Reebok Shoes",
    "Puma Shoes",
    "Boxers",
    "Wallets",
    "Tops",
    "Earrings",
    "Fastrack Watches",
    "Kurtis",
    "Nike",
    "Smart Watches",
    "Titan Watches",
    "Designer Blouse",
    "Gowns",
    "Rings",
    "Cricket Shoes",
    "Forever 21",
    "Eye Makeup",
    "Photo Frames",
    "Punjabi Suits",
    "Bikini",
    "Myntra Fashion Show",
    "Lipstick",
    "Saree",
    "Watches",
    "Dresses",
    "Lehenga",
    "Nike Shoes",
    "Goggles",
    "Bras   ",
    "Suit",
    "Chinos Shoes",
    "Adidas Shoes ",
    "Woodland Shoes",
    "Jewellery",
    "Designers Sarees",
  ]

  ngOnInit(): void {
  }

}
