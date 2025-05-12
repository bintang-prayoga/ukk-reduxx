export default async function getSubscription() {
  try {
    const res = await fetch(
      "https://api.trakteer.id/v1/public/supports?limit=20&page=1&include=order_id,supporter_email",
      {
        method: "GET",
        headers: {
          key: process.env.TRAKTEER_API_KEY,
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const json = await res.json();

    return json.result.data || []; // Return an empty array if no data is found
  } catch (error) {
    console.error("Error fetching subscription data:", error);
    return []; // Return an empty array in case of an error
  }
}
