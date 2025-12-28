import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onLearnMore }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
  };

  const formatPrice = (price, currency) => {
    if (currency === 'KES') {
      return `KES ${price?.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `$${price?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-card rounded-xl shadow-warm hover:shadow-warm-lg transition-smooth overflow-hidden flex flex-col h-full">
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={service?.image}
          alt={service?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs md:text-sm font-medium">
          {service?.category}
        </div>
      </div>
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground line-clamp-2">
            {service?.title}
          </h3>
          <div className="flex-shrink-0">
            <Icon name={service?.icon} size={28} className="text-primary" />
          </div>
        </div>

        <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
          {service?.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {service?.consultationTypes?.map((type, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-md text-xs md:text-sm text-foreground"
              >
                <Icon name="CheckCircle2" size={14} className="text-success" />
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl md:text-3xl font-bold text-foreground">
              {formatPrice(service?.priceKES, 'KES')}
            </span>
            <span className="text-sm md:text-base text-muted-foreground">
              / {formatPrice(service?.priceUSD, 'USD')}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="default"
              fullWidth
              onClick={handleBookConsultation}
              iconName="Calendar"
              iconPosition="left"
              className="flex-1"
            >
              Book Consultation
            </Button>
            <Button
              variant="outline"
              fullWidth
              onClick={() => onLearnMore(service)}
              iconName="Info"
              iconPosition="left"
              className="flex-1"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;