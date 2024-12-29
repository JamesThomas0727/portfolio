/**
 * Author: James Thomas
 * Date: 2024/12/29
 * Description: Function to scroll to given component's position smoothly.
 */

const scrollToPosition = (id) => {
  const element = document.getElementById(id);
  let globalPosition = 0;
  if (element) {
    const rect = element.getBoundingClientRect();
    globalPosition = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };
    console.log("Global Position:", globalPosition);
  } else {
    console.error("Element not found!");
  }
  window.scrollTo({
    top: globalPosition.top,
    behavior: "smooth",
  });
}

export default scrollToPosition;