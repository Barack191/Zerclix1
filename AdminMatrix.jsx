import React from 'react';
import Icon from '../../../components/AppIcon';

const AdminMetrics = () => {
  const metrics = [
    {
      id: 1,
      label: 'Total Bookings',
      value: '1,247',
      icon: 'Calendar',
      iconColor: '#FFFFFF',
      bgColor: 'bg-primary',
      trend: '+12% this month',
      trendBg: 'bg-success/10',
      trendColor: 'text-success'
    },
    {
      id: 2,
      label: 'Revenue',
      value: '$45,230',
      icon: 'DollarSign',
      iconColor: '#FFFFFF',
      bgColor: 'bg-success',
      trend: '+8.5% growth',
      trendBg: 'bg-success/10',
      trendColor: 'text-success'
    },
    {
      id: 3,
      label: 'User Registrations',
      value: '3,842',
      icon: 'Users',
      iconColor: '#FFFFFF',
      bgColor: 'bg-secondary',
      trend: '+156 this week',
      trendBg: 'bg-warning/10',
      trendColor: 'text-warning'
    },
    {
      id: 4,
      label: 'Service Utilization',
      value: '89%',
      icon: 'TrendingUp',
      iconColor: '#FFFFFF',
      bgColor: 'bg-accent',
      trend: 'High demand',
      trendBg: 'bg-accent/10',
      trendColor: 'text-accent'
    },
    {
      id: 5,
      label: 'Active Job Posts',
      value: '24',
      icon: 'Briefcase',
      iconColor: '#FFFFFF',
      bgColor: 'bg-violet-600',
      trend: '8 new this month',
      trendBg: 'bg-violet-100',
      trendColor: 'text-violet-600'
    },
    {
      id: 6,
      label: 'Community Ideas',
      value: '187',
      icon: 'Lightbulb',
      iconColor: '#FFFFFF',
      bgColor: 'bg-amber-600',
      trend: '42 pending review',
      trendBg: 'bg-amber-100',
      trendColor: 'text-amber-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">Real-time metrics and business performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics?.map((metric) => (
          <div
            key={metric?.id}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-warm-md transition-smooth"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${metric?.bgColor}`}
              >
                <Icon name={metric?.icon} size={24} color={metric?.iconColor} />
              </div>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${metric?.trendBg} ${metric?.trendColor}`}
              >
                {metric?.trend}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-1">
              {metric?.value}
            </h3>
            <p className="text-sm text-muted-foreground">{metric?.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-xl font-bold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors">
            <Icon name="UserPlus" size={20} className="text-primary" />
            <span className="text-sm font-medium">Add User</span>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors">
            <Icon name="FileText" size={20} className="text-secondary" />
            <span className="text-sm font-medium">Post Job</span>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors">
            <Icon name="CreditCard" size={20} className="text-success" />
            <span className="text-sm font-medium">Add Payment</span>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors">
            <Icon name="Code" size={20} className="text-accent" />
            <span className="text-sm font-medium">Add Service</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminMetrics;