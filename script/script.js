const carregar = () => {
  const mensagem = window.document.getElementById('msg');
  const imagem = window.document.getElementById('img');
  const data = new Date();
  const hora = data.getHours();
  mensagem.innerText = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    imagem.src = './img/morning-photo-2.png';
    document.body.style.background = '#ffae00b0';
  } else if (hora >= 12 && hora < 18) {
    imagem.src = './img/afternoon-photo-2.jpg';
    document.body.style.background = '#f0ab52';
  } else {
    imagem.src = './img/night-photo-2.jpg';
    document.body.style.background = '#0000ffa2';
  }
}