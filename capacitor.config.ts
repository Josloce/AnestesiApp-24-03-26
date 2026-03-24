// Capacitor configuration for AnestesiaScales
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.anestesiascales.app',
  appName: 'AnestesiaScales',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
