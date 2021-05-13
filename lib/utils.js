// write your functions to munge the data here

export function formatLocation(data) {
  const array = data.map(location => {
    return {
      formatted_query: location.display_name,
      latitude: location.lat,
      longitude: location.lon
    };
  });
  return array[0];
}

export function formatYelp(data) {
  const array = data.map(yelp => {
    return {
      name: yelp.name,
      image_url: yelp.image_url,
      price: yelp.price,
      rating: yelp.rating,
      url: yelp.url
    };
  });
  return array;
}