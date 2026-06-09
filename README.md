# 👨‍💻 Currículo de André Fontainhas

Este repositório contém o código-fonte do meu currículo/portfólio profissional online, disponível em **[fontainhas9.github.io/Curriculo/](https://fontainhas9.github.io/Curriculo/)**.  
O projeto apresenta a minha trajetória como **Programador de Software e Analista de Dados**, detalhando a minha experiência profissional, projetos, publicações e certificações.

O website está estruturado como uma *Single Page Application (SPA)* minimalista, com suporte multilingue (Português, Inglês e Espanhol) e um tema escuro/claro que se adapta às preferências do utilizador.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica do website.
- **CSS3** — Estilização, layout responsivo e modo escuro/claro.
- **JavaScript** — Lógica para alternar o tema (light/dark) e melhorias de performance (lazy loading, smooth scroll).
- **GitHub Pages** — Hospedagem do website estático.

---

## 📂 Estrutura do Projeto

A organização dos ficheiros reflete a natureza multilingue e modular do projeto:
Curriculo/
├── index.html # Página principal (Português)
├── index-en.html # Página principal (Inglês)
├── index-es.html # Página principal (Espanhol)
├── projetos.html # Página de projetos (Português)
├── projetos-en.html # Página de projetos (Inglês)
├── projetos-es.html # Página de projetos (Espanhol)
├── publicacoes.html # Página de publicações (Português)
├── publicacoes-en.html # Página de publicações (Inglês)
├── publicacoes-es.html # Página de publicações (Espanhol)
├── certificados.html # Página de certificados (Português)
├── certificados-en.html # Página de certificados (Inglês)
├── certificados-es.html # Página de certificados (Espanhol)
├── style.css # Estilos globais e responsividade
├── style-test.css # Ficheiro de estilos de teste
├── script.js # Funcionalidades JavaScript
├── Certificates/ # Diretório com os diplomas (PDFs/imagens)
├── images/ # Imagens do website (foto de perfil, etc.)
├── trash/ # Código antigo/backups
├── Tese-CalculadoraPegadaDeCarbono-main.zip # Anexo da tese de mestrado
├── structure.txt # Estrutura textual do projeto (para referência)
└── desktop.ini # Ficheiro de configuração do Windows (ignorar)


### ✨ Destaques do Código

- **Modo Escuro/Claro:** A funcionalidade é implementada em `script.js` e guarda a preferência do utilizador no `localStorage`, garantindo persistência entre sessões.
- **Suporte Multilingue:** Cada secção principal (projetos, publicações, certificados) tem a sua própria página HTML para cada idioma, mantendo a estrutura e o conteúdo organizados.
- **Design Responsivo:** O `style.css` utiliza `clamp()` para tipografia fluida e um layout baseado em Flexbox/Grid, assegurando uma boa experiência em qualquer dispositivo.

---

## 📄 Conteúdo do Website

### 👤 Perfil Profissional

O website apresenta um resumo do meu perfil:

- **Cargo Atual:** Desenvolvedor de Software e Analista de Dados no Instituto CCG/ZGDV.
- **Especialização:** Desenvolvimento embarcado (C++, ESP32), análise de dados (Python, Power BI), investigação aplicada (publicações IEEE/Springer).
- **Idiomas:** Português (nativo), Inglês (C1), Espanhol (intermediário).

### 💼 Experiência e Projetos

- **PACMOBINOV:** Implementação de algoritmos de deteção e prevenção de colisões em tempo real, com integração em aplicações móveis e sistemas embarcados (OBUs/RSUs).
- **TEXP@CT (PPS7):** Desenvolvimento de um sistema de localização *indoor* para a indústria têxtil com firmware C++ em ESP32, digitalizações BLE e comunicação via REST APIs.
- **MITI Demo:** Plataforma web *full-stack* (Flask + JavaScript/Leaflet) para monitorização de sensores em tempo real, com dashboards dinâmicos e suporte a ingestão de dados por MQTT, Kafka e API.
- **Aliança para a Transição Energética:** Desenvolvimento de uma plataforma municipal para gestão inteligente de energia e promoção da neutralidade carbónica.

### 📚 Publicações Científicas

1. **"Needs and Requirements Assessment of Physical Product Traceability within the Portuguese Textile and Clothing Industry"** — CENTERIS 2026 (Elsevier).
2. **"Centralized Kalman Filters to Enhance Localization Accuracy Within Vehicular Networks Context"** — Innovations in Mechatronics Engineering IV 2025 (Springer).

### 🎓 Formação e Certificados

- **Mestrado Integrado em Engenharia e Gestão de Sistemas de Informação** — Universidade do Minho (2016-2022).
- **Certificados recentes:** "IA para a Gestão", "IA Segura – IA Act" (TecMinho), "Gestão da Segurança da Informação" (CNCS), "Power BI 2025" (Hashtag Treinamentos), entre outros.

---

## 🚀 Como Usar

Para visualizar o currículo online, basta aceder ao seguinte URL:

👉 **[https://fontainhas9.github.io/Curriculo/](https://fontainhas9.github.io/Curriculo/)**  

Não é necessário instalar nada – o website está disponível publicamente e funciona em qualquer navegador moderno (computador, tablet ou smartphone). A navegação entre as secções (Projetos, Publicações, Certificados) e a mudança de idioma (PT/EN/ES) são feitas diretamente no próprio site.
