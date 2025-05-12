export async function elementFadeOut(element) {
  if (element.classList.contains("fade-out")) {
    return;
  }
  return new Promise((resolve) => {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");

    const onAnimationEnd = () => {
      element.removeEventListener("animationend", onAnimationEnd);
      resolve();
    };

    element.addEventListener("animationend", onAnimationEnd);
  });
}

export function elementFadeIn(element) {
  if (element.classList.contains("fade-in")) {
    return;
  }
  element.classList.remove("fade-out");
  element.classList.add("fade-in");
}
