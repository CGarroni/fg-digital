export function scrollToSection(id: string) {
  const targetId = id.startsWith("#") ? id.slice(1) : id;

  const section = document.getElementById(targetId);

  if (!section) return;

  const offset = 90;

  const top =
    section.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}