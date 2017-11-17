import { Component, Inject} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
    selector: 'personrole-dialog',
    templateUrl: './personrole.dialog.html'
})

export class PersonRoleDialog {
    constructor(public dialogRef: MatDialogRef<PersonRoleDialog>, @Inject(MAT_DIALOG_DATA) public data:any){}

    onNoClick(): void{
        this.dialogRef.close();
    }
}