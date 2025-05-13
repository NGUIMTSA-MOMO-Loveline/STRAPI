export default () => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10000000, // Limite à 10 Mo
      },
    },
  },
});
