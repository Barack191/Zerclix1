import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onExploreServices }) => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-secondary to-accent rounded-xl overflow-hidden mb-6 md:mb-8">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6">
            <Icon name="Zap" size={20} color="#FFFFFF" />
            <span className="text-xs md:text-sm font-medium text-white">Building Future</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Transform Your Digital Presence with Zerclix
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
            Discover innovative digital transformation services tailored for your business. From creative branding to cutting-edge web development, we empower your digital journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={onExploreServices}
              iconName="ArrowDown"
              iconPosition="right"
              className="bg-white text-primary hover:bg-white/90"
            >
              Explore Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/consultation-booking'}
              iconName="Calendar"
              iconPosition="left"
              className="border-white text-white hover:bg-white/10"
            >
              Book Consultation
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
            {[
              { icon: 'Lightbulb', label: 'Innovation & Upgrades' },
              { icon: 'Palette', label: 'Creative Branding' },
              { icon: 'Code2', label: 'Tech Expertise' },
              { icon: 'Users', label: 'Community Solutions' }
            ]?.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon name={item?.icon} size={24} color="#FFFFFF" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white text-center">
                  {item?.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;