import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotificationCenter = ({ notifications, onMarkAsRead, onClearAll }) => {
  const [filter, setFilter] = useState('all');

  const getNotificationIcon = (type) => {
    const icons = {
      confirmation: 'CheckCircle2',
      reminder: 'Bell',
      update: 'Info',
      cancellation: 'XCircle',
    };
    return icons?.[type] || 'Bell';
  };

  const getNotificationColor = (type) => {
    const colors = {
      confirmation: 'text-success',
      reminder: 'text-warning',
      update: 'text-primary',
      cancellation: 'text-error',
    };
    return colors?.[type] || 'text-muted-foreground';
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date?.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
  };

  const filteredNotifications =
    filter === 'all'
      ? notifications
      : notifications?.filter((n) => !n?.read);

  const unreadCount = notifications?.filter((n) => !n?.read)?.length;

  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">
            Notifications
          </h2>
          {unreadCount > 0 && (
            <span className="bg-error text-error-foreground text-xs font-semibold px-2 py-1 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'unread' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setFilter('unread')}
          >
            Unread
          </Button>
        </div>
      </div>
      {filteredNotifications?.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Icon name="Bell" size={32} color="var(--color-muted-foreground)" />
          </div>
          <p className="text-muted-foreground">
            {filter === 'unread' ? 'No unread notifications' : 'No notifications'}
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-2 mb-4">
            {filteredNotifications?.map((notification) => (
              <div
                key={notification?.id}
                className={`p-3 rounded-lg border transition-smooth cursor-pointer ${
                  notification?.read
                    ? 'bg-background border-border' :'bg-primary/5 border-primary/20'
                }`}
                onClick={() => onMarkAsRead(notification?.id)}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 ${getNotificationColor(
                      notification?.type
                    )}`}
                  >
                    <Icon name={getNotificationIcon(notification?.type)} size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      {notification?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {notification?.message}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {formatTimestamp(notification?.timestamp)}
                    </span>
                  </div>
                  {!notification?.read && (
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {unreadCount > 0 && (
            <Button
              variant="outline"
              size="sm"
              fullWidth
              onClick={onClearAll}
              iconName="Check"
              iconPosition="left"
            >
              Mark All as Read
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default NotificationCenter;