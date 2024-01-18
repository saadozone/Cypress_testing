
interface AppConfig {
  localUrl: string;
  siteUrl: string;
  // Add other configuration properties as needed
}

const config: AppConfig = {
  localUrl: 'http://localhost:3000',  // Update with your local development server URL
  siteUrl: 'https://example.com',    // Update with your production site URL
};

export default config;
