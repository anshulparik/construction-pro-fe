import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-work-scope',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './work-scope.component.html',
  styleUrl: './work-scope.component.css',
})
export class WorkScopeComponent implements OnInit {
  workScopes: any[] = [];
  newWorkScope = { name: '', duration: '', displayTime: '', variance: '' };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchWorkScopes();
  }

  fetchWorkScopes() {
    this.apiService.getWorkScopes().subscribe((data) => {
      this.workScopes = data?.workScopes;
    });
  }

  addWorkScope() {
    this.apiService.addWorkScope(this.newWorkScope).subscribe(() => {
      this.fetchWorkScopes();
      this.newWorkScope = {
        name: '',
        duration: '',
        displayTime: '',
        variance: '',
      };
    });
  }

  updateWorkScope(workScope: any) {
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
