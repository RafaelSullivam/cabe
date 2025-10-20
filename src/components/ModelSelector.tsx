import React from 'react';
import './ModelSelectorStyles.css';

export interface ModelOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

interface ModelSelectorProps {
  onModelSelect: (modelId: string) => void;
  darkMode?: boolean;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ onModelSelect, darkMode = false }) => {
  const availableModels: ModelOption[] = [
    {
      id: 'water-content',
      name: 'Teor de Umidade do Solo',
      description: 'Relatório para determinação do teor de umidade do solo conforme ABNT NBR 6457/2016',
      icon: '💧',
      category: 'Solos'
    },
    {
      id: 'header-only',
      name: 'Cabeçalho Simples',
      description: 'Modelo básico apenas com cabeçalho personalizado',
      icon: '📋',
      category: 'Básico'
    },
    {
      id: 'granulometry',
      name: 'Granulometria',
      description: 'Análise granulométrica de solos conforme ABNT NBR 7181/2016',
      icon: '📊',
      category: 'Solos'
    },
    {
      id: 'relatorio-sequencial',
      name: 'Relatório Sequencial',
      description: 'Formulário para geração sequencial de múltiplos relatórios de laboratório',
      icon: '📑',
      category: 'Laboratório'
    },
    {
      id: 'compression',
      name: 'Compressão Simples',
      description: 'Ensaio de resistência à compressão simples (em desenvolvimento)',
      icon: '🔨',
      category: 'Resistência'
    }
  ];

  const groupedModels = availableModels.reduce((acc, model) => {
    if (!acc[model.category]) {
      acc[model.category] = [];
    }
    acc[model.category].push(model);
    return acc;
  }, {} as Record<string, ModelOption[]>);

  return (
    <div className={`model-selector ${darkMode ? 'dark' : ''}`}>
      <div className="model-selector-header">
        <h1>Selecione o Modelo de Relatório</h1>
        <p>Escolha o tipo de relatório PDF que deseja gerar</p>
      </div>

      <div className="model-categories">
        {Object.entries(groupedModels).map(([category, models]) => (
          <div key={category} className="model-category">
            <h2 className="category-title">{category}</h2>
            <div className="model-grid">
              {models.map((model) => (
                <div
                  key={model.id}
                  className={`model-card ${model.id === 'compression' || model.id === 'granulometry' ? 'disabled' : ''}`}
                  onClick={() => {
                    if (model.id !== 'compression' && model.id !== 'granulometry') {
                      onModelSelect(model.id);
                    }
                  }}
                >
                  <div className="model-icon">{model.icon}</div>
                  <div className="model-info">
                    <h3 className="model-name">{model.name}</h3>
                    <p className="model-description">{model.description}</p>
                    {(model.id === 'compression' || model.id === 'granulometry') && (
                      <span className="coming-soon">Em Breve</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="model-selector-footer">
        <p>💡 Dica: Use Ctrl+P para imprimir após selecionar um modelo</p>
      </div>
    </div>
  );
};

export default ModelSelector;