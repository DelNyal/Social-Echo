export const isTokenValid = (expiresAt) => {
  const currentTime = new Date();
  const expirationTime = new Date(expiresAt);
  console.log(currentTime.getTime() + "=" + expirationTime.getTime());

  return currentTime.getTime() < expirationTime.getTime();
};
