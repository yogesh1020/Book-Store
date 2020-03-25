import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { bookRecord } from '../books';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
ownerFormGroup:FormGroup;
 books= bookRecord

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.ownerFormGroup =this.formBuilder.group({
      title:'',
      auther:'',
      genre:'',
      price:'',
      publisher:'',
      copy:'',
      id:''
    })
  
  }
  submit(){
    console.log (this.ownerFormGroup.controls.value)
    this.books.push(this.ownerFormGroup.value)
    console.log(this.books)
  }
}
