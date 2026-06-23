const greeting = document.getElementById("greeting");
const cta = document.getElementById("cta");

function sayHello(name) {
  return `Good morning ${name}!`;
}

cta.addEventListener("click", () => {
  greeting.textContent = sayHello("world");
});
