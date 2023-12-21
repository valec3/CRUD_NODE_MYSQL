const API_URL = "http://localhost:3000/api";

export const createThing = async (thing) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(thing),
  });
  return response.json();
};

export const getCountries = async () => {
  const response = await fetch(`${API_URL}/test/`);
  return response.json();
};
