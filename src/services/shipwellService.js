export const getValidAddress = (address) => {
  return fetch(
    'https://dev-api.shipwell.com/v2/locations/addresses/validate/',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formatted_address: address }),
    },
  );
};
