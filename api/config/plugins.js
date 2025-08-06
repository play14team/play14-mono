module.exports = ({ env }) => ({
  graphql: {
    config: {
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
  ckeditor5: true,
  'timezone-select': {
    enabled: true,
  },
  'map-field': {
    enabled: true,
  },
  // upload: {
  //   config: {
  //     provider: 'strapi-provider-upload-local-url',
  //     providerOptions: {
  //       baseurl: "http://localhost:1337"
  //     }
  //   }
  // },
  upload: {
    config: {
      provider: 'strapi-provider-upload-azure-storage',
      providerOptions: {
        authType: 'default',
        account: env('STORAGE_ACCOUNT'),
        accountKey: env('STORAGE_ACCOUNT_KEY'),
        serviceBaseURL: env('STORAGE_URL'),
        containerName: env('STORAGE_CONTAINER_NAME', 'strapi_uploads'),
        cdnBaseURL: env('STORAGE_CDN_URL'),
        defaultPath: 'assets',
        maxConcurrent: 10,
      },
    },
  },
});
