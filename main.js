(() => {
  const bodyElement = document.querySelector("html");
  const iconContainer = document.createElement("div");
  const icon = document.createElement("div");

  const styleCreatedElements = function (element) {
    iconContainer.style.height = `${element.clientHeight}px`;
    iconContainer.style.width = `${element.clientWidth}px`;
    // iconContainer.style.backgroundColor = "green";
    iconContainer.style.display = "flex";
    iconContainer.style.justifyContent = "end";
    iconContainer.style.position = "absolute";
    iconContainer.style.top = `${element.offsetTop}px`;
    iconContainer.style.left = `${element.offsetLeft}px`;

    icon.style.height = "1rem";
    icon.style.width = "1rem";
    icon.style.backgroundColor = "red";
    icon.style.transform = "translate(-.5rem, -.5rem)";
    icon.style.alignSelf = "end";
    icon.style.cursor = "pointer";
  };

  const checkElementIsEditable = function (element) {
    if (element.isContentEditable) {
      styleCreatedElements(element);
      iconContainer.append(icon);
      bodyElement.append(iconContainer);
    }
  };

  bodyElement.addEventListener("click", (e) => {
    checkElementIsEditable(e.target);
    console.log(e);
  });
})();
