import React from 'react';
import Icon from '../../../components/AppIcon';

const ConfirmationHeader = ({ bookingReference }) => {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-6 md:p-8 lg:p-10 text-center">
      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-4 md:mb-5 lg:mb-6 rounded-full bg-success flex items-center justify-center">
        <Icon name="CheckCircle" size={40} color="#FFFFFF" className="md:w-12 md:h-12 lg:w-14 lg:h-14" />
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4">
        Booking Confirmed!
      </h1>
      <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-3 md:mb-4 lg:mb-5">
        Your consultation has been successfully scheduled with Zerclix Technology
      </p>
      <div className="inline-flex items-center gap-2 md:gap-3 bg-card px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-lg shadow-warm">
        <Icon name="Hash" size={18} className="text-primary md:w-5 md:h-5 lg:w-6 lg:h-6" />
        <span className="text-sm md:text-base lg:text-lg font-semibold text-foreground data-text">
          {bookingReference}
        </span>
      </div>
    </div>
  );
};

export default ConfirmationHeader;