import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const mockCredentials = {
    email: 'client@zerclix.com',
    password: 'Zerclix2025!'
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.email) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.password) {
      newErrors.password = 'Password is required';
    } else if (formData?.password?.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData(prev => ({
      ...prev,
      rememberMe: e?.target?.checked
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (
        formData?.email === mockCredentials?.email &&
        formData?.password === mockCredentials?.password
      ) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userName', 'John Kamau');
        localStorage.setItem('userEmail', formData?.email);

        if (formData?.rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }

        const returnTo = location?.state?.returnTo || '/client-dashboard';
        navigate(returnTo);
      } else {
        setErrors({
          submit: `Invalid credentials. Please use:\nEmail: ${mockCredentials?.email}\nPassword: ${mockCredentials?.password}`
        });
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userName', 'John Kamau');
      localStorage.setItem('userEmail', 'john.kamau@example.com');
      navigate('/client-dashboard');
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          type="email"
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          value={formData?.email}
          onChange={handleInputChange}
          error={errors?.email}
          required
          disabled={isLoading}
        />

        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            label="Password"
            placeholder="Enter your password"
            value={formData?.password}
            onChange={handleInputChange}
            error={errors?.password}
            required
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={20} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember me"
            checked={formData?.rememberMe}
            onChange={handleCheckboxChange}
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => navigate('/forgot-password')}
            className="text-sm font-medium text-primary hover:underline"
            disabled={isLoading}
          >
            Forgot Password?
          </button>
        </div>

        {errors?.submit && (
          <div className="p-4 rounded-lg bg-error/10 border border-error/20">
            <div className="flex items-start gap-3">
              <Icon name="AlertCircle" size={20} color="var(--color-error)" />
              <p className="text-sm text-error whitespace-pre-line">{errors?.submit}</p>
            </div>
          </div>
        )}

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-card text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          fullWidth
          onClick={() => handleSocialLogin('google')}
          disabled={isLoading}
          iconName="Mail"
          iconPosition="left"
        >
          Continue with Google
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;