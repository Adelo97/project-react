// src/api/musicApi.js
const BASE_URL = 'https://seido-webservice-307d89e1f16a.azurewebsites.net//api';


// Helper to build query strings
function buildQuery(params) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
}


// Fetch a page of music groups, with optional filter
export async function fetchMusicGroups({ page = 0, pageSize = 10, filter = '' } = {}) {
  const queryParams = {
    seeded: true,
    flat: true,
    pageNr: page,
    pageSize: pageSize,
  };
  if (filter) queryParams.filter = filter;


  const queryString = buildQuery(queryParams);
  const response = await fetch(`${BASE_URL}/MusicGroup/Read?${queryString}`);
  if (!response.ok) {
    throw new Error(`Error fetching music groups: ${response.status}`);
  }
  return response.json();
}


// Fetch one music group by its ID
export async function fetchMusicGroupById(id) {
  // GET /api/MusicGroup/{id}
  const response = await fetch(`${BASE_URL}/MusicGroup/${id}`);
  if (!response.ok) {
    throw new Error(`Error fetching music group ${id}: ${response.status}`);
  }
  return response.json();
}
