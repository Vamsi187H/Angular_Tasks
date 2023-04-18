import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { Component } from '@angular/core';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';

// /**
//  * @title Dialog Animations
//  */
// @Component({
//   selector: 'dialog-animations-example',
//   styleUrls: ['dialog-animations-example.css'],
//   templateUrl: 'dialog-animations-example.html',
// })
// export class DialogAnimationsExample {
//   constructor(public dialog: MatDialog) {}

//   openDialog(
//     enterAnimationDuration: string,
//     exitAnimationDuration: string
//   ): void {
//     this.dialog.open(DialogAnimationsExampleDialog, {
//       width: '250px',
//       enterAnimationDuration,
//       exitAnimationDuration,
//     });
//   }
// }

// @Component({
//   selector: 'dialog-animations-example-dialog',
//   templateUrl: 'dialog-animations-example-dialog.html',
// })
// export class DialogAnimationsExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
// }
