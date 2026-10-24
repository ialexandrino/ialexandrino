// ========== TEXT (EN / PT) ==========
const I18N = {
    en: {
        'nav.about': 'About',
        'nav.exp': 'Experience',
        'nav.stack': 'Stack',
        'nav.certs': 'Certifications',
        'nav.connect': 'Contact',
        'hero.label': '// solutions architect · cloud & infrastructure',
        'hero.tagline': 'I design cloud infrastructure that stays up.',
        'hero.description': '15 years in technology, the last 6 architecting business-critical financial platforms at Itaú and Bradesco — cloud-native on AWS and Azure, automated end to end and built to stay up.',
        'hero.ctaStack': 'See my experience',
        'hero.ctaContact': 'Get in touch',
        'stats.years': 'Years in tech',
        'stats.certs': 'Certifications',
        'stats.clouds': 'Clouds · AWS + Azure',
        'about.title': 'About <span>me</span>',
        'about.p1': 'I started in 2010 on the datacenter floor — configuring servers and fixing Active Directory at 2 a.m. From there I moved through <strong>Microsoft infrastructure, cloud consulting and SRE</strong>, always on the layer everything else depends on.',
        'about.p2': 'Today I\'m a <strong>Senior Solutions Architect at Bradesco</strong>, after nearly 6 years at Itaú. I set architecture standards, drive decisions across engineering, product and business, and <strong>mentor engineers</strong> along the way — because I know their work from the inside.',
        'about.h1k': 'Multi-cloud',
        'about.h1t': 'AWS Solutions Architect Pro & Azure Solutions Architect Expert',
        'about.h2k': 'Financial services',
        'about.h2t': 'Itaú (Business Banking, Acquiring) · Bradesco (Auto Finance)',
        'about.h3k': 'Leadership',
        'about.h3t': 'Mentoring & development plans · Management 3.0 · Tech Management (FIAP)',
        'exp.title': 'Career <span>path</span>',
        'exp.sub': 'From the datacenter to architecture of critical banking platforms.',
        'exp.earlier': 'Earlier: Microsoft infrastructure, System Center and virtualization at Quality S.A., Algar Tech, Sompo Seguros, Ascenty and others (2010 – 2018).',
        'stack.title': 'Tech <span>stack</span>',
        'stack.sub': 'Live status of my toolbox. (Go is still starting up.)',
        'certs.title': 'Certifications',
        'certs.sub': '{n} certifications across AWS, Microsoft, Linux Foundation, VMware and more.',
        'certs.featured.aws': 'The highest-level AWS architecture certification.',
        'certs.featured.azure': 'Microsoft\'s expert-level Azure architecture certification.',
        'certs.featured.kcna': 'Kubernetes and the cloud-native ecosystem, by the Linux Foundation.',
        'certs.group.other': 'Other',
        'certs.group.leadership': 'Leadership & Agile',
        'connect.title': 'Let\'s <span>talk</span>',
        'connect.text': 'Planning a migration, scaling an environment, or just want to talk cloud? My inbox is open.',
        'footer.built': 'Hand-built with HTML, CSS & a little JS.',
        roles: ['Solutions Architect', 'AWS & Azure certified', 'Infrastructure as Code', 'Microsoft Certified Trainer'],
    },
    pt: {
        'nav.about': 'Sobre',
        'nav.exp': 'Experiência',
        'nav.stack': 'Stack',
        'nav.certs': 'Certificações',
        'nav.connect': 'Contato',
        'hero.label': '// arquiteto de soluções · cloud & infraestrutura',
        'hero.tagline': 'Projeto infraestrutura em nuvem que não cai.',
        'hero.description': '15 anos em tecnologia, os últimos 6 desenhando plataformas financeiras críticas no Itaú e no Bradesco — cloud-native em AWS e Azure, automatizadas de ponta a ponta e feitas para não cair.',
        'hero.ctaStack': 'Ver experiência',
        'hero.ctaContact': 'Fale comigo',
        'stats.years': 'Anos em tecnologia',
        'stats.certs': 'Certificações',
        'stats.clouds': 'Nuvens · AWS + Azure',
        'about.title': 'Sobre <span>mim</span>',
        'about.p1': 'Comecei em 2010 no chão do datacenter — configurando servidores e resolvendo Active Directory às 2h da manhã. Dali passei por <strong>infraestrutura Microsoft, consultoria cloud e SRE</strong>, sempre na camada da qual todo o resto depende.',
        'about.p2': 'Hoje sou <strong>Senior Solutions Architect no Bradesco</strong>, depois de quase 6 anos no Itaú. Defino padrões arquiteturais, conduzo decisões entre engenharia, produto e negócio e <strong>desenvolvo engenheiros</strong> no caminho — porque conheço o trabalho deles por dentro.',
        'about.h1k': 'Multi-cloud',
        'about.h1t': 'AWS Solutions Architect Pro & Azure Solutions Architect Expert',
        'about.h2k': 'Setor financeiro',
        'about.h2t': 'Itaú (Pessoa Jurídica, Adquirência) · Bradesco (Financiamento de Veículos)',
        'about.h3k': 'Liderança',
        'about.h3t': 'Mentorias e PDIs · Management 3.0 · Pós em Tech Management (FIAP)',
        'exp.title': 'Trajetória <span>profissional</span>',
        'exp.sub': 'Do datacenter à arquitetura de plataformas bancárias críticas.',
        'exp.earlier': 'Antes: infraestrutura Microsoft, System Center e virtualização na Quality S.A., Algar Tech, Sompo Seguros, Ascenty e outras (2010 – 2018).',
        'stack.title': 'Stack <span>técnica</span>',
        'stack.sub': 'Status ao vivo da minha caixa de ferramentas. (O Go ainda está subindo.)',
        'certs.title': 'Certificações',
        'certs.sub': '{n} certificações em AWS, Microsoft, Linux Foundation, VMware e outras.',
        'certs.featured.aws': 'A certificação de arquitetura de mais alto nível da AWS.',
        'certs.featured.azure': 'A certificação de arquitetura Azure de nível expert da Microsoft.',
        'certs.featured.kcna': 'Kubernetes e o ecossistema cloud-native, pela Linux Foundation.',
        'certs.group.other': 'Outras',
        'certs.group.leadership': 'Liderança & Agilidade',
        'connect.title': 'Vamos <span>conversar</span>',
        'connect.text': 'Planejando uma migração, escalando um ambiente ou só quer falar de cloud? Estou à disposição.',
        'footer.built': 'Feito à mão com HTML, CSS e um pouco de JS.',
        roles: ['Arquiteto de Soluções', 'Certificado AWS & Azure', 'Infraestrutura como Código', 'Microsoft Certified Trainer'],
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
    ['architecture', 'microservices', '1/1', 'Running'],
    ['architecture', 'event-driven', '1/1', 'Running'],
    ['architecture', 'ddd', '1/1', 'Running'],
    ['architecture', 'c4-model', '1/1', 'Running'],
    ['containers', 'docker', '1/1', 'Running'],
    ['containers', 'kubernetes', '1/1', 'Running'],
    ['containers', 'helm', '1/1', 'Running'],
    ['containers', 'istio', '1/1', 'Running'],
    ['virtualization', 'vmware', '1/1', 'Running'],
    ['iac', 'terraform', '1/1', 'Running'],
    ['iac', 'ansible', '1/1', 'Running'],
    ['ci-cd', 'github-actions', '1/1', 'Running'],
    ['ci-cd', 'argocd', '1/1', 'Running'],
    ['ci-cd', 'jenkins', '1/1', 'Running'],
    ['observability', 'prometheus', '1/1', 'Running'],
    ['observability', 'grafana', '1/1', 'Running'],
    ['observability', 'datadog', '1/1', 'Running'],
    ['observability', 'splunk', '1/1', 'Running'],
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

const EXPERIENCE = [
    {
        company: 'Bradesco',
        dates: { en: 'Dec 2025 – Present', pt: 'dez 2025 – presente' },
        role: { en: 'Senior Solutions Architect', pt: 'Senior Solutions Architect' },
        context: { en: 'Auto Finance', pt: 'Financiamento de Veículos' },
        bullets: {
            en: ['Enterprise architecture for high-complexity initiatives: microservices, APIs, integration, data and legacy modernization.',
                'Leads Azure and AWS cloud initiatives and architecture governance across cross-functional squads.'],
            pt: ['Arquitetura corporativa para projetos de alta complexidade: microsserviços, APIs, integração, dados e modernização de legados.',
                'Conduz iniciativas cloud em Azure e AWS e a governança arquitetural junto a squads multidisciplinares.'],
        },
    },
    {
        company: 'Itaú Unibanco',
        dates: { en: 'Apr 2022 – Nov 2025', pt: 'abr 2022 – nov 2025' },
        role: { en: 'Senior Solutions Architect', pt: 'Senior Solutions Architect' },
        context: { en: 'Business Banking · Merchant Acquiring', pt: 'Pessoa Jurídica · Adquirência' },
        bullets: {
            en: ['Reusable building blocks and Helm charts that cut time-to-market for new microservices by <strong>60%</strong>.',
                'Architecture standards adopted by multiple squads; legacy modernization to event-driven with DDD and service mesh.',
                'Mentored engineers and received the <strong>Mérito Ituber</strong> award for performance and cost reduction.'],
            pt: ['Building blocks e Helm Charts reutilizáveis que reduziram em <strong>60%</strong> o time-to-market de novos microsserviços.',
                'Padrões arquiteturais adotados por múltiplos squads; modernização de legados para event-driven com DDD e Service Mesh.',
                'Mentorou engenheiros e recebeu o <strong>Mérito Ituber</strong> por performance e redução de custos.'],
        },
    },
    {
        company: 'Itaú Unibanco',
        dates: { en: 'Jul 2020 – Apr 2022', pt: 'jul 2020 – abr 2022' },
        role: { en: 'Senior Systems Engineer — SRE', pt: 'Senior System Engineer — SRE' },
        context: { en: 'Microsoft platforms', pt: 'Plataformas Microsoft' },
        bullets: {
            en: ['Cut onboarding time by <strong>40%</strong> by automating M365, Teams, SCCM and Intune.',
                'Incident commander for critical outages, leading root-cause analysis and preventive actions.'],
            pt: ['Reduziu em <strong>40%</strong> o tempo de onboarding automatizando M365, Teams, SCCM e Intune.',
                'Incident commander em crises críticas, conduzindo análise de causa raiz e ações preventivas.'],
        },
    },
    {
        company: 'V8 Consulting',
        dates: { en: 'Nov 2018 – Jul 2020', pt: 'nov 2018 – jul 2020' },
        role: { en: 'IT Infrastructure Specialist', pt: 'IT Infrastructure Specialist' },
        context: { en: 'Enterprise consulting', pt: 'Consultoria enterprise' },
        bullets: {
            en: ['Datacenter migrations to AWS and Azure with minimal-downtime cutovers; hybrid connectivity with Direct Connect and ExpressRoute.'],
            pt: ['Migrações de datacenters para AWS e Azure com cutovers de downtime mínimo; conectividade híbrida com Direct Connect e ExpressRoute.'],
        },
    },
    {
        company: 'F1 Tecnologia Corporativa',
        dates: { en: 'Jan 2016 – Nov 2018', pt: 'jan 2016 – nov 2018' },
        role: { en: 'Cloud Solutions Consultant', pt: 'Cloud Solutions Consultant' },
        context: { en: 'Enterprise consulting', pt: 'Consultoria enterprise' },
        bullets: {
            en: ['Office 365 migrations, Azure IaaS adoption and System Center deployments for enterprise clients.'],
            pt: ['Migrações para Office 365, adoção de Azure IaaS e implantação de System Center em clientes enterprise.'],
        },
    },
];

const CERT_GROUPS = [
    {
        vendor: 'AWS',
        certs: [
            'AWS Certified Solutions Architect – Professional',
            'AWS Certified Solutions Architect – Associate',
            'AWS Certified Cloud Practitioner',
        ],
    },
    {
        vendor: 'Linux Foundation · GitHub',
        certs: [
            'KCNA: Kubernetes and Cloud Native Associate',
            'GitHub Foundations',
        ],
    },
    {
        vendor: 'Microsoft',
        certs: [
            'Azure Solutions Architect Expert',
            'Azure Administrator Associate',
            'Microsoft Certified Trainer (MCT)',
            'MCSE: Cloud Platform and Infrastructure',
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
        vendor: 'leadership',
        certs: [
            'Management 3.0 Foundation Workshop',
            'DevOps Essentials Professional Certificate',
            'Scrum Foundation Professional Certificate',
        ],
    },
    {
        vendor: 'other',
        certs: [
            'Arquitetura de Soluções Foundation — Itaú Unibanco',
            'Alibaba Cloud Fundamentals',
            'Global Certified Snow Software Administrator',
            'STS Altiris Client Management Suite 7.1',
            'STS Symantec Management Platform 7.1',
        ],
    },
];

const FEATURED_CERTS = [
    { vendor: 'AWS', name: 'Solutions Architect – Professional', note: 'certs.featured.aws' },
    { vendor: 'Microsoft', name: 'Azure Solutions Architect Expert', note: 'certs.featured.azure' },
    { vendor: 'Linux Foundation', name: 'Kubernetes and Cloud Native Associate (KCNA)', note: 'certs.featured.kcna' },
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
                <h3>${t(`certs.group.${g.vendor}`) || g.vendor} · ${g.certs.length}</h3>
                <ul>${g.certs.map((c) => `<li>${c}</li>`).join('')}</ul>
            </div>`)
        .join('');
};

const renderExperience = () => {
    document.getElementById('timeline').innerHTML = EXPERIENCE
        .map((job) => `
            <li class="job reveal visible">
                <div class="job-when">${job.dates[lang]}</div>
                <div class="job-body">
                    <h3 class="job-role">${job.role[lang]} <span class="accent">@ ${job.company}</span></h3>
                    <p class="job-context">${job.context[lang]}</p>
                    <ul>${job.bullets[lang].map((b) => `<li>${b}</li>`).join('')}</ul>
                </div>
            </li>`)
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
    renderExperience();
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
if (reducedMotion) document.getElementById('hero-diagram').pauseAnimations();
setLang(lang);
resize();
requestAnimationFrame(draw);
