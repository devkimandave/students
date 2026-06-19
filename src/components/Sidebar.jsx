function Sidebar({ setCurrentPage, currentPage }) {
  return (
    <div className="sidebar">
      <button 
        className={currentPage === 'dashboard' ? 'active' : ''} 
        onClick={() => setCurrentPage('dashboard')}
      >
        Dashboard
      </button>
      <button 
        className={currentPage === 'students' ? 'active' : ''} 
        onClick={() => setCurrentPage('students')}
      >
        Student List
      </button>
      <button 
        className={currentPage === 'add-student' ? 'active' : ''} 
        onClick={() => setCurrentPage('add-student')}
      >
        Add Student
      </button>
    </div>
  )
}

export default Sidebar