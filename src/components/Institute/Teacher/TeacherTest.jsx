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
  ChevronDown,
  FileText,
  Clock,
  Calendar,
  Send
} from 'lucide-react';

const TeacherTest = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [testToDelete, setTestToDelete] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingTest, setEditingTest] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [testToAssign, setTestToAssign] = useState(null);

  // New test form state
  const [newTest, setNewTest] = useState({
    testName: '',
    className: '',
    subject: '',
    totalMarks: '',
    duration: '',
    type: 'Scheduled', // Changed from scheduledDate to type
    status: 'Draft'
  });

  // Assign test form state
  const [assignTest, setAssignTest] = useState({
    classes: [],
    dueDate: '',
    instructions: ''
  });

  // Sample test data
  const [tests, setTests] = useState([
    {
      id: 1,
      testName: 'Algebra Midterm',
      subject: 'Mathematics',
      totalMarks: 100,
      duration: '90 mins',
      type: 'Scheduled',
      status: 'Scheduled',
    },
    {
      id: 2,
      testName: 'Physics Quiz 1',
      subject: 'Science',
      totalMarks: 50,
      duration: '45 mins',
      type: 'Unscheduled',
      status: 'Draft',
    },
    {
      id: 3,
      testName: 'Literature Analysis',
      subject: 'English',
      totalMarks: 80,
      duration: '60 mins',
      type: 'Scheduled',
      status: 'Scheduled',
    },
    {
      id: 4,
      testName: 'Programming Basics',
      subject: 'Computer Science',
      totalMarks: 100,
      duration: '120 mins',
      type: 'Unscheduled',
      status: 'Completed',
    },
    {
      id: 5,
      testName: 'Advanced Physics Test',
      subject: 'Physics',
      totalMarks: 100,
      duration: '90 mins',
      type: 'Scheduled',
      status: 'Draft',
    }
  ]);

  // Available status options
  const statusOptions = ['All', 'Scheduled', 'Draft', 'Completed'];
  const typeOptions = ['Scheduled', 'Unscheduled'];

  // Filter tests based on search term and status filter
  const filteredTests = tests.filter(test => {
    const matchesSearch = test.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.subject.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = selectedStatus === 'All' || test.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  // Action Handlers
  const handleViewTest = (test) => {
    console.log('View test:', test);
    alert(`Viewing test: ${test.testName}`);
  };

  const handleEditTest = (test) => {
    console.log('Edit test:', test);
    setEditingTest(test);
    setNewTest({
      testName: test.testName,
      className: test.className || '',
      subject: test.subject,
      totalMarks: test.totalMarks.toString(),
      duration: test.duration,
      type: test.type,
      status: test.status
    });
    setShowEditModal(true);
  };

  const handleDeleteTest = (test) => {
    console.log('Delete test:', test);
    setTestToDelete(test);
    setShowDeleteModal(true);
  };

  const handleAssignTest = (test) => {
    console.log('Assign test:', test);
    setTestToAssign(test);
    setAssignTest({
      classes: [],
      dueDate: '',
      instructions: ''
    });
    setShowAssignModal(true);
  };

  const confirmDeleteTest = () => {
    if (testToDelete) {
      setTests(tests.filter(t => t.id !== testToDelete.id));
      setShowDeleteModal(false);
      setTestToDelete(null);
      alert(`Test "${testToDelete.testName}" has been deleted successfully.`);
    }
  };

  const confirmAssignTest = () => {
    if (testToAssign && assignTest.classes.length > 0) {
      // Update test status to Scheduled when assigned
      const updatedTests = tests.map(t =>
        t.id === testToAssign.id
          ? { ...t, status: 'Scheduled' }
          : t
      );
      setTests(updatedTests);
      setShowAssignModal(false);
      setTestToAssign(null);
      alert(`Test "${testToAssign.testName}" has been assigned successfully.`);
    } else {
      alert('Please select at least one class to assign the test.');
    }
  };

  const handleCreateTest = () => {
    if (!newTest.testName || !newTest.subject || !newTest.totalMarks) {
      alert('Please fill in all required fields.');
      return;
    }

    const newTestObj = {
      id: Math.max(...tests.map(t => t.id)) + 1,
      testName: newTest.testName,
      subject: newTest.subject,
      totalMarks: parseInt(newTest.totalMarks) || 0,
      duration: newTest.duration,
      type: newTest.type,
      status: newTest.status
    };

    setTests([...tests, newTestObj]);
    setShowCreateModal(false);
    resetNewTestForm();
    alert('Test created successfully!');
  };

  const handleUpdateTest = () => {
    if (!newTest.testName || !newTest.subject || !newTest.totalMarks) {
      alert('Please fill in all required fields.');
      return;
    }

    const updatedTests = tests.map(t =>
      t.id === editingTest.id
        ? {
          ...t,
          testName: newTest.testName,
          subject: newTest.subject,
          totalMarks: parseInt(newTest.totalMarks) || 0,
          duration: newTest.duration,
          type: newTest.type,
          status: newTest.status
        }
        : t
    );

    setTests(updatedTests);
    setShowEditModal(false);
    setEditingTest(null);
    resetNewTestForm();
    alert('Test updated successfully!');
  };

  const resetNewTestForm = () => {
    setNewTest({
      testName: '',
      className: '',
      subject: '',
      totalMarks: '',
      duration: '',
      type: 'Scheduled',
      status: 'Draft'
    });
  };

  const handleExport = () => {
    console.log('Exporting test data:', filteredTests);
    alert('Export functionality would be implemented here.');
  };

  const clearFilters = () => {
    setSelectedStatus('All');
    setSearchTerm('');
  };

  // Sample classes for assignment
  const availableClasses = [
    'Mathematics 101',
    'Science Class',
    'English Literature',
    'Computer Science',
    'Physics Advanced'
  ];

  // Simple Filter Dropdown
  const FilterDropdown = () => (
    <div className="institute-dropdown">
      <div className="institute-dropdown-body">
        <div className="institute-form-group">
          <label className="institute-form-label">Show Tests</label>
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

  // Create Test Modal
  const CreateTestModal = () => (
    <div className="institute-modal-overlay">
      <div className="institute-modal">
        <div className="institute-modal-header">
          <h3 className="institute-modal-title">Create New Test</h3>
          <button
            className="institute-modal-close"
            onClick={() => setShowCreateModal(false)}
          >
            <X size={20} />
          </button>
        </div>
        <div className="institute-modal-body">
          <div className="institute-form-group">
            <label className="institute-form-label">Test Name *</label>
            <input
              type="text"
              className="institute-form-input"
              value={newTest.testName}
              onChange={(e) => setNewTest({ ...newTest, testName: e.target.value })}
              placeholder="Enter test name"
            />
          </div>
          <div className="institute-form-group">
            <label className="institute-form-label">Subject *</label>
            <select
              className="institute-form-select"
              value={newTest.subject}
              onChange={(e) => setNewTest({ ...newTest, subject: e.target.value })}
            >
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Physics">Physics</option>
            </select>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="institute-form-group">
                <label className="institute-form-label">Total Marks *</label>
                <input
                  type="number"
                  className="institute-form-input"
                  value={newTest.totalMarks}
                  onChange={(e) => setNewTest({ ...newTest, totalMarks: e.target.value })}
                  placeholder="100"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="institute-form-group">
                <label className="institute-form-label">Duration</label>
                <input
                  type="text"
                  className="institute-form-input"
                  value={newTest.duration}
                  onChange={(e) => setNewTest({ ...newTest, duration: e.target.value })}
                  placeholder="e.g., 90 mins"
                />
              </div>
            </div>
          </div>
          <div className="institute-form-group">
            <label className="institute-form-label">Type *</label>
            <select
              className="institute-form-select"
              value={newTest.type}
              onChange={(e) => setNewTest({ ...newTest, type: e.target.value })}
            >
              {typeOptions.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="institute-form-group">
            <label className="institute-form-label">Status</label>
            <select
              className="institute-form-select"
              value={newTest.status}
              onChange={(e) => setNewTest({ ...newTest, status: e.target.value })}
            >
              <option value="Draft">Draft</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="institute-modal-footer">
          <button
            className="institute-secondary-btn"
            onClick={() => setShowCreateModal(false)}
          >
            Cancel
          </button>
          <button
            className="institute-primary-btn"
            onClick={handleCreateTest}
          >
            Create Test
          </button>
        </div>
      </div>
    </div>
  );

  // Edit Test Modal
  const EditTestModal = () => (
    <div className="institute-modal-overlay">
      <div className="institute-modal">
        <div className="institute-modal-header">
          <h3 className="institute-modal-title">Edit Test</h3>
          <button
            className="institute-modal-close"
            onClick={() => setShowEditModal(false)}
          >
            <X size={20} />
          </button>
        </div>
        <div className="institute-modal-body">
          <div className="institute-form-group">
            <label className="institute-form-label">Test Name *</label>
            <input
              type="text"
              className="institute-form-input"
              value={newTest.testName}
              onChange={(e) => setNewTest({ ...newTest, testName: e.target.value })}
              placeholder="Enter test name"
            />
          </div>
          <div className="institute-form-group">
            <label className="institute-form-label">Subject *</label>
            <select
              className="institute-form-select"
              value={newTest.subject}
              onChange={(e) => setNewTest({ ...newTest, subject: e.target.value })}
            >
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Physics">Physics</option>
            </select>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="institute-form-group">
                <label className="institute-form-label">Total Marks *</label>
                <input
                  type="number"
                  className="institute-form-input"
                  value={newTest.totalMarks}
                  onChange={(e) => setNewTest({ ...newTest, totalMarks: e.target.value })}
                  placeholder="100"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="institute-form-group">
                <label className="institute-form-label">Duration</label>
                <input
                  type="text"
                  className="institute-form-input"
                  value={newTest.duration}
                  onChange={(e) => setNewTest({ ...newTest, duration: e.target.value })}
                  placeholder="e.g., 90 mins"
                />
              </div>
            </div>
          </div>
          <div className="institute-form-group">
            <label className="institute-form-label">Type *</label>
            <select
              className="institute-form-select"
              value={newTest.type}
              onChange={(e) => setNewTest({ ...newTest, type: e.target.value })}
            >
              {typeOptions.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="institute-form-group">
            <label className="institute-form-label">Status</label>
            <select
              className="institute-form-select"
              value={newTest.status}
              onChange={(e) => setNewTest({ ...newTest, status: e.target.value })}
            >
              <option value="Draft">Draft</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
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
            onClick={handleUpdateTest}
          >
            Update Test
          </button>
        </div>
      </div>
    </div>
  );

  // Assign Test Modal
  const AssignTestModal = () => (
    <div className="institute-modal-overlay">
      <div className="institute-modal">
        <div className="institute-modal-header">
          <h3 className="institute-modal-title">Assign Test</h3>
          <button
            className="institute-modal-close"
            onClick={() => setShowAssignModal(false)}
          >
            <X size={20} />
          </button>
        </div>
        <div className="institute-modal-body">
          <div className="institute-form-group">
            <label className="institute-form-label">Test</label>
            <input
              type="text"
              className="institute-form-input"
              value={testToAssign?.testName || ''}
              disabled
              readOnly
            />
          </div>
          <div className="institute-form-group">
            <label className="institute-form-label">Select Classes *</label>
            <div className="institute-checkbox-group">
              {availableClasses.map(className => (
                <label key={className} className="institute-checkbox-label">
                  <input
                    type="checkbox"
                    checked={assignTest.classes.includes(className)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setAssignTest({
                          ...assignTest,
                          classes: [...assignTest.classes, className]
                        });
                      } else {
                        setAssignTest({
                          ...assignTest,
                          classes: assignTest.classes.filter(c => c !== className)
                        });
                      }
                    }}
                  />
                  <span className="institute-checkbox-text">{className}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="institute-form-group">
            <label className="institute-form-label">Due Date</label>
            <input
              type="date"
              className="institute-form-input"
              value={assignTest.dueDate}
              onChange={(e) => setAssignTest({ ...assignTest, dueDate: e.target.value })}
            />
          </div>
          <div className="institute-form-group">
            <label className="institute-form-label">Instructions</label>
            <textarea
              className="institute-form-input"
              rows="3"
              value={assignTest.instructions}
              onChange={(e) => setAssignTest({ ...assignTest, instructions: e.target.value })}
              placeholder="Add any special instructions for students..."
            />
          </div>
        </div>
        <div className="institute-modal-footer">
          <button
            className="institute-secondary-btn"
            onClick={() => setShowAssignModal(false)}
          >
            Cancel
          </button>
          <button
            className="institute-primary-btn"
            onClick={confirmAssignTest}
          >
            Assign Test
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
          <h3 className="institute-modal-title">Delete Test</h3>
          <button
            className="institute-modal-close"
            onClick={() => setShowDeleteModal(false)}
          >
            <X size={20} />
          </button>
        </div>
        <div className="institute-modal-body">
          <p>Are you sure you want to delete the test "<strong>{testToDelete?.testName}</strong>"? This action cannot be undone.</p>
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
            onClick={confirmDeleteTest}
          >
            Delete Test
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
            <h1 className="institute-welcome-title">My Tests</h1>
            <p className="institute-welcome-subtitle">Manage your tests and assessments</p>
          </div>
          <button
            className="institute-primary-btn"
            onClick={() => setShowCreateModal(true)}
          >
            <Plus size={20} />
            <span>Create New Test</span>
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
                  placeholder="Search tests or subjects..."
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

      {/* Tests Table */}
      <div className="institute-content-card">
        <div className="institute-card-header">
          <h3 className="institute-card-title">Test List</h3>
          <span className="institute-card-subtitle">{filteredTests.length} tests found</span>
        </div>
        <div className="institute-card-body p-0">
          <div className="table-responsive">
            <table className="institute-table">
              <thead className="institute-table-header">
                <tr>
                  <th>Test Name</th>
                  <th>Subject</th>
                  <th>Total Marks</th>
                  <th>Duration</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="institute-table-body">
                {filteredTests.map((test) => (
                  <tr key={test.id} className="institute-table-row">
                    <td>
                      <div className="institute-class-info">
                        <h6 className="institute-class-name">{test.testName}</h6>
                      </div>
                    </td>
                    <td>
                      <span className="institute-table-text">{test.subject}</span>
                    </td>
                    <td>
                      <span className="institute-table-text">{test.totalMarks}</span>
                    </td>
                    <td>
                      <div className="institute-student-count">
                        <Clock size={16} />
                        <span>{test.duration}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`institute-type institute-type-${test.type.toLowerCase()}`}>
                        {test.type}
                      </span>
                    </td>
                    <td>
                      <span className={`institute-status institute-status-${test.status.toLowerCase()}`}>
                        {test.status}
                      </span>
                    </td>
                    <td>
                      <div className="institute-action-buttons">
                        <button
                          className="institute-action-btn institute-action-assign"
                          onClick={() => handleAssignTest(test)}
                          title="Assign Test"
                          disabled={test.status === 'Completed'}
                        >
                          <Send size={16} />
                        </button>

                        <button
                          className="institute-action-btn institute-action-view"
                          onClick={() => handleViewTest(test)}
                          title="View Test"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          className="institute-action-btn institute-action-edit"
                          onClick={() => handleEditTest(test)}
                          title="Edit Test"
                        >
                          <Edit size={16} />
                        </button>

                        <button
                          className="institute-action-btn institute-action-delete"
                          onClick={() => handleDeleteTest(test)}
                          title="Delete Test"
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
          {filteredTests.length === 0 && (
            <div className="institute-empty-state">
              <div className="institute-empty-icon">
                <FileText size={48} />
              </div>
              <h4 className="institute-empty-title">No tests found</h4>
              <p className="institute-empty-description">
                {searchTerm || selectedStatus !== 'All'
                  ? 'Try adjusting your search terms or filters'
                  : 'Get started by creating your first test'}
              </p>
              <button
                className="institute-primary-btn"
                onClick={() => setShowCreateModal(true)}
              >
                <Plus size={20} />
                <span>Create New Test</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {showCreateModal && <CreateTestModal />}
      {showEditModal && <EditTestModal />}
      {showAssignModal && <AssignTestModal />}
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

export default TeacherTest;