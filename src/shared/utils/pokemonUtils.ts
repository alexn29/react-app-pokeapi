export const getPokemonID = (url: string) => {
  const regex = /\/([^/]+)\/$/;
  const match = url.match(regex);

  return match ? Number(match[1]) : 0;
};
