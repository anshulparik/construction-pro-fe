import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
})
export class LocationComponent implements OnInit {
  locations: any[] = [];
  newLocation = { name: '', status: 'incomplete' };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchLocations();
  }

  fetchLocations() {
    this.apiService.getLocations().subscribe((data) => {
      this.locations = data.locations;
    });
  }

  addLocation() {
    this.apiService.addLocation(this.newLocation).subscribe(() => {
      this.fetchLocations();
      this.newLocation = { name: '', status: 'incomplete' };
    });
  }

  updateLocation(location: any) {
    this.apiService.updateLocation(location._id, location).subscribe(() => {
      this.fetchLocations();
    });
  }

  deleteLocation(id: string) {
    this.apiService.deleteLocation(id).subscribe(() => {
      this.fetchLocations();
    });
  }
}
