import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Users,
  Eye,
  Download,
  X,
  ChevronDown
} from 'lucide-react';

const TeacherClass = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [classToDelete, setClassToDelete] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingClass, setEditingClass] = useState(null);

  // New class form state
  const [newClass, setNewClass] = useState({
    className: '',
    subject: '',
    grade: '',
    students: '',
    tests: '',
    status: 'Active'
  });

  // Sample class data
  const [classes, setClasses] = useState([
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
  ]);

  // Available status options
  const statusOptions = ['All', 'Active', 'Inactive'];

  // Filter classes based on search term and status filter
  const filteredClasses = classes.filter(classItem => {
    const matchesSearch = classItem.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.grade.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = selectedStatus === 'All' || classItem.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Action Handlers
  const handleViewClass = (classItem) => {
    console.log('View class:', classItem);
    alert(`Viewing class: ${classItem.className}`);
  };

  const handleEditClass = (classItem) => {
    console.log('Edit class:', classItem);
    setEditingClass(classItem);
    setNewClass({
      className: classItem.className,
      subject: classItem.subject,
      grade: classItem.grade,
      students: classItem.students.toString(),
      tests: classItem.tests.toString(),
      status: classItem.status
    });
    setShowEditModal(true);
  };

  const handleDeleteClass = (classItem) => {
    console.log('Delete class:', classItem);
    setClassToDelete(classItem);
    setShowDeleteModal(true);
  };

  const confirmDeleteClass = () => {
    if (classToDelete) {
      setClasses(classes.filter(cls => cls.id !== classToDelete.id));
      setShowDeleteModal(false);
      setClassToDelete(null);
      alert(`Class "${classToDelete.className}" has been deleted successfully.`);
    }
  };

  const handleCreateClass = () => {
    if (!newClass.className || !newClass.subject || !newClass.grade) {
      alert('Please fill in all required fields.');
      return;
    }

    const newClassObj = {
      id: Math.max(...classes.map(c => c.id)) + 1,
      className: newClass.className,
      subject: newClass.subject,
      grade: newClass.grade,
      students: parseInt(newClass.students) || 0,
      tests: parseInt(newClass.tests) || 0,
      status: newClass.status
    };

    setClasses([...classes, newClassObj]);
    setShowCreateModal(false);
    resetNewClassForm();
    alert('Class created successfully!');
  };

  const handleUpdateClass = () => {
    if (!newClass.className || !newClass.subject || !newClass.grade) {
      alert('Please fill in all required fields.');
      return;
    }

    const updatedClasses = classes.map(cls => 
      cls.id === editingClass.id 
        ? {
            ...cls,
            className: newClass.className,
            subject: newClass.subject,
            grade: newClass.grade,
            students: parseInt(newClass.students) || 0,
            tests: parseInt(newClass.tests) || 0,
            status: newClass.status
          }
        : cls
    );

    setClasses(updatedClasses);
    setShowEditModal(false);
    setEditingClass(null);
    resetNewClassForm();
    alert('Class updated successfully!');
  };

  const resetNewClassForm = () => {
    setNewClass({
      className: '',
      subject: '',
      grade: '',
      students: '',
      tests: '',
      status: 'Active'
    });
  };

  const handleExport = () => {
    console.log('Exporting class data:', filteredClasses);
    alert('Export functionality would be implemented here.');
  };

  const clearFilters = () => {
    setSelectedStatus('All');
    setSearchTerm('');
  };

  // Simple Filter Dropdown
  const FilterDropdown = () => (
    <div className="institute-dropdown">
      <div className="institute-dropdown-body">
        <div className="institute-form-group">
          <label className="institute-form-label">Show Classes</label>
          <div className="institute-filter-options">
            {statusOptions.map(status => (
              <div 
                key={status}
                className={`institute-filter-option ${selectedStatus === status ? 'institute-filter-option-active' : ''}`}
                onClick={() => {
                  setSelectedStatus(status);
                  setShowFilterDropdown(false);
                }}
              >
                <span className="institute-filter-option-text">{status}</span>
                {selectedStatus === status && (
                  <div className="institute-filter-option-check">
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="institute-dropdown-footer">
        <button 
          className="institute-secondary-btn institute-btn-sm"
          onClick={clearFilters}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );

  // Edit Class Modal
  const EditClassModal = () => (
    <div className="institute-modal-overlay">
      <div className="institute-modal">
        <div className="institute-modal-header">
          <h3 className="institute-modal-title">Edit Class</h3>
          <button 
            className="institute-modal-close"
            onClick={() => setShowEditModal(false)}
          >
            <X size={20} />
          </button>
        </div>
        <div className="institute-modal-body">
          <div className="institute-form-group">
            <label className="institute-form-label">Class Name *</label>
            <input
              type="text"
              className="institute-form-input"
              value={newClass.className}
              onChange={(e) => setNewClass({...newClass, className: e.target.value})}
              placeholder="Enter class name"
            />
          </div>
          <div className="institute-form-group">
            <label className="institute-form-label">Subject *</label>
            <select
              className="institute-form-select"
              value={newClass.subject}
              onChange={(e) => setNewClass({...newClass, subject: e.target.value})}
            >
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Physics">Physics</option>
            </select>
          </div>
          <div className="institute-form-group">
            <label className="institute-form-label">Grade *</label>
            <select
              className="institute-form-select"
              value={newClass.grade}
              onChange={(e) => setNewClass({...newClass, grade: e.target.value})}
            >
              <option value="">Select Grade</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
            </select>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="institute-form-group">
                <label className="institute-form-label">Number of Students</label>
                <input
                  type="number"
                  className="institute-form-input"
                  value={newClass.students}
                  onChange={(e) => setNewClass({...newClass, students: e.target.value})}
                  placeholder="0"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="institute-form-group">
                <label className="institute-form-label">Number of Tests</label>
                <input
                  type="number"
                  className="institute-form-input"
                  value={newClass.tests}
                  onChange={(e) => setNewClass({...newClass, tests: e.target.value})}
                  placeholder="0"
                />
              </div>
            </div>
          </div>
          <div className="institute-form-group">
            <label className="institute-form-label">Status</label>
            <select
              className="institute-form-select"
              value={newClass.status}
              onChange={(e) => setNewClass({...newClass, status: e.target.value})}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className="institute-modal-footer">
          <button 
            className="institute-secondary-btn"
            onClick={() => setShowEditModal(false)}
          >
            Cancel
          </button>
          <button 
            className="institute-primary-btn"
            onClick={handleUpdateClass}
          >
            Update Class
          </button>
        </div>
      </div>
    </div>
  );

  // Delete Confirmation Modal
  const DeleteConfirmationModal = () => (
    <div className="institute-modal-overlay">
      <div className="institute-modal institute-modal-sm">
        <div className="institute-modal-header">
          <h3 className="institute-modal-title">Delete Class</h3>
          <button 
            className="institute-modal-close"
            onClick={() => setShowDeleteModal(false)}
          >
            <X size={20} />
          </button>
        </div>
        <div className="institute-modal-body">
          <p>Are you sure you want to delete the class "<strong>{classToDelete?.className}</strong>"? This action cannot be undone.</p>
        </div>
        <div className="institute-modal-footer">
          <button 
            className="institute-secondary-btn"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </button>
          <button 
            className="institute-danger-btn"
            onClick={confirmDeleteClass}
          >
            Delete Class
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="institute-dashboard-content">
      {/* Header Section */}
      <div className="institute-welcome-section">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="institute-welcome-title">My Classes</h1>
            <p className="institute-welcome-subtitle">Manage your classes and student groups</p>
          </div>
          <button 
            className="institute-primary-btn"
            onClick={() => setShowCreateModal(true)}
          >
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
              <div className="position-relative">
                <button 
                  className="institute-secondary-btn institute-filter-trigger"
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                >
                  <Filter size={16} />
                  <span>Filter</span>
                  <ChevronDown size={16} />
                </button>
                {showFilterDropdown && <FilterDropdown />}
              </div>
              <button 
                className="institute-secondary-btn"
                onClick={handleExport}
              >
                <Download size={16} />
                <span>Export</span>
              </button>
            </div>
          </div>
          
          {/* Active Filter Display */}
          {selectedStatus !== 'All' && (
            <div className="mt-3">
              <div className="d-flex align-items-center gap-2">
                <span className="institute-filter-label">Active filter:</span>
                <span className="institute-filter-tag">
                  Status: {selectedStatus}
                  <button 
                    onClick={() => setSelectedStatus('All')}
                    className="institute-filter-tag-remove"
                  >
                    ×
                  </button>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Classes Table */}
      <div className="institute-content-card">
        <div className="institute-card-header">
          <h3 className="institute-card-title">Class List</h3>
          <span className="institute-card-subtitle">{filteredClasses.length} classes found</span>
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
                {searchTerm || selectedStatus !== 'All' 
                  ? 'Try adjusting your search terms or filters' 
                  : 'Get started by creating your first class'}
              </p>
              <button 
                className="institute-primary-btn"
                onClick={() => setShowCreateModal(true)}
              >
                <Plus size={20} />
                <span>Create New Class</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {/* {showCreateModal && <CreateClassModal />} */}
      {showEditModal && <EditClassModal />}
      {showDeleteModal && <DeleteConfirmationModal />}

      {/* Dropdown Overlay */}
      {showFilterDropdown && (
        <div 
          className="institute-dropdown-overlay"
          onClick={() => setShowFilterDropdown(false)}
        />
      )}
    </main>
  );
};

export default TeacherClass;