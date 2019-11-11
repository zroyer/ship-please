export const getValidAddress = async (address) => {
  const addressValidation = await fetch(
    'https://dev-api.shipwell.com/v2/locations/addresses/validate/',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({formatted_address: address}),
  });

  return addressValidation.json();
};
