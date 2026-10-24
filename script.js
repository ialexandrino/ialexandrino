document.documentElement.classList.add('js');

// ========== TEXT (PT / EN) ==========
const I18N = {
    en: {
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'hero.eyebrow': 'Ivan Alexandrino · Solutions Architect',
        'hero.title': 'Cloud and AI for systems that <span class="accent">can\'t stop</span>.',
        'hero.lead': 'Senior Solutions Architect at Bradesco, formerly Itaú. 15 years in technology — today between cloud platforms and applied AI.',
        'hero.cta': 'Get to know me',
        'hero.caption': 'A typical high-availability design: two zones, no single point of failure.',
        'impact.label': 'Impact',
        'impact.title': 'Results you can measure',
        'impact.lead': 'Titles say little. These are the outcomes I point to when someone asks what changed because I was there.',
        'impact.s1': 'years in technology, the last 6 in large banks',
        'impact.s2': 'less time-to-market for new microservices',
        'impact.s3': 'less onboarding time through automation',
        'impact.s4': 'certifications across AWS, Azure, Kubernetes and more',
        'companies.title': 'Where I built my career',
        'about.label': 'About',
        'about.title': 'About me',
        'about.p1': 'I\'m a solutions architect with 15 years in technology, the last 6 at large banks. I started in infrastructure and SRE, and today I design <strong>cloud platforms on AWS and Azure</strong> — connecting engineering, product and business, and helping the teams I work with grow.',
        'about.career': 'Career',
        'about.education': 'Education',
        'skills.label': 'Skills',
        'skills.title': 'Tools and certifications',
        'skills.lead': 'What I use day to day — and the certifications that back it up.',
        'certs.all': 'See all {n} certifications',
        'certs.featured.aws': 'The highest-level AWS architecture certification.',
        'certs.featured.azure': 'Microsoft\'s expert-level Azure architecture certification.',
        'certs.featured.kcna': 'Kubernetes and the cloud-native ecosystem, by the Linux Foundation.',
        'certs.group.leadership': 'Leadership & Agile',
        'certs.group.other': 'Other',
        'contact.label': 'Contact',
        'contact.title': 'Let\'s talk?',
        'contact.lead': 'Want to talk architecture, cloud or technology leadership? My inbox is open.',
        marquee: ['Solutions architecture', 'AWS', 'Azure', 'Kubernetes', 'Applied AI', 'Financial services', 'Technical leadership', 'TypeScript', 'Terraform', 'Cloud-native'],
    },
    pt: {
        'nav.about': 'Sobre',
        'nav.skills': 'Competências',
        'nav.contact': 'Contato',
        'hero.eyebrow': 'Ivan Alexandrino · Arquiteto de Soluções',
        'hero.title': 'Cloud e IA para sistemas que <span class="accent">não podem parar</span>.',
        'hero.lead': 'Senior Solutions Architect no Bradesco, com passagem pelo Itaú. 15 anos em tecnologia — hoje entre plataformas cloud e IA aplicada.',
        'hero.cta': 'Conheça minha trajetória',
        'hero.caption': 'Um desenho típico de alta disponibilidade: duas zonas, nenhum ponto único de falha.',
        'impact.label': 'Impacto',
        'impact.title': 'Resultados que dá para medir',
        'impact.lead': 'Cargo diz pouco. Estes são os resultados que eu aponto quando alguém pergunta o que mudou porque eu estava lá.',
        'impact.s1': 'anos em tecnologia, os últimos 6 em grandes bancos',
        'impact.s2': 'menos time-to-market para novos microsserviços',
        'impact.s3': 'menos tempo de onboarding com automação',
        'impact.s4': 'certificações em AWS, Azure, Kubernetes e mais',
        'companies.title': 'Onde construí minha trajetória',
        'about.label': 'Sobre',
        'about.title': 'Sobre mim',
        'about.p1': 'Sou arquiteto de soluções com 15 anos em tecnologia, os últimos 6 em grandes bancos. Comecei em infraestrutura e SRE, e hoje desenho <strong>plataformas cloud em AWS e Azure</strong> — conectando engenharia, produto e negócio e apoiando o crescimento dos times com quem trabalho.',
        'about.career': 'Trajetória',
        'about.education': 'Formação',
        'skills.label': 'Competências',
        'skills.title': 'Ferramentas e certificações',
        'skills.lead': 'O que eu uso no dia a dia — e as certificações que sustentam isso.',
        'certs.all': 'Ver todas as {n} certificações',
        'certs.featured.aws': 'A certificação de arquitetura de mais alto nível da AWS.',
        'certs.featured.azure': 'A certificação de arquitetura Azure de nível expert da Microsoft.',
        'certs.featured.kcna': 'Kubernetes e o ecossistema cloud-native, pela Linux Foundation.',
        'certs.group.leadership': 'Liderança & Agilidade',
        'certs.group.other': 'Outras',
        'contact.label': 'Contato',
        'contact.title': 'Vamos conversar?',
        'contact.lead': 'Quer falar de arquitetura, cloud ou liderança em tecnologia? Estou à disposição.',
        marquee: ['Arquitetura de soluções', 'AWS', 'Azure', 'Kubernetes', 'IA aplicada', 'Setor financeiro', 'Liderança técnica', 'TypeScript', 'Terraform', 'Cloud-native'],
    },
};

// ========== CONTENT ==========
const CAREER = [
    { when: { en: '2025 – now', pt: '2025 – hoje' }, role: 'Senior Solutions Architect', where: { en: 'Bradesco · Auto Finance', pt: 'Bradesco · Financiamento de Veículos' } },
    { when: { en: '2022 – 2025', pt: '2022 – 2025' }, role: 'Senior Solutions Architect', where: { en: 'Itaú Unibanco · Business Banking & Acquiring', pt: 'Itaú Unibanco · PJ e Adquirência' } },
    { when: { en: '2020 – 2022', pt: '2020 – 2022' }, role: 'Senior Systems Engineer — SRE', where: { en: 'Itaú Unibanco · Microsoft platforms', pt: 'Itaú Unibanco · Plataformas Microsoft' } },
    { when: { en: '2018 – 2020', pt: '2018 – 2020' }, role: 'IT Infrastructure Specialist', where: { en: 'V8 Consulting · Cloud migrations', pt: 'V8 Consulting · Migrações cloud' } },
    { when: { en: '2016 – 2018', pt: '2016 – 2018' }, role: 'Cloud Solutions Consultant', where: { en: 'F1 Tecnologia · Office 365 & Azure', pt: 'F1 Tecnologia · Office 365 e Azure' } },
    { when: { en: '2010 – 2018', pt: '2010 – 2018' }, role: { en: 'Microsoft infrastructure', pt: 'Infraestrutura Microsoft' }, where: { en: 'Algar Tech, Sompo Seguros, Ascenty and others', pt: 'Algar Tech, Sompo Seguros, Ascenty e outras' } },
];

const EDUCATION = [
    { when: '2025 – 2026', what: { en: 'Postgraduate, Tech Management', pt: 'Pós-graduação em Tech Management' }, where: 'FIAP' },
    { when: '2024', what: 'Executive Leadership Training', where: 'Ibmec' },
    { when: '2022 – 2023', what: { en: 'Postgraduate, Solutions Architecture', pt: 'Pós-graduação em Arquitetura de Soluções' }, where: 'PUC Minas' },
    { when: '2016 – 2017', what: { en: 'Computer Networks', pt: 'Redes de Computadores' }, where: 'UNIP' },
    { when: '2009 – 2010', what: { en: 'IT Technician', pt: 'Técnico em Informática' }, where: 'Senac' },
];

const SKILL_GROUPS = [
    {
        wide: true,
        title: { en: 'Applied AI', pt: 'IA Aplicada' },
        note: {
            en: 'From RAG to AI agents: bringing LLMs into real systems with the right context, tools and clear specifications.',
            pt: 'Do RAG a agentes de IA: levo LLMs para sistemas reais, com o contexto, as ferramentas e as especificações certas.',
        },
        items: ['RAG', 'AI Agents', 'Harness Engineering', 'MCP', 'Spec-Driven Development', 'LangChain', 'Claude Code'],
    },
    { title: { en: 'Languages & frameworks', pt: 'Linguagens e frameworks' }, items: ['Python (FastAPI)', 'TypeScript', 'Node.js', 'Next.js', 'Go', 'PowerShell', 'Bash'] },
    { title: { en: 'Architecture', pt: 'Arquitetura' }, items: ['Microservices', 'Event-driven', 'DDD', 'Service Mesh', 'API design', 'C4 model', 'Well-Architected'] },
    { title: { en: 'Cloud', pt: 'Cloud' }, items: ['AWS', 'Azure', 'EKS · AKS', 'Lambda', 'Direct Connect', 'ExpressRoute', 'Multi-cloud'] },
    { title: { en: 'Platform', pt: 'Plataforma' }, items: ['Kubernetes', 'Docker', 'Helm', 'ArgoCD', 'Terraform', 'Ansible', 'GitHub Actions'] },
    { title: { en: 'Reliability', pt: 'Confiabilidade' }, items: ['SRE', 'SLOs / SLIs', 'Prometheus', 'Grafana', 'Datadog', 'Splunk'] },
    { title: { en: 'Leadership', pt: 'Liderança' }, items: { en: ['Mentoring', 'Development plans', '1:1s', 'Management 3.0', 'OKRs', 'Scrum'], pt: ['Mentoria', 'PDI', '1:1', 'Management 3.0', 'OKRs', 'Scrum'] } },
];

const CERT_GROUPS = [
    { vendor: 'AWS', certs: ['Solutions Architect – Professional', 'Solutions Architect – Associate', 'Cloud Practitioner'] },
    { vendor: 'Linux Foundation · GitHub', certs: ['KCNA: Kubernetes and Cloud Native Associate', 'GitHub Foundations'] },
    {
        vendor: 'Microsoft',
        certs: [
            'Azure Solutions Architect Expert', 'Azure Administrator Associate', 'Microsoft Certified Trainer (MCT)',
            'MCSE: Cloud Platform and Infrastructure', 'MCSE: Private Cloud', 'MCSE: Core Infrastructure',
            'MCSA: Windows Server 2008 & 2012', '70-243 SCCM 2012', '70-346 Office 365 Identities', '74-409 Server Virtualization',
        ],
    },
    { vendor: 'VMware', certs: ['VCP – Data Center Virtualization 2019'] },
    { vendor: 'leadership', certs: ['Management 3.0 Foundation', 'DevOps Essentials Professional', 'Scrum Foundation Professional'] },
    {
        vendor: 'other',
        certs: ['Arquitetura de Soluções Foundation — Itaú', 'Alibaba Cloud Fundamentals', 'Snow Software Administrator', 'STS Altiris CMS 7.1', 'STS Symantec Management Platform 7.1'],
    },
];

const FEATURED_CERTS = [
    { vendor: 'AWS', name: 'Solutions Architect – Professional', note: 'certs.featured.aws' },
    { vendor: 'Microsoft', name: 'Azure Solutions Architect Expert', note: 'certs.featured.azure' },
    { vendor: 'Linux Foundation', name: 'Kubernetes and Cloud Native Associate', note: 'certs.featured.kcna' },
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
const pick = (value) => (typeof value === 'object' && !Array.isArray(value) ? value[lang] : value);
const html = (id, markup) => { document.getElementById(id).innerHTML = markup; };

const render = () => {
    const topics = t('marquee').map((m) => `<span>${m}</span>`).join('');
    html('marquee', topics + topics);

    html('career', CAREER.map((r) => `
        <li><span class="row-when">${pick(r.when)}</span>
            <span class="row-what">${pick(r.role)}<span class="row-sub">${pick(r.where)}</span></span></li>`).join(''));

    html('education', EDUCATION.map((r) => `
        <li><span class="row-when">${r.when}</span>
            <span class="row-what">${pick(r.what)}<span class="row-sub">${r.where}</span></span></li>`).join(''));

    html('skill-groups', SKILL_GROUPS.map((g) => `
        <div class="skill-group${g.wide ? ' skill-group--wide' : ''} reveal">
            <h3>${pick(g.title)}</h3>
            ${g.note ? `<p class="skill-note">${pick(g.note)}</p>` : ''}
            <ul class="chips">${pick(g.items).map((i) => `<li>${i}</li>`).join('')}</ul>
        </div>`).join(''));

    html('cert-featured', FEATURED_CERTS.map((c) => `
        <article class="cert-card reveal">
            <span class="cert-vendor">${c.vendor}</span>
            <h3 class="cert-name">${c.name}</h3>
            <p>${t(c.note)}</p>
        </article>`).join(''));

    html('cert-groups', CERT_GROUPS.map((g) => `
        <div class="cert-group">
            <h4>${t(`certs.group.${g.vendor}`) || g.vendor} · ${g.certs.length}</h4>
            <ul>${g.certs.map((c) => `<li>${c}</li>`).join('')}</ul>
        </div>`).join(''));

    observeReveals();
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
    render();
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

// ========== SCROLL REVEAL ==========
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

function observeReveals() {
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => revealObserver.observe(el));
}

// ========== INIT ==========
if (reducedMotion) document.getElementById('hero-diagram').pauseAnimations();
setLang(lang);
