const createUrl = (serialLength, checkUrlInDB) => {
  const chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomIndex;
  let randomSerial = '';
  for (let i = 0; i < serialLength; i += 1) {
    randomIndex = Math.floor(Math.random() * chars.length);
    randomSerial += chars.substring(randomIndex, randomIndex + 1);
  }

  return checkUrlInDB(randomSerial).then((isThere) => {
    if (!isThere) {
      return randomSerial;
    }
    return createUrl(serialLength, checkUrlInDB);
  });
};

module.exports = { createUrl };
