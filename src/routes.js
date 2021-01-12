import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import Addbusiness from './components/Add-E-inviocing/AddBusiness';
import BusinessSettings from './components/Business/Business';
import InviteUsers from './components/InviteUsers/InviteUsers';
import GenerateIRN from './components/GenerateIRN/GenerateIRN';
// import { Index } from './components/E-Invoicing/Index';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      {
        path: 'account',
        element: !localStorage.getItem('user') ? (
          <Navigate to="/404" />
        ) : (
          <AccountView />
        )
      },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: 'addBusiness', element: <Addbusiness /> },
      { path: 'business-settings', element: <BusinessSettings /> },
      { path: 'invite-users', element: <InviteUsers /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'generateIRN', element: <GenerateIRN /> },
      { path: 'register', element: <RegisterView /> },
      // { path: 'einvoicing', element: <Index /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
