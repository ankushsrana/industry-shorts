(function(){
  "use strict";

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- DATA ---------------- */
  var risks = [
    { code:"R-01", title:"Financial Instability",
      body:"A supplier in poor financial health can stop delivering with little warning. Downturns, weak cash flow, and market volatility can turn a dependable vendor into a broken link — often with few visible signs until it's too late." },
    { code:"R-02", title:"Compliance Risk",
      body:"Regulations differ by region and industry, covering everything from environmental rules to labor standards. When a supplier falls short, the fallout — fines, legal exposure, reputational damage — lands on the buyer too." },
    { code:"R-03", title:"Cybersecurity & Data Breaches",
      body:"Weak security at a supplier can become the entry point for an attack on the buying organization — through direct system breaches or email impersonation aimed at redirecting payments. Both can go undetected without active monitoring." },
    { code:"R-04", title:"Quality Inconsistencies",
      body:"A single lapse in product or service quality can trigger recalls, damaged trust, and lasting reputational harm — consumer expectations leave very little room for error." },
    { code:"R-05", title:"Geopolitical Disruption",
      body:"Natural disasters, conflict, and sudden trade restrictions can halt a supplier's output overnight, forcing companies to scramble for alternatives and absorb the resulting costs and delays." },
    { code:"R-06", title:"ESG Exposure",
      body:"Environmental and social governance has moved from a nice-to-have to a genuine reputational risk. Buyers are increasingly judged by the standards their suppliers keep, not just their own." },
    { code:"R-07", title:"Social Media / Reputational Risk",
      body:"A single post, complaint, or leaked detail can escalate into a public crisis in hours — for a company or for any supplier connected to it. Reputational risk today travels faster than most organizations can respond." }
  ];

  var steps = [
    { title:"Define what success looks like",
      body:"Decide upfront what will prove the relationship is working — reduced costs, faster delivery, higher satisfaction — and set clear expectations around financial health, track record, or sustainability before onboarding begins." },
    { title:"Ask for the right information, not all of it",
      body:"Long, exhaustive questionnaires slow everything down and can scare off good suppliers. The goal is precision: ask only for what genuinely informs the decision." },
    { title:"Group questions by theme",
      body:"Organizing requests by category — financial, operational, compliance — makes the process faster and easier to complete for both sides." },
    { title:"Build simple, adapted workflows",
      body:"Approval workflows should fit the specific supplier and relationship, not force every new vendor through a generic process built for someone else." },
    { title:"Explain the process, not just the paperwork",
      body:"Handing a new supplier a login and a list of questions with no context is a poor start. A short explanation of what's being asked, and why, goes a long way toward a smooth, cooperative onboarding." }
  ];

  /* ---------------- RENDER: RISK CARDS ---------------- */
  var riskGrid = document.getElementById('riskGrid');
  risks.forEach(function(r, i){
    var btn = document.createElement('button');
    btn.className = 'risk-card reveal';
    btn.setAttribute('type','button');
    btn.setAttribute('aria-pressed','false');
    btn.setAttribute('aria-label', 'Open risk file ' + r.code + ': ' + r.title);
    btn.innerHTML =
      '<span class="risk-card__inner">' +
        '<span class="risk-card__face risk-card__face--front">' +
          '<span class="risk-card__code">' + r.code + '</span>' +
          '<h4>' + r.title + '</h4>' +
          '<span class="risk-card__hint">Tap to open</span>' +
        '</span>' +
        '<span class="risk-card__face risk-card__face--back">' +
          '<p>' + r.body + '</p>' +
          '<span class="risk-card__back-close">Close file</span>' +
        '</span>' +
      '</span>';
    btn.addEventListener('click', function(){
      var open = btn.classList.toggle('is-open');
      btn.setAttribute('aria-pressed', open ? 'true' : 'false');
    });
    riskGrid.appendChild(btn);
  });

  /* ---------------- RENDER: STEPS ACCORDION ---------------- */
  var stepsList = document.getElementById('stepsList');
  steps.forEach(function(s, i){
    var wrap = document.createElement('div');
    wrap.className = 'step reveal';
    var panelId = 'step-panel-' + i;
    wrap.innerHTML =
      '<button class="step__trigger" aria-expanded="false" aria-controls="' + panelId + '">' +
        '<span class="step__num">0' + (i+1) + '</span>' +
        '<span class="step__title">' + s.title + '</span>' +
        '<span class="step__chevron">+</span>' +
      '</button>' +
      '<div class="step__panel" id="' + panelId + '">' +
        '<p>' + s.body + '</p>' +
      '</div>';
    var trigger = wrap.querySelector('.step__trigger');
    trigger.addEventListener('click', function(){
      var open = wrap.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    stepsList.appendChild(wrap);
  });
  // open first step by default
  if (stepsList.firstElementChild){
    stepsList.firstElementChild.classList.add('is-open');
    stepsList.firstElementChild.querySelector('.step__trigger').setAttribute('aria-expanded','true');
  }

  /* ---------------- RENDER: SELF-CHECK ---------------- */
  var checklist = document.getElementById('checklist');
  var checkCount = document.getElementById('checkCount');
  var checkMessage = document.getElementById('checkMessage');
  var messages = [
    "Tick the risk areas your current onboarding process actively addresses.",
    "A start — worth naming which gaps matter most for your business.",
    "A reasonable baseline. A few blind spots are still worth closing.",
    "Solid middle ground — the remaining gaps are where most incidents originate.",
    "Good coverage. Consider whether each check runs once, or on an ongoing basis.",
    "Strong coverage — the difference now is whether it's manual or automated.",
    "Full coverage. The next question is whether it scales as supplier volume grows."
  ];

  risks.forEach(function(r, i){
    var id = 'chk-' + i;
    var label = document.createElement('label');
    label.className = 'check-item';
    label.setAttribute('for', id);
    label.innerHTML =
      '<input type="checkbox" id="' + id + '">' +
      '<span>' + r.title + '</span>';
    var input = label.querySelector('input');
    input.addEventListener('change', function(){
      label.classList.toggle('is-checked', input.checked);
      updateCheckCount();
    });
    checklist.appendChild(label);
  });

  function updateCheckCount(){
    var checked = checklist.querySelectorAll('input:checked').length;
    checkCount.textContent = checked;
    checkMessage.textContent = messages[checked];
  }

  /* ---------------- SCROLL REVEAL ---------------- */
  var revealEls = document.querySelectorAll('.reveal, .trend-card, .split-card, .benefit, .pillar, .summary-block');
  revealEls.forEach(function(el){ el.classList.add('reveal'); });

  if ('IntersectionObserver' in window && !reduceMotion){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.12, rootMargin:'0px 0px -60px 0px' });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  }

  /* ---------------- PROGRESS BAR ---------------- */
  var progressFill = document.getElementById('progressFill');
  function updateProgress(){
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressFill.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive:true });
  updateProgress();

  /* ---------------- RAIL NAV ACTIVE STATE ---------------- */
  var navLinks = document.querySelectorAll('.railnav a');
  var sections = Array.prototype.map.call(navLinks, function(a){
    return document.getElementById(a.dataset.target);
  }).filter(Boolean);

  function setActive(id){
    navLinks.forEach(function(a){
      a.classList.toggle('active', a.dataset.target === id);
    });
  }

  if ('IntersectionObserver' in window){
    var navIo = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){ setActive(entry.target.id); }
      });
    }, { threshold:0, rootMargin:'-45% 0px -50% 0px' });
    sections.forEach(function(s){ navIo.observe(s); });
  }

})();
