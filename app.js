const chatText = "Hello, my name is #Evans #smile";

const splitChatTexts = function (data) {
  return data.split(" ");
};

const findHashedTexts = function (data) {
  const hashedTexts = splitChatTexts(data).filter((element) =>
    element.includes("#")
  );
};

const changeText2Emoji = function () {};

findHashedTexts(chatText);
