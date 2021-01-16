import axios from 'axios'

const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json";

export async function getAddressFromLatLon(lat, lon) {
  const result = await axios.get(`${BASE_URL}?latlng=${lat},${lon}&key=${process.env.GOOG_API_KEY}`)
  console.log(result)

  if (result && result.data && result.data.results && result.data.results.length > 0 && result.data.results[0]["formatted_address"]) return result.data.results[0]["formatted_address"];
  else throw new Error("couldn't resolve data");
}
