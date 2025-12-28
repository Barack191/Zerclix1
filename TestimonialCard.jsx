import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name={index < rating ? 'Star' : 'Star'}
        size={16}
        className={index < rating ? 'text-accent fill-accent' : 'text-muted'}
      />
    ));
  };

  return (
    <div className="bg-card rounded-xl shadow-warm p-4 md:p-6 flex flex-col h-full">
      <div className="flex items-start gap-3 md:gap-4 mb-4">
        <div className="flex-shrink-0">
          <Image
            src={testimonial?.avatar}
            alt={testimonial?.avatarAlt}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
          />
        </div>
        <div className="flex-grow min-w-0">
          <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
            {testimonial?.name}
          </h4>
          <p className="text-xs md:text-sm text-muted-foreground mb-2">
            {testimonial?.position} at {testimonial?.company}
          </p>
          <div className="flex items-center gap-1">
            {renderStars(testimonial?.rating)}
          </div>
        </div>
      </div>
      <blockquote className="text-sm md:text-base text-foreground mb-4 flex-grow">
        "{testimonial?.feedback}"
      </blockquote>
      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
        <Icon name="MapPin" size={14} />
        <span>{testimonial?.location}</span>
        <span className="mx-2">•</span>
        <Icon name="Calendar" size={14} />
        <span>{testimonial?.date}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;