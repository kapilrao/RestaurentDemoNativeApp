export const fetchRestroList = async () => {
  const resp = await fetch(
    "http://205.134.254.135/~mobile/interview/public/api/restaurants_list"
  );
  const finalResult = await resp.json();
  return finalResult;
};
