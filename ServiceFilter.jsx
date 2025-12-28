import React from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ServiceFilters = ({ filters, onFilterChange, onClearFilters }) => {
  const consultationTypeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'innovation', label: 'Innovation & Upgrades' },
    { value: 'branding', label: 'Creative Branding & Strategy' },
    { value: 'tech', label: 'Tech Expertise' },
    { value: 'community', label: 'Community-Driven Solutions' }
  ];

  const priceRangeOptions = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50000', label: 'KES 0 - 50,000' },
    { value: '50000-100000', label: 'KES 50,000 - 100,000' },
    { value: '100000-200000', label: 'KES 100,000 - 200,000' },
    { value: '200000+', label: 'KES 200,000+' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'Digital Transformation', label: 'Digital Transformation' },
    { value: 'Branding', label: 'Branding' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'UI/UX Design', label: 'UI/UX Design' }
  ];

  const hasActiveFilters = filters?.consultationType !== 'all' || 
                          filters?.priceRange !== 'all' || 
                          filters?.category !== 'all';

  return (
    <div className="bg-card rounded-xl shadow-warm p-4 md:p-6 mb-6 md:mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
          <Icon name="Filter" size={24} className="text-primary" />
          Filter Services
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
          >
            Clear All
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Select
          label="Consultation Type"
          options={consultationTypeOptions}
          value={filters?.consultationType}
          onChange={(value) => onFilterChange('consultationType', value)}
        />

        <Select
          label="Price Range"
          options={priceRangeOptions}
          value={filters?.priceRange}
          onChange={(value) => onFilterChange('priceRange', value)}
        />

        <Select
          label="Service Category"
          options={categoryOptions}
          value={filters?.category}
          onChange={(value) => onFilterChange('category', value)}
        />
      </div>
    </div>
  );
};

export default ServiceFilters;