import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-list-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.css']
})
export class NewPageComponent implements OnInit {
  title = 'form';
  today!: string;
  times!: string[];
  currentDate!: string;
  selectedDate!: Date;

  ngOnInit(): void {
    const now = new Date();
    this.today = now.toISOString().split('T')[0];
    this.times = this.generateTimes();
    this.currentDate = now.toLocaleDateString('es-ES');
  }

  generateTimes(): string[] {
    const times = [];
    for (let hour = 8; hour <= 16; hour++) {
      const time = hour.toString().padStart(2, '0') + ':00';
      times.push(time);
    }
    return times;
  }
}
