export const searchAlbumsAPI = async (artist: string) => {
  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artist}`;
  const APIResponse = await fetch(getAlbumsAPI);
  const { results } = await APIResponse.json();

  return results;
};

export const getMusics = async (id: number | string) => {
  const request = await fetch(
    `https://itunes.apple.com/lookup?id=${id}&entity=song`
  );
  const { results } = await request.json();
  return results;
};
