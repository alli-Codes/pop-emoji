(() => {
  const htmlElement = document.querySelector("html");
  const iconContainer = document.createElement("div");
  const icon = document.createElement("div");
  const emojiMenuContainer = document.createElement("div");

  const styleCreatedElements = function (element) {
    iconContainer.style.height = `${element.clientHeight}px`;
    iconContainer.style.width = `${element.clientWidth}px`;
    iconContainer.style.backgroundColor = "transparent";
    iconContainer.style.display = "flex";
    iconContainer.style.justifyContent = "end";
    iconContainer.style.position = "absolute";
    iconContainer.style.top = `${element.offsetTop}px`;
    iconContainer.style.left = `${element.offsetLeft}px`;
    iconContainer.style.pointerEvents = "none";

    icon.style.height = "1rem";
    icon.style.width = "1rem";
    icon.style.backgroundColor = "red";
    icon.style.transform = "translate(-.5rem, -.5rem)";
    icon.style.alignSelf = "end";
    icon.style.cursor = "pointer";

    emojiMenuContainer.style.height = "10rem";
    emojiMenuContainer.style.width = "20rem";
    emojiMenuContainer.style.backgroundColor = "black";
    emojiMenuContainer.style.position = "absolute";
    emojiMenuContainer.style.transform = `translateX(-50%)`;
    emojiMenuContainer.style.left = `${element.clientWidth / 2}px`;
    // emojiMenuContainer.style.right = `${element.clientWidth / 2}px`;
  };

  const checkElementIsEditable = function (element) {
    if (element.isContentEditable) {
      styleCreatedElements(element);
      iconContainer.append(icon);
      htmlElement.append(iconContainer, emojiMenuContainer);
    }
  };

  htmlElement.addEventListener("click", (e) => {
    checkElementIsEditable(e.target);
    // console.log(e);
  });
})();
