const greeting = document.getElementById("greeting");
const cta = document.getElementById("cta");

function sayHello(name) {
  return `Hello world`;
}

cta.addEventListener("click", () => {
  greeting.textContent = sayHello("world");
});
