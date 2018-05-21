import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pageSize:number = 6;
  totalPage:number;
  tempArray:Array<any>;
  serverElements = [{
    type:'server',
    name:'Test SQL Server',
    content:'This contains a test server which is static'
  },
  {
    type:'server',
    name:'Node JS Server',
    content:'This contains a test server which is static'
  },
  {
    type:'server',
    name:'Java Web Server',
    content:'This contains a test server which is static'
  },
  {
    type:'server',
    name:'Oracle',
    content:'This contains a test server which is static'
  },{
    type:'server',
    name:'Apache',
    content:'This contains a test server which is static'
  },
  {
    type:'server',
    name:'IBM Server',
    content:'This contains a test server which is static'
  },
  {
    type:'server',
    name:'DB2 Server',
    content:'This contains a test server which is static'
  },{
    type:'server',
    name:'VMware',
    content:'This contains a test server which is static'
  },{
    type:'server',
    name:'Beta',
    content:'This contains a test server which is static'
  },
  {
    type:'server',
    name:'Oracle DBA',
    content:'This contains a test server which is static'
  },{
    type:'server',
    name:'Kafka',
    content:'This contains a test server which is static'
  },
  {
    type:'server',
    name:'DB2 Server',
    content:'This contains a test server which is static'
  },
  {
    type:'server',
    name:'Android Server',
    content:'This contains a test server which is static'
  },

  {
    type:'server',
    name:'test Mongo Server',
    content:'This contains a test server which is static'
  }
];
currentArrayLength;
remainingLength;
firstIndex=0;
lastIndex;

ngOnInit()
{
  this.totalPage =  this.serverElements.length / this.pageSize;
  this.tempArray =  this.serverElements.slice(0,this.pageSize);
  this.currentArrayLength = this.tempArray.length;

}

prevPage(){
  
  this.remainingLength =  this.currentArrayLength - this.serverElements.length;
  console.log("last index"+this.lastIndex);
  console.log("first index"+this.firstIndex);
  if(this.remainingLength <= 0)
  {
    this.lastIndex = this.firstIndex;
    this.firstIndex = this.lastIndex  - this.pageSize;
  }

  this.tempArray = this.serverElements.slice(this.firstIndex, this.lastIndex);
  this.currentArrayLength = this.lastIndex;
  console.log('changed last index'+this.lastIndex +'And first index..'+this.firstIndex);
}

nextPage(){
  this.remainingLength =  this.serverElements.length - this.currentArrayLength;
  this.firstIndex = this.currentArrayLength;

 if(this.remainingLength >=  this.pageSize)
 {
   this.lastIndex = this.currentArrayLength + this.pageSize;
 }
else
{
 this.lastIndex = this.serverElements.length;
}
this.tempArray = this.serverElements.slice(this.firstIndex, this.lastIndex);
this.currentArrayLength = this.lastIndex;
}

}
