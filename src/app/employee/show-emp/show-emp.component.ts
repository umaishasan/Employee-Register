import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  employeList: any[] = [];
  Modaltitle: string = "";
  activeModule: boolean = false;
  dep: any;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(){
    this.service.readDatalist().subscribe(data =>{
      this.employeList = data;
    });
  }

  addComp(){
    this.dep = {
      Id:0,
      Name:"",
      Email:"",
      Phone:"",
      Address:""
    }
    this.Modaltitle = "Add Employee";
    this.activeModule = true;
  }

  editComp(item: any){
    this.dep = item;
    this.Modaltitle = "Edit Employee";
    this.activeModule = true;
  }

  delComp(item:any){
    if(confirm("Are you sure??")){
      this.service.deleteData(item.Id).subscribe(res =>{
        alert(res.toString());
        this.refreshData();
      });
    }
  }

  closeComp(){
    this.activeModule = false;
    this.refreshData();
  }

}
