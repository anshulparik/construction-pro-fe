import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit, OnDestroy {
  logs: any[] = [];
  private fetchInterval: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchLogs();

    this.fetchInterval = setInterval(() => {
      this.fetchLogs();
    }, 60000);
  }

  ngOnDestroy() {
    if (this.fetchInterval) {
      clearInterval(this.fetchInterval);
    }
  }

  fetchLogs() {
    this.apiService.getLogs().subscribe((data) => {
      this.logs = data?.filteredLogs;
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
