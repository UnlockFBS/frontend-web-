// frontend-web/src/services/api.js

const API_URL = "https://planning-backend.onrender.com"; // Remplace cette URL par celle de TON backend

// Exemple simple de requête GET
export async function getInterventions() {
  try {
    const response = await fetch(`${API_URL}/interventions`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors du chargement des interventions :", error);
    return [];
  }
}
