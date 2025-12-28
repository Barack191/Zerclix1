import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PreparationSection = ({ materials, agenda, requirements }) => {
  const handleDownload = (materialId) => {
    console.log(`Downloading material: ${materialId}`);
  };

  return (
    <div className="bg-card rounded-xl p-5 md:p-6 lg:p-8 shadow-warm-md">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-5 lg:mb-6 flex items-center gap-2 md:gap-3">
        <Icon name="FileText" size={24} className="text-primary md:w-7 md:h-7 lg:w-8 lg:h-8" />
        Consultation Preparation
      </h2>
      <div className="space-y-5 md:space-y-6 lg:space-y-8">
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
            <Icon name="Download" size={18} className="text-secondary md:w-5 md:h-5" />
            Preparation Materials
          </h3>
          <div className="space-y-2 md:space-y-3">
            {materials?.map((material) => (
              <div 
                key={material?.id}
                className="flex items-center justify-between p-3 md:p-4 bg-muted rounded-lg hover:bg-muted/80 transition-smooth"
              >
                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="FileText" size={18} className="text-primary md:w-5 md:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-medium text-foreground truncate">
                      {material?.name}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {material?.size}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Download"
                  iconSize={16}
                  onClick={() => handleDownload(material?.id)}
                  className="flex-shrink-0"
                >
                  <span className="hidden md:inline">Download</span>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
            <Icon name="List" size={18} className="text-secondary md:w-5 md:h-5" />
            Meeting Agenda
          </h3>
          <div className="space-y-2 md:space-y-3">
            {agenda?.map((item, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs md:text-sm font-semibold text-primary data-text">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm md:text-base lg:text-lg font-medium text-foreground">
                    {item?.title}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1">
                    {item?.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
            <Icon name="CheckSquare" size={18} className="text-secondary md:w-5 md:h-5" />
            Pre-Meeting Requirements
          </h3>
          <div className="space-y-2 md:space-y-3">
            {requirements?.map((req, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-muted rounded-lg">
                <Icon name="CheckCircle2" size={18} className="text-success flex-shrink-0 mt-0.5 md:w-5 md:h-5" />
                <p className="text-sm md:text-base text-foreground flex-1">
                  {req}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreparationSection;