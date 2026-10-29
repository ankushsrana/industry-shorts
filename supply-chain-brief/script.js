(function(){
  "use strict";

  /* =====================================================================
     PROFILE — edit this block to update the About-the-author section.
     Leave "experience" empty to hide that list.
     ===================================================================== */
  var PROFILE = {
    name: "Ankush Rana",
    headline: "DGM Growth · B2B SaaS marketer · Supply chain, AIoT & AI",
    summary: "I am a growth marketer and content writer with close to a decade in B2B technology. I started as an engineer, moved into content and SEO, and went on to build go-to-market engines for industrial AIoT and supply chain SaaS companies selling into North America, Europe and India. Today, as DGM Growth at a global supply chain SaaS platform provider, I run the full funnel across marketing and inside sales. I write about supply chain, IoT, SaaS and digital marketing, and I have published a book on Amazon.",
    stats: [
      { n: "9+",     l: "years in B2B tech marketing" },
      { n: "$2M+",   l: "ARR supported by GTM programmes" },
      { n: "7+",     l: "international trade shows led" },
      { n: "6,000+", l: "accounts in an ABM programme" }
    ],
    focus: ["Go-to-market strategy", "Account-based marketing", "Demand generation", "Content & thought leadership",
            "PR & press releases", "Performance marketing", "Email marketing", "SEO & AI visibility",
            "Marketing automation", "WordPress development", "Events & trade shows", "Supply chain · IoT · AIoT"],
    achievements: [
      { n: "$2M+",  t: "Revenue growth", d: "Multi-channel GTM programmes, MQL pipeline management and sales–marketing alignment contributed to $2M+ ARR at an industrial AIoT platform." },
      { n: "500+",  t: "Leads per event cycle", d: "Directed 7+ trade shows across North America and Europe (2024–2026), including Hannover Messe and AIoT World Expo." },
      { n: "120+",  t: "MQLs a year", d: "Built an enriched ABM list of 6,000+ ICP accounts and kept 2,000+ warm accounts in active nurture workflows." },
      { n: "80+",   t: "Earned media backlinks", d: "Crafted CEO thought leadership for Forbes Councils and led SEO programmes that lifted domain authority and organic inbound." }
    ],
    // { role, org, years, note }
    experience: [
      { role: "DGM Growth (Marketing & Inside Sales)", org: "Global supply chain SaaS platform", years: "Jun 2026 – Present",
        note: "Owns the full-funnel growth engine: brand, positioning, demand generation, ABM, content, PR, podcasts, events, paid media, SEO/AI visibility and sales enablement." },
      { role: "Senior Marketing Manager", org: "IoT83", years: "Mar 2023 – Jun 2026",
        note: "GTM and demand generation for a B2B AIoT platform in North America and Europe; $140k+ budget, KPI dashboards and marketing operations across HubSpot and Zoho." },
      { role: "Senior Content Writer", org: "Metadome.ai", years: "May 2022 – Mar 2023",
        note: "White papers, press releases and technical SEO for XR and metaverse solutions; 30%+ domain-authority lift in six months." },
      { role: "Senior Content Writer", org: "Yukti Solutions", years: "Apr 2021 – Mar 2022",
        note: "Technical documentation, user manuals and training materials." },
      { role: "Content Writer", org: "ADG Online Solutions", years: "Dec 2020 – Apr 2021",
        note: "SEO audits for 10+ clients; communication materials for a national Labour Bureau survey programme." },
      { role: "Earlier roles", org: "Intellinez Systems · Vrikah", years: "Earlier", note: "" },
      { role: "Design & Market Development (R&D)", org: "Winch House India", years: "Jul 2017 – Jun 2018",
        note: "Mechanical design engineer for an earth-moving equipment maker, turning design specifications into market-ready proposals." }
    ],
    education: [
      { t: "MBA, Marketing", d: "Liverpool John Moores University, UK · 2025 – pursuing" },
      { t: "Bachelor of Engineering", d: "Visvesvaraya Technological University · 2013 – 2017 · University rank holder" },
      { t: "SEMRush Academy", d: "Competitive analysis & keyword research · On-page & technical SEO · Link building" }
    ],
    stages: ["Hannover Messe 2026", "AIoT World Expo 2026", "Manufacturing IT/OT Summit USA 2025", "Industrial IMMERSIVE 2025",
             "IoT Tech Expo North America 2024", "AWE USA 2022", "Reuters Automotive Event USA 2022"],
    languages: "English · Hindi · Punjabi · Urdu · German (beginner)",
    principles: [
      { t: "Evidence first", d: "Every number links to a published source, with sample and date." },
      { t: "Opinion, labelled", d: "My view sits in “My take” boxes, separate from the data." },
      { t: "No vendor pitch", d: "No product names. The aim is to understand the market." },
      { t: "Plain language", d: "Written for operators and leaders, not only analysts." }
    ],
    linkedin: "https://www.linkedin.com/in/ankushsrana/",
    disclosure: "Views are my own. I work in marketing at a supply chain technology company; this brief is an independent personal project and does not represent any employer."
  };

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $  = function(s, r){ return (r || document).querySelector(s); };
  var $$ = function(s, r){ return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]; }); }

  /* ---------------- DATA ---------------- */
  var stories = [
    { id:"s1", topic:"ai", tag:"Agentic AI", stat:"$53B", title:"The $53 billion bet on supply chain agents", dek:"Spend multiplies; over 40% of agentic projects may still be cancelled." },
    { id:"s2", topic:"planning", tag:"Planning", stat:"~1 in 5", title:"Why planning systems still aren't paying back", dek:"Broad investment, narrow value, and the plan-to-execution gap." },
    { id:"s3", topic:"risk", tag:"Risk", stat:"82%", title:"Tariffs exposed the tier-two blind spot", dek:"How deep companies can see, and how they are responding." },
    { id:"s4", topic:"analytics", tag:"Analytics", stat:"19%", title:"Analytics before agents: the data problem", dek:"Ambition versus reality in AI and digital investment." },
    { id:"s5", topic:"people", tag:"Talent", stat:"55%", title:"The talent pyramid is being redrawn", dek:"What agentic AI means for planners and entry-level roles." },
    { id:"s6", topic:"india", tag:"India", stat:"7.8–8.9%", title:"India: from logistics cost to resilience", dek:"As efficiency improves, planning quality becomes the edge." }
  ];

  var responses = [
    { code:"R-01", big:"45%", title:"Build inventory", body:'Of companies facing tariff impacts, 45% are increasing inventories [8]. Buffers buy time, but tie up working capital.' },
    { code:"R-02", big:"39%", title:"Dual sourcing", body:'39% are pursuing dual sourcing to reduce exposure to any one trade lane [8].' },
    { code:"R-03", big:"33%", title:"Near- or onshoring", body:'33% are developing nearshoring or onshoring plans [8]. In KPMG\'s 2025 survey, 46% shifted toward domestic sourcing on average [13].' },
    { code:"R-04", big:"51%", title:"Renegotiate contracts", body:'On average, 51% of US executives renegotiated supplier contracts and 51% changed distribution channels in response to tariffs [13].' }
  ];

  var timeline = [
    { d:"Oct 2024", src:"McKinsey", t:"Supply chains: still vulnerable", b:"Tier-one visibility up, deep-tier visibility and regular risk reporting down.", ref:9 },
    { d:"Feb 2025", src:"Gartner", t:"AI-ready data warning", b:"63% unsure of data practices for AI; 60% of unsupported AI projects to be abandoned.", ref:7 },
    { d:"Jun 2025", src:"Gartner", t:"Agentic reality check", b:"Over 40% of agentic AI projects predicted to be cancelled by end of 2027.", ref:2 },
    { d:"Aug 2025", src:"KPMG", t:"Tariff responses diverge", b:"Contract renegotiation, domestic sourcing and channel changes vary widely by industry.", ref:13 },
    { d:"Sep 2025", src:"Gartner", t:"AI forecasting goes mainstream", b:"70% of large organisations to adopt AI-based supply chain forecasting by 2030.", ref:5 },
    { d:"Dec 2025", src:"McKinsey", t:"Risk pulse 2025", b:"82% affected by tariffs; only 19% deploying AI tools at scale.", ref:8 },
    { d:"Jan 2026", src:"WEF", t:"Global Risks Report", b:"Geoeconomic confrontation ranked the top global risk for 2026.", ref:14 },
    { d:"Feb 2026", src:"BCG · Gartner", t:"Value gap and talent shift", b:"About one in five see meaningful planning value; 55% expect less entry-level hiring.", ref:10 },
    { d:"Apr 2026", src:"Gartner", t:"The $53B forecast", b:"Agentic SCM software spend to reach $53B by 2030; adoption from 5% to 60%.", ref:1 },
    { d:"May 2026", src:"Gartner", t:"Incremental, not radical", b:"83% scale AI step by step; 17% pursue immediate redesign.", ref:6 },
    { d:"Jun 2026", src:"Gartner", t:"2026 technology trends", b:"Agentic AI, multiagent systems and decision governance on one list.", ref:4 },
    { d:"Aug 2026", src:"KPMG", t:"Autonomy on the agenda", b:"78% expect at least moderate autonomy by 2027; 77% report a talent gap.", ref:12 }
  ];

  var glossary = [
    { t:"Agentic AI", d:"AI systems that can plan and carry out multi-step tasks toward a goal, such as raising an expedite request, within limits set by people. Different from an assistant that only answers questions." },
    { t:"Multiagent system (MAS)", d:"Several AI agents, each with a narrow job, coordinating with one another, for example a demand agent handing a signal to a supply agent." },
    { t:"Decision governance", d:"The rules for who, or what, may make which decision, with what evidence and audit trail. Named a 2026 trend by Gartner." },
    { t:"Human-in-the-loop", d:"A design where an agent recommends or prepares an action and a person approves it before it runs." },
    { t:"Integrated business planning (IBP)", d:"An evolution of S&OP that links demand, supply, product and financial plans into one monthly, cross-functional decision cycle." },
    { t:"S&OP", d:"Sales and operations planning: the regular process that balances demand against supply capacity across teams." },
    { t:"Plan-to-execution gap", d:"The distance between what a plan says and what happens on the ground, often caused by slow handoffs, disconnected systems and unclear decision rights." },
    { t:"Tier-two visibility", d:"Knowing who your suppliers' suppliers are and what risks they carry. Many major disruptions start at this level." },
    { t:"Control tower", d:"A shared view of orders, inventory and shipments in near real time, ideally with alerts and recommended actions." },
    { t:"Decision intelligence", d:"Combining data, analytics and AI to recommend, explain and increasingly automate business decisions." },
    { t:"Master data", d:"Core reference data such as products, locations, suppliers and units. When it is wrong, every plan built on it is wrong too." },
    { t:"Nearshoring", d:"Moving production or sourcing closer to the end market to shorten lead times and reduce trade-lane risk." }
  ];

  /* ---------------- RENDER: DESK ---------------- */
  var deskGrid = $('#deskGrid');
  stories.forEach(function(s, i){
    var a = document.createElement('a');
    a.className = 'desk-card reveal';
    a.href = '#' + s.id;
    a.dataset.topic = s.topic;
    a.innerHTML =
      '<span class="desk-card__top"><span class="desk-card__num">' + String(i + 1).padStart(2, '0') + '</span><span class="desk-card__tag">' + s.tag + '</span></span>' +
      '<span class="desk-card__stat">' + s.stat + '</span>' +
      '<span class="desk-card__title">' + s.title + '</span>' +
      '<span class="desk-card__dek">' + s.dek + '</span>' +
      '<span class="desk-card__go">Read story →</span>';
    deskGrid.appendChild(a);
  });
  $$('#deskChips button').forEach(function(b){
    b.addEventListener('click', function(){
      var t = b.dataset.topic;
      $$('#deskChips button').forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      $$('.desk-card', deskGrid).forEach(function(c){
        var on = t === 'all' || c.dataset.topic === t;
        c.classList.toggle('is-off', !on);
        c.setAttribute('aria-hidden', on ? 'false' : 'true');
        c.tabIndex = on ? 0 : -1;
      });
    });
  });

  /* ---------------- RENDER: RISK RESPONSE CARDS ---------------- */
  var riskGrid = $('#riskGrid');
  responses.forEach(function(s){
    var btn = document.createElement('button');
    btn.className = 'risk-card reveal';
    btn.type = 'button';
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', s.title + ', ' + s.big + '. Open file');
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
    btn.addEventListener('click', function(e){
      var open = btn.classList.toggle('is-open');
      btn.setAttribute('aria-pressed', open ? 'true' : 'false');
    });
    riskGrid.appendChild(btn);
  });

  /* ---------------- RENDER: TIMELINE ---------------- */
  var tlTrack = $('#tlTrack');
  timeline.forEach(function(e, i){
    var d = document.createElement('article');
    d.className = 'shift tl-item';
    d.innerHTML =
      '<span class="shift__num">' + String(i + 1).padStart(2, '0') + ' · ' + e.d + '</span>' +
      '<span class="tl-src">' + e.src + '</span>' +
      '<h4>' + e.t + '</h4>' +
      '<p>' + e.b + '<sup><a href="#r' + e.ref + '">' + e.ref + '</a></sup></p>';
    tlTrack.appendChild(d);
  });
  $('#tlAll').textContent = String(timeline.length).padStart(2, '0');

  /* ---------------- RENDER: GLOSSARY ---------------- */
  var glossList = $('#glossList');
  glossary.forEach(function(g, i){
    var wrap = document.createElement('div');
    wrap.className = 'step';
    wrap.dataset.text = (g.t + ' ' + g.d).toLowerCase();
    var pid = 'gloss-' + i;
    wrap.innerHTML =
      '<button class="step__trigger" type="button" aria-expanded="false" aria-controls="' + pid + '">' +
        '<span class="step__num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="step__title">' + g.t + '</span>' +
        '<span class="step__chevron">+</span>' +
      '</button>' +
      '<div class="step__panel" id="' + pid + '"><p>' + g.d + '</p></div>';
    var trig = $('.step__trigger', wrap);
    trig.addEventListener('click', function(){
      var open = wrap.classList.toggle('is-open');
      trig.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    glossList.appendChild(wrap);
  });
  $('#glossSearch').addEventListener('input', function(e){
    var q = e.target.value.trim().toLowerCase(), shown = 0;
    $$('.step', glossList).forEach(function(s){
      var on = !q || s.dataset.text.indexOf(q) !== -1;
      s.hidden = !on;
      if (on){ shown++; }
      var open = !!q && on;
      s.classList.toggle('is-open', open);
      $('.step__trigger', s).setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $('#glossEmpty').hidden = shown !== 0;
  });

  /* ---------------- RENDER: PROFILE ---------------- */
  $('#pName').textContent = PROFILE.name;
  $('#pHeadline').textContent = PROFILE.headline;
  $('#pSummary').textContent = PROFILE.summary;
  $('#pInitials').textContent = PROFILE.name.split(/\s+/).map(function(w){ return w.charAt(0); }).join('').slice(0, 2).toUpperCase();
  $('#pStats').innerHTML = PROFILE.stats.map(function(s){
    return '<span class="author__stat"><b>' + esc(s.n) + '</b>' + esc(s.l) + '</span>';
  }).join('');
  $('#pFocus').innerHTML = PROFILE.focus.map(function(f){ return '<span class="tag">' + esc(f) + '</span>'; }).join('');
  if (PROFILE.experience && PROFILE.experience.length){
    $('#pExp').innerHTML = PROFILE.experience.map(function(x){
      return '<li><span class="exp__years">' + esc(x.years || '') + '</span><span class="exp__role">' + esc(x.role || '') +
        (x.org ? ' · <em>' + esc(x.org) + '</em>' : '') + '</span>' + (x.note ? '<span class="exp__note">' + esc(x.note) + '</span>' : '') + '</li>';
    }).join('');
    $('#pExpWrap').hidden = false;
  }
  $('#pAch').innerHTML = (PROFILE.achievements || []).map(function(a){
    return '<div class="benefit"><span class="benefit__stat">' + esc(a.n) + '</span><h4>' + esc(a.t) + '</h4><p>' + esc(a.d) + '</p></div>';
  }).join('');
  $('#pEdu').innerHTML = (PROFILE.education || []).map(function(e){
    return '<li><b>' + esc(e.t) + '</b><span>' + esc(e.d) + '</span></li>';
  }).join('');
  $('#pStages').innerHTML = (PROFILE.stages || []).map(function(s){ return '<span class="tag tag--stage">' + esc(s) + '</span>'; }).join('');
  $('#pLang').textContent = PROFILE.languages ? 'Languages: ' + PROFILE.languages : '';
  $('#pPrinciples').innerHTML = PROFILE.principles.map(function(p, i){
    return '<div class="pillar"><span class="pillar__num">0' + (i + 1) + '</span><h4>' + esc(p.t) + '</h4><p>' + esc(p.d) + '</p></div>';
  }).join('');
  $('#pLinkedIn').href = PROFILE.linkedin;
  $('#pDisclosure').textContent = PROFILE.disclosure;

  var shareBtn = $('#shareBtn');
  shareBtn.addEventListener('click', function(){
    var url = window.location.href.split('#')[0];
    function done(ok){
      shareBtn.textContent = ok ? 'Link copied ✓' : url;
      setTimeout(function(){ shareBtn.textContent = 'Copy page link'; }, 2400);
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(url).then(function(){ done(true); }, function(){ done(false); });
      } else { done(false); }
    } catch (err){ done(false); }
  });

  /* ---------------- STORY 01: YEAR FLIP ---------------- */
  var agentMeter = $('#agentMeter');
  $$('#agentFlip .seg button').forEach(function(b){
    b.addEventListener('click', function(){
      var y = b.dataset.year;
      $$('#agentFlip .seg button').forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      $$('#agentFlip .yearflip__n').forEach(function(n){
        n.classList.remove('flip'); void n.offsetWidth;
        n.textContent = n.getAttribute('data-' + y);
        n.classList.add('flip');
      });
      agentMeter.style.width = (y === '2030' ? 60 : 5) + '%';
    });
  });

  /* ---------------- STORY 03: TIER DEPTH ---------------- */
  var tiers = {
    t1: { n:"95%", w:95, l:"have visibility into at least tier-one supplier risks." },
    t2: { n:"42%", w:42, l:"of those see into tier two or beyond, up 22 points on the prior year." }
  };
  $$('#chartTier .seg button').forEach(function(b){
    b.addEventListener('click', function(){
      var t = tiers[b.dataset.tier];
      $$('#chartTier .seg button').forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      $('#depthFill').style.width = t.w + '%';
      $('#depthFill').classList.toggle('is-deep', b.dataset.tier === 't2');
      $('#depthN').textContent = t.n;
      $('#depthL').textContent = t.l;
    });
  });

  /* ---------------- STORY 04: AMBITION / REALITY FOCUS ---------------- */
  $$('#chartGap .seg button').forEach(function(b){
    b.addEventListener('click', function(){
      $$('#chartGap .seg button').forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      $('#gapBars').setAttribute('data-focus', b.dataset.focus);
    });
  });

  /* ---------------- SCROLL REVEAL ---------------- */
  var revealEls = $$('.reveal, .trend-card, .split-card, .benefit, .pillar, .ai-callout, .pull-quote, .deepdive, .author');
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
    }, { threshold:0.3 });
    charts.forEach(function(c){ cio.observe(c); });
  } else {
    revealEls.concat(charts).forEach(function(el){ el.classList.add('is-visible'); });
  }

  /* ---------------- PROGRESS BAR ---------------- */
  var progressFill = $('#progressFill');
  function updateProgress(){
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progressFill.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
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

  /* ---------------- TOOLTIP: BARS + CITATIONS ---------------- */
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
    refText[li.id] = esc(li.textContent.replace(/\s+/g, ' ').trim());
    pubOf[li.id] = li.dataset.pub;
  });
  function citeOf(e){ return e.target.closest && e.target.closest('sup a[href^="#r"]'); }
  document.addEventListener('pointerover', function(e){
    var a = citeOf(e);
    if (!a || e.pointerType !== 'mouse'){ return; }
    var id = a.getAttribute('href').slice(1);
    if (refText[id]){ show('<b>[' + a.textContent + ']</b> ' + refText[id], e.clientX, e.clientY); }
  });
  document.addEventListener('pointerout', function(e){ if (citeOf(e) && !pinned){ hide(); } });
  document.addEventListener('focusin', function(e){
    var a = citeOf(e); if (!a){ return; }
    var id = a.getAttribute('href').slice(1), p = centre(a);
    if (refText[id]){ show('<b>[' + a.textContent + ']</b> ' + refText[id], p[0], p[1]); }
  });
  document.addEventListener('focusout', function(e){ if (citeOf(e) && !pinned){ hide(); } });
  document.addEventListener('click', function(e){
    var a = citeOf(e); if (!a){ return; }
    hide();
    var li = document.getElementById(a.getAttribute('href').slice(1));
    if (li){ li.classList.add('flash'); setTimeout(function(){ li.classList.remove('flash'); }, 2200); }
  });

  /* ---------------- TIMELINE CAROUSEL ---------------- */
  var track = tlTrack, items = $$('.tl-item', track);
  var prevB = $('#tlPrev'), nextB = $('#tlNext'), now = $('#tlNow');
  function stepW(){ return items.length > 1 ? items[1].offsetLeft - items[0].offsetLeft : track.clientWidth; }
  function idx(){
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4){ return items.length - 1; }
    return Math.max(0, Math.min(items.length - 1, Math.round(track.scrollLeft / stepW())));
  }
  function goTo(i){ track.scrollTo({ left: items[i].offsetLeft - items[0].offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' }); }
  function syncCarousel(){
    now.textContent = String(idx() + 1).padStart(2, '0');
    prevB.disabled = track.scrollLeft <= 4;
    nextB.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  }
  prevB.addEventListener('click', function(){ goTo(Math.max(0, idx() - 1)); });
  nextB.addEventListener('click', function(){ goTo(Math.min(items.length - 1, idx() + 1)); });
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
  track.addEventListener('click', function(e){ if (moved){ e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
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
