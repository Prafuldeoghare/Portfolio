export function scroll(id) {
  const anchor = document.querySelector(`#${id}`);
  anchor.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
