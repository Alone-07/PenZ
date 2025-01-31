import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'penZ',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: false,
      androidScaleType: "CENTER_CROP",
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
    },
  }
};

export default config;
