declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APIM_SERVICE_AZURE_SUBSCRIPTION_ID: string;
      APIM_SERVICE_AZURE_RESOURCE_GROUP_NAME: string;
      APIM_SERVICE_NAME: string;
      APIM_MANAGEMENT_URL: string;
      APIM_GATEWAY_URL: string;
      AZURE_AD_SERVICE_PRINCIPAL_APP_ID: string;
      AZURE_AD_SERVICE_PRINCIPAL_PASSWORD: string;
      AZURE_AD_SERVICE_PRINCIPAL_TENANT_ID: string;
      APIM_ADMIN_SUBSCRIPTION_KEY: string;
      ADYEN_MERCHANT_ACCOUNT: string;
      ADYEN_API_KEY: string;
    }
  }
}

export {};
