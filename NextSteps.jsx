import React from 'react';
import Icon from '../../../components/AppIcon';

const NextSteps = ({ steps }) => {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl p-5 md:p-6 lg:p-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-5 lg:mb-6 flex items-center gap-2 md:gap-3">
        <Icon name="ArrowRight" size={24} className="text-primary md:w-7 md:h-7 lg:w-8 lg:h-8" />
        What Happens Next?
      </h2>
      <div className="space-y-4 md:space-y-5 lg:space-y-6">
        {steps?.map((step, index) => (
          <div key={index} className="flex items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
              <span className="text-base md:text-lg lg:text-xl font-bold text-white data-text">
                {index + 1}
              </span>
            </div>
            <div className="flex-1 min-w-0 pt-1 md:pt-2">
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-1 md:mb-2">
                {step?.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {step?.description}
              </p>
              {step?.timing && (
                <div className="flex items-center gap-2 mt-2 md:mt-3">
                  <Icon name="Clock" size={14} className="text-accent md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm text-accent font-medium">
                    {step?.timing}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 md:mt-6 lg:mt-8 p-4 md:p-5 bg-card rounded-lg">
        <div className="flex items-start gap-3 md:gap-4">
          <Icon name="Sparkles" size={20} className="text-secondary flex-shrink-0 mt-0.5 md:w-6 md:h-6" />
          <div className="flex-1 min-w-0">
            <p className="text-sm md:text-base font-medium text-foreground mb-1 md:mb-2">
              Building Your Future Together
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              At Zerclix Technology, we're committed to empowering your digital transformation journey through innovative solutions and collaborative partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;