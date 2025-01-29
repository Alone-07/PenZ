import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface MedicalRecord {
  fileName: string;
}

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.page.html',
  styleUrls: ['./medical-records.page.scss'],
  standalone: false,
})
export class MedicalRecordsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  records: MedicalRecord[] = [
    { fileName: 'Blood Report.pdf' },
    { fileName: 'Skin Report.pdf' }
  ];
  viewRecord(record: MedicalRecord): void {
    console.log('Viewing:', record.fileName);
    // Implement view logic
  }

  deleteRecord(record: MedicalRecord): void {
    console.log('Deleting:', record.fileName);
    // Implement delete logic
  }

  addRecord(): void {
    console.log('Adding new record');
    // Implement add record logic
  }
}
