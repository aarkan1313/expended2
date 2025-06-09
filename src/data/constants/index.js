export const APP_NAME = import.meta.env.VITE_APP_NAME || 'My Project';

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  SETTINGS: '/settings',
};

export const API_ENDPOINTS = {
  AUTH: '/auth',
  USERS: '/users',
  DATA: '/data',
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_PREFERENCES: 'userPreferences',
  THEME: 'theme',
};