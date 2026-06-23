import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-management.html',
  styleUrls: ['./student-management.css']
})
export class StudentManagementComponent implements OnInit {

  students: any[] = [];

  student = {
    name: '',
    course: ''
  };

  searchText: string = '';

  editIndex: number | null = null;

  constructor(private studentService: StudentService) {}

ngOnInit() {
  const saved = localStorage.getItem('students');
  this.students = saved ? JSON.parse(saved) : [];
}

  loadStudents() {
  this.studentService.getStudents().subscribe((data: any) => {

    console.log('API DATA:', data);

    this.students = data.map((u: any) => ({
      name: u.name,
      course: u.company?.bs || 'API Course'
    }));

  });
}

saveStudent() {

  if (this.editIndex === null) {
    // ADD NEW STUDENT
    this.students.push({ ...this.student });

  } else {
    // UPDATE EXISTING STUDENT (IMPORTANT FIX)
    this.students[this.editIndex] = { ...this.student };
    this.editIndex = null;
  }

  // SAVE AFTER EVERY CHANGE
  localStorage.setItem('students', JSON.stringify(this.students));

  // RESET FORM
  this.student = { name: '', course: '' };
}

  editStudent(index: number) {

  this.student = { ...this.students[index] };

  this.editIndex = index;
}

 deleteStudent(index: number) {

  this.students.splice(index, 1);

  localStorage.setItem('students', JSON.stringify(this.students));
}

get filteredStudents() {
  return this.students.filter(s =>
    s.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
    s.course.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

}
