import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('student-management-system');

  // Navigation
  currentPage = 'students';

  showPage(page: string) {
    this.currentPage = page;
  }

  // Student model
  student = {
    name: '',
    course: ''
  };

  students: any[] = [];

  searchText = '';

  editIndex: number | null = null;

  // FILTERED LIST (search works here)
  get filteredStudents() {
    return this.students.filter(s =>
      s.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      s.course.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // ADD / UPDATE STUDENT
  saveStudent() {
    if (!this.student.name || !this.student.course) return;

    if (this.editIndex === null) {
      this.students.push({ ...this.student });
    } else {
      this.students[this.editIndex] = { ...this.student };
      this.editIndex = null;
    }

    this.student = { name: '', course: '' };
  }

  // EDIT STUDENT
  editStudent(index: number) {
    const s = this.students[index];
    this.student = { ...s };
    this.editIndex = index;
  }

  // DELETE STUDENT
  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
