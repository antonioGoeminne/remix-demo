export const getProducts = async () => {
  try {
    const res = await fetch(`${process.env.STRAPI_URL_BASE}/products`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error with getProducts fetch", error);
  }
};
