import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CalendarIntegration = ({ consultation }) => {
  const handleAddToCalendar = (provider) => {
    console.log(`Adding to ${provider} calendar`);
  };

  const calendarProviders = [
    { id: 'google', name: 'Google Calendar', icon: 'Calendar' },
    { id: 'outlook', name: 'Outlook', icon: 'Calendar' },
    { id: 'apple', name: 'Apple Calendar', icon: 'Calendar' },
    { id: 'ical', name: 'Download iCal', icon: 'Download' }
  ];

  return (
    <div className="bg-card rounded-xl p-5 md:p-6 lg:p-8 shadow-warm-md">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-5 lg:mb-6 flex items-center gap-2 md:gap-3">
        <Icon name="CalendarPlus" size={24} className="text-primary md:w-7 md:h-7 lg:w-8 lg:h-8" />
        Add to Calendar
      </h2>
      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-5 lg:mb-6">
        Never miss your consultation! Add this appointment to your preferred calendar application with automatic timezone conversion.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {calendarProviders?.map((provider) => (
          <Button
            key={provider?.id}
            variant="outline"
            fullWidth
            iconName={provider?.icon}
            iconPosition="left"
            onClick={() => handleAddToCalendar(provider?.id)}
            className="justify-start"
          >
            {provider?.name}
          </Button>
        ))}
      </div>
      <div className="mt-5 md:mt-6 lg:mt-8 p-4 md:p-5 bg-accent/10 rounded-lg">
        <div className="flex items-start gap-3 md:gap-4">
          <Icon name="Clock" size={20} className="text-accent flex-shrink-0 mt-0.5 md:w-6 md:h-6" />
          <div className="flex-1 min-w-0">
            <p className="text-sm md:text-base font-medium text-foreground mb-1 md:mb-2">
              Timezone Information
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Your consultation is scheduled in East Africa Time (EAT, UTC+3). Calendar invites will automatically convert to your local timezone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarIntegration;