import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar : MatSnackBar) { }

  SuccessMessage(msg: string): void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass:['success-snackbar'],
    })
  }

  ErrorMessage(msg: string): void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass:['error-snackbar'],
    })
  }

  WarningMessage(msg: string): void{
    this.snackBar.open(msg,'X',{
      duration:30000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass:['warning-snackbar'],
    })
  }




}
