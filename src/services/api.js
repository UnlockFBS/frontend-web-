const API_URL = "https://planning-backend.onrender.com"; // Remplace avec ton backend Render

export async function getInterventions() {
  try {
    const response = await fetch(`${API_URL}/interventions`);
    return await response.json();
  } catch (error) {
    console.error("Erreur API :", error);
    return [];
  }
}
