// script.js - Header e Footer dinâmicos por idioma

// Conteúdo do HEADER em Português
const headerPT = `
<header>
    <div class="top-right-controls">
        <div class="language-selector" id="language-selector"></div>
        <button id="toggle-theme" class="theme-toggle" aria-label="Alternar tema escuro/claro">🌙</button>
    </div>
    <div class="container">
        <img src="images/foto.jpeg" alt="Minha Foto" class="profile-photo">
        <h1><span class="wave"></span> Olá, sou o André Fontainhas,</h1>
        <h1 class="highlight">um Programador de Software e Analista de Dados</h1>
        <div class="social-links">
            <a href="https://www.linkedin.com/in/andrefontainhas/" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:fontesandre98@hotmail.com" class="social-icon"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/Fontainhas9" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
        </div>
        <p class="description">
            <strong>Cargo Atual:</strong> Programador de Software e Analista de Dados no Instituto CCG/ZGDV, onde desenvolvo soluções IoT, sistemas de localização em tempo real (RTLS) e algoritmos de prevenção de colisões (Python) para aplicações em mobilidade inteligente e indústria têxtil.
        </p>
        <p class="description">
            <strong>Especialização Técnica:</strong> Desenvolvimento de software embarcado (C++, ESP32) para ambientes industriais, combinado com análise de dados (Python, Power BI) para transformar dados de sensores em insights estratégicos. Experiência comprovada no desenvolvimento de algoritmos de deteção de colisões, com publicações em conferências internacionais (IEEE, Springer) nas áreas de V2X e sistemas de localização.
        </p>
        <p class="description">
            <strong>Perfil Profissional:</strong> Engenheiro de Sistemas de Informação com perfil híbrido que abrange desde o desenvolvimento de firmware de baixo nível até à análise de dados de alto nível. Motivado por projetos complexos que exigem pensamento crítico, integração de sistemas e contribuições tangíveis para a inovação tecnológica em mobilidade conectada, eficiência energética e sustentabilidade.
        </p>
        <p class="description">
            <strong>Idiomas:</strong> Português (Nativo), Inglês (Fluente – C1), Espanhol (Intermédio – B2).
        </p>
        <div class="skills">
            <span class="skill">Python (Pandas, Matplotlib, Flask)</span>
            <span class="skill">C++ / Sistemas Embarcados (ESP32, Arduino, BLE)</span>
            <span class="skill">Power BI (DAX, Power Query, ETL)</span>
            <span class="skill">Análise e Visualização de Dados (Pandas, Matplotlib, Jupyter)</span>
            <span class="skill">Desenvolvimento Web (Flask, JavaScript, Leaflet, HTML5, CSS3, REST APIs)</span>
        </div>
    </div>
</header>
`;

// Conteúdo do HEADER em Inglês
const headerEN = `
<header>
    <div class="top-right-controls">
        <div class="language-selector" id="language-selector"></div>
        <button id="toggle-theme" class="theme-toggle" aria-label="Toggle dark/light theme">🌙</button>
    </div>
    <div class="container">
        <img src="images/foto.jpeg" alt="My Photo" class="profile-photo">
        <h1><span class="wave"></span> Hi there, I'm André Fontainhas,</h1>
        <h1 class="highlight">a Software Developer and Data Analyst</h1>
        <div class="social-links">
            <a href="https://www.linkedin.com/in/andrefontainhas/" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:fontesandre98@hotmail.com" class="social-icon"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/Fontainhas9" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
        </div>
        <p class="description">
            <strong>Current Position:</strong> Software Programmer & Data Analyst at the CCG/ZGDV Institute, where I develop IoT solutions, real-time location systems (RTLS), and collision prevention algorithms (Python) for smart mobility and textile industry applications.
        </p>
        <p class="description">
            <strong>Technical Expertise:</strong> Embedded software development (C++, ESP32) for industrial environments, combined with data analytics (Python, Power BI) to transform sensor data into strategic insights. Proven experience in developing collision detection algorithms, with publications in international conferences (IEEE, Springer) in V2X and localization systems.
        </p>
        <p class="description">
            <strong>Professional Profile:</strong> Information Systems Engineer with a hybrid profile spanning low-level firmware development and high-level data analytics. Motivated by complex projects requiring critical thinking, system integration, and tangible contributions to technological innovation in connected mobility, energy efficiency, and sustainability.
        </p>
        <p class="description">
            <strong>Languages:</strong> Portuguese (Native), English (Fluent – C1), Spanish (Intermediate – B2).
        </p>
        <div class="skills">
            <span class="skill">Python (Pandas, Matplotlib, Flask)</span>
            <span class="skill">C++ / Embedded Systems (ESP32, Arduino, BLE)</span>
            <span class="skill">Power BI (DAX, Power Query, ETL)</span>
            <span class="skill">Data Analysis & Visualization (Pandas, Matplotlib, Jupyter)</span>
            <span class="skill">Web Development (Flask, JavaScript, Leaflet, HTML5, CSS3, REST APIs)</span>
        </div>
    </div>
</header>
`;

// Conteúdo do HEADER em Espanhol
const headerES = `
<header>
    <div class="top-right-controls">
        <div class="language-selector" id="language-selector"></div>
        <button id="toggle-theme" class="theme-toggle" aria-label="Alternar tema oscuro/claro">🌙</button>
    </div>
    <div class="container">
        <img src="images/foto.jpeg" alt="Mi Foto" class="profile-photo">
        <h1><span class="wave"></span> ¡Hola! Soy André Fontainhas,</h1>
        <h1 class="highlight">Desarrollador de Software y Analista de Datos</h1>
        <div class="social-links">
            <a href="https://www.linkedin.com/in/andrefontainhas/" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:fontesandre98@hotmail.com" class="social-icon"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/Fontainhas9" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
        </div>
        <p class="description">
            <strong>Puesto Actual:</strong> Programador de Software y Analista de Datos en el Instituto CCG/ZGDV, donde desarrollo soluciones IoT, sistemas de localización en tiempo real (RTLS) y algoritmos de prevención de colisiones (Python) para aplicaciones en movilidad inteligente e industria textil.
        </p>
        <p class="description">
            <strong>Especialización Técnica:</strong> Desarrollo de software embebido (C++, ESP32) para entornos industriales, combinado con análisis de datos (Python, Power BI) para transformar datos de sensores en insights estratégicos. Experiencia comprobada en el desarrollo de algoritmos de detección de colisiones, con publicaciones en conferencias internacionales (IEEE, Springer) en las áreas de V2X y sistemas de localización.
        </p>
        <p class="description">
            <strong>Perfil Profesional:</strong> Ingeniero de Sistemas de Información con perfil híbrido que abarca desde el desarrollo de firmware de bajo nivel hasta el análisis de datos de alto nivel. Motivado por proyectos complejos que requieren pensamiento crítico, integración de sistemas y contribuciones tangibles a la innovación tecnológica en movilidad conectada, eficiencia energética y sostenibilidad.
        </p>
        <p class="description">
            <strong>Idiomas:</strong> Portugués (Nativo), Inglés (Fluido – C1), Español (Intermedio – B2).
        </p>
        <div class="skills">
            <span class="skill">Python (Pandas, Matplotlib, Flask)</span>
            <span class="skill">C++ / Sistemas Embebidos (ESP32, Arduino, BLE)</span>
            <span class="skill">Power BI (DAX, Power Query, ETL)</span>
            <span class="skill">Análisis y Visualización de Datos (Pandas, Matplotlib, Jupyter)</span>
            <span class="skill">Desarrollo Web (Flask, JavaScript, Leaflet, HTML5, CSS3, REST APIs)</span>
        </div>
    </div>
</header>
`;

// Conteúdo do FOOTER em Português
const footerPT = `
<footer>
    <div class="footer-container">
        <p>© 2025 André Fontainhas. Todos os direitos reservados.</p>
        <div class="footer-links">
            <a href="mailto:fontesandre98@hotmail.com"><i class="fas fa-envelope"></i> Email</a>
            <a href="https://www.linkedin.com/in/andrefontainhas/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
        </div>
    </div>
</footer>
`;

// Conteúdo do FOOTER em Inglês
const footerEN = `
<footer>
    <div class="footer-container">
        <p>© 2025 André Fontainhas. All rights reserved.</p>
        <div class="footer-links">
            <a href="mailto:fontesandre98@hotmail.com"><i class="fas fa-envelope"></i> Email</a>
            <a href="https://www.linkedin.com/in/andrefontainhas/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
        </div>
    </div>
</footer>
`;

// Conteúdo do FOOTER em Espanhol
const footerES = `
<footer>
    <div class="footer-container">
        <p>© 2025 André Fontainhas. Todos los derechos reservados.</p>
        <div class="footer-links">
            <a href="mailto:fontesandre98@hotmail.com"><i class="fas fa-envelope"></i> Correo</a>
            <a href="https://www.linkedin.com/in/andrefontainhas/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
        </div>
    </div>
</footer>
`;

// Função para obter o idioma a partir da página atual
function getLanguage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage.includes('-en')) return 'en';
    if (currentPage.includes('-es')) return 'es';
    return 'pt';
}

// Injeta header e footer com base no idioma
function injectHeaderFooter() {
    const lang = getLanguage();
    let headerHTML, footerHTML;
    
    switch(lang) {
        case 'en':
            headerHTML = headerEN;
            footerHTML = footerEN;
            break;
        case 'es':
            headerHTML = headerES;
            footerHTML = footerES;
            break;
        default:
            headerHTML = headerPT;
            footerHTML = footerPT;
    }
    
    const main = document.querySelector('main');
    if (main) {
        main.insertAdjacentHTML('beforebegin', headerHTML);
        main.insertAdjacentHTML('afterend', footerHTML);
    } else {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
}

// Configura o seletor de idioma com base na página atual
function setupLanguageSelector() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const langMap = {
        'index.html': { pt: 'index.html', en: 'index-en.html', es: 'index-es.html' },
        'index-en.html': { pt: 'index.html', en: 'index-en.html', es: 'index-es.html' },
        'index-es.html': { pt: 'index.html', en: 'index-en.html', es: 'index-es.html' },
        'certificados.html': { pt: 'certificados.html', en: 'certificados-en.html', es: 'certificados-es.html' },
        'certificados-en.html': { pt: 'certificados.html', en: 'certificados-en.html', es: 'certificados-es.html' },
        'certificados-es.html': { pt: 'certificados.html', en: 'certificados-en.html', es: 'certificados-es.html' },
        'projetos.html': { pt: 'projetos.html', en: 'projetos-en.html', es: 'projetos-es.html' },
        'projetos-en.html': { pt: 'projetos.html', en: 'projetos-en.html', es: 'projetos-es.html' },
        'projetos-es.html': { pt: 'projetos.html', en: 'projetos-en.html', es: 'projetos-es.html' },
        'publicacoes.html': { pt: 'publicacoes.html', en: 'publicacoes-en.html', es: 'publicacoes-es.html' },
        'publicacoes-en.html': { pt: 'publicacoes.html', en: 'publicacoes-en.html', es: 'publicacoes-es.html' },
        'publicacoes-es.html': { pt: 'publicacoes.html', en: 'publicacoes-en.html', es: 'publicacoes-es.html' }
    };
    const versions = langMap[currentPage] || { pt: 'index.html', en: 'index-en.html', es: 'index-es.html' };
    const selectorDiv = document.getElementById('language-selector');
    if (!selectorDiv) return;
    selectorDiv.innerHTML = `
        <a href="${versions.pt}"><img src="images/flags/portugal.png" alt="Português"></a>
        <a href="${versions.en}"><img src="images/flags/uk.png" alt="English"></a>
        <a href="${versions.es}"><img src="images/flags/spain.png" alt="Español"></a>
    `;
}

// Alternância de tema (dark mode)
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        const themeBtn = document.querySelector('#toggle-theme');
        if (themeBtn) themeBtn.textContent = '☀️';
    }
    document.addEventListener('click', (e) => {
        if (e.target.id === 'toggle-theme' || e.target.parentElement?.id === 'toggle-theme') {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            const btn = document.querySelector('#toggle-theme');
            if (btn) btn.textContent = isDark ? '☀️' : '🌙';
        }
    });
}

// Corrige caminhos dos PDFs (troca \ por /)
function fixPdfPaths() {
    document.querySelectorAll('a[href*="Certificates\\"]').forEach(link => {
        link.href = link.href.replace(/\\/g, '/');
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    injectHeaderFooter();
    setupLanguageSelector();
    initTheme();
    fixPdfPaths();
});