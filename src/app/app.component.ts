import { Component, OnInit } from '@angular/core';
import { PersonasService } from './services/personas.service';

import { Results, ResponseAPI } from '../app/interfaces/persona-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // title = 'bootcamp-salesforce';

  public listPersons: Results[] = [];

  constructor(
    private personasService: PersonasService
  ) {}

  ngOnInit(): void {

    this.pruebaDeService();
  }

  pruebaDeService() {
    this.personasService.randomUserList().subscribe({
      next: ( data: ResponseAPI ) => {
        console.log( data );

        this.listPersons = data.results;

        for ( let person of this.listPersons ) {
          person.dob.date = person.dob.date.split('T')[0];
        }

      },
      error: ( err ) => {
        console.log( err );
      }
    });
  }

  persistirDatos( results: Results[] ) {
    if ( results !== JSON.parse(localStorage.getItem('listPersons')!) ) {
      console.log('1');
      this.listPersons = JSON.parse(localStorage.getItem('listPersons')!);
    } else {
      console.log('2');
      this.listPersons = results;
    }
  }
}
