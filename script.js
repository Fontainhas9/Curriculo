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
            <strong>Cargo Atual:</strong> Programador de Software na Holoss, onde desenvolvo uma plataforma para gestão de dados internos e externos, integrando datasets de projetos e fontes heterogéneas, com foco em eficiência, escalabilidade e apoio à decisão.
        </p>
        <p class="description">
            <strong>Especialização Técnica:</strong> Desenvolvimento de soluções full‑stack (Python, Flask, JavaScript) e integração de sistemas, combinado com análise de dados (Power BI, Pandas) para transformar grandes volumes de dados em insights estratégicos. Experiência comprovada em arquitetura de dados, modelação e visualização, com publicações em conferências internacionais (IEEE, Springer) nas áreas de V2X e sistemas de localização.
        </p>
        <p class="description">
            <strong>Perfil Profissional:</strong> Engenheiro de Sistemas de Informação com perfil híbrido que abrange desde o desenvolvimento de backend e integração de APIs até à análise e visualização de dados. Motivado por projetos complexos que exigem pensamento crítico, gestão de dados e contribuições tangíveis para a inovação tecnológica em mobilidade, eficiência energética e sustentabilidade.
        </p>
        <p class="description">
            <strong>Idiomas:</strong> Português (Nativo), Inglês (Fluente – C1), Espanhol (Intermédio – B2).
        </p>
        <div class="skills">
        <span class="skill">Python (Flask, Pandas, ETL, Integração)</span>
        <span class="skill">Desenvolvimento Full‑Stack (Flask, JavaScript, HTML/CSS)</span>
        <span class="skill">Visualização de Dados (Matplotlib, Jupyter, Looker)</span>
        <span class="skill">C++ / Sistemas Embarcados (ESP32, Arduino, BLE)</span>
        <span class="skill">Docker / Microsserviços / APIs REST</span>
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
            <strong>Current Position:</strong> Software Developer at Holoss, where I am building a platform for internal and external data management, integrating project datasets and heterogeneous sources, focusing on efficiency, scalability, and decision support.
        </p>
        <p class="description">
            <strong>Technical Expertise:</strong> Full‑stack development (Python, Flask, JavaScript) and system integration, combined with data analytics (Power BI, Pandas) to turn large volumes of data into strategic insights. Proven experience in data architecture, modeling, and visualization, with publications in international conferences (IEEE, Springer) in V2X and localization systems.
        </p>
        <p class="description">
            <strong>Professional Profile:</strong> Information Systems Engineer with a hybrid profile spanning backend development, API integration, and data analysis/visualization. Motivated by complex projects that demand critical thinking, data governance, and tangible contributions to technological innovation in mobility, energy efficiency, and sustainability.
        </p>
        <p class="description">
            <strong>Languages:</strong> Portuguese (Native), English (Fluent – C1), Spanish (Intermediate – B2).
        </p>
        <div class="skills">
        <span class="skill">Python (Flask, Pandas, ETL, Integration)</span>
        <span class="skill">Full‑Stack Development (Flask, JavaScript, HTML/CSS)</span>
        <span class="skill">Data Visualization (Matplotlib, Jupyter, Looker)</span>
        <span class="skill">C++ / Embedded Systems (ESP32, Arduino, BLE)</span>
        <span class="skill">Docker / Microservices / REST APIs</span>
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
            <strong>Puesto Actual:</strong> Desarrollador de Software en Holoss, donde desarrollo una plataforma para la gestión de datos internos y externos, integrando datasets de proyectos y fuentes heterogéneas, con enfoque en eficiencia, escalabilidad y apoyo a la decisión.
        </p>
        <p class="description">
            <strong>Especialización Técnica:</strong> Desarrollo de soluciones full‑stack (Python, Flask, JavaScript) e integración de sistemas, combinado con análisis de datos (Power BI, Pandas) para transformar grandes volúmenes de datos en insights estratégicos. Experiencia comprobada en arquitectura de datos, modelado y visualización, con publicaciones en conferencias internacionales (IEEE, Springer) en las áreas de V2X y sistemas de localización.
        </p>
        <p class="description">
            <strong>Perfil Profesional:</strong> Ingeniero de Sistemas de Información con perfil híbrido que abarca desde el desarrollo de backend e integración de APIs hasta el análisis y visualización de datos. Motivado por proyectos complejos que exigen pensamiento crítico, gobernanza de datos y contribuciones tangibles a la innovación tecnológica en movilidad, eficiencia energética y sostenibilidad.
        </p>
        <p class="description">
            <strong>Idiomas:</strong> Portugués (Nativo), Inglés (Fluido – C1), Español (Intermedio – B2).
        </p>
        <div class="skills">
        <span class="skill">Python (Flask, Pandas, ETL, Integración)</span>
        <span class="skill">Desarrollo Full‑Stack (Flask, JavaScript, HTML/CSS)</span>
        <span class="skill">Visualización de Datos (Matplotlib, Jupyter, Looker)</span>
        <span class="skill">C++ / Sistemas Embebidos (ESP32, Arduino, BLE)</span>
        <span class="skill">Docker / Microservicios / APIs REST</span>
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