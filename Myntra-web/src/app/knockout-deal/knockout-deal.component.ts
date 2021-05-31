import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knockout-deal',
  templateUrl: './knockout-deal.component.html',
  styleUrls: ['./knockout-deal.component.scss']
})
export class KnockoutDealComponent implements OnInit {

  constructor() { }
  knocoutdeals:any = [
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2021/5/30/e2054829-3f16-4713-8a80-c67ee8a9eb6b1622351892523-Roadster--3-.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/29/c3655378-9e39-4709-958f-037c4719be181622303916992-casualtshirts-shirts.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/29/85bc86d6-a7b5-4d93-9ae2-d6938d6d42951622303916965-Luxe-Beauty.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/29/ab30a704-d85a-4d89-ac99-a1bcdbe323361622303916956-Maybelline--2-.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/29/5c5fece2-074a-450c-8532-a1c6c41f91af1622303916947-H-M-Extra-15-Off.jpg"
  ]

  ShopForHer:any = [
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/a1ed9e53-592e-43c1-b417-cb1a91802e031620905373116-kurta.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/7007eb60-0b90-477e-bb3e-51623c01a06b1620905373173-sarees.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/2ef1ee4a-19bc-40f4-bc9d-245654f006931620905373057-dresses.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/18312f20-2af6-4c2b-a28e-3fa44b2b15f21620905373131-lingerie.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/4c580175-42ea-4523-84a8-756b263931e41620905373145-Loungewear.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/573dc769-08a4-40ee-a4b9-c674180d9d5a1620905373101-Jewellery.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/1a584b78-643c-4338-a195-d231ee82da3d1620905373187-tops.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/85030ee6-a158-4f3c-8946-d3d61a22af991620905373085-handbags.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/c9c0e566-955b-4127-81be-37ba49885e871620905373200-Trackpants.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/756b7c70-2ccd-4832-b0a6-d478024b44e21620905373159-Nightwear.jpg"
  ]

  ShopForHim:any = [
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/adda6f67-1249-4021-9a1f-f79858232be41620905243593-tshirt.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/8fb8b616-7147-4274-925a-17912cc33f341620905243513-loungewear.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/f5eb755f-bfab-4796-822e-6e71e5b7f8481620905243537-shirts.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/34445f58-90c7-479d-98b3-b021573460611620905243486-innerwear.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/5737f12c-6cae-4b1b-bd9b-8efb16e61e6d1620905243571-Trackpants.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/1d625538-e524-4130-875e-262e38e346f31620905243475-Flip-flops.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/1bfa36e1-a22d-4826-b492-cd5e1b3f7f471620905243581-Trousers.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/a3fbab44-cafa-497c-b77f-c2ff318e0c901620905243548-sports-shoe.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/76b894a0-dc2b-46d0-8a09-daa534f4eeaa1620905243496-Kurtas-sets.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/13/7720158a-7254-40bb-a033-751637750ecd1620905243560-Suits-_-Blazers.jpg"
  ]

  MostLovedBrand:any = [
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/27/1987a717-25de-492a-a7c4-30424a52eaef1622125822004-puma-new.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/11/92d39b35-7de1-4547-9e73-b9428b1e146d1620713688703-home-tiles_Varun-fossil.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/26/7b124e17-4418-40d7-acbb-65806a34e3931622024785304-Vero-HP-Tile.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/27/a8ddca7d-3cbc-4dbd-81a8-1a759b1bb38a1622096203836-Mamaearth-HP_Top-Tile-29-May.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/26/106d2fcb-3781-43f3-96d7-f48ab69c92c21622040614449-louis-25.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/23/3fb258ec-de85-4cbb-8bfe-e07333f09bcf1616497646344-Libas_H.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/21/c5ee82ff-ddb6-4582-a263-32268ac538291619006330018-Home-page-tiles.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/7726731b-c684-4856-907a-95abe59c41811619162238622-hrx-sports.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/f6c2d8ea-c4e0-4f3e-b2cc-1581b6760a4a1619162337169-roadster.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/94ea7ad8-76a8-4457-86f0-0f2c8fffae3d1619175128039-721cab7d-f282-497f-a2a8-6208d4266edb1619174357789-gini-jony--1---1-.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/bf438b7b-662c-4828-a15b-91a404640f7a1619162459511-mast-n-harbour.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/0f676358-cb7b-4843-adce-a4fb079ad45b1619162789798-uspa.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/697d5744-b62d-4fb9-9459-1e1586fbce981619162570484-here-and-now.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/3106fd79-6c27-41cd-9240-5cf14c097ca01619162123339-w.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/24/2b25d423-3e22-4742-83d7-a297e28b86be1619263727620-mango.png"
  ]

  shopbycatagory:any = [
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg",
      name:"Men's Wear",
      offer:"40-80% off",
      tag:"+FOR HIM"
    }, 
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13769384/2021/4/7/c683721d-5d59-458b-b13b-5f5d1dc4b6cc1617793454887-Varanga-Olive-And-Gold-Polka-Dot-Kurta-With-Round-Neck-And-3-1.jpg",
      name:"Indian Wear",
      offer:"50-80% off",
      tag:"+FOR HER"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10856160/2019/11/5/f0172470-408a-4b8b-a1e5-045bd98a5f8b1572938035104-SASSAFRAS-Women-Dresses-9581572938032856-1.jpg",
      name:"Western Wear",
      offer:"40-80% off",
      tag:"+FOR HER"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8000711/2019/3/21/563b729d-dfa9-4044-b054-2b4ac2650b431553153557226-HRX-by-Hrithik-Roshan-Active-Men-Black-Rapid-Dry-Running-Tra-1.jpg",
      name:"Sportswear",
      offer:"30-80% off",
      tag:"+SHOP"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/1/4cae2526-cb5b-4288-bc9a-47b2de42f4741612180565894-1.jpg",
      name:"Lungewere",
      offer:"30-60% off",
      tag:"+SHOP"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6747414/2019/1/7/c081d78f-4ef7-44f8-855a-5652e696ccb81546858170512-HRX-by-Hrithik-Roshan-White-Brief-HRX-SS18-LS-7015B-WHITE-18-1.jpg",
      name:"Innerwere",
      offer:"Up To 70% off",
      tag:"+FOR HIM"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7281119/2019/2/8/ba2ba185-e108-4b4d-8961-99bfa1e89c161549626045073-DressBerry-Women-Bra-3161549626043843-1.jpg",
      name:"Lingerie",
      offer:"Up To 70% off",
      tag:"+FOR HER"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13471916/2021/2/9/a9a87e2a-f8c8-4953-9e5f-b8c1b8f4ff201612846540076-boAT-Unisex-Black-Storm-Smart-Watch-621612846538704-1.jpg",
      name:"Watches",
      offer:"Up To 80% off",
      tag:"+SHOP"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10339531/2021/2/15/2ff2f79c-c9b4-46b2-a911-9f494e07c7231613389099129-Denver-Men-Set-of-3-Sporting-Club-Goal-Imperial--Hamilton-De-1.jpg",
      name:"Gromming Essntials",
      offer:"Up To 60% off",
      tag:"+FOR HIM"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9747207/2019/7/22/74ea0159-7270-4916-8780-74d3628192061563800066182-Maybelline-Women-Kajal-and-Eyeliner-271563800065867-1.jpg",
      name:"Beauty Care",
      offer:"Up To 60% off",
      tag:"+FOR HER"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/2/16c18b69-ca05-4865-ad11-73886bce9a8d1612279458371-1.jpg",
      name:"Kid Were",
      offer:"50-70% off",
      tag:"+SHOP"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/9/14b39729-b9be-4ca5-8371-8b6ea519f1331602193097028-1.jpg",
      name:"Footwere",
      offer:"50-70% off",
      tag:"+FOR HIM"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/20/79baecb9-1c4e-46a2-b9a0-6248c15b22061603146412664-1.jpg",
      name:"Footwere",
      offer:"40-80% off",
      tag:"+FOR HER"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10313521/2019/11/29/5b23327b-4044-4927-99d7-3f8424dcc5ab1575016783001-Mast--Harbour-Men-Blazers-5601575016780058-1.jpg",
      name:"Belts & Wallets",
      offer:"40-70% off",
      tag:"+SHOP"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1437335/2016/7/18/11468832516475-RARE-Women-Tops-1041468832516238-1.jpg",
      name:"Work Were",
      offer:"40%-70% off",
      tag:"+FOR HER"
    },
    {
      link:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10313521/2019/11/29/5b23327b-4044-4927-99d7-3f8424dcc5ab1575016783001-Mast--Harbour-Men-Blazers-5601575016780058-1.jpg",
      name:"Work Were",
      offer:"Up To 70% off",
      tag:"+FOR HIM"
    },
]
  ngOnInit(): void {
    console.log(this.knocoutdeals.akas)
  }

}















