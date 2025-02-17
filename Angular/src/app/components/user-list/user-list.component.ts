import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User, UserService } from '../../services/user.service';
import { UserDetailDialogComponent } from '../user-detail-dialog/user-detail-dialog.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatInputModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageSizeOptions: number[] = [5, 10, 20];

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource.data = this.userService.getUsers();
    this.dataSource.filterPredicate = this.customFilterPredicateForUsername;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Opens a dialog to display detailed user information.
   *
   * @param {User} user - The user object containing the information to be displayed.
   * @return {void} This function does not return a value.
   */
  openDialog(user: User): void {
    this.dialog.open(UserDetailDialogComponent, {
      width: '400px',
      data: user,
    });
  }

  /**
   * Filters the table data based on the search input.
   *
   * @param {Event} event - The keyup event triggered by the input field
   * @return {void} This function does not return a value.
   */
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  /**
   * Custom filter predicate to filter users by first name, last name of full name
   *
   * @param {User} data - The user object containing firstname and lastname.
   * @param {string} filter - The lowercase search input string.
   * @return {boolean} True if the user's first name, last name or full name contains the filter string, otherwise false.
   * 
   */
  customFilterPredicateForUsername(data: User, filter: string): boolean {
    const fullName = `${data.firstName} ${data.lastName}`;
    return (
      data.firstName.toLowerCase().includes(filter) ||
      data.lastName.toLowerCase().includes(filter) ||
      fullName.toLowerCase().includes(filter)
    );
  }
}
