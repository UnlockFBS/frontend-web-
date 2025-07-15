const API_URL = 'https://your-backend-api.com' // à adapter

export async function fetchInterventions() {
  const res = await fetch(`${API_URL}/interventions`)
  return await res.json()
}
