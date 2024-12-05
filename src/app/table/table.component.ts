import { Component, OnInit } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

interface Person {
  key: string;
  name: string;
  phoneNumber: number;
  gmail: string;
}

@Component({
  selector: 'app-table',
  standalone:true,
  imports:[NzTableModule, NzDividerModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  listOfData: Person[] = [

  ];
}
