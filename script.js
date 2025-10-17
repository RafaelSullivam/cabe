// Função para carregar o menu dinamicamente
async function carregarMenu() {
  try {
    const response = await fetch('menu.html');
    const menuHTML = await response.text();
    
    // Cria um container temporário para o menu
    const menuContainer = document.createElement('div');
    menuContainer.innerHTML = menuHTML;
    
    // Insere o menu no início do body
    document.body.insertBefore(menuContainer.firstElementChild, document.body.firstChild);
  } catch (error) {
    console.error(MESSAGES?.menuLoadError || 'Erro ao carregar o menu:', error);
  }
}

// Função para imprimir o documento
function imprimirDocumento() {
  window.print();
}

// Função para visualizar impressão (abre preview)
function visualizarImpressao() {
  // Simula Ctrl+P que abre a prévia de impressão
  window.print();
}

// Função para salvar como PDF
function imprimirPDF() {
  // Instrui o usuário a salvar como PDF
  alert('💡 Dica: Para salvar como PDF:\n\n1. Clique em "Imprimir Documento"\n2. Na janela de impressão, escolha "Salvar como PDF"\n3. Escolha o local para salvar');
  window.print();
}

// Função para copiar conteúdo
function copiarDocumento() {
  const conteudo = document.querySelector('.a4-container').innerText;
  navigator.clipboard.writeText(conteudo).then(() => {
    alert('✅ Conteúdo copiado para a área de transferência!');
  }).catch(() => {
    alert('❌ Erro ao copiar. Tente selecionar o texto manualmente.');
  });
}

// Função para alternar modo escuro/claro
let modoEscuro = false;
function alternarModo() {
  const body = document.body;
  const container = document.querySelector('.a4-container');
  
  if (!modoEscuro) {
    // Ativar modo escuro
    body.style.background = '#2c2c2c';
    container.style.background = '#3c3c3c';
    container.style.color = '#ffffff';
    modoEscuro = true;
  } else {
    // Voltar ao modo claro
    body.style.background = '#e5e5e5';
    container.style.background = 'white';
    container.style.color = 'black';
    modoEscuro = false;
  }
}

// Adicionar atalhos de teclado
document.addEventListener('keydown', function(e) {
  // Ctrl+P para imprimir
  if (e.ctrlKey && e.key === 'p') {
    e.preventDefault();
    imprimirDocumento();
  }
  
  // Ctrl+Shift+P para visualizar
  if (e.ctrlKey && e.shiftKey && e.key === 'P') {
    e.preventDefault();
    visualizarImpressao();
  }
  
  // Ctrl+D para modo escuro
  if (e.ctrlKey && e.key === 'd') {
    e.preventDefault();
    alternarModo();
  }
});

// Mostrar atalhos na primeira visita e carregar menu
window.addEventListener('load', function() {
  // Carregar o menu primeiro
  carregarMenu();
  
  setTimeout(() => {
    console.log('🎯 Atalhos disponíveis:');
    console.log('📄 Ctrl+P: Imprimir');
    console.log('👁️ Ctrl+Shift+P: Visualizar impressão');
    console.log('🌓 Ctrl+D: Alternar modo escuro/claro');
  }, 1000);
});