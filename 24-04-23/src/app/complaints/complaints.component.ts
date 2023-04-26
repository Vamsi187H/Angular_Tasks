import { Component } from '@angular/core';
import { ComplaintsService } from '../services/complaints.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Prod {
  flag: string;
  name: string;
}

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css'],
})
export class ComplaintsComponent {
  stateCtrl = new FormControl('');
  filteredStates: Observable<Prod[]>;

  pproducts: Prod[] = [
    {
      name: 'Electronics',
      flag: 'http://localhost/chida.jpg',
    },
    {
      name: 'FaceCream',
      flag: 'http://localhost/an.jpg',
    },
    {
      name: 'FoodItems',
      flag: 'http://localhost/rice.jpg',
    },
    {
      name: 'Java 2nd Edition',
      flag: 'http://localhost/java.jpg',
    },
    {
      name: 'Groceries',
      flag: 'http://localhost/rake.jpg',
    },
    {
      name: 'Realme',
      flag: 'http://localhost/vam.jpg',
    },
    {
      name: 'Python 1st Edition',
      flag: 'http://localhost/c.jpg',
    },
    {
      name: 'Angular',
      flag: 'http://localhost/htm.jpg',
    },
    {
      name: 'Body Cream',
      flag: 'http://localhost/ch.jpg',
    },
    {
      name: 'Vegatables',
      flag: 'http://localhost/sad.jpg',
    },
    {
      name: 'Games',
      flag: 'http://localhost/vignes.jpg',
    },
  ];
  //
  fname: any;
  email: any;
  message: any;
  product: any;
  errors: string[] = [];
  //
  constructor(private cs: ComplaintsService) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((prod) => (prod ? this._filterStates(prod) : this.pproducts.slice()))
    );
    //

    //
  }

  //
  ngOnInit(): void {}
  submit() {
    this.errors = [];
    if (this.errors.length == 0) {
      let obj = {
        id: Math.round(Math.random() * 100000),
        fname: this.fname,
        email: this.email,
        message: this.message,
        product: this.product,
      };
      this.cs.postComplaint(obj).subscribe({
        next: () => {
          console.log(obj);
          alert('Submitted Successfully');
          (this.fname = ''),
            (this.email = ''),
            (this.message = ''),
            (this.product = '');
        },
        error: () => alert(' Some issue with your complaint'),
      });
    }
  }
  //
  private _filterStates(value: string): Prod[] {
    const filterValue = value.toLowerCase();
    return this.pproducts.filter((state) =>
      state.name.toLowerCase().includes(filterValue)
    );
  }
}
