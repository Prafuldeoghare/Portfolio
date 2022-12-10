export function scroll(id: string) {
  document.querySelector(`#${id}`)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
