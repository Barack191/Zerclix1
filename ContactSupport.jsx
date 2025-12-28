import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactSupport = ({ teamContact }) => {
  const handleReschedule = () => {
    console.log('Initiating reschedule process');
  };

  const handleCancel = () => {
    console.log('Initiating cancellation process');
  };

  return (
    <div className="bg-card rounded-xl p-5 md:p-6 lg:p-8 shadow-warm-md">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-5 lg:mb-6 flex items-center gap-2 md:gap-3">
        <Icon name="Headphones" size={24} className="text-primary md:w-7 md:h-7 lg:w-8 lg:h-8" />
        Need Help?
      </h2>
      <div className="space-y-4 md:space-y-5 lg:space-y-6">
        <div className="p-4 md:p-5 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">
            Contact Information
          </h3>
          <div className="space-y-3 md:space-y-4">
            <ContactRow 
              icon="Mail" 
              label="Email" 
              value={teamContact?.email}
              href={`mailto:${teamContact?.email}`}
            />
            <ContactRow 
              icon="Phone" 
              label="Phone" 
              value={teamContact?.phone}
              href={`tel:${teamContact?.phone}`}
            />
            <ContactRow 
              icon="MapPin" 
              label="Office" 
              value={teamContact?.office}
            />
          </div>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">
            Manage Your Booking
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <Button
              variant="outline"
              fullWidth
              iconName="Calendar"
              iconPosition="left"
              onClick={handleReschedule}
            >
              Reschedule
            </Button>
            <Button
              variant="destructive"
              fullWidth
              iconName="XCircle"
              iconPosition="left"
              onClick={handleCancel}
            >
              Cancel Booking
            </Button>
          </div>
        </div>

        <div className="p-4 md:p-5 bg-muted rounded-lg">
          <div className="flex items-start gap-3 md:gap-4">
            <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5 md:w-6 md:h-6" />
            <div className="flex-1 min-w-0">
              <p className="text-sm md:text-base font-medium text-foreground mb-1 md:mb-2">
                Cancellation Policy
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Free cancellation up to 24 hours before your scheduled consultation. Cancellations within 24 hours may incur a 50% fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactRow = ({ icon, label, value, href }) => {
  const content = (
    <div className="flex items-center gap-3 md:gap-4">
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-card flex items-center justify-center flex-shrink-0">
        <Icon name={icon} size={18} className="text-primary md:w-5 md:h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs md:text-sm text-muted-foreground mb-0.5">
          {label}
        </p>
        <p className="text-sm md:text-base font-medium text-foreground break-words">
          {value || 'N/A'}
        </p>
      </div>
    </div>
  );

  if (href && value) {
    return (
      <a 
        href={href}
        className="block hover:bg-card/50 p-2 rounded-lg transition-smooth -m-2"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default ContactSupport;