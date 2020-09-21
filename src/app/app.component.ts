import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rxlogix';
  displayedColumns: string[]=['name','email','delete','showDetails'];
 
  dataSource = new MatTableDataSource<any>(detailsData);
  rxLogixForm:FormGroup;
  name:string;
  email:string;

  constructor(){
    this.rxLogixForm=new FormGroup({
      'name':new FormControl(null),
      'email':new FormControl(null),
    })
  }
  add(){
    this.dataSource.data.push({
      name:this.rxLogixForm.value.name,
      email:this.rxLogixForm.value.email,
    })
    this.dataSource.filter=""
  }
  delete(index:number){
    if(this.dataSource.data.length >1)
   { this.dataSource.data.splice(index,1)
    this.dataSource.filter=""
  }
  }
  showDetails(index:number){
    alert(`The Selected person name is ${this.dataSource.data[index].name} and emailid is ${this.dataSource.data[index].email}`)
  }
}
const detailsData: any[] = [
  {name:"ankit",email:"ankit@gmail.com"},
  {name:"anuj",email:"anuj@gmail.com"},
  {name:"amit",email:"amit@gmail.com"},
  {name:"harshit",email:"harshit@gmail.com"}
];