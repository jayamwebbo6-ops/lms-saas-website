import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Users,
  Eye,
  Download
} from 'lucide-react';

const TeacherClass = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample class data
  const classes = [
    {
      id: 1,
      className: 'Mathematics 101',
      subject: 'Mathematics',
      grade: 'Grade 10',
      students: 45,
      tests: 12,
      status: 'Active',
    },
    {
      id: 2,
      className: 'Science Class',
      subject: 'Science',
      grade: 'Grade 9',
      students: 38,
      tests: 8,
      status: 'Active',
    },
    {
      id: 3,
      className: 'English Literature',
      subject: 'English',
      grade: 'Grade 11',
      students: 32,
      tests: 15,
      status: 'Active',
    },
    {
      id: 4,
      className: 'Computer Science',
      subject: 'Computer Science',
      grade: 'Grade 12',
      students: 28,
      tests: 6,
      status: 'Active',
    },
    {
      id: 5,
      className: 'Physics Advanced',
      subject: 'Physics',
      grade: 'Grade 12',
      students: 22,
      tests: 10,
      status: 'Inactive',
    }
  ];

  const filteredClasses = classes.filter(classItem =>
    classItem.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classItem.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classItem.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewClass = (classItem) => {
    console.log('View class:', classItem);
    // Navigate to class details or open modal
  };

  const handleEditClass = (classItem) => {
    console.log('Edit class:', classItem);
    // Open edit modal
  };

  const handleDeleteClass = (classItem) => {
    console.log('Delete class:', classItem);
    // Show confirmation modal
  };

  return (
    <main className="institute-dashboard-content">
      {/* Header Section */}
      <div className="institute-welcome-section">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="institute-welcome-title">My Classes</h1>
            <p className="institute-welcome-subtitle">Manage your classes and student groups</p>
          </div>
          <button className="institute-primary-btn">
            <Plus size={20} />
            <span>Create New Class</span>
          </button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="institute-content-card mb-4">
        <div className="institute-card-body">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="institute-search-bar position-relative">
                <Search size={20} className="institute-search-icon" />
                <input
                  type="text"
                  placeholder="Search classes, subjects, or grades..."
                  className="institute-search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end gap-3">
              <button className="institute-secondary-btn">
                <Filter size={16} />
                <span>Filter</span>
              </button>
              <button className="institute-secondary-btn">
                <Download size={16} />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Classes Table */}
      <div className="institute-content-card">
        <div className="institute-card-header">
          <h3 className="institute-card-title">Class List</h3>
        </div>
        <div className="institute-card-body p-0">
          <div className="table-responsive">
            <table className="institute-table">
              <thead className="institute-table-header">
                <tr>
                  <th>Class Name</th>
                  <th>Subject</th>
                  <th>Grade</th>
                  <th>Students</th>
                  <th>Tests</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="institute-table-body">
                {filteredClasses.map((classItem) => (
                  <tr key={classItem.id} className="institute-table-row">
                    <td>
                      <div className="institute-class-info">
                        <h6 className="institute-class-name">{classItem.className}</h6>
                      </div>
                    </td>
                    <td>
                      <span className="institute-table-text">{classItem.subject}</span>
                    </td>
                    <td>
                      <span className="institute-table-text">{classItem.grade}</span>
                    </td>
                    <td>
                      <div className="institute-student-count">
                        <Users size={16} />
                        <span>{classItem.students}</span>
                      </div>
                    </td>
                    <td>
                      <span className="institute-table-text">{classItem.tests}</span>
                    </td>
                    <td>
                      <span className={`institute-status institute-status-${classItem.status.toLowerCase()}`}>
                        {classItem.status}
                      </span>
                    </td>
                    <td>
                      <div className="institute-action-buttons">
                        <button
                          className="institute-action-btn institute-action-view"
                          onClick={() => handleViewClass(classItem)}
                          title="View Class"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          className="institute-action-btn institute-action-edit"
                          onClick={() => handleEditClass(classItem)}
                          title="Edit Class"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          className="institute-action-btn institute-action-delete"
                          onClick={() => handleDeleteClass(classItem)}
                          title="Delete Class"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredClasses.length === 0 && (
            <div className="institute-empty-state">
              <div className="institute-empty-icon">
                <Users size={48} />
              </div>
              <h4 className="institute-empty-title">No classes found</h4>
              <p className="institute-empty-description">
                {searchTerm ? 'Try adjusting your search terms' : 'Get started by creating your first class'}
              </p>
              <button className="institute-primary-btn">
                <Plus size={20} />
                <span>Create New Class</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default TeacherClass;