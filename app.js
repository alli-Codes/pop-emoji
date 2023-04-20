const chatText = "Hello, my name is #Evans #smile";

const splitChatTexts = function (data) {
  return data.split(" ");
};

const findHashedTexts = function (data) {
  const hashedTexts = splitChatTexts(data).filter((element) =>
    element.includes("#")
  );
  return hashedTexts;
};

const changeText2Emoji = function (data) {
  const emojis = findHashedTexts(data).map((element) => (element = "😏"));
  console.log(emojis);
};

const findIndexOfHashedTexts = function (data) {
  // data.
};

changeText2Emoji(chatText);
