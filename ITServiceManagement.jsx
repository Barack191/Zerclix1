import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const ITServicesManagement = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Web Development',
      description: 'Custom website and web application development using modern frameworks and technologies',
      price: 150,
      duration: '1 hour',
      availability: 'Available',
      icon: 'Code'
    },
    {
      id: 2,
      name: 'Cybersecurity',
      description: 'Comprehensive security assessments, vulnerability testing, and protection strategies',
      price: 250,
      duration: '2 hours',
      availability: 'Available',
      icon: 'Shield'
    },
    {
      id: 3,
      name: 'Cloud Solutions',
      description: 'Cloud infrastructure setup, migration, and optimization for scalable business operations',
      price: 200,
      duration: '1.5 hours',
      availability: 'Available',
      icon: 'Cloud'
    },
    {
      id: 4,
      name: 'IT Consulting',
      description: 'Strategic IT planning, digital transformation, and technology roadmap development',
      price: 180,
      duration: '1 hour',
      availability: 'Available',
      icon: 'Lightbulb'
    },
    {
      id: 5,
      name: 'Network Infrastructure',
      description: 'Network design, implementation, and maintenance for reliable connectivity',
      price: 220,
      duration: '2 hours',
      availability: 'Limited',
      icon: 'Network'
    },
    {
      id: 6,
      name: 'Data Analytics',
      description: 'Business intelligence, data visualization, and insights-driven decision making',
      price: 190,
      duration: '1.5 hours',
      availability: 'Available',
      icon: 'BarChart'
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">IT Services Management</h2>
          <p className="text-muted-foreground">Manage service offerings, pricing, and availability</p>
        </div>
        <Button variant="default">
          <Icon name="Plus" size={18} className="mr-2" />
          Add Service
        </Button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services?.map((service) => (
          <div key={service?.id} className="bg-card rounded-xl p-6 border border-border hover:shadow-warm-md transition-smooth">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name={service?.icon} size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">{service?.name}</h3>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      service?.availability === 'Available' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
                    }`}
                  >
                    {service?.availability}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{service?.description}</p>
                <div className="flex items-center gap-4 text-sm mb-4">
                  <div className="flex items-center gap-1 text-foreground">
                    <Icon name="DollarSign" size={16} />
                    <span className="font-semibold">${service?.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{service?.duration}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Edit" size={16} className="mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Configure
                  </Button>
                  <Button variant="ghost" size="sm" className="text-error hover:text-error">
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Service Categories */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-xl font-bold text-foreground mb-4">Service Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-muted rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">6</div>
            <div className="text-sm text-muted-foreground">Total Services</div>
          </div>
          <div className="bg-muted rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-success mb-1">5</div>
            <div className="text-sm text-muted-foreground">Available</div>
          </div>
          <div className="bg-muted rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-warning mb-1">1</div>
            <div className="text-sm text-muted-foreground">Limited</div>
          </div>
          <div className="bg-muted rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-foreground mb-1">$190</div>
            <div className="text-sm text-muted-foreground">Avg. Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesManagement;