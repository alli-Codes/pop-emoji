const chatText = "Hello, my name is #Evans #smile";

const splitChatTexts = function (data) {
  return data.split(" ");
};

const findIndexOfHash = function (text) {
  text.includes("#") ? console.log(text.indexOf("#")) : console.log(No);
};

const changeText2Emoji = function () {};

findIndexOfHash(chatText);
