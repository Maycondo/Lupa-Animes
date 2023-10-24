// Parte da barra de narvegaçao

const CentroLupa = document.querySelector(".CentroLupa");
document.addEventListener("mousemove", updateCentroLupaPosition);

// Função para atualizar a posição do círculo com base na posição do mouse
function updateCentroLupaPosition(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const centerX = window.innerWidth / 18;
  const centerY = window.innerHeight / 39;

  // Calcula o ângulo entre o mouse e o centro da janela
  const angle = Math.atan2(mouseY - centerY, mouseX - centerX);

  // Define o raio do círculo
  const radius = 8;

  // Calcula a nova posição do círculo
  const newX = centerX + radius * Math.cos(angle);
  const newY = centerY + radius * Math.sin(angle);

  // Define a posição do círculo
  CentroLupa.style.left = newX + "px";
  CentroLupa.style.top = newY + "px";
}
