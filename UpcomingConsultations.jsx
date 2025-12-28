import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const UpcomingConsultations = ({ consultations, onReschedule, onCancel }) => {
  const getStatusColor = (status) => {
    const colors = {
      confirmed: 'bg-success/10 text-success border-success/20',
      pending: 'bg-warning/10 text-warning border-warning/20',
      rescheduled: 'bg-accent/10 text-accent border-accent/20',
    };
    return colors?.[status] || colors?.pending;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`)?.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
          Upcoming Consultations
        </h2>
        <Button
          variant="outline"
          size="sm"
          iconName="Calendar"
          iconPosition="left"
          onClick={() => (window.location.href = '/consultation-booking')}
        >
          Book New
        </Button>
      </div>
      <div className="space-y-4">
        {consultations?.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Icon name="Calendar" size={32} color="var(--color-muted-foreground)" />
            </div>
            <p className="text-muted-foreground mb-4">No upcoming consultations</p>
            <Button
              variant="default"
              onClick={() => (window.location.href = '/consultation-booking')}
            >
              Schedule Your First Consultation
            </Button>
          </div>
        ) : (
          consultations?.map((consultation) => (
            <div
              key={consultation?.id}
              className="border border-border rounded-lg p-4 hover:shadow-warm transition-smooth"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <Image
                    src={consultation?.consultantImage}
                    alt={consultation?.consultantImageAlt}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base md:text-lg font-semibold text-foreground">
                        {consultation?.type}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full border ${getStatusColor(
                          consultation?.status
                        )} whitespace-nowrap`}
                      >
                        {consultation?.status?.charAt(0)?.toUpperCase() +
                          consultation?.status?.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      with {consultation?.consultantName}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        <span>{formatDate(consultation?.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{formatTime(consultation?.time)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Timer" size={16} />
                        <span>{consultation?.duration} min</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 lg:flex-shrink-0">
                  {consultation?.meetingLink && (
                    <Button
                      variant="default"
                      size="sm"
                      iconName="Video"
                      iconPosition="left"
                      onClick={() => window.open(consultation?.meetingLink, '_blank')}
                    >
                      Join
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Calendar"
                    onClick={() => onReschedule(consultation?.id)}
                  >
                    Reschedule
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="X"
                    onClick={() => onCancel(consultation?.id)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UpcomingConsultations;