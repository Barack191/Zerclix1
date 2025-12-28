import React from 'react';
import Icon from '../../../components/AppIcon';

const ConsultationDetails = ({ consultation }) => {
  return (
    <div className="bg-card rounded-xl p-5 md:p-6 lg:p-8 shadow-warm-md">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-5 lg:mb-6 flex items-center gap-2 md:gap-3">
        <Icon name="Calendar" size={24} className="text-primary md:w-7 md:h-7 lg:w-8 lg:h-8" />
        Consultation Details
      </h2>
      <div className="space-y-4 md:space-y-5 lg:space-y-6">
        <DetailRow 
          icon="Briefcase" 
          label="Service Type" 
          value={consultation?.serviceType}
        />
        <DetailRow 
          icon="Calendar" 
          label="Date" 
          value={consultation?.date}
        />
        <DetailRow 
          icon="Clock" 
          label="Time" 
          value={consultation?.time}
        />
        <DetailRow 
          icon="Timer" 
          label="Duration" 
          value={consultation?.duration}
        />
        <DetailRow 
          icon="User" 
          label="Consultant" 
          value={consultation?.consultant}
        />
        <DetailRow 
          icon="MapPin" 
          label="Location" 
          value={consultation?.location}
        />
        
        {consultation?.meetingLink && (
          <div className="pt-3 md:pt-4 lg:pt-5 border-t border-border">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Video" size={20} className="text-primary md:w-6 md:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base font-medium text-foreground mb-1 md:mb-2">
                  Virtual Meeting Link
                </p>
                <a 
                  href={consultation?.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm lg:text-base text-primary hover:text-primary/80 transition-smooth break-all"
                >
                  {consultation?.meetingLink}
                </a>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                  Link will be active 15 minutes before the scheduled time
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const DetailRow = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-3 md:gap-4">
      <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
        <Icon name={icon} size={20} className="text-foreground md:w-6 md:h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs md:text-sm text-muted-foreground mb-0.5 md:mb-1">
          {label}
        </p>
        <p className="text-sm md:text-base lg:text-lg font-medium text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
};

export default ConsultationDetails;