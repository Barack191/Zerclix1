import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ConsultationBooking from 'pages/consultation-booking';
import ServiceCatalog from 'pages/service-catalogue';
import ClientDashboard from 'pages/client-dashboard';
import BookingConfirmation from 'pages/booking-confirmation';
import Login from 'pages/login';
import Register from 'pages/register';
import AdminDashboard from 'pages/admin-dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<ServiceCatalog />} />
        <Route path="/consultation-booking" element={<ConsultationBooking />} />
        <Route path="/service-catalog" element={<ServiceCatalog />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
