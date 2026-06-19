import { useState } from 'react'

function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    course: '',
    email: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Student Added:', formData)
    alert('Student Added Successfully!')
    setFormData({ name: '', rollNo: '', course: '', email: '' })
  }

  return (
    <div className="page">
      <h1>Add New Student</h1>
      <form onSubmit={handleSubmit} className="add-form">
        <input 
          name="name" 
          placeholder="Student Name" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input 
          name="rollNo" 
          placeholder="Roll Number" 
          value={formData.rollNo}
          onChange={handleChange}
          required
        />
        <input 
          name="course" 
          placeholder="Course" 
          value={formData.course}
          onChange={handleChange}
          required
        />
        <input 
          name="email" 
          type="email"
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  )
}

export default AddStudent