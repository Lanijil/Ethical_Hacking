const API_URL = "http://localhost:8000";

export const getHealth = async () => {
  const res = await fetch(`${API_URL}/health`);
  return res.json();
};
