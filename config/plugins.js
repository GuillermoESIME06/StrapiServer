module.exports = ({ env }) => ({
    // ...
    navigation: {
      enabled: false,
      config: {
        additionalFields: ['audience'],
        contentTypes: ['api::page.page'],
        contentTypesNameFields: {
          'api::page.page': ['title'],
        },
        pathDefaultFields: {
          'api::page.page': ['slug'],
        },
        allowedLevels: 2,
        gql: {},
      },
    },
  });
  