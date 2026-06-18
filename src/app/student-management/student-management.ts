import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-management.html',
  styleUrls: ['./student-management.css']
})
export class StudentManagement {

  // Form model
  student = {
    name: '',
    course: ''
  };

  students: any[] = [];

  searchText = '';

  // track edit mode
  editIndex: number | null = null;

  // ADD or UPDATE
  saveStudent() {
    if (!this.student.name || !this.student.course) return;

    if (this.editIndex === null) {
      // ADD
      this.students.push({ ...this.student });
    } else {
      // UPDATE
      this.students[this.editIndex] = { ...this.student };
      this.editIndex = null;
    }

    this.clearForm();
  }

  // EDIT
 editStudent(index: number) {
  this.student = { ...this.students[index] };
  this.editIndex = index;

}

  // DELETE
  deleteStudent(index: number) {
    this.students.splice(index, 1);
    this.clearForm();
  }

  viewStudent(student: any) {
  alert(
    `📘 Student Details\n\nName: ${student.name}\nCourse: ${student.course}`
  );
}

  // RESET FORM
  clearForm() {
    this.student = { name: '', course: '' };
    this.editIndex = null;
  }

  // SEARCH FILTER
  get filteredStudents() {
    return this.students.filter(s =>
      s.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
