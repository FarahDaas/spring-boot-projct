import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../../services/adminservice.service';

@Component({
  selector: 'app-addmedcin',
  templateUrl: './addmedcin.component.html',
  styleUrls: ['./addmedcin.component.css']
})
export class AddmedcinComponent implements OnInit {
messageErr=""
  constructor(private sa:AdminserviceService,private route:Router) { }

  ngOnInit(): void {
  }
  add(f:any){
    let data=f.value
    console.log(data)
    this.sa.AddMedcin(data).subscribe(data=>{
      this.route.navigate(['admin/allmedcin'])
    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      console.log(err.error)
      console.log(err.status)
       
    })
  }

}
