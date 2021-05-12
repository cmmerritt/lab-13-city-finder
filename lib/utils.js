// write your functions to munge the data here

export function formatLocation(data) {
  return data.map(location => {
    return {
      formatted_query: location.display_name,
      latitude: location.lat,
      longitude: location.lon
    };
  });
}