import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const SettingsPanel = ({ theme, onThemeChange }) => {
  const [accountData, setAccountData] = useState({
    name: 'Barack Omondi Obama',
    email: 'barack@zerclix.com',
    phone: '0702448767',
    role: 'CEO',
    company: 'Zerclix'
  });

  const themeOptions = [
    { value: 'light', label: 'Light Mode' },
    { value: 'dark', label: 'Dark Mode' },
  ];

  const handleSaveChanges = () => {
    alert('Account settings saved successfully!');
  };

  const handleDeactivateAccount = () => {
    if (confirm('Are you sure you want to deactivate your account? You can reactivate it later.')) {
      alert('Account deactivated');
    }
  };

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deletion initiated');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>
      {/* Account Information */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-xl font-bold text-foreground mb-4">Account Information</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              value={accountData?.name}
              onChange={(e) => setAccountData({ ...accountData, name: e?.target?.value })}
            />
            <Input
              label="Email Address"
              type="email"
              value={accountData?.email}
              onChange={(e) => setAccountData({ ...accountData, email: e?.target?.value })}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Phone Number"
              value={accountData?.phone}
              onChange={(e) => setAccountData({ ...accountData, phone: e?.target?.value })}
            />
            <Input
              label="Role"
              value={accountData?.role}
              onChange={(e) => setAccountData({ ...accountData, role: e?.target?.value })}
            />
          </div>
          <Input
            label="Company"
            value={accountData?.company}
            onChange={(e) => setAccountData({ ...accountData, company: e?.target?.value })}
          />
          <Button variant="default" onClick={handleSaveChanges}>
            <Icon name="Save" size={16} className="mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
      {/* Theme Settings */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-xl font-bold text-foreground mb-4">Appearance</h3>
        <div className="space-y-4">
          <Select
            label="Theme"
            options={themeOptions}
            value={theme}
            onChange={onThemeChange}
            description="Choose your preferred color theme"
          />
          <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
            <Icon name={theme === 'dark' ? 'Moon' : 'Sun'} size={24} className="text-primary" />
            <div>
              <div className="font-medium text-foreground">Current Theme: {theme === 'dark' ? 'Dark' : 'Light'}</div>
              <div className="text-sm text-muted-foreground">Theme changes apply immediately</div>
            </div>
          </div>
        </div>
      </div>
      {/* Security Settings */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-xl font-bold text-foreground mb-4">Security</h3>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            <Icon name="Key" size={16} className="mr-2" />
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Icon name="Shield" size={16} className="mr-2" />
            Two-Factor Authentication
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Icon name="History" size={16} className="mr-2" />
            Login History
          </Button>
        </div>
      </div>
      {/* Danger Zone */}
      <div className="bg-card rounded-xl p-6 border border-error">
        <h3 className="text-xl font-bold text-error mb-4">Danger Zone</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <div className="font-medium text-foreground">Deactivate Account</div>
              <div className="text-sm text-muted-foreground">Temporarily disable your account</div>
            </div>
            <Button variant="outline" onClick={handleDeactivateAccount}>
              <Icon name="Ban" size={16} className="mr-2" />
              Deactivate
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-error/10 rounded-lg">
            <div>
              <div className="font-medium text-error">Delete Account</div>
              <div className="text-sm text-muted-foreground">Permanently delete your account and all data</div>
            </div>
            <Button variant="destructive" onClick={handleDeleteAccount}>
              <Icon name="Trash2" size={16} className="mr-2" />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;