import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';

const DateTimeSelector = ({ selectedDate, selectedTime, selectedConsultant, onDateSelect, onTimeSelect, onConsultantSelect, serviceDuration }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0, 1));

  const consultants = [
  {
    value: 'barack-obama',
    label: 'Barack Omondi Obama',
    description: 'Founder & Chief Innovation Officer',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc20034d-1763295634141.png",
    avatarAlt: 'Professional headshot of Barack Omondi Obama, African man with confident smile wearing dark blue suit'
  },
  {
    value: 'sarah-kimani',
    label: 'Sarah Kimani',
    description: 'Lead Brand Strategist',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17faa8e7a-1763295754680.png",
    avatarAlt: 'Professional headshot of Sarah Kimani, African woman with warm smile wearing burgundy blazer'
  },
  {
    value: 'james-mwangi',
    label: 'James Mwangi',
    description: 'Senior Tech Consultant',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc20034d-1763295634141.png",
    avatarAlt: 'Professional headshot of James Mwangi, African man with glasses wearing navy suit and tie'
  }];


  const timezones = [
  { value: 'EAT', label: 'East Africa Time (EAT) - UTC+3' },
  { value: 'GMT', label: 'Greenwich Mean Time (GMT) - UTC+0' },
  { value: 'EST', label: 'Eastern Standard Time (EST) - UTC-5' },
  { value: 'PST', label: 'Pacific Standard Time (PST) - UTC-8' }];


  const [selectedTimezone, setSelectedTimezone] = useState('EAT');

  const generateCalendarDays = () => {
    const year = currentMonth?.getFullYear();
    const month = currentMonth?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay?.getDate();
    const startingDayOfWeek = firstDay?.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days?.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days?.push(new Date(year, month, i));
    }
    return days;
  };

  const availableTimeSlots = [
  { time: '09:00 AM', available: true },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '12:00 PM', available: true },
  { time: '02:00 PM', available: true },
  { time: '03:00 PM', available: true },
  { time: '04:00 PM', available: false },
  { time: '05:00 PM', available: true }];


  const changeMonth = (direction) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1));
  };

  const isDateDisabled = (date) => {
    if (!date) return true;
    const today = new Date(2025, 0, 27);
    today?.setHours(0, 0, 0, 0);
    return date < today || date?.getDay() === 0 || date?.getDay() === 6;
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date?.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className="w-full">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3">Select Date & Time</h2>
        <p className="text-sm md:text-base text-muted-foreground">Choose your preferred consultation schedule</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-4 md:space-y-6">
          <div>
            <label className="block text-sm md:text-base font-medium mb-2 md:mb-3">Select Consultant</label>
            <Select
              options={consultants}
              value={selectedConsultant}
              onChange={onConsultantSelect}
              placeholder="Choose a consultant"
              searchable />

          </div>

          <div>
            <label className="block text-sm md:text-base font-medium mb-2 md:mb-3">Timezone</label>
            <Select
              options={timezones}
              value={selectedTimezone}
              onChange={setSelectedTimezone}
              placeholder="Select timezone" />

          </div>

          <div className="bg-card border border-border rounded-lg p-4 md:p-6">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h3 className="text-base md:text-lg font-semibold">
                {currentMonth?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => changeMonth(-1)}
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                  aria-label="Previous month">

                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={() => changeMonth(1)}
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                  aria-label="Next month">

                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 md:gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']?.map((day) =>
              <div key={day} className="text-center text-xs md:text-sm font-medium text-muted-foreground py-2">
                  {day}
                </div>
              )}
              {generateCalendarDays()?.map((date, index) =>
              <button
                key={index}
                onClick={() => date && !isDateDisabled(date) && onDateSelect(date)}
                disabled={!date || isDateDisabled(date)}
                className={`aspect-square flex items-center justify-center rounded-lg text-xs md:text-sm transition-all ${
                !date ?
                'invisible' :
                isDateDisabled(date) ?
                'text-muted-foreground/30 cursor-not-allowed' :
                selectedDate && date?.toDateString() === selectedDate?.toDateString() ?
                'bg-primary text-primary-foreground font-semibold' :
                'hover:bg-muted'}`
                }>

                  {date?.getDate()}
                </button>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm md:text-base font-medium mb-2 md:mb-3">Available Time Slots</label>
          {!selectedDate ?
          <div className="bg-muted rounded-lg p-6 md:p-8 text-center">
              <Icon name="Calendar" size={48} className="mx-auto mb-3 md:mb-4 text-muted-foreground" />
              <p className="text-sm md:text-base text-muted-foreground">Please select a date to view available time slots</p>
            </div> :

          <div className="space-y-3 md:space-y-4">
              <div className="bg-muted/50 rounded-lg p-3 md:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Calendar" size={16} className="text-primary" />
                  <span className="text-xs md:text-sm font-medium">Selected Date: {formatDate(selectedDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="text-xs md:text-sm font-medium">Duration: {serviceDuration || '60 minutes'}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {availableTimeSlots?.map((slot) =>
              <button
                key={slot?.time}
                onClick={() => slot?.available && onTimeSelect(slot?.time)}
                disabled={!slot?.available}
                className={`p-3 md:p-4 rounded-lg border-2 transition-all text-sm md:text-base font-medium ${
                !slot?.available ?
                'border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50' :
                selectedTime === slot?.time ?
                'border-primary bg-primary text-primary-foreground' :
                'border-border hover:border-primary/50 bg-card'}`
                }>

                    {slot?.time}
                  </button>
              )}
              </div>
            </div>
          }
        </div>
      </div>
    </div>);

};

export default DateTimeSelector;