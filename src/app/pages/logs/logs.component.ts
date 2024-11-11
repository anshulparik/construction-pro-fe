import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css',
})
export class LogsComponent implements OnInit {
  logs: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchLogs();
  }

  fetchLogs() {
    this.apiService.getLogs().subscribe((data) => {
      this.logs = data?.logs;
    });
  }

  completeLog(log: any) {
    this.apiService.completeLog(log._id).subscribe(() => {
      log.isComplete = true;
    });
  }

  deleteLog(id: string) {
    this.apiService.deleteLog(id).subscribe(() => {
      this.logs = this.logs.filter((log) => log._id !== id);
    });
  }
}
