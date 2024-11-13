import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkScope } from '../../../utils/types';

@Component({
  selector: 'app-work-scope',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './work-scope.component.html',
  styleUrls: ['./work-scope.component.css'],
})
export class WorkScopeComponent implements OnInit {
  workScopes: WorkScope[] = [];
  newWorkScope: Partial<WorkScope> = {
    name: '',
    duration: 0,
    displayTime: '',
    variance: 0,
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchWorkScopes();
  }

  fetchWorkScopes() {
    this.apiService.getWorkScopes().subscribe((data) => {
      this.workScopes = data?.workScopes as WorkScope[];
    });
  }

  addWorkScope() {
    this.apiService.addWorkScope(this.newWorkScope).subscribe(() => {
      this.fetchWorkScopes();
      this.newWorkScope = {
        name: '',
        duration: 0,
        displayTime: '',
        variance: 0,
      };
    });
  }

  updateWorkScope(workScope: WorkScope) {
    this.apiService.updateWorkScope(workScope._id, workScope).subscribe(() => {
      this.fetchWorkScopes();
    });
  }

  deleteWorkScope(id: string) {
    this.apiService.deleteWorkScope(id).subscribe(() => {
      this.fetchWorkScopes();
    });
  }
}
