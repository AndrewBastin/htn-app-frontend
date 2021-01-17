import axios from "axios";

export const VALID_CITIES = [
  'Windsor',
  'Barrie',
  'Port Hope',
  'London',
  'Toronto',
  'Hamilton',
  'Whitby',
  'Thorold',
  'Newmarket',
  'Cornwall',
  'Oakville',
  'Kingston',
  'Point Edward',
  'Ottawa',
  'Mississauga',
  'Waterloo',
  'Guelph',
  'Stratford',
  'St. Thomas',
  'Chatham',
  'Simcoe',
  'Brantford',
  'Thunder Bay',
  'New Liskeard',
  'Brockville',
  'Peterborough',
  'Timmins',
  'North Bay',
  'Sudbury',
  'Belleville',
  'Pembroke',
  'Sault Ste. Marie',
  'Owen Sound',
  'Kenora'
];

export async function getStats(city, mode) {
  const res = await axios.get("http://localhost:8000/getstats", {
    params: {
      city: city,
      mode: mode
    }
  });
  console.log(res);
  return res;
}
