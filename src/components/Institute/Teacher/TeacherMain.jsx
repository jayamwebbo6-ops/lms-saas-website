import React from 'react';
import { FileText, BookOpen, MessageSquare, BarChart3 } from 'lucide-react';

const TeacherMain = ({ activeSection = 'dashboard' }) => {
    const stats = [
        { label: 'Total Classes', value: '12', change: '+2' },
        { label: 'Total Students', value: '245', change: '+15' },
        { label: 'Pending Tests', value: '07', change: '-5' },
        { label: 'Completion Rate', value: '89%', change: '+3%' },
    ];

    const recentActivities = [
        { course: 'Mathematics 101', action: 'New test created - Midterm Exam', time: '2 hours ago' },
        { course: 'Science Class', action: 'Test results published - Lab Quiz', time: '4 hours ago' },
        { course: 'English Literature', action: 'Test scheduled - Final Assessment', time: '1 day ago' },
        { course: 'Computer Science', action: 'Question bank updated - Programming Test', time: '2 days ago' },
    ];


    return (
        <main className="institute-dashboard-content">

            {/* Welcome Section */}
            <div className="institute-welcome-section">
                <h1 className="institute-welcome-title">Welcome back, Dr. Johnson!</h1>
                <p className="institute-welcome-subtitle">Here's what's happening with your classes today.</p>
            </div>

            {/* Stats Grid - Using Bootstrap Grid */}
            <div className="institute-stats-grid">
                <div className="container-fluid">
                    <div className="row g-3">
                        {stats.map((stat, index) => (
                            <div key={index} className="col-sm-6 col-xl-3">
                                <div className="institute-stat-card">
                                    <div className="institute-stat-content">
                                        <h3 className="institute-stat-value">{stat.value}</h3>
                                        <p className="institute-stat-label">{stat.label}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Grid - Using Bootstrap Grid */}
            <div className="institute-content-grid">
                <div className="container-fluid">
                    <div className="row g-4">
                        {/* Recent Activities */}
                        <div className="col-xl-6">
                            <div className="institute-content-card">
                                <div className="institute-card-header">
                                    <h3 className="institute-card-title">Recent Activities</h3>
                                    <button className="institute-card-link">View All</button>
                                </div>
                                <div className="institute-card-body">
                                    <div className="institute-activity-list">
                                        {recentActivities.map((activity, index) => (
                                            <div key={index} className="institute-activity-item">
                                                <div className="institute-activity-content">
                                                    <h4 className="institute-activity-course">{activity.course}</h4>
                                                    <p className="institute-activity-action">{activity.action}</p>
                                                </div>
                                                <span className="institute-activity-time">{activity.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions - Using Bootstrap Grid */}
                        <div className="col-xl-6">
                            <div className="institute-content-card">
                                <div className="institute-card-header">
                                    <h3 className="institute-card-title">Quick Actions</h3>
                                </div>
                                <div className="institute-card-body">
                                    <div className="institute-quick-actions">
                                        <div className="row g-3">
                                            <div className="col-sm-6">
                                                <button className="institute-quick-action">
                                                    <FileText size={24} />
                                                    <span>Create Class</span>
                                                </button>
                                            </div>
                                            <div className="col-sm-6">
                                                <button className="institute-quick-action">
                                                    <BookOpen size={24} />
                                                    <span>Create Test</span>
                                                </button>
                                            </div>
                                            <div className="col-sm-6">
                                                <button className="institute-quick-action">
                                                    <MessageSquare size={24} />
                                                    <span>Send Announcement</span>
                                                </button>
                                            </div>
                                            <div className="col-sm-6">
                                                <button className="institute-quick-action">
                                                    <BarChart3 size={24} />
                                                    <span>View Reports</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Deadlines */}
                        <div className="col-xl-6">
                            <div className="institute-content-card">
                                <div className="institute-card-header">
                                    <h3 className="institute-card-title">Upcoming Deadlines</h3>
                                </div>
                                <div className="institute-card-body">
                                    <div className="institute-deadline-list">
                                        <div className="institute-deadline-item institute-deadline-urgent">
                                            <div className="institute-deadline-content">
                                                <h4 className="institute-deadline-title">Math Quiz #3</h4>
                                                <p className="institute-deadline-course">Mathematics 101</p>
                                            </div>
                                            <span className="institute-deadline-date">Tomorrow</span>
                                        </div>
                                        <div className="institute-deadline-item">
                                            <div className="institute-deadline-content">
                                                <h4 className="institute-deadline-title">Research Paper</h4>
                                                <p className="institute-deadline-course">English Literature</p>
                                            </div>
                                            <span className="institute-deadline-date">3 days left</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Course Progress */}
                        <div className="col-xl-6">
                            <div className="institute-content-card">
                                <div className="institute-card-header">
                                    <h3 className="institute-card-title">Course Progress</h3>
                                </div>
                                <div className="institute-card-body">
                                    <div className="institute-progress-list">
                                        <div className="institute-progress-item">
                                            <div className="institute-progress-info">
                                                <h4 className="institute-progress-course">Mathematics 101</h4>
                                                <span className="institute-progress-percent">85%</span>
                                            </div>
                                            <div className="institute-progress-bar">
                                                <div
                                                    className="institute-progress-fill"
                                                    style={{ width: '85%' }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="institute-progress-item">
                                            <div className="institute-progress-info">
                                                <h4 className="institute-progress-course">Science Class</h4>
                                                <span className="institute-progress-percent">72%</span>
                                            </div>
                                            <div className="institute-progress-bar">
                                                <div
                                                    className="institute-progress-fill"
                                                    style={{ width: '72%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default TeacherMain;