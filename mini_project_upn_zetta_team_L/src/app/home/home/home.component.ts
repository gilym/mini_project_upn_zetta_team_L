import { Component, OnInit } from '@angular/core';
export interface item {menu : string , desc : string, harga : number , image : any}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: item[] = [
    {menu: 'Sushi1', desc: 'ini dia sushi 1' , harga : 50000 ,image : "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2022/01/31/sushi-gaacfb5515_640-1jpg-20220131023134.jpg"},
    {menu: 'Sushi2', desc: 'ini dia sushi 2' , harga : 10000 ,image : "https://static.honestdocs.id/system/blog_articles/main_hero_images/000/002/990/original/Ikan_Mentah_Pada_Hidangan_Sushi__Aman_Untuk_di_Konsumsi.jpg"},
    {menu: 'Sushi3', desc: 'ini dia sushi 3' , harga : 100000 ,image : "https://cdn.bobobox.co.id/blog/wp-content/uploads/2020/08/14132844/All-Variant-Sushi.jpg"} ,
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
