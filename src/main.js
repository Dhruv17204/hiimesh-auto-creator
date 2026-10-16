import {
  creatorInfo,
  socialPlatforms,
  insightsSnapshot,
  creatorSkills,
  portfolioCategories,
  portfolioItems
} from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderMetricsRibbon();
  renderSkills();
  renderPortfolioTabs();
  renderPortfolioCards('all');
  initModal();
  initCollabForm();
});

/* ==========================================================================
   1. NAVBAR & SCROLL BEHAVIOR
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-links-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   2. VERIFIED SNAPSHOT METRICS RIBBON
   ========================================================================== */
function renderMetricsRibbon() {
  const container = document.getElementById('ribbon-metrics-row');
  if (!container) return;

  container.innerHTML = insightsSnapshot.metrics.map(m => `
    <div class="ribbon-metric-item ${m.highlight ? 'highlight' : ''}">
      <span class="ribbon-metric-value">${m.display}</span>
      <span class="ribbon-metric-label">${m.label}</span>
      <span class="ribbon-metric-sublabel">${m.sublabel}</span>
    </div>
  `).join('');
}

/* ==========================================================================
   3. SKILLS & CAPABILITIES RENDERING
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = creatorSkills.map(skill => `
    <div class="skill-card">
      <div class="skill-card-top">
        <span class="skill-cat-pill">${skill.category}</span>
      </div>
      <h3 class="skill-card-title">${skill.title}</h3>
      <p class="skill-card-desc">${skill.description}</p>
      <div class="skill-tags-row">
        ${skill.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. SELECTED WORK & CATEGORY FILTERS
   ========================================================================== */
function renderPortfolioTabs() {
  const container = document.getElementById('work-filter-tabs');
  if (!container) return;

  container.innerHTML = portfolioCategories.map((cat, idx) => `
    <button 
      class="work-filter-btn ${idx === 0 ? 'active' : ''}" 
      data-filter="${cat.id}"
      role="tab"
    >
      ${cat.label}
    </button>
  `).join('');

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.work-filter-btn');
    if (!btn) return;

    document.querySelectorAll('.work-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    renderPortfolioCards(filter);
  });
}

function renderPortfolioCards(category) {
  const grid = document.getElementById('work-cards-grid');
  if (!grid) return;

  const filtered = category === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === category);

  grid.innerHTML = filtered.map(item => `
    <article class="work-card" data-id="${item.id}" tabindex="0" role="button" aria-label="Explore ${item.title}">
      <div class="work-thumb-wrapper">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <span class="work-badge-tag">${item.tag}</span>
        ${item.isTopPerformer ? `<span class="work-top-indicator">33.7K Views</span>` : ''}
      </div>

      <div class="work-card-content">
        <span class="work-category-label">${item.categoryLabel}</span>
        <h3 class="work-title">${item.title}</h3>
        <p class="work-hook-quote">“${item.hook}”</p>
        
        <div class="work-card-bottom">
          <span class="work-stat-pill">${item.verifiedStats}</span>
          <span class="work-action-text">
            <span>Explore</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.work-card').forEach(card => {
    const id = card.getAttribute('data-id');
    const openHandler = () => openWorkModal(id);
    card.addEventListener('click', openHandler);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openHandler();
      }
    });
  });
}

/* ==========================================================================
   5. WORK DETAIL MODAL
   ========================================================================== */
function initModal() {
  const modal = document.getElementById('work-modal');
  const closeBtn = document.getElementById('modal-close');

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openWorkModal(itemId) {
  const item = portfolioItems.find(p => p.id === itemId);
  if (!item) return;

  const modal = document.getElementById('work-modal');
  document.getElementById('modal-img').src = item.image;
  document.getElementById('modal-img').alt = item.title;
  document.getElementById('modal-pill-tag').textContent = item.categoryLabel;
  document.getElementById('modal-title').textContent = item.title;
  document.getElementById('modal-stats').textContent = item.verifiedStats;
  document.getElementById('modal-niche').textContent = item.niche;
  document.getElementById('modal-summary').textContent = item.summary;

  document.getElementById('modal-points').innerHTML = item.technicalKeypoints.map(pt => `
    <li>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${pt}</span>
    </li>
  `).join('');

  document.getElementById('modal-brand-fit').textContent = item.brandApplication;
  document.getElementById('modal-external-link').href = item.videoUrl;

  const inquireBtn = document.getElementById('modal-inquire-btn');
  if (inquireBtn) {
    inquireBtn.onclick = () => {
      closeModal();
      const select = document.getElementById('scope');
      if (select) select.value = 'product-feature';
    };
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('work-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   6. COLLABORATION FORM
   ========================================================================== */
function initCollabForm() {
  const form = document.getElementById('collab-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const brand = document.getElementById('brand').value.trim();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    feedback.className = 'form-feedback-box success';
    feedback.innerHTML = `
      <strong>Inquiry Sent!</strong><br />
      Thank you, ${name || brand}! Hiimesh has received your inquiry for <em>${brand}</em> and will follow up at <strong>${email}</strong> within 24-48 business hours.<br />
      <span style="font-size: 0.8rem; color: #86EFAC; margin-top: 4px; display: inline-block;">
        Direct Instagram DM: <strong>@autoaddicthiimesh</strong>
      </span>
    `;

    form.reset();
  });
}
