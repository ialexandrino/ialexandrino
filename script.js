// ========== TEXT (EN / PT) ==========
const I18N = {
    en: {
        'nav.about': 'About',
        'nav.stack': 'Stack',
        'nav.certs': 'Certifications',
        'nav.connect': 'Contact',
        'hero.label': '// cloud & infrastructure architect',
        'hero.tagline': 'I design cloud infrastructure that stays up.',
        'hero.description': '15+ years taking systems from on-prem networks to AWS and Azure — designed to scale, automated with Terraform, and monitored before anything breaks.',
        'hero.ctaStack': 'See my stack',
        'hero.ctaContact': 'Get in touch',
        'stats.years': 'Years in infra',
        'stats.certs': 'Certifications',
        'stats.clouds': 'Clouds · AWS + Azure',
        'about.title': 'About <span>me</span>',
        'about.p1': 'I\'ve spent 15 years on the layer everything else depends on — <strong>networks, servers, and now cloud platforms</strong>. I started in routing, switching and datacenter operations, and moved with the industry to the cloud.',
        'about.p2': 'Today I design and run <strong>highly available infrastructure on AWS and Azure</strong>, automate it end to end, and teach it too, as a <strong>Microsoft Certified Trainer</strong>. I work best in teams that value clear communication and shared ownership.',
        'about.h1k': 'Multi-cloud',
        'about.h1t': 'AWS Solutions Architect Pro & Azure Solutions Architect Expert',
        'about.h2k': 'Network roots',
        'about.h2t': 'Routing, switching and troubleshooting from the ground up',
        'about.h3k': 'Educator',
        'about.h3t': 'Microsoft Certified Trainer (MCT)',
        'stack.title': 'Tech <span>stack</span>',
        'stack.sub': 'Live status of my toolbox. (Go is still starting up.)',
        'certs.title': 'Certifications',
        'certs.sub': '{n} certifications across AWS, Microsoft, VMware and more.',
        'certs.featured.aws': 'The highest-level AWS architecture certification.',
        'certs.featured.azure': 'Microsoft\'s expert-level Azure architecture certification.',
        'certs.featured.mct': 'Certified to teach official Microsoft courses.',
        'certs.group.other': 'Other',
        'connect.title': 'Let\'s <span>talk</span>',
        'connect.text': 'Planning a migration, scaling an environment, or just want to talk cloud? My inbox is open.',
        'footer.built': 'Hand-built with HTML, CSS & a little JS.',
        roles: ['Cloud Solutions Architect', 'AWS & Azure certified', 'Infrastructure as Code', 'Microsoft Certified Trainer'],
    },
    pt: {
        'nav.about': 'Sobre',
        'nav.stack': 'Stack',
        'nav.certs': 'Certificações',
        'nav.connect': 'Contato',
        'hero.label': '// arquiteto de cloud & infraestrutura',
        'hero.tagline': 'Projeto infraestrutura em nuvem que não cai.',
        'hero.description': 'Mais de 15 anos levando sistemas de redes on-premises para AWS e Azure — projetados para escalar, automatizados com Terraform e monitorados antes que algo quebre.',
        'hero.ctaStack': 'Ver minha stack',
        'hero.ctaContact': 'Fale comigo',
        'stats.years': 'Anos em infra',
        'stats.certs': 'Certificações',
        'stats.clouds': 'Nuvens · AWS + Azure',
        'about.title': 'Sobre <span>mim</span>',
        'about.p1': 'Passei 15 anos na camada da qual todo o resto depende — <strong>redes, servidores e, agora, plataformas de nuvem</strong>. Comecei com roteamento, switching e operação de datacenter, e acompanhei a indústria na migração para a nuvem.',
        'about.p2': 'Hoje projeto e opero <strong>infraestrutura de alta disponibilidade na AWS e no Azure</strong>, automatizo tudo de ponta a ponta e também ensino, como <strong>Microsoft Certified Trainer</strong>. Rendo mais em times que valorizam comunicação clara e responsabilidade compartilhada.',
        'about.h1k': 'Multi-cloud',
        'about.h1t': 'AWS Solutions Architect Pro & Azure Solutions Architect Expert',
        'about.h2k': 'Raiz em redes',
        'about.h2t': 'Roteamento, switching e troubleshooting desde a base',
        'about.h3k': 'Instrutor',
        'about.h3t': 'Microsoft Certified Trainer (MCT)',
        'stack.title': 'Stack <span>técnica</span>',
        'stack.sub': 'Status ao vivo da minha caixa de ferramentas. (O Go ainda está subindo.)',
        'certs.title': 'Certificações',
        'certs.sub': '{n} certificações em AWS, Microsoft, VMware e outras.',
        'certs.featured.aws': 'A certificação de arquitetura de mais alto nível da AWS.',
        'certs.featured.azure': 'A certificação de arquitetura Azure de nível expert da Microsoft.',
        'certs.featured.mct': 'Certificado para ministrar os cursos oficiais da Microsoft.',
        'certs.group.other': 'Outras',
        'connect.title': 'Vamos <span>conversar</span>',
        'connect.text': 'Planejando uma migração, escalando um ambiente ou só quer falar de cloud? Estou à disposição.',
        'footer.built': 'Feito à mão com HTML, CSS e um pouco de JS.',
        roles: ['Arquiteto de Soluções Cloud', 'Certificado AWS & Azure', 'Infraestrutura como Código', 'Microsoft Certified Trainer'],
    },
};

// ========== CONTENT ==========
// [namespace, name, ready, status]
const SKILLS = [
    ['cloud', 'aws', '1/1', 'Running'],
    ['cloud', 'azure', '1/1', 'Running'],
    ['cloud', 'alibaba-cloud', '1/1', 'Running'],
    ['aws', 'vpc', '1/1', 'Running'],
    ['aws', 'auto-scaling', '1/1', 'Running'],
    ['aws', 'lambda', '1/1', 'Running'],
    ['containers', 'docker', '1/1', 'Running'],
    ['containers', 'kubernetes', '1/1', 'Running'],
    ['virtualization', 'vmware', '1/1', 'Running'],
    ['iac', 'terraform', '1/1', 'Running'],
    ['iac', 'ansible', '1/1', 'Running'],
    ['ci-cd', 'jenkins', '1/1', 'Running'],
    ['observability', 'prometheus', '1/1', 'Running'],
    ['observability', 'grafana', '1/1', 'Running'],
    ['observability', 'alertmanager', '1/1', 'Running'],
    ['observability', 'cloudwatch', '1/1', 'Running'],
    ['network', 'routing', '1/1', 'Running'],
    ['network', 'switching', '1/1', 'Running'],
    ['identity', 'azure-ad', '1/1', 'Running'],
    ['identity', 'azure-mfa', '1/1', 'Running'],
    ['identity', 'intune', '1/1', 'Running'],
    ['identity', 'sccm', '1/1', 'Running'],
    ['os', 'linux', '1/1', 'Running'],
    ['os', 'windows-server', '1/1', 'Running'],
    ['productivity', 'office-365', '1/1', 'Running'],
    ['code', 'python', '1/1', 'Running'],
    ['code', 'powershell', '1/1', 'Running'],
    ['code', 'bash', '1/1', 'Running'],
    ['code', 'go', '0/1', 'ContainerCreating'],
];

const CERT_GROUPS = [
    {
        vendor: 'AWS',
        certs: [
            'AWS Certified Solutions Architect – Professional',
            'AWS Certified Solutions Architect – Associate',
        ],
    },
    {
        vendor: 'Microsoft',
        certs: [
            'Azure Solutions Architect Expert',
            'Azure Administrator Associate',
            'Microsoft Certified Trainer (MCT)',
            'MCSE: Private Cloud',
            'MCSE: Core Infrastructure',
            'MCSA: Windows Server 2008 & 2012',
            '70-243 Administering & Deploying SCCM 2012',
            '70-346 Managing Office 365 Identities and Requirements',
            '74-409 Server Virtualization with Windows Server and System Center',
        ],
    },
    {
        vendor: 'VMware',
        certs: ['VCP – Data Center Virtualization 2019'],
    },
    {
        vendor: 'other',
        certs: [
            'Alibaba Cloud Fundamentals',
            'Global Certified Snow Software Administrator',
            'STS Altiris Client Management Suite 7.1',
            'STS Symantec Management Platform 7.1',
            'DevOps Essentials Professional Certificate',
            'Scrum Foundation Professional Certificate',
        ],
    },
];

const FEATURED_CERTS = [
    { vendor: 'AWS', name: 'Solutions Architect – Professional', note: 'certs.featured.aws' },
    { vendor: 'Microsoft', name: 'Azure Solutions Architect Expert', note: 'certs.featured.azure' },
    { vendor: 'Microsoft', name: 'Certified Trainer (MCT)', note: 'certs.featured.mct' },
];

const CERT_COUNT = CERT_GROUPS.reduce((n, g) => n + g.certs.length, 0);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ========== LANGUAGE ==========
const storage = {
    get(key) {
        try { return localStorage.getItem(key); } catch { return null; }
    },
    set(key, value) {
        try { localStorage.setItem(key, value); } catch { /* storage unavailable */ }
    },
};

let lang = storage.get('lang') || (navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en');
const t = (key) => I18N[lang][key];

const renderCerts = () => {
    document.getElementById('cert-featured').innerHTML = FEATURED_CERTS
        .map((c) => `
            <article class="cert-card frame">
                <span class="cert-vendor">${c.vendor}</span>
                <h3 class="cert-name">${c.name}</h3>
                <p class="section-sub">${t(c.note)}</p>
            </article>`)
        .join('');

    document.getElementById('cert-groups').innerHTML = CERT_GROUPS
        .map((g) => `
            <div class="cert-group reveal visible">
                <h3>${g.vendor === 'other' ? t('certs.group.other') : g.vendor} · ${g.certs.length}</h3>
                <ul>${g.certs.map((c) => `<li>${c}</li>`).join('')}</ul>
            </div>`)
        .join('');
};

const setLang = (next) => {
    lang = next;
    storage.set('lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.innerHTML = t(el.dataset.i18n).replace('{n}', CERT_COUNT);
    });
    document.querySelectorAll('[data-lang]').forEach((btn) => {
        btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });

    renderCerts();
    restartTyping();
};

document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

document.getElementById('cert-count').textContent = CERT_COUNT;
document.getElementById('year').textContent = new Date().getFullYear();

// ========== NAV ==========
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20), { passive: true });

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
}));

// ========== TYPED ROLE ==========
const typedEl = document.getElementById('typed-role');
let typingTimer = null;

function restartTyping() {
    clearTimeout(typingTimer);
    const roles = t('roles');

    if (reducedMotion) {
        typedEl.textContent = roles[0];
        return;
    }

    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const tick = () => {
        const role = roles[roleIdx];
        charIdx += deleting ? -1 : 1;
        typedEl.textContent = role.slice(0, charIdx);

        let delay = deleting ? 30 : 65;
        if (!deleting && charIdx === role.length) {
            deleting = true;
            delay = 1800;
        } else if (deleting && charIdx === 0) {
            deleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            delay = 400;
        }
        typingTimer = setTimeout(tick, delay);
    };
    typedEl.textContent = '';
    typingTimer = setTimeout(tick, 600);
}

// ========== TERMINAL ==========
const terminalBody = document.getElementById('terminal-body');
const COMMAND = 'kubectl get skills -A';
const COLS = ['NAMESPACE', 'NAME', 'READY', 'STATUS'];
const widths = COLS.map((c, i) => Math.max(c.length, ...SKILLS.map((r) => r[i].length)) + 3);

const pad = (text, i) => text.padEnd(widths[i]);
const promptLine = (cmd) => `<span class="t-prompt">ivan@cloud:~$</span> <span class="t-cmd">${cmd}</span>`;
const headerLine = `<span class="t-head">${COLS.map(pad).join('')}</span>`;
const skillLine = ([ns, name, ready, status]) =>
    `<span class="t-ns">${pad(ns, 0)}</span><span class="t-name">${pad(name, 1)}</span>${pad(ready, 2)}` +
    `<span class="${status === 'Running' ? 't-ok' : 't-wait'}">${status}</span>`;
const cursorLine = `${promptLine('')}<span class="t-cursor">▍</span>`;

const renderTerminal = (typed, rowCount) => {
    const lines = [promptLine(typed) + (rowCount < 0 ? '<span class="t-cursor">▍</span>' : '')];
    if (rowCount >= 0) lines.push(headerLine, ...SKILLS.slice(0, rowCount).map(skillLine));
    if (rowCount === SKILLS.length) lines.push('', cursorLine);
    terminalBody.innerHTML = lines.join('\n');
};

const playTerminal = () => {
    if (reducedMotion) {
        renderTerminal(COMMAND, SKILLS.length);
        return;
    }
    let chars = 0;
    const typeCmd = () => {
        renderTerminal(COMMAND.slice(0, chars), -1);
        if (chars++ < COMMAND.length) {
            setTimeout(typeCmd, 55);
        } else {
            let rows = 0;
            const printRow = () => {
                renderTerminal(COMMAND, rows);
                if (rows++ < SKILLS.length) setTimeout(printRow, rows === 1 ? 350 : 45);
            };
            setTimeout(printRow, 250);
        }
    };
    typeCmd();
};

renderTerminal('', -1);
new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
        obs.disconnect();
        playTerminal();
    }
}, { threshold: 0.3 }).observe(document.getElementById('terminal'));

// ========== SCROLL REVEAL ==========
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ========== NETWORK BACKGROUND ==========
const canvas = document.getElementById('net-canvas');
const ctx = canvas.getContext('2d');
const LINK_DIST = 150;
const mouse = { x: -9999, y: -9999 };
let width = 0;
let height = 0;
let nodes = [];

const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(80, Math.round((width * height) / 18000));
    nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
    }));
};

const draw = () => {
    ctx.clearRect(0, 0, width, height);

    for (const n of nodes) {
        if (!reducedMotion) {
            n.x += n.vx;
            n.y += n.vy;
            if (n.x < 0 || n.x > width) n.vx *= -1;
            if (n.y < 0 || n.y > height) n.vy *= -1;
        }
    }

    for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
            const b = nodes[j];
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < LINK_DIST) {
                ctx.strokeStyle = `rgba(61, 214, 208, ${0.12 * (1 - dist / LINK_DIST)})`;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        }
        const near = Math.max(0, 1 - Math.hypot(a.x - mouse.x, a.y - mouse.y) / 200);
        ctx.fillStyle = `rgba(61, 214, 208, ${0.25 + 0.6 * near})`;
        ctx.fillRect(a.x - 1.5, a.y - 1.5, 3, 3);
    }

    if (!reducedMotion) requestAnimationFrame(draw);
};

window.addEventListener('resize', () => {
    resize();
    if (reducedMotion) draw();
});
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}, { passive: true });

// ========== INIT ==========
setLang(lang);
resize();
requestAnimationFrame(draw);
