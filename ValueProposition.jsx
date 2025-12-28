import React from 'react';
import Icon from '../../../components/AppIcon';

const ValueProposition = () => {
  const benefits = [
    {
      icon: 'Calendar',
      title: 'Easy Booking Management',
      description: 'Schedule and manage consultations with our team effortlessly'
    },
    {
      icon: 'Clock',
      title: 'Real-time Availability',
      description: 'See available time slots and book instantly without waiting'
    },
    {
      icon: 'Bell',
      title: 'Automated Reminders',
      description: 'Never miss a consultation with email and SMS notifications'
    },
    {
      icon: 'FileText',
      title: 'Consultation History',
      description: 'Access all your past consultations and follow-up notes'
    },
    {
      icon: 'Users',
      title: 'Expert Team Access',
      description: 'Connect with Barack Omondi Obama and specialized consultants'
    },
    {
      icon: 'Zap',
      title: 'Quick Rescheduling',
      description: 'Flexible options to reschedule or cancel appointments'
    }
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center space-y-3 md:space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Why Create an Account?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Join hundreds of businesses transforming their digital presence with Zerclix Technology
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {benefits?.map((benefit, index) => (
          <div
            key={index}
            className="p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
              <Icon name={benefit?.icon} size={24} color="var(--color-primary)" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
              {benefit?.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              {benefit?.description}
            </p>
          </div>
        ))}
      </div>
      <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
        <div className="flex items-start gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <Icon name="Sparkles" size={20} color="#FFFFFF" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
              Special Offer for New Clients
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Get 20% off your first consultation when you register today. Limited time offer for new accounts created in December 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;