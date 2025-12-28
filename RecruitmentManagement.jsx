import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecruitmentManagement = () => {
  const jobPostings = [
    {
      id: 1,
      title: 'Senior Web Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      applicants: 24,
      status: 'active',
      postedDate: '2025-12-15'
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Nairobi',
      type: 'Full-time',
      applicants: 18,
      status: 'active',
      postedDate: '2025-12-10'
    },
    {
      id: 3,
      title: 'IT Support Technician',
      department: 'Support',
      location: 'Hybrid',
      type: 'Part-time',
      applicants: 31,
      status: 'active',
      postedDate: '2025-12-05'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Recruitment Management</h2>
          <p className="text-muted-foreground">Manage job postings and candidate applications</p>
        </div>
        <Button variant="default">
          <Icon name="Plus" size={18} className="mr-2" />
          Post New Job
        </Button>
      </div>

      {/* Job Postings */}
      <div className="grid grid-cols-1 gap-6">
        {jobPostings?.map((job) => (
          <div key={job?.id} className="bg-card rounded-xl p-6 border border-border hover:shadow-warm-md transition-smooth">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">{job?.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
                    {job?.status}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Building2" size={16} />
                    <span>{job?.department}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" size={16} />
                    <span>{job?.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{job?.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={16} />
                    <span>Posted {job?.postedDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{job?.applicants}</div>
                  <div className="text-xs text-muted-foreground">Applicants</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Eye" size={16} className="mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Edit" size={16} className="mr-2" />
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hiring Pipeline */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-xl font-bold text-foreground mb-4">Hiring Pipeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-muted rounded-lg p-4">
            <div className="text-2xl font-bold text-foreground mb-1">73</div>
            <div className="text-sm text-muted-foreground">Total Applications</div>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="text-2xl font-bold text-warning mb-1">28</div>
            <div className="text-sm text-muted-foreground">Under Review</div>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="text-2xl font-bold text-secondary mb-1">12</div>
            <div className="text-sm text-muted-foreground">Interviews Scheduled</div>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="text-2xl font-bold text-success mb-1">5</div>
            <div className="text-sm text-muted-foreground">Offers Extended</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentManagement;