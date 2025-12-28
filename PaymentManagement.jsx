import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const PaymentManagement = () => {
  const [cards, setCards] = useState([
    { id: 1, name: 'Business Account', last4: '4242', type: 'Visa', isDefault: true },
    { id: 2, name: 'Backup Account', last4: '5555', type: 'Mastercard', isDefault: false },
  ]);

  const transactions = [
    { id: 1, client: 'John Doe', amount: 250, service: 'Web Development Consultation', date: '2025-12-26', status: 'completed' },
    { id: 2, client: 'Jane Smith', amount: 180, service: 'Cybersecurity Assessment', date: '2025-12-25', status: 'completed' },
    { id: 3, client: 'Mike Johnson', amount: 320, service: 'IT Strategy Session', date: '2025-12-24', status: 'pending' },
    { id: 4, client: 'Sarah Williams', amount: 150, service: 'Tech Support Package', date: '2025-12-23', status: 'completed' },
  ];

  const fundMatching = {
    totalRevenue: 45230,
    matchedFunds: 42180,
    pendingFunds: 3050,
    matchRate: 93.2
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Payment Management</h2>
        <p className="text-muted-foreground">Manage credit cards, transactions, and fund matching</p>
      </div>

      {/* Fund Matching Overview */}
      <div className="bg-gradient-to-r from-success to-primary rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Fund Matching Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <div className="text-sm opacity-80 mb-1">Total Revenue</div>
            <div className="text-2xl font-bold">${fundMatching?.totalRevenue?.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm opacity-80 mb-1">Matched Funds</div>
            <div className="text-2xl font-bold">${fundMatching?.matchedFunds?.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm opacity-80 mb-1">Pending Funds</div>
            <div className="text-2xl font-bold">${fundMatching?.pendingFunds?.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm opacity-80 mb-1">Match Rate</div>
            <div className="text-2xl font-bold">{fundMatching?.matchRate}%</div>
          </div>
        </div>
      </div>

      {/* Credit Cards */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground">Payment Methods</h3>
          <Button variant="default" size="sm">
            <Icon name="Plus" size={16} className="mr-2" />
            Add Card
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards?.map((card) => (
            <div key={card?.id} className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm opacity-80">{card?.type}</span>
                  {card?.isDefault && (
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Default</span>
                  )}
                </div>
                <div className="text-2xl font-mono mb-4">•••• •••• •••• {card?.last4}</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{card?.name}</span>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-white/20 rounded transition-colors">
                      <Icon name="Edit" size={16} />
                    </button>
                    <button className="p-1 hover:bg-white/20 rounded transition-colors">
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-xl font-bold text-foreground">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Service</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {transactions?.map((transaction) => (
                <tr key={transaction?.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{transaction?.client}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{transaction?.service}</td>
                  <td className="px-6 py-4 font-semibold text-foreground">${transaction?.amount}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{transaction?.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transaction?.status === 'completed'
                          ? 'bg-success/10 text-success' :'bg-warning/10 text-warning'
                      }`}
                    >
                      {transaction?.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing Controls */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-xl font-bold text-foreground mb-4">Service Pricing</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input label="Web Development (per hour)" type="number" defaultValue="150" />
            <Input label="Cybersecurity Assessment" type="number" defaultValue="250" />
            <Input label="IT Strategy Session" type="number" defaultValue="200" />
          </div>
          <Button variant="default">
            <Icon name="Save" size={16} className="mr-2" />
            Update Pricing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentManagement;