// Parte da barra de narvegaçao

const BarraNave = () => {
  const CentroLupa = document.querySelector(".CentroLupa");
  const LiteMode = document.querySelector(".Mode-Lite");

  // Função para atualizar a posição do círculo com base na posição do mouse
  function updateCentroLupaPosition(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const centerX = window.innerWidth / 260;
    const centerY = window.innerHeight / 90;

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
  document.addEventListener("mousemove", updateCentroLupaPosition);

  const ButtonMode = document.getElementById("Button-Mode");
  const body = document.body;

  function ModeDark() {
    
    let IcoModeLight = '<i class="fa-solid fa-sun"></i>';
    let IconeModeDark = '<i class="fa-solid fa-moon"></i>';

    if (body.classList.toggle("Mode-Dark")) {
      ButtonMode.innerHTML = IcoModeLight;
    } else
      body.classList.toString(
        "Mode-Linght",
        (ButtonMode.innerHTML = IconeModeDark)
      );
  }

  ButtonMode.addEventListener("click", ModeDark);
};

BarraNave();


const animeAlta = () => {

  const AnimesAlta = document.querySelector()
}