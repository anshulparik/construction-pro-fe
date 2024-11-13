import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Location, WorkScope } from '../../../utils/types';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  locations: Location[] = [];
  workScopes: WorkScope[] = [];
  newLocation: Partial<Location> = { name: '', status: 'incomplete' };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchLocations();
    this.fetchWorkScopes();
  }

  fetchLocations() {
    this.apiService.getLocations().subscribe((data) => {
      this.locations = data.locations as Location[];
    });
  }

  addLocation() {
    this.apiService.addLocation(this.newLocation).subscribe(() => {
      this.fetchLocations();
      this.newLocation = { name: '', status: 'incomplete' };
    });
  }

  updateLocation(location: Location) {
    this.apiService
      .updateLocation(location._id, { name: location.name })
      .subscribe(() => {
        this.fetchLocations();
      });
  }

  updateLocationStatus(id: string) {
    this.apiService.updateLocationStatus(id).subscribe(() => {
      this.fetchLocations();
    });
  }

  deleteLocation(id: string) {
    this.apiService.deleteLocation(id).subscribe(() => {
      this.fetchLocations();
    });
  }

  onWorkScopeNameChange(location: Location, newName: string) {
    if (location.workScope && typeof location.workScope !== 'string') {
      (location.workScope as WorkScope).name = newName;
    }
  }

  fetchWorkScopes() {
    this.apiService.getWorkScopes().subscribe((data) => {
      this.workScopes = data?.workScopes as WorkScope[];
    });
  }

  addWorkScopeToLocation(locationId: string, workScopeId: string | undefined) {
    this.apiService
      .addWorkScopeToLocation(locationId, workScopeId)
      .subscribe(() => {
        this.fetchLocations();
      });
  }

  isWorkScopeObject(workScope: string | WorkScope): workScope is WorkScope {
    return (
      typeof workScope === 'object' && workScope !== null && 'name' in workScope
    );
  }
}
