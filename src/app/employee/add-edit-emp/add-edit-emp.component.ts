import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() dep: any;
  Id!: number;
  Name!: string;
  Email!: string;
  Phone!: string;
  Address!: string;

  ngOnInit(): void {
    this.Id = this.dep.Id;
    this.Name = this.dep.Name;
    this.Email = this.dep.Email;
    this.Phone = this.dep.Phone;
    this.Address = this.dep.Address;
  }

  addEmployee(){
    var value = {Id:this.Id,Name:this.Name,Email:this.Email,Phone:this.Phone,Address:this.Address};
    this.service.addData(value).subscribe(res =>{
      alert(res);
    });
  }

  updateEmployee(){
    var value = {Id:this.Id,Name:this.Name,Email:this.Email,Phone:this.Phone,Address:this.Address};
    this.service.updateData(value).subscribe(res =>{
      alert(res);
    });
  }

}
