import StudentCard from '../components/StudentCard'

function StudentList() {
  const students = [
    { id: 1, name: 'Rahul Sharma', rollNo: '101', course: 'B.Tech', email: 'rahul@gmail.com' },
    { id: 2, name: 'Priya Patil', rollNo: '102', course: 'BCA', email: 'priya@gmail.com' },
    { id: 3, name: 'Amit Kumar', rollNo: '103', course: 'MCA', email: 'amit@gmail.com' },
  ]

  return (
    <div className="page">
      <h1>Student List</h1>
      <div className="student-grid">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  )
}

export default StudentList