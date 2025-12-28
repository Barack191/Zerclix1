import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const BookingSummary = ({ bookingData, onConfirm, onBack, isProcessing }) => {
  const formatDate = (date) => {
    if (!date) return 'Not selected';
    return date?.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getConsultantDetails = (consultantId) => {
    const consultants = {
      'barack-obama': {
        name: 'Barack Omondi Obama',
        title: 'Founder & Chief Innovation Officer',
        avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc20034d-1763295634141.png",
        avatarAlt: 'Professional headshot of Barack Omondi Obama, African man with confident smile wearing dark blue suit'
      },
      'sarah-kimani': {
        name: 'Sarah Kimani',
        title: 'Lead Brand Strategist',
        avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17faa8e7a-1763295754680.png",
        avatarAlt: 'Professional headshot of Sarah Kimani, African woman with warm smile wearing burgundy blazer'
      },
      'james-mwangi': {
        name: 'James Mwangi',
        title: 'Senior Tech Consultant',
        avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc20034d-1763295634141.png",
        avatarAlt: 'Professional headshot of James Mwangi, African man with glasses wearing navy suit and tie'
      }
    };
    return consultants?.[consultantId] || consultants?.['barack-obama'];
  };

  const consultant = getConsultantDetails(bookingData?.selectedConsultant);
  const service = bookingData?.selectedService;

  return (
    <div className="w-full">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3">Review & Confirm</h2>
        <p className="text-sm md:text-base text-muted-foreground">Please review your booking details before confirming</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          <div className="bg-card border border-border rounded-lg p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <Icon name="Briefcase" size={20} />
              Service Details
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={service?.icon || 'Lightbulb'} size={24} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base md:text-lg font-semibold mb-1">{service?.title || 'Service not selected'}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{service?.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4 pt-3 md:pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span className="text-xs md:text-sm">{service?.duration || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="DollarSign" size={16} className="text-muted-foreground" />
                  <span className="text-xs md:text-sm font-medium">KES {service?.price?.kes?.toLocaleString() || '0'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              Schedule
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-muted/50 rounded-lg">
                <Icon name="Calendar" size={20} className="text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-muted-foreground">Date</p>
                  <p className="text-sm md:text-base font-medium">{formatDate(bookingData?.selectedDate)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-muted/50 rounded-lg">
                <Icon name="Clock" size={20} className="text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-muted-foreground">Time</p>
                  <p className="text-sm md:text-base font-medium">{bookingData?.selectedTime || 'Not selected'} (EAT)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <Icon name="User" size={20} />
              Your Consultant
            </h3>
            <div className="flex items-center gap-3 md:gap-4">
              <Image
                src={consultant?.avatar}
                alt={consultant?.avatarAlt}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0" />

              <div className="flex-1 min-w-0">
                <h4 className="text-base md:text-lg font-semibold mb-1">{consultant?.name}</h4>
                <p className="text-xs md:text-sm text-muted-foreground">{consultant?.title}</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <Icon name="FileText" size={20} />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Full Name</p>
                <p className="text-sm md:text-base font-medium">{bookingData?.formData?.fullName || 'N/A'}</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-sm md:text-base font-medium break-all">{bookingData?.formData?.email || 'N/A'}</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Phone</p>
                <p className="text-sm md:text-base font-medium">{bookingData?.formData?.phone || 'N/A'}</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Company</p>
                <p className="text-sm md:text-base font-medium">{bookingData?.formData?.companyName || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-lg p-4 md:p-6 sticky top-24">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Payment Summary</h3>
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm md:text-base text-muted-foreground">Consultation Fee</span>
                <span className="text-sm md:text-base font-medium">KES {service?.price?.kes?.toLocaleString() || '0'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm md:text-base text-muted-foreground">Platform Fee</span>
                <span className="text-sm md:text-base font-medium">KES 0</span>
              </div>
              <div className="border-t border-border pt-3 md:pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-base md:text-lg font-semibold">Total Amount</span>
                  <div className="text-right">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary">
                      KES {service?.price?.kes?.toLocaleString() || '0'}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">USD ${service?.price?.usd || '0'}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 p-3 md:p-4 bg-card rounded-lg">
              <div className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <p className="text-xs md:text-sm">Instant booking confirmation</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <p className="text-xs md:text-sm">Meeting link sent via email</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <p className="text-xs md:text-sm">Free rescheduling up to 24 hours before</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <p className="text-xs md:text-sm">Consultation materials provided</p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3">
              <Button
                variant="default"
                fullWidth
                onClick={onConfirm}
                loading={isProcessing}
                iconName="Check"
                iconPosition="left">

                Confirm Booking
              </Button>
              <Button
                variant="outline"
                fullWidth
                onClick={onBack}
                disabled={isProcessing}>

                Back to Edit
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4 md:mt-6">
              By confirming, you agree to our terms of service and privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>);

};

export default BookingSummary;