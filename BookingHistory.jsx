import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const BookingHistory = ({ bookings, onProvideFeedback, onScheduleFollowup }) => {
  const [expandedBooking, setExpandedBooking] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`)?.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const toggleExpand = (bookingId) => {
    setExpandedBooking(expandedBooking === bookingId ? null : bookingId);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
        Booking History
      </h2>
      {bookings?.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Icon name="History" size={32} color="var(--color-muted-foreground)" />
          </div>
          <p className="text-muted-foreground">No booking history available</p>
        </div>
      ) : (
        <div className="space-y-3">
          {bookings?.map((booking) => (
            <div
              key={booking?.id}
              className="border border-border rounded-lg overflow-hidden hover:shadow-warm transition-smooth"
            >
              <div
                className="p-4 cursor-pointer"
                onClick={() => toggleExpand(booking?.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <Image
                      src={booking?.consultantImage}
                      alt={booking?.consultantImageAlt}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {booking?.type}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        with {booking?.consultantName}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          <span>{formatDate(booking?.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          <span>{formatTime(booking?.time)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Icon
                    name={expandedBooking === booking?.id ? 'ChevronUp' : 'ChevronDown'}
                    size={20}
                    className="flex-shrink-0"
                  />
                </div>
              </div>

              {expandedBooking === booking?.id && (
                <div className="border-t border-border p-4 bg-muted/30">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Consultation Notes
                    </h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {booking?.notes}
                    </p>
                  </div>

                  {booking?.outcomes && booking?.outcomes?.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Key Outcomes
                      </h4>
                      <ul className="space-y-1">
                        {booking?.outcomes?.map((outcome, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <Icon
                              name="CheckCircle2"
                              size={16}
                              className="flex-shrink-0 mt-0.5"
                              color="var(--color-success)"
                            />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-2">
                    {!booking?.feedbackProvided && (
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="MessageSquare"
                        iconPosition="left"
                        onClick={() => onProvideFeedback(booking?.id)}
                      >
                        Provide Feedback
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Calendar"
                      iconPosition="left"
                      onClick={() => onScheduleFollowup(booking?.id)}
                    >
                      Schedule Follow-up
                    </Button>
                    {booking?.feedbackProvided && (
                      <span className="text-xs text-success flex items-center gap-1">
                        <Icon name="CheckCircle2" size={14} />
                        Feedback provided
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingHistory;