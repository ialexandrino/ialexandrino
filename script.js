// ========== CONTENT ==========
const SKILLS = {
    'Cloud Platforms': ['AWS', 'Azure', 'Alibaba Cloud'],
    'Cloud Services': ['Compute', 'VPC', 'Auto Scaling', 'Lambda', 'CloudWatch'],
    'Containers & Virtualization': ['Docker', 'Kubernetes', 'VMware'],
    'IaC & Automation': ['Terraform', 'Ansible', 'Jenkins', 'CI/CD'],
    'Monitoring': ['Prometheus', 'Grafana', 'AlertManager', 'CloudWatch'],
    'Networking': ['Routing', 'Switching', 'Troubleshooting'],
    'Identity & Security': ['Azure AD', 'Azure MFA', 'SCCM', 'Intune'],
    'OS & Productivity': ['Linux', 'Windows Server', 'Office 365'],
    'Programming': ['Python', 'PowerShell', 'Shell', 'Go (learning)'],
};

const CERTS = [
    'AWS Certified Solutions Architect – Professional',
    'AWS Certified Solutions Architect – Associate',
    'Microsoft Certified: Azure Solutions Architect Expert',
    'Microsoft Certified: Azure Administrator Associate',
    'Microsoft Certified Trainer (MCT)',
    'MCSE: Private Cloud',
    'MCSE: Core Infrastructure',
    'MCSA: Windows Server 2008 & 2012',
    '70-243 Administering & Deploying SCCM 2012',
    '70-346 Managing Office 365 Identities and Requirements',
    '74-409 Server Virtualization with Windows Server and System Center',
    'VMware VCP Data Center Virtualization 2019',
    'Global Certified Snow Software Administrator',
    'STS Altiris Client Management Suite 7.1',
    'STS Symantec Management Platform 7.1',
    'Alibaba Cloud Fundamentals',
    'DevOps Essentials Professional Certificate',
    'Scrum Foundation Professional Certificate',
];

const ROLES = [
    'Cloud Solutions Architect',
    'AWS & Azure Certified',
    'Infrastructure as Code',
    'Network Engineer',
];

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ========== RENDER ==========
document.getElementById('skills-grid').innerHTML = Object.entries(SKILLS)
    .map(([category, tags]) => `
        <div class="skill-category">
            <h4 class="skill-cat-title">${category}</h4>
            <div class="skill-tags">${tags.map((t) => `<span class="skill-tag">${t}</span>`).join('')}</div>
        </div>`)
    .join('');

document.getElementById('cert-list').innerHTML = CERTS
    .map((c, i) => `<li class="reveal"><span class="cert-index">${String(i + 1).padStart(2, '0')}</span>${c}</li>`)
    .join('');

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

if (reducedMotion) {
    typedEl.textContent = ROLES[0];
} else {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const tick = () => {
        const role = ROLES[roleIdx];
        charIdx += deleting ? -1 : 1;
        typedEl.textContent = role.slice(0, charIdx);

        let delay = deleting ? 35 : 70;
        if (!deleting && charIdx === role.length) {
            deleting = true;
            delay = 1800;
        } else if (deleting && charIdx === 0) {
            deleting = false;
            roleIdx = (roleIdx + 1) % ROLES.length;
            delay = 400;
        }
        setTimeout(tick, delay);
    };
    setTimeout(tick, 800);
}

// ========== SCROLL REVEAL ==========
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ========== GRID BACKGROUND ==========
const canvas = document.getElementById('grid-canvas');
const ctx = canvas.getContext('2d');
const CELL = 48;
const mouse = { x: -9999, y: -9999 };
let width = 0;
let height = 0;

const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
};

const draw = (time) => {
    ctx.clearRect(0, 0, width, height);
    const offset = reducedMotion ? 0 : (time * 0.01) % CELL;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = -CELL + offset; x < width; x += CELL) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
    }
    for (let y = -CELL + offset; y < height; y += CELL) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Glow the grid intersections near the cursor
    for (let x = -CELL + offset; x < width; x += CELL) {
        for (let y = -CELL + offset; y < height; y += CELL) {
            const dist = Math.hypot(x - mouse.x, y - mouse.y);
            if (dist < 220) {
                ctx.fillStyle = `rgba(255, 255, 255, ${0.5 * (1 - dist / 220)})`;
                ctx.fillRect(x - 1, y - 1, 2, 2);
            }
        }
    }

    if (!reducedMotion) requestAnimationFrame(draw);
};

window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}, { passive: true });

resize();
requestAnimationFrame(draw);
