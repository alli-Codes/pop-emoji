(() => {
  const bodyElement = document.querySelector("body");
  const bodyElementChildren = bodyElement.children;

  const checkElementIsEditable = function () {
    for (let element of bodyElementChildren) {
      console.log(element.contentEditable);
    }
  };
})();
