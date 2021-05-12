import locationIqData from '../data/locationIqData';
import { formatLocation } from '../lib/utils';

describe('API Location Data Munging', () => {
  const expectedLocations = [
    { 'formatted_query': 'Charlottesville, Virginia, USA', 
      'latitude': '38.029306',
      'longitude': '-78.4766781',
    },
    { 'formatted_query': 'Charlottesville, Hancock County, Indiana, 46117, USA',
      'latitude': '39.7920892',
      'longitude': '-85.6120151',
    },
    { 'formatted_query': 'Charlottesville, 810, West Main Street, 10th & Page, Starr Hill, Charlottesville, Virginia, 22903, USA',
      'latitude': '38.0314369',
      'longitude': '-78.4917906',
    },
    { 'formatted_query': 'Charlottesville, Union County, Indiana, 47003, USA',
      'latitude': '39.5361624',
      'longitude': '-84.8530123',
    }
  ];

  it('munges location data', async () => {
    const output = formatLocation(locationIqData);
    expect(output).toEqual(expectedLocations);
  });
});