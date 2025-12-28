import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ClientInformationForm = ({ formData, onFormChange, errors }) => {
  const industryOptions = [
    { value: 'technology', label: 'Technology & Software' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'healthcare', label: 'Healthcare & Medical' },
    { value: 'finance', label: 'Finance & Banking' },
    { value: 'education', label: 'Education & Training' },
    { value: 'manufacturing', label: 'Manufacturing & Industrial' },
    { value: 'hospitality', label: 'Hospitality & Tourism' },
    { value: 'real-estate', label: 'Real Estate & Property' },
    { value: 'nonprofit', label: 'Non-profit & NGO' },
    { value: 'other', label: 'Other' }
  ];

  const companySizeOptions = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '500+', label: '500+ employees' }
  ];

  const budgetRangeOptions = [
    { value: 'under-500k', label: 'Under KES 500,000' },
    { value: '500k-1m', label: 'KES 500,000 - 1,000,000' },
    { value: '1m-5m', label: 'KES 1,000,000 - 5,000,000' },
    { value: '5m-10m', label: 'KES 5,000,000 - 10,000,000' },
    { value: '10m+', label: 'Above KES 10,000,000' }
  ];

  const handleInputChange = (field, value) => {
    onFormChange({ ...formData, [field]: value });
  };

  return (
    <div className="w-full">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3">Your Information</h2>
        <p className="text-sm md:text-base text-muted-foreground">Tell us about yourself and your business needs</p>
      </div>
      <div className="space-y-4 md:space-y-6">
        <div className="bg-card border border-border rounded-lg p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formData?.fullName || ''}
              onChange={(e) => handleInputChange('fullName', e?.target?.value)}
              error={errors?.fullName}
              required
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@company.com"
              value={formData?.email || ''}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              error={errors?.email}
              required
            />
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+254 700 000 000"
              value={formData?.phone || ''}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              error={errors?.phone}
              required
            />
            <Input
              label="Job Title"
              type="text"
              placeholder="e.g., CEO, Marketing Manager"
              value={formData?.jobTitle || ''}
              onChange={(e) => handleInputChange('jobTitle', e?.target?.value)}
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Company Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Input
              label="Company Name"
              type="text"
              placeholder="Your company name"
              value={formData?.companyName || ''}
              onChange={(e) => handleInputChange('companyName', e?.target?.value)}
              error={errors?.companyName}
              required
            />
            <Input
              label="Company Website"
              type="url"
              placeholder="https://www.yourcompany.com"
              value={formData?.website || ''}
              onChange={(e) => handleInputChange('website', e?.target?.value)}
            />
            <Select
              label="Industry"
              options={industryOptions}
              value={formData?.industry || ''}
              onChange={(value) => handleInputChange('industry', value)}
              placeholder="Select your industry"
              error={errors?.industry}
              required
              searchable
            />
            <Select
              label="Company Size"
              options={companySizeOptions}
              value={formData?.companySize || ''}
              onChange={(value) => handleInputChange('companySize', value)}
              placeholder="Select company size"
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Project Requirements</h3>
          <div className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-sm md:text-base font-medium mb-2">Project Description</label>
              <textarea
                placeholder="Describe your project goals, challenges, and what you hope to achieve from this consultation..."
                value={formData?.projectDescription || ''}
                onChange={(e) => handleInputChange('projectDescription', e?.target?.value)}
                rows={4}
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-input bg-background text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              {errors?.projectDescription && (
                <p className="text-xs md:text-sm text-error mt-1">{errors?.projectDescription}</p>
              )}
            </div>

            <Select
              label="Estimated Budget Range"
              options={budgetRangeOptions}
              value={formData?.budgetRange || ''}
              onChange={(value) => handleInputChange('budgetRange', value)}
              placeholder="Select your budget range"
            />

            <div>
              <label className="block text-sm md:text-base font-medium mb-3 md:mb-4">What are your main objectives?</label>
              <div className="space-y-2 md:space-y-3">
                <Checkbox
                  label="Digital transformation and modernization"
                  checked={formData?.objectives?.includes('transformation') || false}
                  onChange={(e) => {
                    const objectives = formData?.objectives || [];
                    handleInputChange(
                      'objectives',
                      e?.target?.checked
                        ? [...objectives, 'transformation']
                        : objectives?.filter((obj) => obj !== 'transformation')
                    );
                  }}
                />
                <Checkbox
                  label="Brand identity and strategy development"
                  checked={formData?.objectives?.includes('branding') || false}
                  onChange={(e) => {
                    const objectives = formData?.objectives || [];
                    handleInputChange(
                      'objectives',
                      e?.target?.checked
                        ? [...objectives, 'branding']
                        : objectives?.filter((obj) => obj !== 'branding')
                    );
                  }}
                />
                <Checkbox
                  label="Website or application development"
                  checked={formData?.objectives?.includes('development') || false}
                  onChange={(e) => {
                    const objectives = formData?.objectives || [];
                    handleInputChange(
                      'objectives',
                      e?.target?.checked
                        ? [...objectives, 'development']
                        : objectives?.filter((obj) => obj !== 'development')
                    );
                  }}
                />
                <Checkbox
                  label="UI/UX design and optimization"
                  checked={formData?.objectives?.includes('design') || false}
                  onChange={(e) => {
                    const objectives = formData?.objectives || [];
                    handleInputChange(
                      'objectives',
                      e?.target?.checked
                        ? [...objectives, 'design']
                        : objectives?.filter((obj) => obj !== 'design')
                    );
                  }}
                />
                <Checkbox
                  label="Community engagement solutions"
                  checked={formData?.objectives?.includes('community') || false}
                  onChange={(e) => {
                    const objectives = formData?.objectives || [];
                    handleInputChange(
                      'objectives',
                      e?.target?.checked
                        ? [...objectives, 'community']
                        : objectives?.filter((obj) => obj !== 'community')
                    );
                  }}
                />
              </div>
            </div>

            <Input
              label="Preferred Meeting Platform"
              type="text"
              placeholder="e.g., Zoom, Google Meet, Microsoft Teams"
              value={formData?.meetingPlatform || ''}
              onChange={(e) => handleInputChange('meetingPlatform', e?.target?.value)}
              description="We'll send you a meeting link for your preferred platform"
            />
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 md:p-6">
          <Checkbox
            label="I agree to the terms and conditions"
            description="By booking this consultation, you agree to our privacy policy and terms of service"
            checked={formData?.agreeToTerms || false}
            onChange={(e) => handleInputChange('agreeToTerms', e?.target?.checked)}
            error={errors?.agreeToTerms}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ClientInformationForm;