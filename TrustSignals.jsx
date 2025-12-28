import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const trustElements = [
  {
    icon: 'Shield',
    title: 'Secure & Encrypted',
    description: 'Your data is protected with industry-standard encryption'
  },
  {
    icon: 'Award',
    title: 'Certified Business',
    description: 'Registered with Kenya Business Registry'
  },
  {
    icon: 'Users',
    title: '500+ Clients',
    description: 'Trusted by businesses across East Africa'
  }];


  const testimonials = [
  {
    name: 'Sarah Mwangi',
    company: 'TechHub Nairobi',
    role: 'CEO',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1230b9d-1763294070661.png",
    imageAlt: 'Professional African woman with braided hair wearing navy blazer smiling confidently in modern office setting',
    quote: 'Zerclix transformed our digital presence completely. The consultation process was smooth and their team understood our needs perfectly.'
  },
  {
    name: 'James Ochieng',
    company: 'Savanna Retail',
    role: 'Marketing Director',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18f80f35a-1763294443891.png",
    imageAlt: 'Professional African man with short hair in charcoal suit and glasses standing in contemporary business environment',
    quote: 'The booking system made it easy to schedule consultations. Their creative branding expertise helped us stand out in the market.'
  }];


  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {trustElements?.map((element, index) =>
        <div
          key={index}
          className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-card border border-border">

            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
              <Icon name={element?.icon} size={24} color="var(--color-primary)" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
              {element?.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              {element?.description}
            </p>
          </div>
        )}
      </div>
      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-foreground text-center">
          What Our Clients Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {testimonials?.map((testimonial, index) =>
          <div
            key={index}
            className="p-4 md:p-6 rounded-xl bg-card border border-border">

              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <img
                src={testimonial?.image}
                alt={testimonial?.imageAlt}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover" />

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm md:text-base font-semibold text-foreground">
                    {testimonial?.name}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {testimonial?.role}, {testimonial?.company}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-foreground italic">
                "{testimonial?.quote}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>);

};

export default TrustSignals;