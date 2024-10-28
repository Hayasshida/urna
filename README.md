# Urna Eletrônica Simulada

Este projeto é uma simulação de urna eletrônica desenvolvida com HTML, CSS e JavaScript. A urna permite que o usuário vote em candidatos fictícios usando números previamente definidos. O sistema reconhece votos válidos, votos em branco e nulos, e emite uma mensagem de erro para números inválidos.

## 🛠️ Tecnologias Utilizadas

- <img align="center" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
- <img align="center" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
- <img align="center" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

## 📋 Funcionalidades

- **Votação com Número do Candidato**: Insira o número correspondente ao candidato no painel de entrada e pressione "Confirma" para registrar o voto.
- **Votos em Branco**: O botão "Branco" registra um voto em branco.
- **Correção de Voto**: O botão "Corrige" apaga o número digitado para permitir que o usuário o digite novamente.
- **Identificação de Votos Nulos e Inválidos**: Se um número de candidato inválido for inserido e "Confirma" for pressionado, o sistema reconhece como voto nulo e exibe uma mensagem de aviso.

## 🗳️ Candidatos Disponíveis

| Número | Candidato       |
|--------|------------------|
| 13     | Lula            |
| 22     | Bolsonaro       |
| 56     | Enéas           |
| 00     | Branco/Nulo     |

Se um número não corresponder a nenhum candidato acima, ele será considerado **nulo**.

## 🚀 Como Executar o Projeto

1. Clone o repositório em sua máquina:
   ```bash
    
     git clone https://github.com/seu-usuario/sua-urna-eletronica.git
    
Abra o arquivo index.html em seu navegador para visualizar a urna.
📖 Passo a Passo do Funcionamento
Interface de Votação:

A interface contém botões numerados (0 a 9), além de botões "Confirma", "Corrige" e "Branco".
Cada botão numérico adiciona o dígito correspondente no visor da urna.
Confirmar Voto:

Após inserir um número de dois dígitos, pressione "Confirma".
O JavaScript valida o número:
Se o número corresponder a um candidato, o voto é registrado.
Se o número for 00, o voto é computado como branco.
Se o número não corresponder a um candidato válido, o voto é marcado como nulo.
Corrigir Voto:

O botão "Corrige" limpa o visor, permitindo que o usuário insira um novo número.
Voto em Branco:

🤝 Contribuição
Sinta-se à vontade para fazer um fork do projeto e propor melhorias!
