import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunitySection = () => {
  const [filter, setFilter] = useState('all');

  const ideas = [
    {
      id: 1,
      author: 'John Doe',
      title: 'Mobile App Development',
      description: 'Would love to see a mobile app version of the booking system for easier access on the go.',
      category: 'Feature Request',
      votes: 42,
      status: 'under-review',
      date: '2025-12-20'
    },
    {
      id: 2,
      author: 'Sarah Williams',
      title: 'Enhanced Security Features',
      description: 'Implement two-factor authentication for better account security and data protection.',
      category: 'Security',
      votes: 38,
      status: 'planned',
      date: '2025-12-18'
    },
    {
      id: 3,
      author: 'Mike Johnson',
      title: 'Integration with Calendar Apps',
      description: 'Automatic sync with Google Calendar and Outlook would make scheduling much easier.',
      category: 'Integration',
      votes: 56,
      status: 'implemented',
      date: '2025-12-15'
    },
    {
      id: 4,
      author: 'Jane Smith',
      title: 'Dark Mode Theme',
      description: 'A dark mode option would be great for users who work late hours.',
      category: 'UI/UX',
      votes: 67,
      status: 'implemented',
      date: '2025-12-12'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'under-review':
        return 'bg-warning/10 text-warning';
      case 'planned':
        return 'bg-secondary/10 text-secondary';
      case 'implemented':
        return 'bg-success/10 text-success';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Community Ideas</h2>
        <p className="text-muted-foreground">User feedback and feature suggestions</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {['all', 'under-review', 'planned', 'implemented']?.map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === status
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {status?.replace('-', ' ')?.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Ideas List */}
      <div className="space-y-4">
        {ideas?.map((idea) => (
          <div key={idea?.id} className="bg-card rounded-xl p-6 border border-border hover:shadow-warm-md transition-smooth">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Votes */}
              <div className="flex md:flex-col items-center md:items-start gap-2">
                <button className="flex flex-col items-center p-2 rounded-lg hover:bg-muted transition-colors">
                  <Icon name="ChevronUp" size={20} className="text-primary" />
                  <span className="text-lg font-bold text-foreground">{idea?.votes}</span>
                  <Icon name="ChevronDown" size={20} className="text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground">{idea?.title}</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(idea?.status)}`}>
                    {idea?.status?.replace('-', ' ')}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                    {idea?.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{idea?.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="User" size={14} />
                    <span>{idea?.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    <span>{idea?.date}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex md:flex-col gap-2">
                <Button variant="outline" size="sm">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  Reply
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="CheckCircle" size={16} className="mr-2" />
                  Approve
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;