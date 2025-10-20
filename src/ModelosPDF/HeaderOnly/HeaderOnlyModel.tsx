import React from 'react';
import HeaderTable from '../HeaderTable/HeaderTable';

const HeaderOnlyModel: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <HeaderTable
        clienteNome="CLIENTE EXEMPLO"
        relatorioTitulo="RELATÓRIO PERSONALIZADO"
        relatorioSubtitulo="Modelo básico com cabeçalho customizável"
        codSample="EX-001"
        numberSample="001"
      />
      
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        border: '2px dashed #ddd',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#666'
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Área de Conteúdo</h3>
        <p style={{ margin: 0, fontSize: '14px' }}>
          Este é um modelo básico com apenas o cabeçalho.<br />
          Adicione aqui o conteúdo específico do seu relatório.
        </p>
      </div>
    </div>
  );
};

export default HeaderOnlyModel;