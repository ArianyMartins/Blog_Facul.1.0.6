document.addEventListener('DOMContentLoaded', function () {
  const openModalLinks = document.querySelectorAll('.open-modal');
  const closeModalButtons = document.querySelectorAll('.close');

  // Função para abrir um modal
  function openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
          modal.style.display = 'block';
      }
  }

  // Função para fechar um modal
  function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
          modal.style.display = 'none';
      }
  }

  // Adiciona eventos de clique aos links de abrir modal
  openModalLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const modalId = this.getAttribute('data-modal');
          openModal(modalId);
      });
  });

  // Adiciona eventos de clique aos botões de fechar modal
  closeModalButtons.forEach(button => {
      button.addEventListener('click', function () {
          const modalId = this.getAttribute('data-modal');
          closeModal(modalId);
      });
  });

  // Fecha o modal ao clicar fora dele
  window.addEventListener('click', function (event) {
      if (event.target.classList.contains('modal')) {
          event.target.style.display = 'none';
      }
  });
});

// Função para alternar entre páginas dentro do modal
function openTab(evt, pageName, modalId) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(`#${modalId} .tabcontent`);
  tablinks = document.querySelectorAll(`#${modalId} .tablinks`);

  // Esconde todas as páginas
  tabcontent.forEach(content => content.style.display = "none");

  // Remove a classe "active" de todas as abas
  tablinks.forEach(link => link.className = link.className.replace(" active", ""));

  // Mostra a página selecionada
  document.getElementById(pageName).style.display = "block";

  // Adiciona a classe "active" à aba clicada
  evt.currentTarget.className += " active";
}
