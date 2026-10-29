(function(){
  "use strict";

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $  = function(s, r){ return (r || document).querySelector(s); };
  var $$ = function(s, r){ return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------------- DATA ---------------- */
  var signals = [
    { code:"S-01", big:"−7 pts", title:"Deep-tier blind spots",
      body:"Tier-one visibility rose to 60%, but visibility into tier-two and tier-three suppliers fell 7 points for a second straight year, which is where major disruptions often start." },
    { code:"S-02", big:"25%", title:"Thinning oversight",
      body:"Regular risk reporting fell from nearly 50% to 25%. Only 30% say their boards deeply understand supply chain risk, and 25% have formal board-level processes." },
    { code:"S-03", big:"59→34%", title:"Shrinking buffers",
      body:"Reliance on larger inventory buffers fell from 59% to 34%, and 46% expect to reduce or eliminate risk buffers further." },
    { code:"S-04", big:"9%", title:"Compliance lag",
      body:"Only 9% say their supply chains comply with new due-diligence rules such as the EU CSDDD, and 30% say they are behind or significantly behind." }
  ];

  var demands = [
    { title:"One connected loop from plan to execution",
      body:'Forecast inaccuracy and misalignment is the top internal challenge for 78% of planning leaders,<sup><a href="#r1">1</a></sup> and a response to disruption takes two weeks on average.<sup><a href="#r3">3</a></sup>' },
    { title:"A trusted data foundation",
      body:'Weak master data and unreliable trading-partner data are named Gartner barriers,<sup><a href="#r6">6</a></sup> and no McKinsey respondent with a deployed planning system rated their data as perfect.<sup><a href="#r3">3</a></sup>' },
    { title:"Continuous, multi-tier risk intelligence",
      body:'Tier-two and tier-three visibility fell for a second year, and regular risk reporting halved to 25%.<sup><a href="#r3">3</a></sup>' },
    { title:"Governed, explainable autonomy",
      body:'Decision governance is a named Gartner trend for 2026,<sup><a href="#r7">7</a></sup> and over 40% of agentic projects may be cancelled for cost, value or risk-control reasons.<sup><a href="#r8">8</a></sup>' },
    { title:"Proof of value, quickly",
      body:'One-third lack a quantified business case and 15% say implementations missed objectives;<sup><a href="#r3">3</a></sup> only about one in five report meaningful value.<sup><a href="#r1">1</a></sup>' }
  ];

  var checks = [
    "Plans and execution data sit in one connected loop.",
    "We can respond to a major disruption in days, not weeks.",
    "Master data has named owners and agreed definitions.",
    "We monitor risk beyond tier-one suppliers.",
    "Supply chain risk reaches leadership on a regular cadence.",
    "AI recommendations come with explanations and clear decision rights.",
    "Every planning investment has a quantified business case."
  ];
  var messages = [
    "Tick the statements that are true for your organisation today.",
    "A start. Most organisations in the surveys sit here too.",
    "Early foundations. Data ownership is usually the next unlock.",
    "Mid-way. The gaps that remain are where value tends to leak.",
    "Solid. Check whether these run continuously or only at review time.",
    "Strong. The question now is how much is automated versus manual.",
    "Close to ready. Governance will decide how far autonomy can go.",
    "Fully in place. You are ahead of most peers in the research."
  ];

  /* ---------------- RENDER: RISK SIGNAL CARDS ---------------- */
  var riskGrid = $('#riskGrid');
  signals.forEach(function(s){
    var btn = document.createElement('button');
    btn.className = 'risk-card reveal';
    btn.type = 'button';
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', 'Open signal file ' + s.code + ': ' + s.title);
    btn.innerHTML =
      '<span class="risk-card__inner">' +
        '<span class="risk-card__face risk-card__face--front">' +
          '<span class="risk-card__code">' + s.code + '</span>' +
          '<span class="risk-card__big">' + s.big + '</span>' +
          '<h4>' + s.title + '</h4>' +
          '<span class="risk-card__hint">Tap to open</span>' +
        '</span>' +
        '<span class="risk-card__face risk-card__face--back">' +
          '<p>' + s.body + '</p>' +
          '<span class="risk-card__back-close">Close file</span>' +
        '</span>' +
      '</span>';
    btn.addEventListener('click', function(){
      var open = btn.classList.toggle('is-open');
      btn.setAttribute('aria-pressed', open ? 'true' : 'false');
    });
    riskGrid.appendChild(btn);
  });

  /* ---------------- RENDER: DEMANDS ACCORDION ---------------- */
  var stepsList = $('#stepsList');
  demands.forEach(function(d, i){
    var wrap = document.createElement('div');
    wrap.className = 'step reveal';
    var panelId = 'demand-panel-' + i;
    wrap.innerHTML =
      '<button class="step__trigger" type="button" aria-expanded="false" aria-controls="' + panelId + '">' +
        '<span class="step__num">0' + (i + 1) + '</span>' +
        '<span class="step__title">' + d.title + '</span>' +
        '<span class="step__chevron">+</span>' +
      '</button>' +
      '<div class="step__panel" id="' + panelId + '"><p>' + d.body + '</p></div>';
    var trigger = $('.step__trigger', wrap);
    trigger.addEventListener('click', function(){
      var open = wrap.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      syncToggle();
    });
    stepsList.appendChild(wrap);
  });
  var toggleSteps = $('#toggleSteps');
  function allOpen(){ return $$('.step', stepsList).every(function(s){ return s.classList.contains('is-open'); }); }
  function syncToggle(){ toggleSteps.textContent = allOpen() ? 'Collapse all −' : 'Expand all +'; }
  toggleSteps.addEventListener('click', function(){
    var open = !allOpen();
    $$('.step', stepsList).forEach(function(s){
      s.classList.toggle('is-open', open);
      $('.step__trigger', s).setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    syncToggle();
  });
  if (stepsList.firstElementChild){
    stepsList.firstElementChild.classList.add('is-open');
    $('.step__trigger', stepsList.firstElementChild).setAttribute('aria-expanded', 'true');
  }

  /* ---------------- RENDER: SELF-CHECK ---------------- */
  var checklist = $('#checklist'), checkCount = $('#checkCount'), checkMessage = $('#checkMessage'), meter = $('#checkMeter');
  checks.forEach(function(text, i){
    var id = 'chk-' + i;
    var label = document.createElement('label');
    label.className = 'check-item';
    label.setAttribute('for', id);
    label.innerHTML = '<input type="checkbox" id="' + id + '"><span>' + text + '</span>';
    var input = $('input', label);
    input.addEventListener('change', function(){
      label.classList.toggle('is-checked', input.checked);
      var n = checklist.querySelectorAll('input:checked').length;
      checkCount.textContent = n;
      checkMessage.textContent = messages[n];
      meter.style.width = (n / checks.length * 100) + '%';
    });
    checklist.appendChild(label);
  });

  /* ---------------- SCROLL REVEAL ---------------- */
  var revealEls = $$('.reveal, .trend-card, .split-card, .benefit, .pillar, .summary-block, .shift, .ai-callout, .pull-quote, .ledger');
  revealEls.forEach(function(el){ el.classList.add('reveal'); });
  var charts = $$('.chart');

  if ('IntersectionObserver' in window && !reduceMotion){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){ entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { threshold:0.12, rootMargin:'0px 0px -60px 0px' });
    revealEls.forEach(function(el){ io.observe(el); });
    var cio = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){ entry.target.classList.add('is-visible'); cio.unobserve(entry.target); }
      });
    }, { threshold:0.35 });
    charts.forEach(function(c){ cio.observe(c); });
  } else {
    revealEls.concat(charts).forEach(function(el){ el.classList.add('is-visible'); });
  }

  /* ---------------- PROGRESS BAR ---------------- */
  var progressFill = $('#progressFill');
  function updateProgress(){
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressFill.style.width = (docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive:true });
  updateProgress();

  /* ---------------- RAIL NAV ACTIVE STATE ---------------- */
  var navLinks = $$('.railnav a');
  var sections = navLinks.map(function(a){ return document.getElementById(a.dataset.target); }).filter(Boolean);
  function setActive(id){
    navLinks.forEach(function(a){
      var on = a.dataset.target === id;
      a.classList.toggle('active', on);
      if (on && window.innerWidth <= 980){
        var ol = a.closest('ol');
        ol.scrollTo({ left: a.parentElement.offsetLeft - 16, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    });
  }
  if ('IntersectionObserver' in window){
    var navIo = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){ if (entry.isIntersecting){ setActive(entry.target.id); } });
    }, { threshold:0, rootMargin:'-45% 0px -50% 0px' });
    sections.forEach(function(s){ navIo.observe(s); });
  }

  /* ---------------- TOOLTIP: CHART BARS + CITATIONS ---------------- */
  var tip = $('#tip'), pinned = null;
  function place(x, y){
    var w = tip.offsetWidth, h = tip.offsetHeight;
    var left = Math.min(Math.max(8, x + 14), window.innerWidth - w - 8);
    var top = y + 16; if (top + h > window.innerHeight - 8){ top = y - h - 12; }
    tip.style.left = left + 'px'; tip.style.top = Math.max(8, top) + 'px';
  }
  function show(html, x, y){ tip.innerHTML = html; tip.classList.add('show'); place(x, y); }
  function hide(){ tip.classList.remove('show'); }
  function centre(el){ var r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }

  $$('[data-tip]').forEach(function(el){
    el.addEventListener('pointerenter', function(e){ if (e.pointerType === 'mouse'){ show(el.dataset.tip, e.clientX, e.clientY); } });
    el.addEventListener('pointermove', function(e){ if (e.pointerType === 'mouse'){ place(e.clientX, e.clientY); } });
    el.addEventListener('pointerleave', function(e){ if (e.pointerType === 'mouse' && pinned !== el){ hide(); } });
    el.addEventListener('focus', function(){ var p = centre(el); show(el.dataset.tip, p[0], p[1]); });
    el.addEventListener('blur', function(){ if (pinned !== el){ hide(); } });
    el.addEventListener('click', function(e){
      e.stopPropagation();
      if (pinned === el){ pinned = null; el.classList.remove('pinned'); hide(); return; }
      if (pinned){ pinned.classList.remove('pinned'); }
      pinned = el; el.classList.add('pinned');
      show(el.dataset.tip, e.clientX, e.clientY);
    });
    el.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ el.blur(); hide(); } });
  });
  document.addEventListener('click', function(){ if (pinned){ pinned.classList.remove('pinned'); pinned = null; hide(); } });
  window.addEventListener('scroll', function(){ if (!pinned){ hide(); } }, { passive:true });

  var refText = {}, pubOf = {};
  $$('#refs li').forEach(function(li){
    refText[li.id] = li.textContent.replace(/\s+/g, ' ').trim();
    pubOf[li.id] = li.dataset.pub;
  });
  // delegated, so citations rendered by script (accordion) work too
  document.addEventListener('pointerover', function(e){
    var a = e.target.closest && e.target.closest('sup a[href^="#r"]');
    if (!a || e.pointerType !== 'mouse'){ return; }
    var id = a.getAttribute('href').slice(1);
    if (refText[id]){ show('<b>[' + a.textContent + ']</b> ' + refText[id], e.clientX, e.clientY); }
  });
  document.addEventListener('pointerout', function(e){
    var a = e.target.closest && e.target.closest('sup a[href^="#r"]');
    if (a && !pinned){ hide(); }
  });
  document.addEventListener('focusin', function(e){
    var a = e.target.closest && e.target.closest('sup a[href^="#r"]');
    if (!a){ return; }
    var id = a.getAttribute('href').slice(1), p = centre(a);
    if (refText[id]){ show('<b>[' + a.textContent + ']</b> ' + refText[id], p[0], p[1]); }
  });
  document.addEventListener('focusout', function(e){
    if (e.target.closest && e.target.closest('sup a[href^="#r"]') && !pinned){ hide(); }
  });
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('sup a[href^="#r"]');
    if (!a){ return; }
    hide();
    var li = document.getElementById(a.getAttribute('href').slice(1));
    if (li){ li.classList.add('flash'); setTimeout(function(){ li.classList.remove('flash'); }, 2200); }
  });

  /* ---------------- YEAR FOCUS (Exhibit 2) ---------------- */
  var mck = $('#mckSvg');
  $$('#chartMck .seg button').forEach(function(b){
    b.addEventListener('click', function(){
      $$('#chartMck .seg button').forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      mck.setAttribute('data-focus', b.dataset.year);
    });
  });

  /* ---------------- OUTLOOK CAROUSEL ---------------- */
  var track = $('#outlook .track'), shifts = $$('.shift', track);
  var prevB = $('#prevShift'), nextB = $('#nextShift'), now = $('#shiftNow');
  function stepW(){ return shifts.length > 1 ? shifts[1].offsetLeft - shifts[0].offsetLeft : track.clientWidth; }
  function idx(){
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4){ return shifts.length - 1; }
    return Math.max(0, Math.min(shifts.length - 1, Math.round(track.scrollLeft / stepW())));
  }
  function goTo(i){ track.scrollTo({ left: shifts[i].offsetLeft - shifts[0].offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' }); }
  function syncCarousel(){
    var i = idx();
    now.textContent = '0' + (i + 1);
    prevB.disabled = track.scrollLeft <= 4;
    nextB.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  }
  prevB.addEventListener('click', function(){ goTo(Math.max(0, idx() - 1)); });
  nextB.addEventListener('click', function(){ goTo(Math.min(shifts.length - 1, idx() + 1)); });
  track.addEventListener('scroll', function(){ window.requestAnimationFrame(syncCarousel); }, { passive:true });
  track.addEventListener('keydown', function(e){
    if (e.key === 'ArrowRight'){ e.preventDefault(); nextB.click(); }
    if (e.key === 'ArrowLeft'){ e.preventDefault(); prevB.click(); }
  });
  var down = false, sx = 0, sl = 0, moved = false;
  track.addEventListener('pointerdown', function(e){ if (e.pointerType !== 'mouse'){ return; } down = true; moved = false; sx = e.clientX; sl = track.scrollLeft; });
  window.addEventListener('pointermove', function(e){
    if (!down){ return; }
    var dx = e.clientX - sx;
    if (Math.abs(dx) > 4){ moved = true; track.classList.add('dragging'); }
    track.scrollLeft = sl - dx;
  });
  window.addEventListener('pointerup', function(){
    if (!down){ return; }
    down = false; track.classList.remove('dragging');
    if (moved){ goTo(idx()); }
  });
  window.addEventListener('resize', syncCarousel);
  syncCarousel();

  /* ---------------- SOURCE FILTER ---------------- */
  $$('#chips button').forEach(function(b){
    b.addEventListener('click', function(){
      var pub = b.dataset.pub;
      $$('#chips button').forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      $$('#refs li').forEach(function(li){ li.classList.toggle('dim', pub !== 'all' && li.dataset.pub !== pub); });
      $$('sup a[href^="#r"]').forEach(function(a){
        a.classList.toggle('hl', pub !== 'all' && pubOf[a.getAttribute('href').slice(1)] === pub);
      });
    });
  });

})();
