import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceDetailModal = ({ service, onClose }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleBookConsultation = () => {
    if (isAuthenticated) {
      navigate('/consultation-booking', { state: { selectedService: service } });
    } else {
      navigate('/login', { state: { returnTo: '/consultation-booking', selectedService: service } });
    }
    onClose();
  };

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div 
        className="bg-card rounded-xl shadow-warm-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e?.stopPropagation()}
      >
        <div className="sticky top-0 bg-card border-b border-border p-4 md:p-6 flex items-center justify-between z-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
            {service?.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-smooth"
            aria-label="Close modal"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        <div className="p-4 md:p-6 lg:p-8">
          <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-6">
            <Image
              src={service?.image}
              alt={service?.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                Service Overview
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                {service?.fullDescription}
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                Key Features
              </h3>
              <ul className="space-y-2 mb-6">
                {service?.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                Deliverables
              </h3>
              <ul className="space-y-2">
                {service?.deliverables?.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="Package" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-muted rounded-xl p-4 md:p-6 sticky top-24">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                  Service Details
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">Category</p>
                    <p className="text-sm md:text-base font-medium text-foreground">{service?.category}</p>
                  </div>

                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">Duration</p>
                    <p className="text-sm md:text-base font-medium text-foreground">{service?.duration}</p>
                  </div>

                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">Pricing</p>
                    <p className="text-lg md:text-xl font-bold text-foreground">
                      KES {service?.priceKES?.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      ${service?.priceUSD?.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
                    </p>
                  </div>

                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2">Consultation Types</p>
                    <div className="flex flex-wrap gap-2">
                      {service?.consultationTypes?.map((type, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-card rounded-md text-xs text-foreground"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  variant="default"
                  fullWidth
                  onClick={handleBookConsultation}
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;