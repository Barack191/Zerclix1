import React from 'react';
import Icon from '../../../components/AppIcon';

const DashboardMetrics = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {metrics?.map((metric) => (
        <div
          key={metric?.id}
          className="bg-card rounded-xl p-4 md:p-6 border border-border hover:shadow-warm-md transition-smooth"
        >
          <div className="flex items-start justify-between mb-3">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${metric?.bgColor}`}
            >
              <Icon name={metric?.icon} size={24} color={metric?.iconColor} />
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${metric?.trendBg} ${metric?.trendColor}`}
            >
              {metric?.trend}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            {metric?.value}
          </h3>
          <p className="text-sm text-muted-foreground">{metric?.label}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardMetrics;