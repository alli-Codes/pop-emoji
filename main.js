(() => {
  const bodyElement = document.querySelector("body");
  const bodyElementChildren = bodyElement.childNodes;

  const checkElementIsEditable = function (element) {
    if (element.target.isContentEditable) console.log(true);
    // console.log("Hey");
  };

  bodyElement.addEventListener("click", (e) => checkElementIsEditable(e));
})();
