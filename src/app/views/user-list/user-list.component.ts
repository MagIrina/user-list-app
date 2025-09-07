import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import {UserType} from "../../../types/user.type";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: UserType[] = [];
  filteredUsers: UserType[] = [];
  selectedUserEmail: string | null = null;
  selectedUserName: string | null = null;
  searchTerm: string = '';
  filterStatus: 'all' | 'active' | 'inactive' = 'all';

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
    this.applyFilters();
  }

  applyFilters() {
    this.filteredUsers = this.users.filter(user => {
      const matchesName = user.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus =
        this.filterStatus === 'all' ||
        (this.filterStatus === 'active' && user.active) ||
        (this.filterStatus === 'inactive' && !user.active);

      return matchesName && matchesStatus;
    });
  }

  private hideTimeout: any;

  selectUser(user: UserType) {
    this.selectedUserEmail = user.email;
    this.selectedUserName = user.name;

    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }

    this.hideTimeout = setTimeout(() => {
      this.selectedUserEmail = null;
      this.selectedUserName = null;
    }, 3000);
  }
}
