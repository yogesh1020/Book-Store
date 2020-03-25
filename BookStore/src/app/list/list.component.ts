import { Component, OnInit } from '@angular/core';
import { bookRecord } from '../books';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookList = bookRecord
  constructor() { }


  ngOnInit(): void {
    console.log(this.bookList)
  } 


}
