import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceRecommendations = ({ recommendations, onBookService }) => {
  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
          Recommended for You
        </h2>
        <Button
          variant="ghost"
          size="sm"
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => (window.location.href = '/service-catalog')}
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations?.map((service) => (
          <div
            key={service?.id}
            className="border border-border rounded-lg p-4 hover:shadow-warm transition-smooth"
          >
            <div className="flex items-start gap-3 mb-3">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${service?.iconBg}`}
              >
                <Icon name={service?.icon} size={24} color={service?.iconColor} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {service?.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {service?.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} color="var(--color-muted-foreground)" />
                <span className="text-sm text-muted-foreground">
                  {service?.duration} min
                </span>
              </div>
              <span className="text-base font-semibold text-foreground">
                {service?.price}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)]?.map((_, index) => (
                  <Icon
                    key={index}
                    name={index < service?.rating ? 'Star' : 'Star'}
                    size={14}
                    color={
                      index < service?.rating
                        ? 'var(--color-accent)'
                        : 'var(--color-border)'
                    }
                    className={index < service?.rating ? 'fill-current' : ''}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({service?.reviewCount} reviews)
              </span>
            </div>

            <Button
              variant="outline"
              size="sm"
              fullWidth
              iconName="Calendar"
              iconPosition="left"
              onClick={() => onBookService(service?.id)}
            >
              Book Consultation
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceRecommendations;