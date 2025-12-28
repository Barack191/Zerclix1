import React from 'react';
import Icon from '../../../components/AppIcon';

const ClientSummary = ({ client, pricing }) => {
  return (
    <div className="bg-card rounded-xl p-5 md:p-6 lg:p-8 shadow-warm-md">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-5 lg:mb-6 flex items-center gap-2 md:gap-3">
        <Icon name="User" size={24} className="text-primary md:w-7 md:h-7 lg:w-8 lg:h-8" />
        Client Information
      </h2>
      <div className="space-y-4 md:space-y-5 lg:space-y-6 mb-5 md:mb-6 lg:mb-8">
        <InfoRow icon="User" label="Full Name" value={client?.name} />
        <InfoRow icon="Mail" label="Email" value={client?.email} />
        <InfoRow icon="Phone" label="Phone" value={client?.phone} />
        <InfoRow icon="Building2" label="Company" value={client?.company} />
      </div>
      <div className="pt-4 md:pt-5 lg:pt-6 border-t border-border">
        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-3 md:mb-4 lg:mb-5">
          Pricing Summary
        </h3>
        <div className="space-y-2 md:space-y-3">
          <PriceRow label="Consultation Fee" value={pricing?.consultationFee} />
          <PriceRow label="Service Charge" value={pricing?.serviceCharge} />
          {pricing?.discount > 0 && (
            <PriceRow 
              label="Discount" 
              value={`-${pricing?.discount}`} 
              isDiscount 
            />
          )}
          <div className="pt-2 md:pt-3 border-t border-border">
            <PriceRow 
              label="Total Amount" 
              value={pricing?.total} 
              isTotal 
            />
          </div>
        </div>
        
        <div className="mt-4 md:mt-5 lg:mt-6 p-3 md:p-4 bg-success/10 rounded-lg flex items-center gap-2 md:gap-3">
          <Icon name="CheckCircle" size={20} className="text-success flex-shrink-0 md:w-6 md:h-6" />
          <p className="text-xs md:text-sm lg:text-base text-success font-medium">
            Payment Confirmed - {pricing?.paymentMethod}
          </p>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-3 md:gap-4">
      <div className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
        <Icon name={icon} size={18} className="text-foreground md:w-5 md:h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs md:text-sm text-muted-foreground mb-0.5 md:mb-1">
          {label}
        </p>
        <p className="text-sm md:text-base lg:text-lg font-medium text-foreground break-words">
          {value}
        </p>
      </div>
    </div>
  );
};

const PriceRow = ({ label, value, isDiscount = false, isTotal = false }) => {
  return (
    <div className="flex items-center justify-between">
      <span className={`text-sm md:text-base ${isTotal ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
        {label}
      </span>
      <span className={`text-sm md:text-base lg:text-lg font-semibold data-text ${
        isDiscount ? 'text-success' : isTotal ? 'text-foreground' : 'text-foreground'
      }`}>
        {value}
      </span>
    </div>
  );
};

export default ClientSummary;