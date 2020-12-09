const createUrl = (serialLength, checkUrlInDB) => {
  const chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomIndex;
  let randomSerial = '';
  for (let i = 0; i < serialLength; i += 1) {
    randomIndex = Math.floor(Math.random() * chars.length);
    randomSerial += chars.substring(randomIndex, randomIndex + 1);
  }
  if (checkUrlInDB(randomSerial)) {
    createUrl(serialLength, checkUrlInDB);
  }
  return randomSerial;
};

module.exports = { createUrl };
