import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { User } from './models';


 const ELEMENT_DATA: User [] = [
   {
     id: 1,
     name:'marcos',
     surname:'rodriguez',
     email:'mark@.com',
     password:'123456',
   },

   {
    id: 1,
    name:'marcos',
    surname:'rodriguez',
    email:'mark@.com',
    password:'123456',
  }

 ];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users: User [] = ELEMENT_DATA;

  constructor(
    private matDialog: MatDialog
  ) {}

  onCreateUser():void{
  this.matDialog
  //se abre el modal
  .open(UserFormDialogComponent)
  //despues que cierre
  .afterClosed()
  //hago esto, recibo el valor ingresado
  .subscribe({
      next: (v) => {
        if (v) {

          // this.users.push({
          //   id:this.users.length + 1,
          //   name: v.name,
          //   email:v.email,
          //   password:v.password,
          //   surname:v.surname
          // });

          // el metodompush modifica el array ya creado, de este modo se crea otro [...] activa el ciclo de cambios de Ang mat
          this.users = [
            ...this.users,
          {
            id:this.users.length + 1,
            name: v.name,
            email:v.email,
            password:v.password,
            surname:v.surname
          }

        ];
        console.log('Se recibio el valor: ', v);
      } else {
        console.log ('Se cancelo');
      }
      }
    })
  }
 
}