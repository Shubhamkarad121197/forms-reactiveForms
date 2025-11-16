import { Component, OnInit, signal } from "@angular/core";
import { HttpServiceService } from "../../service/http-service.service";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-serviceCall-component',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './serviceCall.html',
  styleUrl: './serviceCall.css'
})
export class ServiceCallComponent implements OnInit {

  users = signal<any[]>([]);

  constructor(private http: HttpServiceService) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
  this.http.getUserData().subscribe({
    next: (res) => {
      const arr = Array.isArray(res) ? res : [res];
      this.users.set(arr);
    },
    error: (err) => console.log(err)
  });
}

}
