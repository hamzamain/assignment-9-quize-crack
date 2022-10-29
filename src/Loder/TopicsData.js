export const topicsData = async () => {
  const data = await fetch("https://openapi.programming-hero.com/api/quiz");
  const dataParsed = await data.json();
  return dataParsed;
};
