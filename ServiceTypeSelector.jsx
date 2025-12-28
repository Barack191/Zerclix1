import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceTypeSelector = ({ selectedService, onServiceSelect }) => {
  const services = [
    {
      id: 'innovation',
      title: 'Innovation & Upgrades',
      description: 'Transform your business with cutting-edge digital solutions and system modernization',
      icon: 'Lightbulb',
      duration: '60 minutes',
      price: { kes: 15000, usd: 115 },
      features: ['Digital transformation strategy', 'System architecture review', 'Technology roadmap planning']
    },
    {
      id: 'branding',
      title: 'Creative Branding & Strategy',
      description: 'Build a powerful brand identity that resonates with your target audience',
      icon: 'Palette',
      duration: '90 minutes',
      price: { kes: 20000, usd: 155 },
      features: ['Brand identity development', 'Visual design strategy', 'Market positioning analysis']
    },
    {
      id: 'tech',
      title: 'Tech Expertise Consultation',
      description: 'Get expert guidance on web development, UI/UX design, and technical implementation',
      icon: 'Code',
      duration: '75 minutes',
      price: { kes: 18000, usd: 140 },
      features: ['Technical architecture review', 'Development best practices', 'Performance optimization']
    },
    {
      id: 'community',
      title: 'Community-Driven Solutions',
      description: 'Collaborative approach to building digital solutions that empower communities',
      icon: 'Users',
      duration: '60 minutes',
      price: { kes: 12000, usd: 95 },
      features: ['Community engagement strategy', 'Collaborative platform design', 'Social impact assessment']
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3">Choose Your Consultation Type</h2>
        <p className="text-sm md:text-base text-muted-foreground">Select the service that best matches your business needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {services?.map((service) => (
          <button
            key={service?.id}
            onClick={() => onServiceSelect(service)}
            className={`w-full min-w-0 p-4 md:p-6 rounded-lg border-2 transition-all duration-250 text-left ${
              selectedService?.id === service?.id
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 bg-card'
            }`}
          >
            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${
                selectedService?.id === service?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}>
                <Icon name={service?.icon} size={24} className="md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-1 md:mb-2">{service?.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{service?.description}</p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
              {service?.features?.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                  <span className="text-xs md:text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">{service?.duration}</span>
              </div>
              <div className="text-right">
                <div className="text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap">KES {service?.price?.kes?.toLocaleString()}</div>
                <div className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">USD ${service?.price?.usd}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceTypeSelector;