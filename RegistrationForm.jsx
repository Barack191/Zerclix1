import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    agreeMarketing: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industryOptions = [
    { value: 'technology', label: 'Technology & IT' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'healthcare', label: 'Healthcare & Medical' },
    { value: 'finance', label: 'Finance & Banking' },
    { value: 'education', label: 'Education & Training' },
    { value: 'hospitality', label: 'Hospitality & Tourism' },
    { value: 'manufacturing', label: 'Manufacturing & Production' },
    { value: 'real-estate', label: 'Real Estate & Property' },
    { value: 'marketing', label: 'Marketing & Advertising' },
    { value: 'nonprofit', label: 'Non-profit & NGO' },
    { value: 'other', label: 'Other' }
  ];

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.fullName?.trim()) {
        newErrors.fullName = 'Full name is required';
      } else if (formData?.fullName?.trim()?.length < 3) {
        newErrors.fullName = 'Name must be at least 3 characters';
      }

      if (!formData?.email?.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
        newErrors.email = 'Please enter a valid email address';
      }

      if (!formData?.phone?.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^[+]?[\d\s-()]{10,}$/?.test(formData?.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (step === 2) {
      if (!formData?.companyName?.trim()) {
        newErrors.companyName = 'Company name is required';
      }

      if (!formData?.industry) {
        newErrors.industry = 'Please select your industry';
      }
    }

    if (step === 3) {
      if (!formData?.password) {
        newErrors.password = 'Password is required';
      } else if (formData?.password?.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/?.test(formData?.password)) {
        newErrors.password = 'Password must contain uppercase, lowercase, and number';
      }

      if (!formData?.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData?.password !== formData?.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }

      if (!formData?.agreeTerms) {
        newErrors.agreeTerms = 'You must agree to the terms and conditions';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateStep(3)) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userName', formData?.fullName);
      localStorage.setItem('userEmail', formData?.email);
      localStorage.setItem('registrationDate', new Date()?.toISOString());
      
      setIsSubmitting(false);
      navigate('/client-dashboard', { 
        state: { 
          message: 'Registration successful! Welcome to Zerclix.',
          isNewUser: true 
        } 
      });
    }, 1500);
  };

  const getPasswordStrength = () => {
    const password = formData?.password;
    if (!password) return { strength: 0, label: '', color: '' };

    let strength = 0;
    if (password?.length >= 8) strength++;
    if (password?.length >= 12) strength++;
    if (/[a-z]/?.test(password) && /[A-Z]/?.test(password)) strength++;
    if (/\d/?.test(password)) strength++;
    if (/[^a-zA-Z0-9]/?.test(password)) strength++;

    if (strength <= 2) return { strength: 33, label: 'Weak', color: 'bg-error' };
    if (strength <= 3) return { strength: 66, label: 'Medium', color: 'bg-warning' };
    return { strength: 100, label: 'Strong', color: 'bg-success' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-6 md:mb-8">
        <StepIndicator currentStep={currentStep} />
      </div>
      {currentStep === 1 && (
        <div className="space-y-4 md:space-y-5">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.fullName}
            onChange={(e) => handleInputChange('fullName', e?.target?.value)}
            error={errors?.fullName}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@company.com"
            description="We'll send verification link to this email"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            required
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="+254 700 000 000"
            description="Include country code for international numbers"
            value={formData?.phone}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
            error={errors?.phone}
            required
          />

          <Button
            type="button"
            variant="default"
            fullWidth
            onClick={handleNext}
            iconName="ArrowRight"
            iconPosition="right"
            className="mt-6"
          >
            Continue
          </Button>
        </div>
      )}
      {currentStep === 2 && (
        <div className="space-y-4 md:space-y-5">
          <Input
            label="Company Name"
            type="text"
            placeholder="Your company or organization"
            value={formData?.companyName}
            onChange={(e) => handleInputChange('companyName', e?.target?.value)}
            error={errors?.companyName}
            required
          />

          <Select
            label="Industry"
            placeholder="Select your industry"
            description="Helps us provide relevant service recommendations"
            options={industryOptions}
            value={formData?.industry}
            onChange={(value) => handleInputChange('industry', value)}
            error={errors?.industry}
            required
            searchable
          />

          <div className="flex gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              iconName="ArrowLeft"
              iconPosition="left"
              className="flex-1"
            >
              Back
            </Button>
            <Button
              type="button"
              variant="default"
              onClick={handleNext}
              iconName="ArrowRight"
              iconPosition="right"
              className="flex-1"
            >
              Continue
            </Button>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="space-y-4 md:space-y-5">
          <Input
            label="Password"
            type="password"
            placeholder="Create a strong password"
            description="Minimum 8 characters with uppercase, lowercase, and number"
            value={formData?.password}
            onChange={(e) => handleInputChange('password', e?.target?.value)}
            error={errors?.password}
            required
          />

          {formData?.password && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Password strength:</span>
                <span className={`font-medium ${
                  passwordStrength?.label === 'Weak' ? 'text-error' :
                  passwordStrength?.label === 'Medium'? 'text-warning' : 'text-success'
                }`}>
                  {passwordStrength?.label}
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${passwordStrength?.color}`}
                  style={{ width: `${passwordStrength?.strength}%` }}
                />
              </div>
            </div>
          )}

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Re-enter your password"
            value={formData?.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e?.target?.value)}
            error={errors?.confirmPassword}
            required
          />

          <div className="space-y-3 pt-2">
            <Checkbox
              label="I agree to the Terms of Service and Privacy Policy"
              checked={formData?.agreeTerms}
              onChange={(e) => handleInputChange('agreeTerms', e?.target?.checked)}
              error={errors?.agreeTerms}
              required
            />

            <Checkbox
              label="Send me updates about services and special offers"
              description="You can unsubscribe anytime"
              checked={formData?.agreeMarketing}
              onChange={(e) => handleInputChange('agreeMarketing', e?.target?.checked)}
            />
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              iconName="ArrowLeft"
              iconPosition="left"
              className="flex-1"
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="default"
              loading={isSubmitting}
              iconName="CheckCircle"
              iconPosition="right"
              className="flex-1"
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Personal Info' },
    { number: 2, label: 'Company Details' },
    { number: 3, label: 'Security' }
  ];

  return (
    <div className="flex items-center justify-between">
      {steps?.map((step, index) => (
        <React.Fragment key={step?.number}>
          <div className="flex flex-col items-center gap-2 flex-1">
            <div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                step?.number < currentStep
                  ? 'bg-success border-success text-success-foreground'
                  : step?.number === currentStep
                  ? 'bg-primary border-primary text-primary-foreground'
                  : 'bg-muted border-border text-muted-foreground'
              }`}
            >
              {step?.number < currentStep ? (
                <Icon name="Check" size={20} />
              ) : (
                <span className="text-sm md:text-base font-semibold">{step?.number}</span>
              )}
            </div>
            <span className="text-xs md:text-sm font-medium text-center hidden sm:block">
              {step?.label}
            </span>
          </div>
          {index < steps?.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${
                step?.number < currentStep ? 'bg-success' : 'bg-border'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RegistrationForm;