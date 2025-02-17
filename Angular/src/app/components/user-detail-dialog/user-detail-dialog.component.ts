import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { User } from '../../services/user.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-detail-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './user-detail-dialog.component.html',
  styleUrl: './user-detail-dialog.component.css'
})
export class UserDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public user: User) {}
}
