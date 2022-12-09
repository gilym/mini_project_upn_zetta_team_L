import { Component, OnInit ,Injectable ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { SourceService } from 'src/app/shared/source.service';
import { item } from '../menu/menu.component';
export interface item1 {menu : string , desc : string, harga : number , image : any,rating : string}
export interface item2 {menu : string , desc : string, harga : number , image : any,rating : string}

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class MenuDetailComponent implements OnInit {
  
  items: item1[] = [
  
  ]

  constructor(private matdialog : MatDialog , private ss : SourceService) { 
    
  
  }

  ngOnInit(): void {
  }

  getdata(item1 : item){
    this.items.splice
   this.items.push(item1)
   console.log(this.items);

  
  }


}
