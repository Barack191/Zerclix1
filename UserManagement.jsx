import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Client', status: 'active', joinDate: '2025-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Client', status: 'active', joinDate: '2025-02-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Consultant', status: 'active', joinDate: '2025-03-10' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Client', status: 'inactive', joinDate: '2024-12-05' },
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ];

  const handleEdit = (userId) => {
    alert(`Edit user ${userId}`);
  };

  const handleDeactivate = (userId) => {
    if (confirm('Are you sure you want to deactivate this user?')) {
      alert(`User ${userId} deactivated`);
    }
  };

  const handleDelete = (userId) => {
    if (confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      alert(`User ${userId} deleted`);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">User Management</h2>
        <p className="text-muted-foreground">Manage user accounts, roles, and permissions</p>
      </div>
      {/* Filters */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
          />
          <Select
            options={statusOptions}
            value={filterStatus}
            onChange={setFilterStatus}
            placeholder="Filter by status"
          />
          <Button variant="default" className="w-full">
            <Icon name="UserPlus" size={18} className="mr-2" />
            Add New User
          </Button>
        </div>
      </div>
      {/* Users Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">User</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Join Date</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users?.map((user) => (
                <tr key={user?.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">{user?.name?.charAt(0)}</span>
                      </div>
                      <span className="font-medium text-foreground">{user?.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{user?.email}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                      {user?.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user?.status === 'active' ?'bg-success/10 text-success' :'bg-muted text-muted-foreground'
                      }`}
                    >
                      {user?.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{user?.joinDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(user?.id)}
                      >
                        <Icon name="Edit" size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeactivate(user?.id)}
                      >
                        <Icon name="Ban" size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(user?.id)}
                        className="text-error hover:text-error"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;