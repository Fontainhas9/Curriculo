# 👨‍💻 André Fontainhas' Resume

This repository contains the source code for my professional resume/portfolio website, available at **[fontainhas9.github.io/Curriculo/](https://fontainhas9.github.io/Curriculo/)**.  
The project presents my journey as a **Software Developer and Data Analyst**, detailing my professional experience, projects, publications, and certifications.

The website features full multilingual support (Portuguese, English, and Spanish) and a dark/light theme that adapts to user preferences. The header and footer are dynamically injected via JavaScript, ensuring a consistent and easily maintainable structure across all pages.

---

## 🛠️ Technologies Used

- **HTML5** — Semantic structure and multilingual pages.
- **CSS3** — Responsive layout, custom styling, and dark/light mode.
- **JavaScript (Vanilla)** — Dynamic injection of header/footer, theme toggling with `localStorage`, language selector, and PDF path correction.
- **Font Awesome** — Icons for social links and email.
- **GitHub Pages** — Static website hosting.

---

## 📂 Code Structure

Detailed organization of the project files and folders can be found in the [`structure.txt`](structure.txt) file.

### Key Files

- `script.js` — Contains the multilingual header/footer templates (injected dynamically) and all interactive logic.
- `style.css` — Global styles, responsive design, and dark mode variables.
- `index.html`, `index-en.html`, `index-es.html` — Main resume pages (each language has its own file).
- `certificados.html`, `certificados-en.html`, `certificados-es.html` — Certificate listings.
- `projetos.html`, `projetos-en.html`, `projetos-es.html` — Project descriptions.
- `publicacoes.html`, `publicacoes-en.html`, `publicacoes-es.html` — Scientific publications.

---

### ✨ Code Highlights

- **Dynamic Header/Footer:** The header and footer are not repeated in each HTML file. Instead, `script.js` detects the page language (via filename) and injects the appropriate translated version of the header and footer. This makes maintenance effortless.
- **Dark/Light Mode:** Implemented in `script.js` with `localStorage` persistence. The theme toggle button updates the interface and stores the user's preference.
- **Multilingual Support:** Separate HTML files for each language ensure clean content separation. The language selector updates the page links accordingly.
- **Responsive Design:** `style.css` uses `clamp()` for fluid typography and CSS Grid/Flexbox for adaptive layouts.
- **PDF Path Correction:** The script automatically replaces backslashes with forward slashes in certificate links, ensuring compatibility with web servers.

---

## 📄 Website Content

### 👤 Professional Profile

The website presents a summary of my profile:

- **Current Role:** Software Developer and Data Analyst at CCG/ZGDV Institute, working on IoT solutions, real‑time location systems (RTLS), and collision prevention algorithms (Python).
- **Technical Expertise:** Embedded development (C++, ESP32), data analytics (Python, Power BI), and applied research with publications in IEEE/Springer conferences.
- **Languages:** Portuguese (native), English (C1 – fluent), Spanish (intermediate – B2).

### 💼 Experience and Projects

- **PACMOBINOV:** Implementation of real-time collision detection and prevention algorithms, integrated with mobile applications and embedded systems (OBUs/RSUs).
- **Alliance for Energy Transition (AATE):** Development of a municipal platform for smart energy management and promotion of carbon neutrality.
- **TEXP@CT (PPS7):** Indoor localization system for the textile industry using C++ firmware on ESP32, BLE scanning, and REST API communication.
- **MITI Demo:** Full‑stack web platform (Flask + JavaScript/Leaflet) for real‑time sensor monitoring, with dynamic dashboards and support for data ingestion via MQTT, Kafka, and API.

### 📚 Scientific Publications

1. **"Needs and Requirements Assessment of Physical Product Traceability within the Portuguese Textile and Clothing Industry"** — CENTERIS 2026 (Elsevier/Procedia Computer Science).
2. **"Centralized Kalman Filters to Enhance Localization Accuracy Within Vehicular Networks Context"** — Innovations in Mechatronics Engineering IV 2025 (Springer).
3. **"Leveraging V2P communications to improve the VRU's safety"** — IWCMC 2024 (IEEE).

---

## 🚀 How to Use

To view the online resume, simply go to the following URL:

👉 **[https://fontainhas9.github.io/Curriculo/](https://fontainhas9.github.io/Curriculo/)**  

No installation is needed – the website is publicly available and works on any modern browser (computer, tablet, or smartphone). Use the language flags in the top‑right corner to switch between Portuguese, English, and Spanish. The theme toggle (🌙/☀️) switches between dark and light mode, and your preference is saved for future visits.

## 📬 Contact

- **Email:** [fontesandre98@hotmail.com](mailto:fontesandre98@hotmail.com)
- **LinkedIn:** [André Fontainhas](https://www.linkedin.com/in/andrefontainhas/)
- **GitHub:** [Fontainhas9](https://github.com/Fontainhas9)