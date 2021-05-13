import locationIqData from '../data/locationIqData';
import yelpData from '../data/yelpData';
import { formatLocation, formatYelp } from '../lib/utils';

describe('API location data munging', () => {
  const expectedLocations = 
    { 'formatted_query': 'Charlottesville, Virginia, USA', 
      'latitude': '38.029306',
      'longitude': '-78.4766781'
    };

  it('munges location data', async () => {
    const output = formatLocation(locationIqData);
    expect(output).toEqual(expectedLocations);
  });
});

describe('API yelp data munging', () => {
  const expectedYelps = [
    {
      'name': 'Citizen Burger Bar',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/FVQ2yaguG7EU0c0QtTrM8w/o.jpg',
      'price': '$$',
      'rating': 4.0,
      'url': 'https://www.yelp.com/biz/citizen-burger-bar-charlottesville?adjust_creative=_Vy-qm2d5ex1tULRpgPgfQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_Vy-qm2d5ex1tULRpgPgfQ'
    },
    {
      'name': 'Ace Biscuit & Barbecue',
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/qz0ER0bHENosiJhyzgjhRg/o.jpg',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/ace-biscuit-and-barbecue-charlottesville-3?adjust_creative=_Vy-qm2d5ex1tULRpgPgfQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_Vy-qm2d5ex1tULRpgPgfQ'
    },
    {
      'name': 'Lampo',
      'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/puwID0fAmWnKvpri5psb9Q/o.jpg',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/lampo-charlottesville?adjust_creative=_Vy-qm2d5ex1tULRpgPgfQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_Vy-qm2d5ex1tULRpgPgfQ'
    }
  ];

  it('munges yelp data', async () => {
    const output = formatYelp(yelpData);
    expect(output).toEqual(expectedYelps);
  });
});