function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Roll No: {student.rollNo}</p>
      <p>Course: {student.course}</p>
      <p>Email: {student.email}</p>
    </div>
  )
}

export default StudentCard