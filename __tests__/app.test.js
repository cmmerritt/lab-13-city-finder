import locationIqData from '../data/locationIqData';
import { formatLocation } from '../lib/utils';

describe('API Location Data Munging', () => {
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