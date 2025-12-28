import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const RegistrationPrompt = () => {
  const navigate = useNavigate();

  const benefits = [
    'Manage all your consultations in one place',
    'Track booking history and upcoming appointments',
    'Receive automated reminders and notifications',
    'Access exclusive service packages and discounts'
  ];

  return (
    <div className="mt-8 md:mt-10 lg:mt-12 p-6 md:p-8 lg:p-10 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
          New to Zerclix?
        </h3>
        <p className="text-sm md:text-base text-muted-foreground">
          Create an account to unlock powerful booking management features
        </p>
      </div>
      <div className="space-y-3 mb-6">
        {benefits?.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
              <Icon name="Check" size={14} color="var(--color-success)" />
            </div>
            <p className="text-sm md:text-base text-foreground">{benefit}</p>
          </div>
        ))}
      </div>
      <Button
        variant="default"
        fullWidth
        onClick={() => navigate('/register')}
        iconName="UserPlus"
        iconPosition="left"
      >
        Create Free Account
      </Button>
      <p className="text-xs md:text-sm text-center text-muted-foreground mt-4">
        Join 500+ businesses transforming their digital presence
      </p>
    </div>
  );
};

export default RegistrationPrompt;