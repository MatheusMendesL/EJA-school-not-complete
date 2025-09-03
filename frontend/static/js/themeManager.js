/**
 * Gerenciador de Temas - EJA
 * Sistema reutilizável para alternar entre modo claro e escuro
 */

class ThemeManager {
    constructor() {
        this.theme = null;
        this.themeToggle = null;
        this.init();
    }

    init() {
        console.log('ThemeManager: Inicializando...');
        this.loadTheme();
        this.createThemeToggle();
        this.applyTheme();
        this.setupEventListeners();
        console.log('ThemeManager: Inicializado com sucesso. Tema atual:', this.theme);
    }

    loadTheme() {
        console.log('ThemeManager: Carregando tema...');
        
        // 1º: Preferência do usuário (localStorage)
        const savedTheme = localStorage.getItem('eteconnect-theme');
        console.log('ThemeManager: Tema salvo no localStorage:', savedTheme);
        
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            this.theme = savedTheme;
            console.log('ThemeManager: Usando tema salvo:', this.theme);
            return;
        }

        // 2º: Preferência do navegador (prefers-color-scheme)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.theme = 'dark';
            console.log('ThemeManager: Usando preferência do sistema (dark)');
            return;
        }

        // 3º: Padrão (modo claro)
        this.theme = 'light';
        console.log('ThemeManager: Usando tema padrão (light)');
    }

    /**
     * Cria o botão de alternar tema
     */
    createThemeToggle() {
        console.log('ThemeManager: Criando botão de tema...');
        
        // Verifica se já existe um botão de tema
        const existingToggle = document.querySelector('.light-dark');
        console.log('ThemeManager: Botão existente encontrado:', existingToggle);
        
        if (existingToggle) {
            this.themeToggle = existingToggle;
            console.log('ThemeManager: Usando botão existente');
            
            // Adiciona o event listener ao botão existente
            this.addClickHandler(existingToggle);
            return;
        }

        // Se não existir, cria um novo
        this.themeToggle = document.createElement('div');
        this.themeToggle.className = 'light-dark';
        this.themeToggle.innerHTML = `
            <div class="moon p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                </svg>
            </div>
            <div class="sun p-1 d-none">
                <svg xmlns="http://www.w3.org/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
            </div>
        `;

        this.insertThemeToggle();
    }

 
    insertThemeToggle() {
        // Se já existe um botão, não precisa inserir
        if (document.querySelector('.light-dark')) {
            return;
        }

        const header = document.querySelector('header');
        if (!header) {
            // Se não encontrar header, tenta inserir no body temporariamente
            document.body.appendChild(this.themeToggle);
            return;
        }

        // Procura por um local apropriado para inserir o botão
        const headerContent = header.querySelector('.container-fluid, .row, .col');
        if (headerContent) {
            // Insere no final do conteúdo do header
            headerContent.appendChild(this.themeToggle);
        } else {
            // Insere no header
            header.appendChild(this.themeToggle);
        }
    }

    /**
     * Aplica o tema atual ao documento
     */
    applyTheme() {
        console.log('ThemeManager: Aplicando tema:', this.theme);
        
        const html = document.documentElement;
        
        // Remove classes anteriores
        html.removeAttribute('data-theme');
        
        // Aplica o tema atual
        if (this.theme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            console.log('ThemeManager: Tema escuro aplicado');
        } else {
            console.log('ThemeManager: Tema claro aplicado');
        }
        
        // Salva no localStorage
        localStorage.setItem('eteconnect-theme', this.theme);
        console.log('ThemeManager: Tema salvo no localStorage');
        
        // Atualiza o botão
        this.updateToggleButton();
    }

    /**
     * Atualiza a aparência do botão de alternar
     */
    updateToggleButton() {
        if (!this.themeToggle) return;
        
        const iconSun = this.themeToggle.querySelector('.sun');
        const iconMoon = this.themeToggle.querySelector('.moon');
        
        if (!iconSun || !iconMoon) return;
        
        if (this.theme === 'dark') {
            iconSun.classList.remove('d-none');
            iconMoon.classList.add('d-none');
        } else {
            iconSun.classList.add('d-none');
            iconMoon.classList.remove('d-none');
        }
    }

    /**
     * Alterna entre os temas
     */
    toggleTheme() {
        console.log('ThemeManager: Alternando tema de', this.theme, 'para', this.theme === 'light' ? 'dark' : 'light');
        
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        
        // Dispara evento customizado para outros componentes
        this.dispatchThemeChangeEvent();
    }

    /**
     * Define um tema específico
     */
    setTheme(theme) {
        if (theme !== 'light' && theme !== 'dark') {
            console.warn('Tema inválido:', theme);
            return;
        }
        
        this.theme = theme;
        this.applyTheme();
        this.dispatchThemeChangeEvent();
    }

    /**
     * Obtém o tema atual
     */
    getCurrentTheme() {
        return this.theme;
    }

    /**
     * Dispara evento de mudança de tema
     */
    dispatchThemeChangeEvent() {
        const event = new CustomEvent('themeChanged', {
            detail: { theme: this.theme }
        });
        document.dispatchEvent(event);
    }

    /**
     * Adiciona o event listener de clique ao botão de tema
     */
    addClickHandler(element) {
        console.log('ThemeManager: Adicionando event listener ao elemento:', element);
        console.log('ThemeManager: Elemento HTML:', element.outerHTML);
        
        // Remove event listeners anteriores para evitar duplicação
        const newElement = element.cloneNode(true);
        element.parentNode.replaceChild(newElement, element);
        this.themeToggle = newElement;
        
        newElement.addEventListener('click', (e) => {
            console.log('ThemeManager: Botão de tema clicado!');
            console.log('ThemeManager: Evento:', e);
            e.preventDefault();
            e.stopPropagation();
            this.toggleTheme();
        });
        
        console.log('ThemeManager: Event listener adicionado com sucesso');
    }

    /**
     * Configura os event listeners
     */
    setupEventListeners() {
        // Botão de alternar tema (já configurado em addClickHandler)
        console.log('ThemeManager: Configurando event listeners...');

        // Listener para mudanças na preferência do sistema
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                // Só aplica se o usuário não tiver uma preferência salva
                if (!localStorage.getItem('eteconnect-theme')) {
                    this.theme = e.matches ? 'dark' : 'light';
                    this.applyTheme();
                }
            });
        }

        // Listener para eventos de mudança de tema
        document.addEventListener('themeChanged', (e) => {
            // Permite que outros componentes reajam às mudanças de tema
            console.log('Tema alterado para:', e.detail.theme);
        });
    }

    /**
     * Força a reaplicação do tema (útil para componentes dinâmicos)
     */
    refresh() {
        this.applyTheme();
    }
}

// Inicializa o gerenciador quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded disparado - criando ThemeManager...');
    window.themeManager = new ThemeManager();
    console.log('ThemeManager criado e disponível em window.themeManager:', window.themeManager);
});