import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
// import { SourceService } from 'src/app/shared/source.service';
import { of, map, switchMap, Observable, delay } from 'rxjs';
import { SourceService } from '../../shared/source.service'
import { MatDialog } from '@angular/material/dialog';
import { MenuDetailComponent } from '../menu-detail/menu-detail.component';
import { MenuModule } from '../menu.module';
export interface item {menu : string , desc : string, harga : number , image : any,rating : string}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output ('detail') getdata : EventEmitter<item> = new EventEmitter<item>()
  constructor( private router: Router,private matdialog : MatDialog , private detil : MenuDetailComponent ,) { }

  ngOnInit(): void {
  }
  items: item[] = [
    {menu: 'Sushi1', desc: 'ini dia sushi 1' , harga : 50000 ,image : "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2022/01/31/sushi-gaacfb5515_640-1jpg-20220131023134.jpg" , rating : "4.8"},
    {menu: 'Sushi2', desc: 'ini dia sushi 2' , harga : 10000 ,image : "https://static.honestdocs.id/system/blog_articles/main_hero_images/000/002/990/original/Ikan_Mentah_Pada_Hidangan_Sushi__Aman_Untuk_di_Konsumsi.jpg" , rating : "4.6"},
    {menu: 'Sushi3', desc: 'ini dia sushi 3' , harga : 100000 ,image : "https://cdn.bobobox.co.id/blog/wp-content/uploads/2020/08/14132844/All-Variant-Sushi.jpg" , rating : "5.0"} ,
  ];

detail(item:item) :void{
  console.log(item);
  this.detil.getdata(item)
}




}
