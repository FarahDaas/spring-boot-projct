import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/views/services/adminservice.service';

@Component({
  selector: 'app-allmedcin',
  templateUrl: './allmedcin.component.html',
  styleUrls: ['./allmedcin.component.css']
})
export class AllmedcinComponent implements OnInit {
dataArray:any
  constructor(private sa:AdminserviceService ) {
    this.sa.Getallmedcin().subscribe(data=>this.dataArray=data)
   }

  ngOnInit(): void {
  }
  delete(id:any,i:number){
    this.sa.DeleteMedcin(id).subscribe(response=>{
console.log(response),
this.dataArray.splice(i,1)
    })
  }
}
