import { Component, OnInit } from '@angular/core';
import { bookRecord } from '../books';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editBook=bookRecord
  id: any;
  constructor(private activatedRouter:ActivatedRoute , private formBuilder:FormBuilder) { }
editFormGroup:FormGroup
  ngOnInit(): void {
console.log(this.editBook)
    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    this.editFormGroup =this.formBuilder.group({
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
  this.editBook.splice(this.id,this.editFormGroup.value)
}

}
