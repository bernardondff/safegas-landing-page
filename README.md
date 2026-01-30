# 🛡️ SafeGas Monitor

> **Segurança invisível. Proteção real.**

![Status](https://img.shields.io/badge/Status-MVP%20%2F%20Validação-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 📖 Sobre o Projeto

O **SafeGas Monitor** é uma solução de IoT (Internet das Coisas) desenvolvida para monitoramento inteligente de vazamentos de gás GLP em ambientes residenciais e comerciais. 

O objetivo é prevenir acidentes domésticos e industriais através de sensores conectados que enviam alertas em tempo real para o celular do usuário antes que a concentração de gás atinja níveis críticos.

Atualmente, o projeto está em fase de **validação de mercado** e captação de parceiros para testes piloto em Florianópolis.

🔗 **Acesse a Landing Page:** [https://safegas-landing-page.vercel.app](https://safegas-landing-page.vercel.app)

---

## 🚀 Funcionalidades (Previstas & Atuais)

- [x] **Landing Page Institucional:** Apresentação do produto e captura de leads (partnerships).
- [x] **Design Responsivo:** Interface moderna e adaptável via Tailwind CSS.
- [ ] **Monitoramento em Tempo Real:** Leitura de sensores MQ-2/MQ-6 via ESP32.
- [ ] **Sistema de Alertas:** Notificações Push e SMS em caso de vazamento.
- [ ] **Dashboard:** Histórico de qualidade do ar e status dos sensores.

---

## 🛠️ Tecnologias

O projeto utiliza uma stack moderna focada em performance e escalabilidade:

### Frontend (Atual)
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5 Semântico**
- ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS** (Estilização)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript** (Lógica e Interatividade)
- **AOS Library** (Animações de scroll)
- **Formspree** (Backend-as-a-Service para formulários)

### Backend & IoT (Roadmap)
- ![Java](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white) **Java Spring Boot** (API REST robusta com foco em QA/Testes)
- ![IoT](https://img.shields.io/badge/Hardware-ESP32-black) **ESP32 / Arduino** (Microcontroladores)
- **Firebase** (Banco de dados em tempo real)

---

## 📂 Estrutura do Projeto

```bash
safegas-landing-page/
├── assets/          # Imagens, logos e ícones
├── index.html       # Página principal
└── README.md        # Documentação


🏃‍♂️ Como rodar localmente
Se você quiser clonar e testar a Landing Page na sua máquina:

Clone o repositório

Bash

git clone [https://github.com/bernardondff/safegas-landing-page.git](https://github.com/bernardondff/safegas-landing-page.git)
Entre na pasta

Bash

cd safegas-landing-page
Abra o arquivo Basta abrir o arquivo index.html no seu navegador ou usar o Live Server do VS Code.

🗺️ Roadmap de Desenvolvimento
Fase 1 (Concluída): Desenvolvimento da Identidade Visual e Landing Page de validação.

Fase 2 (Em andamento): Captação de parceiros piloto via formulário web.

Fase 3: Desenvolvimento do Backend em Java (Spring Boot) com foco em Quality Assurance (QA) e Testes Automatizados.

Fase 4: Integração do Hardware (ESP32) com a API.

👨‍💻 Autor
Bernardo Nunes Estudante de Engenharia de Controle e Automação - UFSC Consultor na AutoJun

              Desenvolvido com 💙 em Florianópolis - SC 

