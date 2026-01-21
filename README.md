<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <title>بيت أبو روميه | Beit Abu Romieh</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="بيت أبو روميه - أقعدات عربية، جوبلان وكليم، وتجهيز الكافيهات">
  <style>
    :root {
      --primary: #C0392B;
      --primary-dark: #7B241C;
      --bg: #FAF6F0;
      --card-bg: #FFFFFF;
      --accent: #D4A95F;
      --text: #3E2723;
      --muted: #7F7F7F;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body, #root { height: 100%; }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }
    a { text-decoration: none; color: inherit; }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
    }

    header {
      position: sticky;
      top: 0;
      background: #fff;
      z-index: 100;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    }
    .top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      gap: 10px;
    }
    .logo {
      font-weight: 700;
      font-size: 20px;
      color: var(--primary-dark);
    }
    .logo span {
      display: block;
      font-size: 11px;
      color: var(--muted);
    }
    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 13px;
    }
    nav a {
      padding: 6px 10px;
      border-radius: 16px;
    }
    nav a:hover,
    nav a.active {
      background: var(--primary);
      color: #fff;
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
    }
    .btn-sm {
      border-radius: 18px;
      border: 1px solid var(--primary);
      background: transparent;
      padding: 4px 10px;
      cursor: pointer;
      font-size: 12px;
    }
    .btn-sm.primary {
      background: var(--primary);
      color: #fff;
    }

    /* Sections */
    section { padding: 32px 0; }
    .section-title {
      font-size: 22px;
      margin-bottom: 4px;
      color: var(--primary-dark);
    }
    .section-subtitle {
      font-size: 13px;
      color: var(--muted);
      margin-bottom: 16px;
    }

    /* Hero / Slider */
    .hero {
      background: #fff;
      border-radius: 0 0 16px 16px;
      padding-top: 16px;
      margin-bottom: 8px;
    }
    .slider {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      height: 260px;
    }
    .slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.6s ease;
      pointer-events: none;
    }
    .slide.active {
      opacity: 1;
      pointer-events: auto;
    }
    .slide img {
      width: 100%;
      height: 260px;
      object-fit: cover;
      display:block;
    }
    .slide-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to left, rgba(0,0,0,0.45), rgba(0,0,0,0.08));
      color: #fff;
      display: flex;
      align-items: center;
      padding: 16px;
    }
    .slide-text {
      max-width: 480px;
    }
    .slide-text h1 { font-size: 22px; margin-bottom: 6px; }
    .slide-text p { font-size: 13px; margin-bottom: 10px; }
    .badge {
      display: inline-block;
      background: rgba(255,255,255,0.9);
      color: var(--primary-dark);
      padding: 2px 10px;
      border-radius: 20px;
      font-size: 11px;
      margin-bottom: 6px;
    }
    .hero-cta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .btn-main, .btn-outline {
      border-radius: 22px;
      padding: 8px 16px;
      font-size: 13px;
      cursor: pointer;
      border: none;
    }
    .btn-main { background: var(--primary); color: #fff; }
    .btn-outline {
      background: transparent;
      color: #fff;
      border: 1px solid #fff;
    }
    .slider-controls {
      position: absolute;
      inset-inline: 8px;
      bottom: 8px;
      display: flex;
      justify-content: space-between;
      pointer-events: none;
    }
    .slider-btn {
      pointer-events: auto;
      background: rgba(0,0,0,0.5);
      border: none;
      color: #fff;
      padding: 4px 8px;
      border-radius: 16px;
      cursor: pointer;
      font-size: 11px;
    }

    /* Grid */
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 16px;
    }
    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, minmax(0,1fr));
      gap: 16px;
    }
    @media (max-width: 900px){
      .grid-4 { grid-template-columns: repeat(2, minmax(0,1fr)); }
      .grid-3 { grid-template-columns: repeat(2, minmax(0,1fr)); }
      .slider { height: 230px; }
      .slide img { height: 230px; }
    }
    @media (max-width: 600px){
      .top-bar { flex-direction: column; align-items: flex-start; }
      .grid-4, .grid-3 { grid-template-columns: 1fr; }
      .slider { height: 210px; }
      .slide img { height: 210px; }
    }

    .card {
      background: var(--card-bg);
      border-radius: 10px;
      padding: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }

    /* category cards */
    .category-card h3 {
      font-size: 16px;
      margin-bottom: 4px;
      color: var(--primary-dark);
    }
    .category-card p { font-size: 12px; color: var(--muted); margin-bottom: 6px; }
    .tags { display:flex; flex-wrap:wrap; gap:4px; margin-bottom:6px; }
    .tags span {
      font-size: 11px;
      background:#FDEDEC;
      color: var(--primary-dark);
      padding: 2px 6px;
      border-radius: 12px;
    }
    .link-small {
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
      color: var(--primary-dark);
    }

    /* product */
    .product-card {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 12px;
    }
    .product-img {
      height: 140px;
      border-radius: 8px;
      overflow: hidden;
    }
    .product-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display:block;
    }
    .product-title {
      font-weight: 600;
      color: var(--primary-dark);
      font-size: 13px;
    }
    .product-meta {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
    }
    .price { font-weight: 700; color: var(--primary-dark); }
    .badge-sm {
      padding: 2px 6px;
      border-radius: 10px;
      background:#FDEDEC;
      color: var(--primary-dark);
      font-size: 10px;
    }
    .product-actions {
      display:flex;
      justify-content: space-between;
      align-items:center;
      margin-top: 4px;
    }
    .btn-add {
      font-size: 11px;
      border-radius: 20px;
      border: none;
      padding: 6px 10px;
      background: var(--primary);
      color: #fff;
      cursor: pointer;
    }
    .product-link {
      font-size: 11px;
      text-decoration: underline;
      cursor: pointer;
      color: var(--primary-dark);
    }

    /* cart panel */
    .cart-toggle {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .cart-count {
      background: var(--primary);
      color:#fff;
      border-radius: 999px;
      padding: 0 6px;
      font-size: 11px;
      min-width: 20px;
      text-align: center;
    }
    .cart-panel {
      position: fixed;
      top: 0;
      inset-inline-end: -360px;
      width: 340px;
      height: 100vh;
      background:#fff;
      box-shadow: -2px 0 6px rgba(0,0,0,0.15);
      padding: 12px;
      z-index: 200;
      transition: inset-inline-end 0.28s ease;
      display:flex;
      flex-direction:column;
      font-size: 12px;
    }
    .cart-panel.open { inset-inline-end: 0; }
    .cart-header {
      display:flex;
      justify-content: space-between;
      align-items:center;
      margin-bottom:8px;
    }
    .cart-items {
      flex:1;
      overflow-y:auto;
      border-top:1px solid #eee;
      border-bottom:1px solid #eee;
      margin:8px 0;
      padding:8px 0;
    }
    .cart-item {
      display:flex;
      justify-content: space-between;
      gap: 6px;
      margin-bottom: 6px;
      align-items:center;
    }
    .cart-item .meta { flex:1; }
    .cart-item span { font-size: 11px; }
    .cart-remove {
      background:none;
      border:none;
      color: var(--primary);
      cursor:pointer;
      font-size:11px;
    }
    .cart-footer {
      display:flex;
      flex-direction:column;
      gap:6px;
    }
    .cart-total-row {
      display:flex;
      justify-content: space-between;
      font-weight:600;
      color: var(--primary-dark);
    }
    .btn-block {
      width:100%;
      border-radius: 20px;
      border:none;
      padding: 8px;
      cursor:pointer;
      font-size: 13px;
    }
    .btn-secondary {
      background:#F4F4F4;
      color: var(--primary-dark);
    }

    /* forms and misc */
    form input, form textarea, form select {
      width:100%;
      padding:8px;
      border-radius:6px;
      border:1px solid #ddd;
      margin-bottom:8px;
      font-size:13px;
      font-family:inherit;
    }
    form label {
      font-size:13px;
      font-weight:600;
      margin-bottom:4px;
      display:block;
    }
    .faq-item {
      background:#fff;
      border-radius:8px;
      padding:10px;
      margin-bottom:8px;
      font-size:13px;
    }
    .faq-q { font-weight:600; margin-bottom:4px; color:var(--primary-dark); }
    .blog-item {
      background:#fff;
      border-radius:8px;
      padding:10px;
      margin-bottom:8px;
      font-size:13px;
    }
    footer {
      background:#F2E6D8;
      padding:12px 0;
      font-size:12px;
      margin-top:32px;
    }
    footer .footer-inner{
      display:flex;
      flex-wrap:wrap;
      gap:16px;
      justify-content:space-between;
    }

    /* small helpers */
    .muted { color: var(--muted); font-size: 13px; }
    .small { font-size: 12px; color: var(--muted); }
  </style>
</head>
<body>
  <!-- Cart Panel -->
  <div class="cart-panel" id="cartPanel" aria-hidden="true">
    <div class="cart-header">
      <strong>سلة التسوق</strong>
      <button class="cart-remove" onclick="toggleCart()" aria-label="إغلاق السلة">✕ إغلاق</button>
    </div>
    <div class="cart-items" id="cartItems">
      <p class="small">السلة فارغة.</p>
    </div>
    <div class="cart-footer">
      <div class="cart-total-row">
        <span>الإجمالي:</span>
        <span id="cartTotal">0 ر.س</span>
      </div>
      <button class="btn-block btn-main" id="checkoutBtn" onclick="goToCheckout()">إتمام الطلب</button>
      <button class="btn-block btn-secondary" onclick="clearCart()">تفريغ السلة</button>
    </div>
  </div>

  <header>
    <div class="container">
      <div class="top-bar">
        <div class="logo" aria-label="بيت أبو روميه">
          بيت أبو روميه
          <span>Beit Abu Romieh • Arabic Majlis & Café Furnishing</span>
        </div>
        <nav aria-label="روابط الموقع">
          <a href="#home" class="active">الرئيسية</a>
          <a href="#arabic-majlis">الأقعدات العربية</a>
          <a href="#cafe">تجهيز الكافيهات</a>
          <a href="#gobelin">الجوبلان والكليم</a>
          <a href="#indoor">أثاث داخلي</a>
          <a href="#outdoor">أثاث خارجي</a>
          <a href="#accessories">إكسسوارات</a>
          <a href="#blog">المدونة</a>
          <a href="#about">من نحن</a>
          <a href="#contact">اتصل بنا</a>
        </nav>
        <div class="header-actions">
          <div class="cart-toggle" onclick="toggleCart()" role="button" aria-pressed="false" tabindex="0">
            <span>السلة</span>
            <span class="cart-count" id="cartCount">0</span>
          </div>
          <button class="btn-sm" onclick="toggleLang()">EN</button>
        </div>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero / Slider -->
    <section id="home" class="hero" aria-label="الرئيسية">
      <div class="container">
        <div class="slider" id="mainSlider" aria-roledescription="carousel">
          <!-- Slide 1 -->
          <div class="slide active" data-index="0" role="group" aria-roledescription="slide" aria-label="1 من 3">
            <img src="images/majlis-ramadan.jpg" alt="أقعدة عربية رمضانية" onerror="this.onerror=null;this.src='https://via.placeholder.com/1200x450?text=Majlis'">
            <div class="slide-overlay">
              <div class="slide-text">
                <div class="badge">Arabic Majlis • Ramadan Spirit</div>
                <h1>أجواء عربية أصيلة… من مجلس بيتك حتى كافيهك.</h1>
                <p>بيت أبو روميه متخصص في الأقعدات العربية، الجوبلان والكليم، وتجهيز الكافيهات الداخلية والخارجية بتصميم متكامل.</p>
                <div class="hero-cta">
                  <button class="btn-main" onclick="document.getElementById('arabic-majlis').scrollIntoView({behavior:'smooth'})">تسوق الأقعدات العربية</button>
                  <button class="btn-outline" onclick="document.getElementById('custom').scrollIntoView({behavior:'smooth'})">اطلب تصميم حسب الطلب</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="slide" data-index="1">
            <img src="images/outdoor-majlis.jpg" alt="جلسة عربية خارجية" onerror="this.onerror=null;this.src='https://via.placeholder.com/1200x450?text=Outdoor+Majlis'">
            <div class="slide-overlay">
              <div class="slide-text">
                <div class="badge">Outdoor Majlis • Garden & Desert</div>
                <h1>جلسات خارجية عربية… مقاومة للعوامل الجوية.</h1>
                <p>حلول متكاملة للحدائق والاستراحات والمخيمات؛ من المساند إلى السجاد والفرش الكامل.</p>
                <div class="hero-cta">
                  <button class="btn-main" onclick="document.getElementById('outdoor').scrollIntoView({behavior:'smooth'})">تصفح الجلسات الخارجية</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="slide" data-index="2">
            <img src="images/cafe-kilim.jpg" alt="تجهيز كافيه بطابع عربي" onerror="this.onerror=null;this.src='https://via.placeholder.com/1200x450?text=Cafe+Kilim'">
            <div class="slide-overlay">
              <div class="slide-text">
                <div class="badge">Café Furnishing • Gobelin & Kilim</div>
                <h1>نجهز كافيهك من الفكرة إلى آخر وسادة.</h1>
                <p>باقات تصميم وتنفيذ لكافيهات عربية وعصرية مع جوبلان وكليم يكمّل قصة المكان.</p>
                <div class="hero-cta">
                  <button class="btn-main" onclick="document.getElementById('cafe').scrollIntoView({behavior:'smooth'})">اكتشف باقات الكافيهات</button>
                </div>
              </div>
            </div>
          </div>

          <div class="slider-controls">
            <button class="slider-btn" onclick="prevSlide()" aria-label="السابق">‹ السابق</button>
            <button class="slider-btn" onclick="nextSlide()" aria-label="التالي">التالي ›</button>
          </div>
        </div>

        <!-- Main categories -->
        <div style="margin-top:20px;">
          <h2 class="section-title">أقسام المتجر الرئيسية</h2>
          <p class="section-subtitle">اختر القسم الذي يناسب مشروعك أو منزلك</p>
          <div class="grid-3">
            <div class="card category-card">
              <h3>الأقعدات العربية</h3>
              <p>مجالس أرضية، مخادّة، مساند، بوفات وطاولات خدمة.</p>
              <div class="tags">
                <span>مجلس منزلي</span>
                <span>مجلس خارجي</span>
                <span>مناسبات</span>
              </div>
              <span class="link-small" onclick="document.getElementById('arabic-majlis').scrollIntoView({behavior:'smooth'})">الدخول للقسم</span>
            </div>
            <div class="card category-card">
              <h3>تجهيز الكافيهات</h3>
              <p>باقات تصميم وتنفيذ كاملة للكافيهات والمطاعم الصغيرة.</p>
              <div class="tags">
                <span>Café Design</span><span>Indoor</span><span>Outdoor</span>
              </div>
              <span class="link-small" onclick="document.getElementById('cafe').scrollIntoView({behavior:'smooth'})">الدخول للقسم</span>
            </div>
            <div class="card category-card">
              <h3>الجوبلان والكليم</h3>
              <p>قطع فنية منسوجة يدوية تعطي عمقاً للمجالس والكافيهات.</p>
              <div class="tags">
                <span>Kilim</span><span>Gobelin</span><span>Art Wall</span>
              </div>
              <span class="link-small" onclick="document.getElementById('gobelin').scrollIntoView({behavior:'smooth'})">الدخول للقسم</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Arabic Majlis -->
    <section id="arabic-majlis" aria-label="الأقعدات العربية">
      <div class="container">
        <h2 class="section-title">قسم الأقعدات العربية</h2>
        <p class="section-subtitle">مجالس أرضية وعصرية تلائم المنازل والاستراحات والمخيمات.</p>
        <div class="grid-4">
          <!-- product 1 -->
          <div class="card product-card">
            <div class="product-img">
              <img src="images/majlis-red-blue.jpg" alt="مجلس رمضاني أحمر وأزرق" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Majlis+1'">
            </div>
            <div class="product-title">مجلس رمضاني أرضي – أحمر وأزرق</div>
            <div class="product-meta">
              <span class="price" data-price="2800">2,800 ر.س</span>
              <span class="badge-sm">طقم كامل 8 قطع</span>
            </div>
            <div class="product-actions">
              <button class="btn-add" onclick="addToCart('مجلس رمضاني أرضي – أحمر وأزرق', 2800)">أضف إلى السلة</button>
              <span class="product-link">تفاصيل</span>
            </div>
          </div>

          <!-- product 2 -->
          <div class="card product-card">
            <div class="product-img">
              <img src="images/majlis-bedouin-color.jpg" alt="مجلس بدوي ملون" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Majlis+2'">
            </div>
            <div class="product-title">جلسة بدوية ملونة – استراحة/مخيم</div>
            <div class="product-meta">
              <span class="price" data-price="3600">3,600 ر.س</span>
              <span class="badge-sm">حتى 12 شخص</span>
            </div>
            <div class="product-actions">
              <button class="btn-add" onclick="addToCart('جلسة بدوية ملونة – استراحة/مخيم', 3600)">أضف إلى السلة</button>
              <span class="product-link">تفاصيل</span>
            </div>
          </div>

          <!-- product 3 -->
          <div class="card product-card">
            <div class="product-img">
              <img src="images/majlis-modern-beige.jpg" alt="مجلس حديث بيج" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Majlis+3'">
            </div>
            <div class="product-title">مجلس عربي حديث – قماش بيج مزخرف</div>
            <div class="product-meta">
              <span class="price" data-price="5200">5,200 ر.س</span>
              <span class="badge-sm">تصميم عصري</span>
            </div>
            <div class="product-actions">
              <button class="btn-add" onclick="addToCart('مجلس عربي حديث – قماش بيج مزخرف', 5200)">أضف إلى السلة</button>
              <span class="product-link">تفاصيل</span>
            </div>
          </div>

          <!-- product 4 -->
          <div class="card product-card">
            <div class="product-img">
              <img src="images/majlis-red-tribal.jpg" alt="جلسة مراقد تراثية" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Majlis+4'">
            </div>
            <div class="product-title">جلسة مراقد تراثية – سجاد أحمر</div>
            <div class="product-meta">
              <span class="price" data-price="4100">4,100 ر.س</span>
              <span class="badge-sm">مقاومة للاستخدام اليومي</span>
            </div>
            <div class="product-actions">
              <button class="btn-add" onclick="addToCart('جلسة مراقد تراثية – سجاد أحمر', 4100)">أضف إلى السلة</button>
              <span class="product-link">تفاصيل</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cafe Packages -->
    <section id="cafe" aria-label="تجهيز الكافيهات">
      <div class="container">
        <h2 class="section-title">قسم تجهيز الكافيهات</h2>
        <p class="section-subtitle">باقات تصميم وتنفيذ كاملة للكافيهات والمطاعم الصغيرة.</p>
        <div class="grid-4">
          <div class="card product-card">
            <div class="product-img">
              <img src="images/cafe-full.jpg" alt="كافيه بطابع عربي مع كليم" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Cafe+Full'">
            </div>
            <div class="product-title">باقة كافيه عربي – داخلية كاملة</div>
            <div class="product-meta">
              <span class="price" data-price="65000">ابتداءً من 65,000 ر.س</span>
              <span class="badge-sm">تصميم + أثاث + إكسسوارات</span>
            </div>
            <div class="product-actions">
              <button class="btn-add" onclick="addToCart('باقة كافيه عربي – داخلية كاملة', 65000)">أضف إلى السلة</button>
              <span class="product-link" onclick="document.getElementById('custom').scrollIntoView({behavior:'smooth'})">اطلب استشارة</span>
            </div>
          </div>

          <div class="card product-card">
            <div class="product-img">
              <img src="images/cafe-terrace.jpg" alt="جلسات خارجية لكافيه" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Cafe+Terrace'">
            </div>
            <div class="product-title">باقة جلسات خارجية للكافيه</div>
            <div class="product-meta">
              <span class="price" data-price="32000">ابتداءً من 32,000 ر.س</span>
              <span class="badge-sm">تحمل للعوامل الجوية</span>
            </div>
            <div class="product-actions">
              <button class="btn-add" onclick="addToCart('باقة جلسات خارجية للكافيه', 32000)">أضف إلى السلة</button>
              <span class="product-link">تفاصيل</span>
            </div>
          </div>

          <!-- Another cafe package -->
          <div class="card product-card">
            <div class="product-img">
              <img src="images/cafe-kilim-2.jpg" alt="كافيه مزين بكليم" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Cafe+Kilim+2'">
            </div>
            <div class="product-title">باقة كافيه مع جوبلان جدار</div>
            <div class="product-meta">
              <span class="price" data-price="48000">ابتداءً من 48,000 ر.س</span>
              <span class="badge-sm">جدار فني + أثاث</span>
            </div>
            <div class="product-actions">
              <button class="btn-add" onclick="addToCart('باقة كافيه مع جوبلان جدار', 48000)">أضف إلى السلة</button>
              <span class="product-link">تفاصيل</span>
            </div>
          </div>

          <div class="card product-card">
            <div class="product-img">
              <img src="images/cafe-small.jpg" alt="باقة لمقهى صغير" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Small+Cafe'">
            </div>
            <div class="product-title">باقة مقهى صغير – تصميم اقتصادي</div>
            <div class="product-meta">
              <span class="price" data-price="22000">ابتداءً من 22,000 ر.س</span>
              <span class="badge-sm">افضل للمشروعات الصغيرة</span>
            </div>
            <div class="product-actions">
              <button class="btn-add" onclick="addToCart('باقة مقهى صغير – تصميم اقتصادي', 22000)">أضف إلى السلة</button>
              <span class="product-link">تفاصيل</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gobelin & Kilim -->
    <section id="gobelin" aria-label="الجوبلان والكليم">
      <div class="container">
        <h2 class="section-title">الجوبلان والكليم</h2>
        <p class="section-subtitle">قطع فنية منسوجة يدوية وأقمشة حائط تضيف دفئًا وعمقًا للمكان.</p>
        <div class="grid-4">
          <div class="card product-card">
            <div class="product-img"><img src="images/kilim-1.jpg" alt="كليم يدوي" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Kilim+1'"></div>
            <div class="product-title">كليم يدوي تقليدي</div>
            <div class="product-meta"><span class="price" data-price="1800">1,800 ر.س</span><span class="badge-sm">قطعة فنية</span></div>
            <div class="product-actions"><button class="btn-add" onclick="addToCart('كليم يدوي تقليدي',1800)">أضف إلى السلة</button><span class="product-link">تفاصيل</span></div>
          </div>

          <div class="card product-card">
            <div class="product-img"><img src="images/gobelin-1.jpg" alt="جوبلان جداري" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Gobelin+1'"></div>
            <div class="product-title">جوبلان جداري – تصميم مودرن</div>
            <div class="product-meta"><span class="price" data-price="3200">3,200 ر.س</span><span class="badge-sm">تحويل الحائط لقطعة فنية</span></div>
            <div class="product-actions"><button class="btn-add" onclick="addToCart('جوبلان جداري – تصميم مودرن',3200)">أضف إلى السلة</button><span class="product-link">تفاصيل</span></div>
          </div>

          <div class="card product-card">
            <div class="product-img"><img src="images/kilim-2.jpg" alt="كليم ملون" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Kilim+2'"></div>
            <div class="product-title">كليم ملون صغير</div>
            <div class="product-meta"><span class="price" data-price="900">900 ر.س</span><span class="badge-sm">مثالي للطاولات</span></div>
            <div class="product-actions"><button class="btn-add" onclick="addToCart('كليم ملون صغير',900)">أضف إلى السلة</button><span class="product-link">تفاصيل</span></div>
          </div>

          <div class="card product-card">
            <div class="product-img"><img src="images/gobelin-2.jpg" alt="جوبلان تراثي" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Gobelin+2'"></div>
            <div class="product-title">حافة جوبلان تراثي</div>
            <div class="product-meta"><span class="price" data-price="2400">2,400 ر.س</span><span class="badge-sm">صلب ومتين</span></div>
            <div class="product-actions"><button class="btn-add" onclick="addToCart('حافة جوبلان تراثي',2400)">أضف إلى السلة</button><span class="product-link">تفاصيل</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Indoor / Outdoor / Accessories -->
    <section id="indoor" aria-label="أثاث داخلي">
      <div class="container">
        <h2 class="section-title">أثاث داخلي</h2>
        <p class="section-subtitle">قطع داخلية تناسب البيئات العربية والعصرية.</p>
        <div class="grid-4">
          <div class="card product-card">
            <div class="product-img"><img src="images/sofa-1.jpg" alt="كنبة داخلية" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Sofa+1'"></div>
            <div class="product-title">كنبة داخلية مريحة</div>
            <div class="product-meta"><span class="price" data-price="7800">7,800 ر.س</span><span class="badge-sm">قماش فاخر</span></div>
            <div class="product-actions"><button class="btn-add" onclick="addToCart('كنبة داخلية مريحة',7800)">أضف إلى السلة</button><span class="product-link">تفاصيل</span></div>
          </div>
          <div class="card product-card">
            <div class="product-img"><img src="images/table-1.jpg" alt="طاولة قهوة" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Table'"></div>
            <div class="product-title">طاولة قهوة خشبية</div>
            <div class="product-meta"><span class="price" data-price="1200">1,200 ر.س</span><span class="badge-sm">خشب متين</span></div>
            <div class="product-actions"><button class="btn-add" onclick="addToCart('طاولة قهوة خشبية',1200)">أضف إلى السلة</button><span class="product-link">تفاصيل</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="outdoor" aria-label="أثاث خارجي">
      <div class="container">
        <h2 class="section-title">أثاث خارجي</h2>
        <p class="section-subtitle">جلسات ومفروشات تتحمل العوامل الجوية.</p>
        <div class="grid-3">
          <div class="card product-card">
            <div class="product-img"><img src="images/outdoor-1.jpg" alt="جلسة خارجية" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Outdoor+1'"></div>
            <div class="product-title">جلسة خارجية مقاومة للمطر</div>
            <div class="product-meta"><span class="price" data-price="6200">6,200 ر.س</span><span class="badge-sm">ماتيريال مقاوم</span></div>
            <div class="product-actions"><button class="btn-add" onclick="addToCart('جلسة خارجية مقاومة للمطر',6200)">أضف إلى السلة</button><span class="product-link">تفاصيل</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="accessories" aria-label="إكسسوارات">
      <div class="container">
        <h2 class="section-title">إكسسوارات</h2>
        <p class="section-subtitle">وسائد، بوفات، سجاد صغير وإضاءات تكمل الديكور.</p>
        <div class="grid-4">
          <div class="card product-card">
            <div class="product-img"><img src="images/pillow-1.jpg" alt="وسادة منسوجة" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x250?text=Pillow'"></div>
            <div class="product-title">وسادة منسوجة يدوياً</div>
            <div class="product-meta"><span class="price" data-price="180">180 ر.س</span><span class="badge-sm">مقاسات مختلفة</span></div>
            <div class="product-actions"><button class="btn-add" onclick="addToCart('وسادة منسوجة يدوياً',180)">أضف إلى السلة</button><span class="product-link">تفاصيل</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom orders form -->
    <section id="custom" aria-label="تصميم حسب الطلب">
      <div class="container">
        <h2 class="section-title">اطلب تصميم حسب الطلب</h2>
        <p class="section-subtitle">شاركنا احتياجك وسنعاود الاتصال بك مع عرض مبدئي.</p>
        <div class="card" style="max-width:600px;">
          <form id="customForm" onsubmit="submitCustomForm(event)">
            <label for="name">الاسم</label>
            <input id="name" required placeholder="اسمك الكامل">
            <label for="phone">الجوال</label>
            <input id="phone" required placeholder="05xxxxxxxx">
            <label for="details">تفاصيل المشروع</label>
            <textarea id="details" rows="4" placeholder="المساحة، النمط المرغوب، المدة..."></textarea>
            <button class="btn-main btn-block" type="submit">إرسال الطلب</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Blog / About / Contact -->
    <section id="blog" aria-label="المدونة">
      <div class="container">
        <h2 class="section-title">المدونة</h2>
        <p class="section-subtitle">مقالات عن الديكور، العناية بالسجاد، وأفكار تصميمية.</p>
        <div class="blog-item">
          <h3 class="small">كيف تختار كليم مناسب لمجلسك</h3>
          <p class="muted">نصائح عملية عن الألوان والحجم ونوع الخيوط...</p>
        </div>
      </div>
    </section>

    <section id="about" aria-label="من نحن">
      <div class="container">
        <h2 class="section-title">من نحن</h2>
        <p class="section-subtitle">بيت أبو روميه - خبرة في الأثاث العربي والتجهيزات الخاصة بالمقاهي.</p>
        <p class="small">نحن فريق تصميم وتنفيذ متخصص في القطع التقليدية والمعاصرة مع خدمات تفصيل حسب الطلب.</p>
      </div>
    </section>

    <section id="contact" aria-label="اتصل بنا">
      <div class="container">
        <h2 class="section-title">اتصل بنا</h2>
        <p class="section-subtitle">سعداء بتواصلك — املأ النموذج أو اتصل على الرقم.</p>
        <div style="max-width:700px;">
          <form id="contactForm" onsubmit="submitContactForm(event)">
            <label for="cname">الاسم</label>
            <input id="cname" required placeholder="اسمك">
            <label for="cphone">الجوال</label>
            <input id="cphone" required placeholder="05xxxxxxxx">
            <label for="cmessage">الرسالة</label>
            <textarea id="cmessage" rows="4" placeholder="نبذة عن استفسارك"></textarea>
            <button class="btn-main btn-block" type="submit">أرسل</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-inner">
      <div>
        <strong>بيت أبو روميه</strong>
        <div class="small">تصميم وتنفيذ · جوبلان · كليم · تجهيز كافيهات</div>
      </div>
      <div>
        <div class="small">الهاتف: 05xxxxxxxx</div>
        <div class="small">البريد: info@aburomieh.example</div>
      </div>
      <div>
        <div class="small">حقوق النشر © 2026 بيت أبو روميه</div>
      </div>
    </div>
  </footer>

  <script>
    /* ====== Slider ====== */
    (function(){
      const slides = Array.from(document.querySelectorAll('.slide'));
      let idx = 0;
      let autoplay = true;
      let timer = null;
      function show(index){
        slides.forEach(s => s.classList.remove('active'));
        const s = slides[index];
        if(s) s.classList.add('active');
      }
      function next(){
        idx = (idx + 1) % slides.length;
        show(idx);
      }
      function prev(){
        idx = (idx - 1 + slides.length) % slides.length;
        show(idx);
      }
      window.nextSlide = function(){ autoplay = false; next(); resetTimer(); };
      window.prevSlide = function(){ autoplay = false; prev(); resetTimer(); };
      function resetTimer(){
        if(timer) clearInterval(timer);
        if(autoplay) timer = setInterval(next, 4500);
      }
      document.addEventListener('visibilitychange', () => {
        if(document.hidden) { if(timer) clearInterval(timer); }
        else resetTimer();
      });
      // init
      show(idx);
      timer = setInterval(next, 4500);
      // expose for tests
      window._slider = { next, prev, show };
    })();

    /* ====== Cart logic (localStorage) ====== */
    const CART_KEY = 'beit_aburomieh_cart_v1';
    function loadCart(){
      try{
        const raw = localStorage.getItem(CART_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch(e){
        console.error('Failed to parse cart', e);
        return [];
      }
    }
    function saveCart(cart){
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }

    function formatPrice(num){
      // show with thousands separator and currency
      return num.toLocaleString('ar-EG') + ' ر.س';
    }

    function addToCart(title, price){
      const cart = loadCart();
      const existing = cart.find(i => i.title === title);
      if(existing){
        existing.qty += 1;
      } else {
        cart.push({ title, price: Number(price), qty: 1 });
      }
      saveCart(cart);
      updateCartUI();
      // brief highlight
      const c = document.getElementById('cartPanel');
      if(!c.classList.contains('open')){
        const badge = document.getElementById('cartCount');
        badge.animate([{ transform: 'scale(1.2)' }, { transform: 'scale(1)' }], { duration: 250 });
      }
    }

    function removeFromCart(title){
      let cart = loadCart();
      cart = cart.filter(i => i.title !== title);
      saveCart(cart);
      updateCartUI();
    }

    function clearCart(){
      localStorage.removeItem(CART_KEY);
      updateCartUI();
    }

    function updateCartUI(){
      const cart = loadCart();
      const panel = document.getElementById('cartItems');
      const countEl = document.getElementById('cartCount');
      const totalEl = document.getElementById('cartTotal');
      panel.innerHTML = '';
      if(cart.length === 0){
        panel.innerHTML = '<p class="small">السلة فارغة.</p>';
      } else {
        cart.forEach(item => {
          const row = document.createElement('div');
          row.className = 'cart-item';
          const meta = document.createElement('div');
          meta.className = 'meta';
          meta.innerHTML = '<div style="font-weight:600">'+escapeHtml(item.title)+'</div>' +
                           '<div class="small">'+item.qty+' × '+formatPrice(item.price)+'</div>';
          const controls = document.createElement('div');
          controls.style.textAlign = 'left';
          controls.innerHTML = '<button class="cart-remove" aria-label="حذف العنصر">حذف</button>';
          controls.querySelector('button').addEventListener('click', ()=> removeFromCart(item.title));
          row.appendChild(meta);
          row.appendChild(controls);
          panel.appendChild(row);
        });
      }
      const total = cart.reduce((s,i)=> s + i.price * i.qty, 0);
      totalEl.textContent = formatPrice(total);
      const totalItems = cart.reduce((s,i)=> s + i.qty, 0);
      countEl.textContent = totalItems;
    }

    function toggleCart(){
      const panel = document.getElementById('cartPanel');
      const isOpen = panel.classList.toggle('open');
      panel.setAttribute('aria-hidden', !isOpen);
      // update pressed state on toggle button if present
      const toggle = document.querySelector('.cart-toggle');
      if(toggle) toggle.setAttribute('aria-pressed', String(isOpen));
    }

    function goToCheckout(){
      const cart = loadCart();
      if(cart.length === 0){
        alert('السلة فارغة. أضف منتجات قبل إتمام الطلب.');
        return;
      }
      // For demo: show a summary then clear
      const total = cart.reduce((s,i)=> s + i.price * i.qty, 0);
      const names = cart.map(i => `${i.qty}× ${i.title}`).join('\\n');
      const confirmMsg = `ملخص الطلب:\\n${names}\\n\\nالإجمالي: ${formatPrice(total)}\\n\\nاضغط موافق للمتابعة (تجريبي).`;
      if(confirm(confirmMsg)){
        // In real site, redirect to checkout page with order details
        // Here we just clear and show success message
        clearCart();
        toggleCart();
        alert('تم إرسال طلبك تجريبيًا. سنتواصل معك قريبًا.');
      }
    }

    // Escape to avoid injecting HTML in titles (simple)
    function escapeHtml(str){
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    // Init cart UI
    document.addEventListener('DOMContentLoaded', updateCartUI);

    /* ====== Simple forms handling ====== */
    function submitContactForm(e){
      e.preventDefault();
      const name = document.getElementById('cname').value.trim();
      const phone = document.getElementById('cphone').value.trim();
      const message = document.getElementById('cmessage').value.trim();
      if(!name || !phone){
        alert('يرجى إدخال الاسم والجوال.');
        return;
      }
      // demo: just show a message
      alert('شكرًا لتواصلك. تم استلام رسالتك.');
      e.target.reset();
    }

    function submitCustomForm(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const details = document.getElementById('details').value.trim();
      if(!name || !phone){
        alert('يرجى إدخال الاسم والجوال.');
        return;
      }
      alert('تم استلام طلب التصميم. سنعاود الاتصال بك قريباً.');
      e.target.reset();
    }

    // Small utility language toggle (demo only)
    function toggleLang(){
      alert('زر التبديل للغة (تجريبي). يمكنك إضافة ترجمة لاحقًا.');
    }

    // Accessibility: allow Enter on cart-toggle
    const cartToggle = document.querySelector('.cart-toggle');
    if(cartToggle){
      cartToggle.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          toggleCart();
        }
      });
    }

    // Keep UI in sync if localStorage changed in another tab
    window.addEventListener('storage', (e)=>{
      if(e.key === CART_KEY) updateCartUI();
    });
  </script>
</body>
</html>
