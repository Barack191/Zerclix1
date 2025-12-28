import React from 'react';
import Icon from '../AppIcon';

const BookingProgressIndicator = ({ currentStep = 1 }) => {
  const steps = [
    { id: 1, label: 'Select Service', icon: 'Grid3x3' },
    { id: 2, label: 'Choose Time', icon: 'Calendar' },
    { id: 3, label: 'Confirmation', icon: 'CheckCircle' },
  ];

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'active';
    return 'pending';
  };

  return (
    <div className="booking-progress">
      <div className="booking-progress-container">
        <div className="booking-progress-steps">
          {steps?.map((step, index) => (
            <React.Fragment key={step?.id}>
              <div className="booking-progress-step">
                <div className={`booking-progress-step-circle ${getStepStatus(step?.id)}`}>
                  {getStepStatus(step?.id) === 'completed' ? (
                    <Icon name="Check" size={20} />
                  ) : (
                    <Icon name={step?.icon} size={20} />
                  )}
                </div>
                <span className="booking-progress-step-label">{step?.label}</span>
              </div>
              {index < steps?.length - 1 && (
                <div
                  className={`booking-progress-step-connector ${
                    getStepStatus(step?.id) === 'completed' ? 'completed' : ''
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingProgressIndicator;