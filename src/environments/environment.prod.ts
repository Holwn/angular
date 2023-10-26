import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'HolwnWeb',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44375/',
    redirectUri: baseUrl,
    clientId: 'HolwnWeb_App',
    responseType: 'code',
    scope: 'offline_access HolwnWeb',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44316',
      rootNamespace: 'HolwnWeb',
    },
  },
} as Environment;
