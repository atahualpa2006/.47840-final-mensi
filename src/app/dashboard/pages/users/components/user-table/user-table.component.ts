import { Component, Input } from '@angular/core';
import { User } from '../../models';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  
  displayedColumns: string[] = ['name', 'surname', 'email', 'password'];

  @Input()
  dataSource : User[]= [];
}
