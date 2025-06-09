# Loja Carmen Fontoura - E-commerce com React e Context API

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Badge">
  <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components Badge">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge">
</p>
<p align="center">
  <em>Um projeto de e-commerce moderno e elegante para uma loja de roupas, construído com as melhores práticas de React, incluindo o uso de `useReducer` e a Context API para um gerenciamento de estado robusto e centralizado.</em>
</p>

<p align="center">
  <img src="public/loguinho.png" width="200px" alt="Logo Carmen Fontoura">
</p>

## Sobre o Projeto

O projeto **Loja Carmen Fontoura** é uma Single-Page Application (SPA) que simula a vitrine e o carrinho de compras de uma loja de vestuário. O principal objetivo deste projeto é demonstrar uma implementação limpa e escalável de um e-commerce utilizando React, com foco especial no gerenciamento de estado avançado.

Em vez de espalhar a lógica de estado por vários componentes com `useState`, centralizamos tudo em um `ProductContext`, que utiliza um `productReducer` para manipular todas as ações da aplicação, como adicionar itens ao carrinho, atualizar quantidades e finalizar compras. Esta abordagem torna o estado mais previsível, fácil de depurar e de manter.

## Funcionalidades

* **Vitrine de Produtos:** Exibição dos produtos em uma grade responsiva e visualmente agradável.
* **Cards de Produto Interativos:** Cada produto possui um card com imagem, nome, descrição, preço e um botão para adicionar ao carrinho.
* **Carrinho de Compras Flutuante:** Um ícone de carrinho sempre visível que exibe o número de itens adicionados.
* **Modal de Carrinho de Compras:** Ao clicar no ícone, um modal é aberto, permitindo ao usuário:
    * Visualizar todos os itens no carrinho.
    * Ajustar a quantidade de cada item.
    * Ver o subtotal por item e o total da compra.
    * Remover itens ou limpar o carrinho completamente.
* **Finalização de Compra:** Uma simulação de checkout que limpa o carrinho e fecha o modal.
* **Gerenciamento de Estado Centralizado:** Toda a lógica da loja é controlada através da Context API e do hook `useReducer`.

## Tecnologias Utilizadas

* **React (v18+):** Biblioteca para construção da interface de usuário.
* **React Hooks:** Utilização intensiva de `useEffect`, `useReducer` e `useContext`.
* **Context API:** Para criar um estado global para a aplicação sem a necessidade de bibliotecas externas como Redux.
* **Styled-components:** Para a estilização dos componentes, permitindo a criação de CSS-in-JS de forma organizada e com escopo local.
* **React Icons:** Para a utilização de ícones vetoriais de forma simples.
* **Vite:** Como ferramenta de build, proporcionando um ambiente de desenvolvimento extremamente rápido (Fast Refresh) e um processo de build otimizado.

## Como Executar o Projeto Localmente

Siga estas instruções para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

* [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
* [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
    ```

2.  **Navegue até o Diretório do Projeto:**
    ```bash
    cd NOME_DO_REPOSITORIO
    ```

3.  **Instale as Dependências:**
    Com npm:
    ```bash
    npm install
    ```
    Ou com Yarn:
    ```bash
    yarn install
    ```

### Executando a Aplicação

1.  **Inicie o Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    ```
    Ou com Yarn:
    ```bash
    yarn dev
    ```

2.  **Acesse a Aplicação:**
    Abra seu navegador e acesse `http://localhost:5173` (ou a porta que o Vite indicar no seu terminal).

## Estrutura do Projeto

O projeto é organizado de forma a separar responsabilidades, facilitando a manutenção e a escalabilidade.

```
src/
├── assets/             # Imagens, fontes e outros recursos estáticos
├── components/         # Componentes React reutilizáveis (ProductCard, ShoppingCart)
├── context/            # Definição dos Contextos e Reducers (ProductContext)
├── pages/              # Componentes que representam as páginas da aplicação (Store)
├── services/           # Funções e dados mockados (productsData)
├── styles/             # Estilos globais (GlobalStyle)
└── App.jsx             # Componente raiz que monta a aplicação
```

## Próximos Passos e Melhorias

Este projeto é uma base sólida que pode ser expandida com novas funcionalidades:

* [ ] **Integração com Backend:** Substituir os dados mockados por chamadas a uma API real (usando, por exemplo, o Supabase do projeto original).
* [ ] **Página de Detalhes do Produto:** Criar uma rota para cada produto, exibindo mais informações.
* [ ] **Filtros e Ordenação:** Adicionar opções para filtrar produtos por categoria, cor, tamanho e ordenar por preço ou popularidade.
* [ ] **Autenticação de Usuários:** Permitir que usuários criem contas para salvar seus carrinhos e ver histórico de pedidos.
* [ ] **Testes:** Implementar testes unitários e de integração com Jest e React Testing Library.
