export const userAdapter = (data) => {
  return {
    avatarUrl: data[`avatar_url`],
  };
};
