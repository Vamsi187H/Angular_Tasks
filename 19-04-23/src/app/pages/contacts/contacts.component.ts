import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  contactlist: any;
  constructor(private cs: ContactService) {
    this.cs.getContact().subscribe({
      next: (data: any) => (this.contactlist = data),
      error: () => (this.contactlist = []),
    });
  }
}
