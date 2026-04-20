<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>安麗整形外科診所 | Anli Plastic Surgery Clinic</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Serif+TC:wght@300;400;500&family=Jost:wght@200;300;400&display=swap" rel="stylesheet">

  <style>
    :root {
      --cream: #faf6f1;
      --warm-white: #fff9f4;
      --orange-light: #f2c49b;
      --orange-mid: #e8a06a;
      --orange-deep: #c97c3a;
      --orange-accent: #b5611e;
      --beige: #ede4d7;
      --beige-dark: #d4c4b0;
      --text-dark: #2c1f12;
      --text-mid: #6b4f30;
      --text-light: #9e7d5a;
      --divider: #e2d3c0;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      background: var(--cream);
      color: var(--text-dark);
      font-family: 'Noto Serif TC', 'Cormorant Garamond', serif;
      line-height: 1.75;
      overflow-x: hidden;
    }

    /* ── NAV ── */
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2rem 4rem;
      background: rgba(250, 246, 241, 0.92);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--divider);
    }

    .nav-logo {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 0.08em;
      color: var(--orange-accent);
    }

    .nav-logo span {
      font-size: 0.75rem;
      font-family: 'Jost', sans-serif;
      font-weight: 200;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      display: block;
      color: var(--text-light);
      margin-top: -2px;
    }

    .nav-links {
      display: flex;
      gap: 2.5rem;
      list-style: none;
    }

    .nav-links a {
      font-family: 'Jost', sans-serif;
      font-weight: 300;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--text-mid);
      text-decoration: none;
      transition: color 0.3s;
    }

    .nav-links a:hover { color: var(--orange-accent); }

    /* ── HERO ── */
    #hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding: 8rem 4rem 6rem;
      background: var(--warm-white);
    }

    .hero-bg-circle {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(232,160,106,0.18) 0%, transparent 70%);
    }
    .hero-bg-circle.c1 { width: 700px; height: 700px; top: -100px; right: -150px; }
    .hero-bg-circle.c2 { width: 400px; height: 400px; bottom: -80px; left: -60px; background: radial-gradient(circle, rgba(242,196,155,0.14) 0%, transparent 70%); }

    .hero-inner {
      max-width: 860px;
      text-align: center;
      position: relative;
      z-index: 2;
      animation: fadeUp 1.2s ease both;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .hero-label {
      font-family: 'Jost', sans-serif;
      font-weight: 200;
      font-size: 0.72rem;
      letter-spacing: 0.35em;
      text-transform: uppercase;
      color: var(--orange-mid);
      margin-bottom: 2rem;
    }

    .hero-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(3rem, 7vw, 5.5rem);
      font-weight: 300;
      line-height: 1.1;
      color: var(--text-dark);
      letter-spacing: 0.04em;
      margin-bottom: 0.5rem;
    }

    .hero-name-en {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(0.95rem, 2vw, 1.2rem);
      font-weight: 300;
      font-style: italic;
      color: var(--text-light);
      letter-spacing: 0.12em;
      margin-bottom: 2.5rem;
    }

    .hero-divider {
      width: 60px;
      height: 1px;
      background: var(--orange-mid);
      margin: 0 auto 2.5rem;
    }

    .hero-slogan {
      font-family: 'Noto Serif TC', serif;
      font-size: clamp(1rem, 2.2vw, 1.22rem);
      font-weight: 300;
      line-height: 1.9;
      color: var(--text-mid);
      max-width: 640px;
      margin: 0 auto 3rem;
      letter-spacing: 0.06em;
    }

    .hero-cta {
      display: inline-block;
      font-family: 'Jost', sans-serif;
      font-weight: 300;
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--orange-accent);
      border: 1px solid var(--orange-light);
      padding: 0.85rem 2.6rem;
      text-decoration: none;
      transition: all 0.35s;
    }

    .hero-cta:hover {
      background: var(--orange-accent);
      color: var(--warm-white);
      border-color: var(--orange-accent);
    }

    /* ── SECTIONS ── */
    section { padding: 6rem 4rem; }

    .section-inner { max-width: 1100px; margin: 0 auto; }

    .section-header {
      margin-bottom: 3.5rem;
    }

    .section-tag {
      font-family: 'Jost', sans-serif;
      font-weight: 200;
      font-size: 0.68rem;
      letter-spacing: 0.35em;
      text-transform: uppercase;
      color: var(--orange-mid);
      margin-bottom: 0.6rem;
    }

    .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 300;
      color: var(--text-dark);
      letter-spacing: 0.04em;
      line-height: 1.2;
    }

    .section-rule {
      width: 40px;
      height: 1px;
      background: var(--orange-mid);
      margin-top: 1rem;
    }

    /* ── ABOUT ── */
    #about { background: var(--warm-white); }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .about-intro p {
      font-size: 1.02rem;
      color: var(--text-mid);
      font-weight: 300;
      line-height: 1.95;
      margin-bottom: 1.5rem;
    }

    .about-intro .label {
      font-family: 'Jost', sans-serif;
      font-size: 0.68rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--orange-mid);
      margin-bottom: 0.4rem;
    }

    .doctor-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.8rem;
      font-weight: 400;
      color: var(--text-dark);
      margin-bottom: 0.3rem;
    }

    .doctor-title {
      font-family: 'Jost', sans-serif;
      font-weight: 300;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      color: var(--text-light);
      margin-bottom: 1.2rem;
    }

    /* credential cards */
    .cred-block { margin-top: 2rem; }

    .cred-block h4 {
      font-family: 'Jost', sans-serif;
      font-weight: 300;
      font-size: 0.7rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--orange-accent);
      margin-bottom: 0.9rem;
      border-bottom: 1px solid var(--divider);
      padding-bottom: 0.5rem;
    }

    .cred-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
    }

    .cred-list li {
      font-size: 0.9rem;
      color: var(--text-mid);
      font-weight: 300;
      padding-left: 1.1rem;
      position: relative;
    }

    .cred-list li::before {
      content: '';
      position: absolute;
      left: 0; top: 0.65em;
      width: 5px; height: 1px;
      background: var(--orange-mid);
    }

    /* ── SERVICES ── */
    #services { background: var(--cream); }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .service-card {
      background: var(--warm-white);
      border: 1px solid var(--divider);
      padding: 2rem 1.8rem;
      transition: box-shadow 0.3s, transform 0.3s;
    }

    .service-card:hover {
      box-shadow: 0 8px 32px rgba(181,97,30,0.10);
      transform: translateY(-3px);
    }

    .service-card .card-en {
      font-family: 'Jost', sans-serif;
      font-weight: 200;
      font-size: 0.65rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--orange-mid);
      margin-bottom: 0.4rem;
    }

    .service-card h3 {
      font-family: 'Noto Serif TC', serif;
      font-size: 1.05rem;
      font-weight: 500;
      color: var(--text-dark);
      margin-bottom: 1rem;
    }

    .service-card p {
      font-size: 0.88rem;
      color: var(--text-mid);
      font-weight: 300;
      line-height: 1.85;
    }

    .service-card .icon {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      opacity: 0.7;
    }

    /* Opening hours inside services */
    .hours-box {
      margin-top: 3rem;
      background: var(--beige);
      border: 1px solid var(--beige-dark);
      padding: 2rem 2.4rem;
      display: flex;
      align-items: flex-start;
      gap: 3rem;
    }

    .hours-box .hours-label {
      font-family: 'Jost', sans-serif;
      font-weight: 200;
      font-size: 0.68rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--orange-accent);
      white-space: nowrap;
      padding-top: 0.2rem;
    }

    .hours-table { font-size: 0.9rem; color: var(--text-mid); font-weight: 300; }

    .hours-table tr td { padding: 0.25rem 1.5rem 0.25rem 0; }

    .hours-table .day { color: var(--text-dark); font-weight: 400; }

    /* ── CASES ── */
    #cases { background: var(--warm-white); }

    .cases-placeholder {
      border: 1px dashed var(--beige-dark);
      padding: 5rem 3rem;
      text-align: center;
      color: var(--text-light);
    }

    .cases-placeholder p {
      font-family: 'Jost', sans-serif;
      font-weight: 200;
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    /* ── CONTACT ── */
    #contact { background: var(--text-dark); }

    #contact .section-tag { color: var(--orange-light); }

    #contact .section-title { color: var(--warm-white); }

    #contact .section-rule { background: var(--orange-mid); }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-item {
      margin-bottom: 2rem;
    }

    .contact-item .c-label {
      font-family: 'Jost', sans-serif;
      font-weight: 200;
      font-size: 0.65rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--orange-light);
      margin-bottom: 0.4rem;
    }

    .contact-item .c-value {
      font-size: 1.05rem;
      color: var(--beige);
      font-weight: 300;
    }

    .contact-item a {
      color: var(--beige);
      text-decoration: none;
      transition: color 0.3s;
    }

    .contact-item a:hover { color: var(--orange-light); }

    .contact-map-placeholder {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Jost', sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      color: var(--text-light);
      text-transform: uppercase;
    }

    /* ── FOOTER ── */
    footer {
      background: #1e1409;
      padding: 2rem 4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    footer p {
      font-family: 'Jost', sans-serif;
      font-weight: 200;
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      color: var(--text-light);
    }

    /* ── SCROLL REVEAL ── */
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 900px) {
      nav { padding: 1rem 2rem; }
      .nav-links { gap: 1.5rem; }
      section { padding: 4rem 2rem; }
      .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
      .services-grid { grid-template-columns: 1fr 1fr; }
      #hero { padding: 7rem 2rem 5rem; }
    }

    @media (max-width: 600px) {
      .nav-links { display: none; }
      .services-grid { grid-template-columns: 1fr; }
      .hours-box { flex-direction: column; gap: 1rem; }
      footer { flex-direction: column; gap: 0.5rem; text-align: center; }
    }
  </style>
</head>
<body>

  <!-- NAV -->
  <nav>
    <div class="nav-logo">
      安麗整形外科診所
      <span>Anli Plastic Surgery Clinic</span>
    </div>
    <ul class="nav-links">
      <li><a href="#about">關於 About</a></li>
      <li><a href="#services">療程 Services</a></li>
      <li><a href="#cases">案例 Cases</a></li>
      <li><a href="#contact">聯絡 Contact</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <section id="hero">
    <div class="hero-bg-circle c1"></div>
    <div class="hero-bg-circle c2"></div>
    <div class="hero-inner">
      <p class="hero-label">Taipei · Since 2006</p>
      <h1 class="hero-name">安麗整形外科診所</h1>
      <p class="hero-name-en">Anli Plastic Surgery Clinic</p>
      <div class="hero-divider"></div>
      <p class="hero-slogan">
        「真正的美，是平衡與和諧——<br>
        整形醫美，不只要美，更要健康與安全。」
      </p>
      <a href="#about" class="hero-cta">了解更多 · Discover More</a>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about">
    <div class="section-inner">
      <div class="section-header reveal">
        <p class="section-tag">About · 關於安麗</p>
        <h2 class="section-title">關於安麗</h2>
        <div class="section-rule"></div>
      </div>

      <div class="about-grid">
        <div class="about-intro reveal">
          <p class="label">診所簡介 · Clinic Profile</p>
          <p>
            安麗整形外科診所於2006年創立，座落台北市精華地段，以溫潤明亮的空間，打造安心且放鬆的醫美體驗。
          </p>

          <p class="label" style="margin-top: 2rem;">醫師/院長 · Director & Physician</p>
          <div class="doctor-name">陳志成 醫師</div>
          <div class="doctor-title">院長 · Director &amp; Chief Surgeon</div>
          <p>
            陳院長擁有逾30年整形外科與20年醫學美容執業資歷，曾赴歐美頂尖醫學中心進修，專精微整美形與外科重塑，以自然、精緻的美學理念深獲患者信賴。
          </p>
        </div>

        <div class="reveal" style="animation-delay:0.2s">
          <div class="cred-block">
            <h4>醫師經歷 · Professional Experience</h4>
            <ul class="cred-list">
              <li>台大醫院整形外科醫師</li>
              <li>台北市仁愛醫院整形外科主任</li>
              <li>台北市聯合醫院整形外科總主任</li>
              <li>加拿大多倫多大學 UofT 附設醫院整形外科研究員</li>
              <li>美國紐約大學 NYU 附設醫院整形外科進修</li>
            </ul>
          </div>

          <div class="cred-block" style="margin-top: 2rem;">
            <h4>醫師資格 · Qualifications</h4>
            <ul class="cred-list">
              <li>中華民國整形外科專科醫師</li>
              <li>中華民國美容外科專科醫師</li>
              <li>中華民國雷射醫學會會員</li>
              <li>東方美容整形外科醫學會會員 (OSAPS)</li>
              <li>國際美容整形外科醫學會會員 (ISAPS)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services">
    <div class="section-inner">
      <div class="section-header reveal">
        <p class="section-tag">Services · 療程項目</p>
        <h2 class="section-title">療程項目</h2>
        <div class="section-rule"></div>
      </div>

      <div class="services-grid">

        <div class="service-card reveal">
          <div class="icon">✦</div>
          <div class="card-en">Plastic Surgery</div>
          <h3>整形手術</h3>
          <p>上眼皮手術、下眼皮手術、隆鼻、臉部頸部拉皮、抽脂、自體脂肪回填、乳房整形、腹部整形、狐臭修復、疤痕修復</p>
        </div>

        <div class="service-card reveal">
          <div class="icon">◇</div>
          <div class="card-en">Aesthetic Procedures</div>
          <h3>微整美形</h3>
          <p>埋線（鼻、眉、臉頰）、輪廓或皺紋修飾（肉毒、玻尿酸、消脂針、童顏針、精靈針）、膚質改善（水光槍、微點飛針、磨皮）</p>
        </div>

        <div class="service-card reveal">
          <div class="icon">◈</div>
          <div class="card-en">Phototherapy · Laser</div>
          <h3>光療雷射</h3>
          <p>柔膚雷射、脈衝光、音波拉提、溶脂</p>
        </div>

        <div class="service-card reveal">
          <div class="icon">❋</div>
          <div class="card-en">Skin Treatment</div>
          <h3>護膚美療</h3>
          <p>美白／抗痘超聲波、杏仁酸煥膚、微針拋光</p>
        </div>

        <div class="service-card reveal">
          <div class="icon">◉</div>
          <div class="card-en">Weight Loss Treatment</div>
          <h3>塑身減重</h3>
          <p>週纖達 Wegovy 注射筆、猛健樂 Mounjaro 注射筆、康纖芙 Contrave 口服藥</p>
        </div>

        <div class="service-card reveal">
          <div class="icon">✿</div>
          <div class="card-en">IV Therapy</div>
          <h3>保養點滴</h3>
          <p>術後修復點滴、美白亮膚點滴、活力養身點滴、血路通暢點滴</p>
        </div>

      </div>

      <!-- Opening Hours -->
      <div class="hours-box reveal" style="margin-top:2.5rem;">
        <div class="hours-label">門診時間<br>Opening<br>Hours</div>
        <table class="hours-table">
          <tr>
            <td class="day">週一 Mon</td>
            <td>10:00 – 18:00</td>
          </tr>
          <tr>
            <td class="day">週二 Tue</td>
            <td>10:00 – 15:00</td>
          </tr>
          <tr>
            <td class="day">週三 Wed</td>
            <td>10:00 – 18:00</td>
          </tr>
          <tr>
            <td class="day">週四 Thu</td>
            <td>10:00 – 18:00</td>
          </tr>
          <tr>
            <td class="day">週五 Fri</td>
            <td>10:00 – 18:00</td>
          </tr>
          <tr>
            <td class="day">週六 Sat</td>
            <td>10:00 – 16:00</td>
          </tr>
          <tr>
            <td class="day">週日 Sun</td>
            <td>休診 Closed</td>
          </tr>
        </table>
      </div>
    </div>
  </section>

  <!-- CASES -->
  <section id="cases">
    <div class="section-inner">
      <div class="section-header reveal">
        <p class="section-tag">Cases · 案例分享</p>
        <h2 class="section-title">案例分享</h2>
        <div class="section-rule"></div>
      </div>
      <div class="cases-placeholder reveal">
        <p>案例圖片即將上線 · Case Gallery Coming Soon</p>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <div class="section-inner">
      <div class="section-header reveal">
        <p class="section-tag">Contact · 聯絡我們</p>
        <h2 class="section-title">聯絡我們</h2>
        <div class="section-rule"></div>
      </div>

      <div class="contact-grid">
        <div>
          <div class="contact-item reveal">
            <p class="c-label">電話 Phone</p>
            <p class="c-value"><a href="tel:0287722366">02-8772-2366</a></p>
          </div>
          <div class="contact-item reveal">
            <p class="c-label">LINE ID</p>
            <p class="c-value">87722366</p>
          </div>
          <div class="contact-item reveal">
            <p class="c-label">地址 Address</p>
            <p class="c-value">
              台北市大安區復興南路一段215號6樓<br>
              <span style="font-size:0.85rem; color: var(--text-light);">6F, No. 215, Sec. 1, Fuxing S. Rd., Da'an Dist., Taipei</span>
            </p>
          </div>
          <div class="contact-item reveal">
            <p class="c-label">門診時間 Hours</p>
            <p class="c-value" style="font-size:0.92rem;">
              週一～五 10:00–18:00（週二至15:00）<br>
              週六 10:00–16:00 ｜ 週日休診
            </p>
          </div>
        </div>

        <div class="reveal">
          <div class="contact-map-placeholder">
            Map Placeholder · 地圖
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>© 2024 安麗整形外科診所 Anli Plastic Surgery Clinic · 台北市大安區</p>
    <p>All rights reserved · 版權所有</p>
  </footer>

  <script>
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  </script>
</body>
</html>
