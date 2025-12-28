import React from 'react';
import Icon from '../../../components/AppIcon';

const EmailNotification = ({ emailStatus, reminderSchedule }) => {
  return (
    <div className="bg-card rounded-xl p-5 md:p-6 lg:p-8 shadow-warm-md">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-5 lg:mb-6 flex items-center gap-2 md:gap-3">
        <Icon name="Mail" size={24} className="text-primary md:w-7 md:h-7 lg:w-8 lg:h-8" />
        Email Notifications
      </h2>
      <div className="space-y-4 md:space-y-5 lg:space-y-6">
        <div className="p-4 md:p-5 bg-success/10 rounded-lg">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-success flex items-center justify-center flex-shrink-0">
              <Icon name="CheckCircle" size={20} className="text-white md:w-6 md:h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm md:text-base lg:text-lg font-semibold text-success mb-1 md:mb-2">
                Confirmation Email Sent
              </p>
              <p className="text-xs md:text-sm text-foreground">
                Sent to: {emailStatus?.recipient}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                Delivered at: {emailStatus?.deliveredAt}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
            <Icon name="Bell" size={18} className="text-secondary md:w-5 md:h-5" />
            Reminder Schedule
          </h3>
          <div className="space-y-2 md:space-y-3">
            {reminderSchedule?.map((reminder, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 md:p-4 bg-muted rounded-lg"
              >
                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={16} className="text-accent md:w-5 md:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-medium text-foreground">
                      {reminder?.title}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {reminder?.timing}
                    </p>
                  </div>
                </div>
                <Icon 
                  name={reminder?.sent ? "CheckCircle2" : "Clock"} 
                  size={18} 
                  className={`flex-shrink-0 md:w-5 md:h-5 ${
                    reminder?.sent ? 'text-success' : 'text-muted-foreground'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 md:p-5 bg-muted rounded-lg">
          <div className="flex items-start gap-3 md:gap-4">
            <Icon name="Info" size={18} className="text-primary flex-shrink-0 mt-0.5 md:w-5 md:h-5" />
            <p className="text-xs md:text-sm text-muted-foreground flex-1">
              All confirmation details and meeting materials have been sent to your email. Please check your spam folder if you don't see the email in your inbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailNotification;