'use strict';

    /* ═══ PRODUCT DATA — 16 Products, multiple categories ═══ */
    const PRODS = [
      {
        id: 1, name: 'Quantum Pro Watch', brand: 'AETHEL', cat: 'Wearables', price: 299, orig: null, badge: 'new', label: 'New', rating: 4.9, rev: 248,
        img: 'assets/images/product_watch.png', fb: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80',
        imgs: ['assets/images/product_watch.png', 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        desc: 'Engineered with aerospace-grade titanium, the Quantum Pro Watch delivers unparalleled precision and elegance. Features an Always-On Retina LTPO display, advanced health sensors, and 36-hour battery life in a design that transcends ordinary timekeeping.'
      },

      {
        id: 2, name: 'Acoustic Elite X1', brand: 'AETHEL', cat: 'Audio', price: 349, orig: 399, badge: 'sale', label: 'Sale', rating: 4.8, rev: 184,
        img: 'assets/images/product_headphones.png', fb: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80',
        imgs: ['assets/images/product_headphones.png', 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=500&q=80'],
        sizes: null,
        desc: 'Studio-grade audio in a refined design. The Acoustic Elite X1 delivers 40-hour playback, active noise cancellation, and spatial audio. Crafted from premium materials for all-day comfort and immersive sound.'
      },

      {
        id: 3, name: 'Lumix Pro Z5 Camera', brand: 'LUMIX', cat: 'Cameras', price: 1299, orig: null, badge: 'hot', label: 'Hot', rating: 4.7, rev: 112,
        img: 'assets/images/product_camera.png', fb: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=80',
        imgs: ['assets/images/product_camera.png', 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=500&q=80'],
        sizes: null,
        desc: 'A masterpiece of optical engineering. The Lumix Pro Z5 pairs a full-frame 60MP sensor with Leica-crafted optics for images of breathtaking clarity. Built for professionals and demanding enthusiasts alike.'
      },

      {
        id: 4, name: 'iPhone 16 Pro Max', brand: 'APPLE', cat: 'Mobiles', price: 1199, orig: 1299, badge: 'sale', label: 'Sale', rating: 4.9, rev: 512,
        img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80'],
        sizes: null, desc: 'The most advanced iPhone ever. A17 Pro chip, titanium design, 48MP main camera system with 5x optical zoom, and the largest battery in iPhone history.'
      },

      {
        id: 5, name: 'Samsung Galaxy S25 Ultra', brand: 'SAMSUNG', cat: 'Mobiles', price: 999, orig: 1099, badge: 'sale', label: 'Sale', rating: 4.8, rev: 398,
        img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=500&q=80'],
        sizes: null, desc: '200MP camera, built-in S Pen, 12GB RAM and Snapdragon 8 Gen 3 deliver the ultimate Android experience in a premium titanium chassis.'
      },

      {
        id: 6, name: 'MacBook Pro 16"', brand: 'APPLE', cat: 'Laptops & Tablets', price: 2499, orig: 2699, badge: 'sale', label: 'Sale', rating: 4.9, rev: 287,
        img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80'],
        sizes: null, desc: 'M3 Max chip delivers extraordinary performance for the most demanding workflows. Liquid Retina XDR display, up to 22 hours battery life, and a sleek aluminium design.'
      },

      {
        id: 7, name: 'Premium Modular Sofa', brand: 'LUXE HOME', cat: 'Home & Living', price: 1899, orig: 2200, badge: 'sale', label: 'Sale', rating: 4.6, rev: 89,
        img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1493663284031-b7e3aaa4cab4?auto=format&fit=crop&w=500&q=80'],
        sizes: ['2 Seater', '3 Seater', 'L-Shape', 'Corner'],
        desc: 'Transform your living space with this luxurious modular sofa. Premium Italian leather upholstery over a solid hardwood frame, with high-density foam cushions for unparalleled comfort.'
      },

      {
        id: 8, name: 'Artisan Coffee Table', brand: 'LUXE HOME', cat: 'Home & Living', price: 649, orig: null, badge: 'new', label: 'New', rating: 4.5, rev: 43,
        img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=500&q=80'],
        sizes: null, desc: 'Handcrafted from solid white oak with brushed brass accents. A centrepiece that elevates any living room. Each piece is unique, shaped by artisan hands in our Copenhagen workshop.'
      },

      {
        id: 9, name: 'iPad Pro 13" M4', brand: 'APPLE', cat: 'Laptops & Tablets', price: 1299, orig: null, badge: 'new', label: 'New', rating: 4.8, rev: 165,
        img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80'],
        sizes: null, desc: 'Thinnest Apple product ever made at just 5.1mm. Ultra Retina XDR OLED display, M4 chip with neural engine, and all-day battery life in an impossibly thin aluminium enclosure.'
      },

      {
        id: 10, name: 'Sony WH-1000XM5', brand: 'SONY', cat: 'Audio', price: 379, orig: 449, badge: 'sale', label: 'Sale', rating: 4.9, rev: 621,
        img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=500&q=80'],
        sizes: null, desc: "Industry-leading noise cancellation with Sony's V1 processor. 30-hour battery life, multipoint Bluetooth connection, and a supremely comfortable over-ear design."
      },

      {
        id: 11, name: 'Chrono Elite Carbon', brand: 'AETHEL', cat: 'Wearables', price: 589, orig: 699, badge: 'sale', label: 'Sale', rating: 4.8, rev: 91,
        img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=500&q=80'],
        sizes: ['S', 'M', 'L', 'XL'],
        desc: 'Forged from aerospace carbon fibre, the Chrono Elite is lighter than titanium and twice as strong. A bold statement of technical excellence on your wrist.'
      },

      {
        id: 12, name: 'Canon EOS R5 Mark II', brand: 'CANON', cat: 'Cameras', price: 3499, orig: null, badge: 'hot', label: 'Hot', rating: 4.9, rev: 78,
        img: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1619615173278-5e28d3d5f4f6?auto=format&fit=crop&w=500&q=80'],
        sizes: null, desc: '8K video capture meets cinematic colour science. The Canon EOS R5 Mark II features a 45MP sensor, dual-layer stacked CMOS, and world-class in-body image stabilisation.'
      },

      {
        id: 13, name: 'Velvet Accent Chair', brand: 'LUXE HOME', cat: 'Home & Living', price: 449, orig: 599, badge: 'sale', label: 'Sale', rating: 4.4, rev: 67,
        img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80'],
        sizes: null, desc: 'Sumptuous deep velvet in a sculpted silhouette. Solid walnut legs, down-blend cushion filling, and a design that works beautifully in both classic and contemporary interiors.'
      },

      {
        id: 14, name: 'Galaxy Tab S9 Ultra', brand: 'SAMSUNG', cat: 'Laptops & Tablets', price: 1099, orig: 1199, badge: 'sale', label: 'Sale', rating: 4.7, rev: 203,
        img: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=500&q=80'],
        sizes: null, desc: '14.6-inch Dynamic AMOLED 2X display with Snapdragon 8 Gen 2. S Pen included, 12,000mAh battery, and DeX mode for a desktop-like experience anywhere.'
      },

      {
        id: 15, name: 'Nexus Pulse Elite Band', brand: 'NEXUS', cat: 'Wearables', price: 149, orig: 199, badge: 'sale', label: 'Sale', rating: 4.5, rev: 322,
        img: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=500&q=80'],
        sizes: ['S', 'M', 'L'],
        desc: '14-day battery life, military-grade durability, and 24/7 health tracking in a slim, stylish form factor. Perfect for active lifestyles.'
      },

      {
        id: 16, name: 'Scandinavian Bookshelf', brand: 'LUXE HOME', cat: 'Home & Living', price: 799, orig: null, badge: 'new', label: 'New', rating: 4.6, rev: 34,
        img: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=500&q=80', fb: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=500&q=80',
        imgs: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=500&q=80'],
        sizes: null, desc: 'Minimalist solid oak bookshelf with hand-oiled finish. Six adjustable shelves, steel hardware, and a silhouette inspired by Nordic design principles. Assembly included.'
      },
    ];

    const REVIEWS_STATIC = [
      { name: 'James Thornton', date: 'March 2, 2026', stars: 5, title: 'Absolutely exceptional quality', body: "I've owned many premium products — this is in a different league. Build quality is extraordinary and it arrived faster than expected. Worth every penny." },
      { name: 'Sophia Chen', date: 'February 18, 2026', stars: 5, title: 'Worth every single penny', body: 'Product quality is incredible. Packaging was beautiful. AETHEL has a customer for life — I have already ordered again.' },
      { name: 'Marcus Williams', date: 'January 30, 2026', stars: 4, title: 'Great product, minor quirks', body: 'Hardware is absolutely 5-star. Minor software rough edges but these improve with each update. Overall very happy.' },
      { name: 'Aisha Patel', date: 'January 15, 2026', stars: 5, title: 'Best I have ever owned', body: 'The quality, comfort and features are in a completely different league. Stunning in every way.' },
    ];

    /* ═══ STATE ═══ */
    let cart = [];
    let curProd = null;
    let pickedStar = 0;
    let toastTmr;
    let pageHistory = ['home'];   // track visited pages
    let currentPage = 'home';     // track current page
    let scrollMemory = {};        // remember scroll position per page before leaving

    /* ═══ INIT ═══ */
    document.addEventListener('DOMContentLoaded', () => {
      initHeader();
      initSearch();
      renderGrid('featGrid', PRODS.slice(0, 8));
      renderGrid('shopGrid', PRODS);
      renderRelated(PRODS.slice(0, 4));
      renderRevs();
      document.getElementById('resCount').textContent = PRODS.length;
    });

    /* ═══ HEADER ═══ */
    function initHeader() {
      const h = document.getElementById('siteHdr');
      const s2t = document.getElementById('s2t');
      window.addEventListener('scroll', () => {
        h.classList.toggle('scrolled', scrollY > 40);
        s2t.classList.toggle('on', scrollY > 500);
      }, { passive: true });
    }

    /* ═══ SEARCH ═══ */
    function initSearch() {
      const inp = document.getElementById('srchInp');
      const drop = document.getElementById('srchDrop');
      if (!inp || !drop) return;

      inp.addEventListener('focus', () => {
        buildSuggestions(inp.value, drop);
        drop.classList.add('on');
      });

      inp.addEventListener('blur', () => setTimeout(() => drop.classList.remove('on'), 200));

      inp.addEventListener('input', () => {
        buildSuggestions(inp.value, drop);
        drop.classList.toggle('on', inp.value.length > 0 || document.activeElement === inp);
      });

      inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') doSearch();
        if (e.key === 'Escape') { inp.value = ''; drop.classList.remove('on'); }
      });
    }

    function buildSuggestions(q, drop) {
      const query = q.trim().toLowerCase();

      if (!query) {
        // Show default suggestions
        drop.innerHTML = `
      <div class="srch-item" onclick="srchFor('Smartwatch')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>Smartwatch</div>
      <div class="srch-item" onclick="srchFor('Wireless Headphones')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>Wireless Headphones</div>
      <div class="srch-item" onclick="srchFor('iPhone')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>iPhone 16 Pro Max</div>
      <div class="srch-item" onclick="srchFor('MacBook')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>MacBook Pro</div>
      <div class="srch-item" onclick="srchFor('Sofa')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>Premium Sofa</div>`;
        return;
      }

      // Live match from PRODS
      const matches = PRODS.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.cat.toLowerCase().includes(query)
      ).slice(0, 6);

      if (matches.length === 0) {
        drop.innerHTML = `<div class="srch-item" style="color:var(--dark-5);cursor:default"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>No results for "${q}"</div>`;
        return;
      }

      drop.innerHTML = matches.map(p => `
    <div class="srch-item" onclick="srchFor('${p.name.replace(/'/g, "\\'")}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <div>
        <div style="font-size:.85rem;color:var(--white)">${p.name}</div>
        <div style="font-size:.72rem;color:var(--dark-5)">${p.cat} · $${p.price.toLocaleString()}</div>
      </div>
    </div>`).join('');
    }

    /* ═══ SEARCH — Real working search ═══ */
    function doSearch() {
      const inp = document.getElementById('srchInp');
      const mobInp = document.querySelector('.nav-mob-srch .srch-inp');
      const q = (inp?.value || mobInp?.value || '').trim().toLowerCase();

      if (!q) return;

      // Navigate to shop page first
      nav('shop');

      setTimeout(() => {
        // Search across name, brand, category, description
        const results = PRODS.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.cat.toLowerCase().includes(q) ||
          (p.desc && p.desc.toLowerCase().includes(q))
        );

        renderGrid('shopGrid', results);
        updateCount(results.length);

        // Show search result info
        const cnt = document.getElementById('resCount');
        if (results.length === 0) {
          document.getElementById('shopGrid').innerHTML =
            `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--dark-5)">
          <div style="font-size:3rem;margin-bottom:16px">🔍</div>
          <div style="font-size:1.1rem;color:var(--white-muted);margin-bottom:8px">No results for "<strong style="color:var(--white)">${q}</strong>"</div>
          <div style="font-size:.875rem;margin-bottom:24px">Try a different keyword like "watch", "headphones", or "sofa"</div>
          <button class="btn btn-gold btn-sm" onclick="resetAllFilters(event)">Show All Products</button>
        </div>`;
        }

        showToast(results.length > 0
          ? `Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${q}"`
          : `No results for "${q}"`
        );
      }, 100);

      // Clear inputs
      if (inp) inp.value = '';
      if (mobInp) mobInp.value = '';
      document.getElementById('srchDrop')?.classList.remove('on');
    }

    function srchFor(term) {
      const inp = document.getElementById('srchInp');
      if (inp) inp.value = term;
      doSearch();
    }

    /* ═══ NAVIGATION — history-aware SPA router ═══ */
    function nav(id, e) {
      if (e) e.preventDefault();
      if (id === currentPage) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }

      // ── Save current scroll position before leaving ──
      scrollMemory[currentPage] = window.scrollY;

      pageHistory.push(id);
      currentPage = id;
      window.history.pushState({ page: id }, '', '#' + id);

      // Forward navigation → always go to top
      _showPage(id, true);
      closeMNav();
    }

    function _showPage(id, scrollToTop = true, restoreScroll = false, savedPos = 0) {
      // Switch visible page
      document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
      const pg = document.getElementById('pg-' + id);
      if (pg) pg.classList.add('on');
      document.querySelectorAll('.nav-a').forEach(a => {
        a.classList.toggle('on', a.dataset.pg === id);
      });
      currentPage = id;

      if (restoreScroll) {
        // ── BACK navigation: restore exact saved scroll position ──
        const pos = savedPos || 0;
        requestAnimationFrame(() => {
          window.scrollTo({ top: pos, behavior: 'instant' });
          document.documentElement.scrollTop = pos;
          document.body.scrollTop = pos;
        });
        setTimeout(() => {
          window.scrollTo({ top: pos, behavior: 'instant' });
          document.documentElement.scrollTop = pos;
          document.body.scrollTop = pos;
        }, 60);
      } else if (scrollToTop) {
        // ── FORWARD navigation: always scroll to top ──
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        requestAnimationFrame(() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        });
      }
    }

    // Navigate to a section on the home page
    function navToSection(sectionId, e) {
      if (e) e.preventDefault();

      if (currentPage !== 'home') {
        scrollMemory[currentPage] = window.scrollY;
        nav('home');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            const offset = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }
        }, 350);
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          const offset = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }

      document.querySelectorAll('.nav-a').forEach(a => a.classList.remove('on'));
      closeMNav();
    }

    // Navigate to shop and filter by category
    function navToShopCat(cat, e) {
      if (e) e.preventDefault();

      const filtered = cat === 'all' ? PRODS : PRODS.filter(p => p.cat === cat);
      nav('shop');

      setTimeout(() => {
        renderGrid('shopGrid', filtered);
        const cnt = document.getElementById('resCount');
        if (cnt) cnt.textContent = filtered.length;

        document.querySelectorAll('.fo').forEach(fo => {
          const txt = fo.textContent.trim();
          if (cat === 'all') {
            const isFirst = fo === document.querySelector('.fo');
            fo.classList.toggle('ck', isFirst);
          } else {
            fo.classList.toggle('ck', txt.startsWith(cat));
          }
        });
      }, 100);

      closeMNav();
    }

    function resetAllFilters(e) {
      if (e) e.preventDefault();
      nav('shop');
      setTimeout(() => {
        filterState.cat = 'all';
        filterState.brand = null;
        filterState.rating = null;
        filterState.maxPrice = 4000;

        document.querySelectorAll('.fo').forEach((o, i) => o.classList.remove('ck'));
        document.querySelector('[data-cat="all"]')?.classList.add('ck');
        document.querySelectorAll('.csw').forEach(s => s.classList.remove('sel'));

        const range = document.getElementById('priceRange');
        if (range) range.value = 4000;
        document.getElementById('prV').textContent = '$4,000';

        const sortEl = document.querySelector('.sort-sel');
        if (sortEl) sortEl.selectedIndex = 0;

        renderGrid('shopGrid', PRODS);
        updateCount(PRODS.length);
      }, 100);
    }

    function goBack(e) {
      if (e) e.preventDefault();

      if (pageHistory.length > 1) {
        // ── Save current page scroll before going back ──
        scrollMemory[currentPage] = window.scrollY;

        pageHistory.pop();
        const prev = pageHistory[pageHistory.length - 1];

        // ── Get the saved scroll position of the page we're returning to ──
        const savedPos = scrollMemory[prev] || 0;

        currentPage = prev;
        window.history.pushState({ page: prev }, '', '#' + prev);

        // ── Restore scroll — DO NOT scroll to top ──
        _showPage(prev, false, true, savedPos);
      } else {
        // No history — go home at top
        _showPage('home', true, false, 0);
        pageHistory = ['home'];
        currentPage = 'home';
      }
    }

    window.addEventListener('popstate', (e) => {
      const pg = e.state?.page || 'home';

      // ── Save current scroll before browser navigates ──
      scrollMemory[currentPage] = window.scrollY;

      const savedPos = scrollMemory[pg] || 0;
      const isBack = pageHistory.indexOf(pg) < pageHistory.indexOf(currentPage);

      currentPage = pg;
      const idx = pageHistory.lastIndexOf(pg);
      if (idx !== -1) pageHistory = pageHistory.slice(0, idx + 1);

      // Restore scroll if going back, scroll to top if going forward
      _showPage(pg, !isBack, isBack, savedPos);
    });

    function toggleMNav() {
      const nav = document.getElementById('mainNav');
      const isOpen = nav.classList.toggle('on');
      // Lock body scroll when nav is open
      document.body.style.overflow = isOpen ? 'hidden' : '';

      // Toggle hamburger icon to X
      const ico = document.getElementById('mico');
      if (ico) {
        if (isOpen) {
          ico.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>';
        } else {
          ico.innerHTML = '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
        }
      }
    }

    function closeMNav() {
      const nav = document.getElementById('mainNav');
      nav.classList.remove('on');
      document.body.style.overflow = '';

      // Reset hamburger icon
      const ico = document.getElementById('mico');
      if (ico) {
        ico.innerHTML = '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
      }

      // Close shop dropdown too
      const drop = document.getElementById('shopDrop');
      if (drop) drop.classList.remove('mob-open');
    }

    // Mobile Shop dropdown accordion toggle
    function toggleMobDrop(link, e) {
      e.preventDefault();
      const drop = document.getElementById('shopDrop');
      const arrow = document.getElementById('shopArrow');
      if (!drop) return;
      const isOpen = drop.classList.toggle('mob-open');
      if (arrow) arrow.textContent = isOpen ? '▴' : '▾';
    }

    /* ═══ PRODUCT CARD RENDERER ═══ */
    function card(p) {
      const disc = p.orig ? Math.round(((p.orig - p.price) / p.orig) * 100) : 0;
      const stars = [1, 2, 3, 4, 5].map(i =>
        `<svg class="s${i > Math.floor(p.rating) ? ' e' : ''}" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
      ).join('');
      // Short description for list view (first 90 chars)
      const shortDesc = p.desc ? p.desc.substring(0, 90) + (p.desc.length > 90 ? '...' : '') : '';
      return `
  <div class="pcard" onclick="openDetail(${p.id})">
    <div class="pi-wrap">
      <img class="pi" src="${p.img}" alt="${p.name}" onerror="this.src='${p.fb}'" loading="lazy">
      <div class="pbadges"><span class="pill pill-${p.badge}">${p.label}</span></div>
      <button class="p-wish" onclick="togWish(this,event)" title="Save to Wishlist"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></button>
      <div class="p-qa" onclick="event.stopPropagation();addByProd(${p.id})">+ Add to Cart</div>
    </div>
    <div class="pinfo">
      <div class="pbrnd">${p.brand}</div>
      <div class="pnm">${p.name}</div>
      <div class="pstars">${stars}<span class="rn">(${p.rev})</span></div>
      <div class="pdesc" style="display:none;font-size:.82rem;color:var(--white-muted);line-height:1.6;margin-bottom:4px">${shortDesc}</div>
      <div class="pship" style="display:none"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> Free Shipping</div>
      <div class="ppr">
        <span class="pnow">$${p.price.toLocaleString()}.00</span>
        ${p.orig ? `<span class="pwas">$${p.orig}.00</span><span class="poff">-${disc}%</span>` : ''}
      </div>
    </div>
  </div>`;
    }

    function renderGrid(id, prods) {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = prods.length
        ? prods.map(card).join('')
        : '<p style="color:var(--dark-5);padding:40px 0;grid-column:1/-1;text-align:center">No products found.</p>';
    }

    function renderRelated(prods) {
      const el = document.getElementById('relGrid');
      if (el) el.innerHTML = prods.map(card).join('');
    }

    /* ═══ FEATURED TAB FILTER ═══ */
    function filterTab(btn, cat) {
      document.querySelectorAll('.pt').forEach(t => t.classList.remove('on'));
      btn.classList.add('on');
      const f = cat === 'all' ? PRODS : PRODS.filter(p => p.cat === cat);
      renderGrid('featGrid', f.slice(0, 8));
    }

    /* ═══ PRODUCT DETAIL ═══ */
    function openDetail(id) {
      const p = PRODS.find(x => x.id === id);
      if (!p) return;
      curProd = p;

      // ── Save current page scroll position so Back returns here ──
      scrollMemory[currentPage] = window.scrollY;

      document.getElementById('dBread').textContent = p.name;
      document.getElementById('dBrand').textContent = p.brand;
      document.getElementById('dName').textContent = p.name;
      document.getElementById('dDesc').textContent = p.desc;
      document.getElementById('tabDescTxt').textContent = p.desc;
      document.getElementById('dRating').textContent = p.rating;
      document.getElementById('dRevCnt').textContent = `(${p.rev} reviews)`;
      document.getElementById('dPrice').textContent = '$' + p.price.toLocaleString() + '.00';

      const was = document.getElementById('dWas');
      const sav = document.getElementById('dSave');
      if (p.orig) {
        const s = Math.round(((p.orig - p.price) / p.orig) * 100);
        was.textContent = '$' + p.orig.toLocaleString() + '.00';
        was.style.display = '';
        sav.textContent = `Save ${s}%`;
        sav.style.display = '';
      } else { was.style.display = 'none'; sav.style.display = 'none'; }

      // Pill
      const pill = document.getElementById('dPill');
      pill.textContent = p.label;
      pill.className = 'pill pill-' + p.badge;
      document.getElementById('dGalBadge').textContent = p.label;

      // Stars
      const sc = document.getElementById('dStars');
      sc.innerHTML = [1, 2, 3, 4, 5].map(i =>
        `<svg class="dst" viewBox="0 0 24 24" fill="${i <= Math.floor(p.rating) ? 'var(--gold)' : 'var(--dark-4)'}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
      ).join('');

      // Gallery
      const mi = document.getElementById('galImg');
      mi.src = p.imgs[0];
      mi.onerror = () => { mi.src = p.fb; };
      const tg = document.getElementById('galThumbs');
      tg.innerHTML = p.imgs.map((src, i) =>
        `<div class="gal-th${i === 0 ? ' on' : ''}" onclick="swGal(this,'${src}','${p.fb}')"><img src="${src}" onerror="this.src='${p.fb}'" loading="lazy"></div>`
      ).join('');

      // Sizes
      const sb = document.getElementById('sizeBlk');
      const sr = document.getElementById('szRow');
      if (p.sizes) {
        sb.style.display = '';
        sr.innerHTML = p.sizes.map((s, i) =>
          `<button class="szb${i === 1 ? ' on' : ''}" onclick="pickSz(this,'${s}')">${s}</button>`
        ).join('');
        document.getElementById('dSz').textContent = p.sizes[1] || p.sizes[0];
      } else { sb.style.display = 'none'; }

      // Reset
      document.getElementById('qi').value = 1;
      document.getElementById('wlBtn').classList.remove('on');
      document.getElementById('wlBtn').innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`;

      // Related (same category, exclude self)
      const rel = PRODS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
      renderRelated(rel.length >= 2 ? rel : PRODS.filter(x => x.id !== p.id).slice(0, 4));

      // Open tab reset
      openTab('desc');

      // Switch to detail page
      _showPage('detail');
      pageHistory.push('detail');
      currentPage = 'detail';
      window.history.pushState({ page: 'detail' }, '', '#detail');

      // Force scroll to absolute top — multiple methods for cross-browser + timing fix
      // Run immediately
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Run again after browser renders the page (fixes the "opens at bottom" bug)
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });

      // Final fallback after full render — handles all cases including list view clicks
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 50);

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 150);
    }

    /* ═══ GALLERY ═══ */
    function swGal(th, src, fb) {
      document.querySelectorAll('.gal-th').forEach(t => t.classList.remove('on'));
      th.classList.add('on');
      const img = document.getElementById('galImg');
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.18s ease';
      setTimeout(() => { img.src = src; img.onerror = () => { img.src = fb; }; img.style.opacity = '1'; }, 150);
    }

    /* ═══ SIZE / COLOR ═══ */
    function pickSz(btn, label) {
      document.querySelectorAll('#szRow .szb').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      document.getElementById('dSz').textContent = label;
    }

    function pickCol(dot, name) {
      document.querySelectorAll('.col-opts .co').forEach(d => d.classList.remove('on'));
      dot.classList.add('on');
      document.getElementById('dCol').textContent = name;
    }

    /* ═══ QTY ═══ */
    function chgQ(d) {
      const i = document.getElementById('qi');
      i.value = Math.max(1, Math.min(99, parseInt(i.value) + d));
    }

    /* ═══ CART ═══ */
    function toggleCart() {
      const sb = document.getElementById('cartSb');
      const ov = document.getElementById('cartOv');
      const open = sb.classList.toggle('on');
      ov.classList.toggle('on', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }

    function addToCart() {
      if (!curProd) return;
      const qty = parseInt(document.getElementById('qi').value) || 1;
      const ex = cart.find(x => x.id === curProd.id);
      if (ex) ex.qty += qty;
      else cart.push({ ...curProd, qty });
      renderCart();
      showToast(`${qty}× "${curProd.name}" added to cart 🛒`);
      toggleCart();
    }

    function addByProd(id) {
      const p = PRODS.find(x => x.id === id);
      if (!p) return;
      const ex = cart.find(x => x.id === id);
      if (ex) ex.qty++;
      else cart.push({ ...p, qty: 1 });
      renderCart();
      showToast(`"${p.name}" added to cart 🛒`);
    }

    function cQty(id, d) {
      const item = cart.find(x => x.id === id);
      if (!item) return;
      item.qty = Math.max(0, item.qty + d);
      if (!item.qty) cart = cart.filter(x => x.id !== id);
      renderCart();
    }

    function cRm(id) { cart = cart.filter(x => x.id !== id); renderCart(); }

    function renderCart() {
      const list = document.getElementById('cartList');
      const empty = document.getElementById('cartMty');
      const ft = document.getElementById('cartFt');
      const badge = document.getElementById('cBadge');
      const tot = cart.reduce((s, i) => s + i.qty, 0);
      const price = cart.reduce((s, i) => s + i.price * i.qty, 0);
      badge.textContent = tot;
      badge.style.display = tot > 0 ? '' : 'none';
      if (!cart.length) { list.innerHTML = ''; empty.style.display = ''; ft.style.display = 'none'; return; }
      empty.style.display = 'none'; ft.style.display = '';
      list.innerHTML = cart.map(it => `
    <div class="cart-ci">
      <div class="cart-cimg"><img src="${it.img}" alt="${it.name}" onerror="this.src='${it.fb}'"></div>
      <div style="flex:1">
        <div class="cart-cn">${it.name}</div>
        <div class="cart-cp">$${(it.price * it.qty).toLocaleString()}.00</div>
        <div class="cart-qr">
          <button class="cqb" onclick="cQty(${it.id},-1)">−</button>
          <span style="font-family:var(--font-m);font-size:.82rem;min-width:18px;text-align:center">${it.qty}</span>
          <button class="cqb" onclick="cQty(${it.id},1)">+</button>
          <span class="crm" onclick="cRm(${it.id})">Remove</span>
        </div>
      </div>
    </div>`).join('');
      document.getElementById('cartTot').textContent = '$' + price.toLocaleString() + '.00';
    }

    /* ═══ WISHLIST ═══ */
    function togWl(btn) {
      btn.classList.toggle('on');
      const on = btn.classList.contains('on');
      btn.innerHTML = on
        ? `<svg viewBox="0 0 24 24" fill="var(--red)" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`;
      showToast(on ? 'Saved to wishlist ♥' : 'Removed from wishlist');
    }

    function togWish(btn, e) {
      e.stopPropagation();
      btn.classList.toggle('wishlisted');
      const on = btn.classList.contains('wishlisted');
      btn.style.background = on ? 'var(--red)' : '';
      btn.style.color = on ? 'white' : '';
      btn.style.borderColor = on ? 'var(--red)' : '';
      showToast(on ? 'Saved to wishlist ♥' : 'Removed from wishlist');
    }

    /* ═══ TABS ═══ */
    function openTab(id, btn) {
      document.querySelectorAll('.tbn').forEach(b => {
        const match = b.getAttribute('onclick')?.includes(`'${id}'`);
        b.classList.toggle('on', match);
      });
      document.querySelectorAll('.tpn').forEach(p => p.classList.remove('on'));
      const panel = document.getElementById('tab-' + id);
      if (panel) panel.classList.add('on');
    }

    /* ═══ FILTERS ═══ */
    function togF(btn) {
      btn.classList.toggle('op');
      const body = btn.nextElementSibling;
      if (body) body.style.display = btn.classList.contains('op') ? '' : 'none';
    }
    /* ═══ FILTER STATE ═══ */
    const filterState = { cat: 'all', brand: null, rating: null, maxPrice: 4000 };

    function updateCount(n) {
      const el = document.getElementById('resCount');
      if (el) el.textContent = n;
    }

    function applyAllFilters() {
      let results = [...PRODS];

      // Category filter
      if (filterState.cat && filterState.cat !== 'all') {
        results = results.filter(p => p.cat === filterState.cat);
      }

      // Brand filter
      if (filterState.brand) {
        results = results.filter(p => p.brand === filterState.brand);
      }

      // Rating filter
      if (filterState.rating) {
        results = results.filter(p => p.rating >= filterState.rating);
      }

      // Price filter
      results = results.filter(p => p.price <= filterState.maxPrice);

      // Sort
      const sortEl = document.querySelector('.sort-sel');
      if (sortEl) {
        const val = sortEl.value;
        if (val === 'price-asc') results.sort((a, b) => a.price - b.price);
        if (val === 'price-desc') results.sort((a, b) => b.price - a.price);
        if (val === 'rating') results.sort((a, b) => b.rating - a.rating);
        if (val === 'newest') results.sort((a, b) => b.id - a.id);
      }

      renderGrid('shopGrid', results);
      updateCount(results.length);

      if (results.length === 0) {
        document.getElementById('shopGrid').innerHTML =
          `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--dark-5)">
        <div style="font-size:3rem;margin-bottom:16px">😕</div>
        <div style="font-size:1rem;color:var(--white-muted);margin-bottom:20px">No products match your filters</div>
        <button class="btn btn-gold btn-sm" onclick="clearF()">Clear Filters</button>
      </div>`;
      }
    }

    /* ── Category filter ── */
    function filterByCat(label) {
      const cat = label.dataset.cat;

      // Uncheck all cat labels, check clicked one
      document.querySelectorAll('[data-cat]').forEach(l => l.classList.remove('ck'));
      label.classList.add('ck');

      filterState.cat = cat;
      filterState.brand = null;
      filterState.rating = null;

      // Uncheck brand and rating
      document.querySelectorAll('[data-brand],[data-rating]').forEach(l => l.classList.remove('ck'));

      applyAllFilters();
    }

    /* ── Brand filter ── */
    function filterByBrand(label) {
      const brand = label.dataset.brand;
      const isActive = label.classList.contains('ck');

      // Toggle
      document.querySelectorAll('[data-brand]').forEach(l => l.classList.remove('ck'));
      if (!isActive) {
        label.classList.add('ck');
        filterState.brand = brand;
      } else {
        filterState.brand = null;
      }

      // Reset cat to all when filtering by brand
      filterState.cat = 'all';
      document.querySelectorAll('[data-cat]').forEach(l => l.classList.remove('ck'));
      document.querySelector('[data-cat="all"]')?.classList.add('ck');

      applyAllFilters();
    }

    /* ── Rating filter ── */
    function filterByRating(label) {
      const rating = parseFloat(label.dataset.rating);
      const isActive = label.classList.contains('ck');

      document.querySelectorAll('[data-rating]').forEach(l => l.classList.remove('ck'));
      if (!isActive) {
        label.classList.add('ck');
        filterState.rating = rating;
      } else {
        filterState.rating = null;
      }
      applyAllFilters();
    }

    /* ── Price filter ── */
    function filterByPrice(val) {
      filterState.maxPrice = parseInt(val);
      document.getElementById('prV').textContent = '$' + Number(val).toLocaleString();
      applyAllFilters();
    }

    /* ── Sort ── */
    function applySort(val) {
      applyAllFilters();
    }

    /* ── Clear all ── */
    function togCk(label) { label.classList.toggle('ck'); } // kept for compatibility

    function clearF() {
      // Reset all state
      filterState.cat = 'all';
      filterState.brand = null;
      filterState.rating = null;
      filterState.maxPrice = 4000;

      // Reset UI
      document.querySelectorAll('.fo').forEach(l => l.classList.remove('ck'));
      document.querySelector('[data-cat="all"]')?.classList.add('ck');
      document.querySelectorAll('.csw').forEach(s => s.classList.remove('sel'));

      const range = document.getElementById('priceRange');
      if (range) range.value = 4000;
      document.getElementById('prV').textContent = '$4,000';

      const sortEl = document.querySelector('.sort-sel');
      if (sortEl) sortEl.selectedIndex = 0;

      renderGrid('shopGrid', PRODS);
      updateCount(PRODS.length);
      showToast('All filters cleared');
    }

    /* ═══ VIEW TOGGLE ═══ */
    function setView(btn, mode) {
      // Update active button
      document.querySelectorAll('.vb').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');

      const grids = document.querySelectorAll('.pgrid');

      if (mode === 'list') {
        grids.forEach(g => {
          g.classList.add('list-view');
          g.style.gridTemplateColumns = '1fr';
        });
        // Show description and shipping in list view
        document.querySelectorAll('.pdesc, .pship').forEach(el => el.style.display = 'flex');
        document.querySelectorAll('.pdesc').forEach(el => el.style.display = 'block');
        // Reset hover transform for list cards
        document.querySelectorAll('.pcard').forEach(c => {
          c.style.transform = 'none';
        });
      } else {
        grids.forEach(g => {
          g.classList.remove('list-view');
          g.style.gridTemplateColumns = '';
        });
        // Hide description and shipping in grid view
        document.querySelectorAll('.pdesc, .pship').forEach(el => el.style.display = 'none');
      }

      // Save preference
      window._viewMode = mode;
    }

    /* ═══ PAGINATION ═══ */
    function switchPg(btn) {
      document.querySelectorAll('.pagi .pgb').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      showToast(`Page ${btn.textContent} loaded`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ═══ REVIEWS ═══ */
    function renderRevs() {
      const el = document.getElementById('revList');
      if (!el) return;
      el.innerHTML = REVIEWS_STATIC.map(r => {
        const stars = [1, 2, 3, 4, 5].map(i =>
          `<svg class="rst" viewBox="0 0 24 24" fill="${i <= r.stars ? 'var(--gold)' : 'var(--dark-4)'}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
        ).join('');
        return `<div class="rcard"><div class="rcard-t"><span class="rnm">${r.name}</span><span class="rdt">${r.date}</span></div><div class="rss">${stars}</div><div class="rtit">${r.title}</div><div class="rbdy">${r.body}</div></div>`;
      }).join('');
    }

    function pickStar(n) {
      pickedStar = n;
      const sp = document.querySelectorAll('#starPick span');
      sp.forEach((s, i) => { s.textContent = i < n ? '★' : '☆'; s.style.color = i < n ? 'var(--gold)' : ''; });
    }

    function submitRev() {
      if (!pickedStar) { showToast('Please select a star rating first'); return; }
      const title = document.querySelector('#revFrm .rev-inp').value.trim();
      const body = document.querySelector('#revFrm .rev-ta').value.trim();
      if (!title || !body) { showToast('Please fill in title and review text'); return; }
      REVIEWS_STATIC.unshift({ name: 'You', date: 'Just now', stars: pickedStar, title, body });
      renderRevs();
      document.getElementById('revFrm').style.display = 'none';
      showToast('✓ Review submitted! Thank you.');
    }

    /* ═══ NEWSLETTER ═══ */
    function nlSub(e) {
      e.preventDefault();
      const inp = e.target.querySelector('input');
      showToast(`✓ Subscribed: ${inp.value}`);
      inp.value = '';
    }

    /* ═══ TOAST ═══ */
    function showToast(msg) {
      const t = document.getElementById('toast');
      document.getElementById('toastMsg').textContent = msg;
      t.classList.add('on');
      clearTimeout(toastTmr);
      toastTmr = setTimeout(() => t.classList.remove('on'), 3200);
    }

    /* ═══ EXPOSE globals ═══ */
    const G = {
      nav, goBack, navToSection, navToShopCat, resetAllFilters,
      toggleCart, doSearch, srchFor, openDetail, filterTab,
      addToCart, addByProd, cQty, cRm, togWl, togWish,
      togF, togCk, clearF, filterByCat, filterByBrand,
      filterByRating, filterByPrice, applySort,
      setView, switchPg, swGal, pickSz, pickCol, chgQ, openTab,
      pickStar, submitRev, nlSub, toggleMNav, closeMNav,
      toggleMobDrop, showToast, updateCount
    };
    Object.assign(window, G);

    /* ═══ DEVELOPER-QUALITY ENHANCEMENTS ═══ */

    // 1. Keyboard: Escape closes cart and mobile nav
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const cartEl = document.getElementById('cartSb');
        if (cartEl.classList.contains('on')) toggleCart();
        const navEl = document.getElementById('mainNav');
        if (navEl.classList.contains('on')) closeMNav();
      }
    });

    // 2. Scroll-triggered fade-in for sections (IntersectionObserver)
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    function observeFadeEls() {
      document.querySelectorAll('.pcard, .cat-c, .testi-c, .fi, .promo-c').forEach(el => {
        el.classList.add('fade-up');
        fadeObserver.observe(el);
      });
    }

    // 3. Active nav link highlight based on scroll position (home page only)
    function updateActiveNavOnScroll() {
      if (currentPage !== 'home') return;
      const sections = ['collections', 'deals', 'blog', 'contact'];
      const scrollY = window.scrollY + 120;

      let active = null;
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) active = id;
      });

      document.querySelectorAll('.nav-a').forEach(a => {
        const isHome = a.dataset.pg === 'home';
        if (!active && isHome) { a.classList.add('on'); return; }
        a.classList.toggle('on', a.dataset.section === active);
      });
    }

    window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });

    // Tag nav links with section data
    document.addEventListener('DOMContentLoaded', () => {
      const sectionMap = { collections: 'Collections', deals: 'Deals', blog: 'Blog', contact: 'Contact' };
      document.querySelectorAll('.nav-a').forEach(a => {
        Object.entries(sectionMap).forEach(([id, label]) => {
          if (a.textContent.trim() === label) a.dataset.section = id;
        });
      });
      observeFadeEls();
    });

    // 4. Re-observe after tab switches (products reload)
    const origRenderGrid = window.renderGrid;

    // 5. Cart count bounce animation on add
    function bounceCartBadge() {
      const badge = document.getElementById('cBadge');
      if (!badge) return;
      badge.style.transform = 'scale(1.6)';
      badge.style.transition = 'transform 0.2s cubic-bezier(.34,1.56,.64,1)';
      setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
    }

    // Override addByProd to include badge bounce
    const _origAddByProd = window.addByProd;
    window.addByProd = function (id) {
      _origAddByProd(id);
      bounceCartBadge();
    };

    const _origAddToCart = window.addToCart;
    window.addToCart = function () {
      _origAddToCart();
      bounceCartBadge();
    };

    // 6. Smooth image loading — prevent layout shift
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.4s ease';
      img.addEventListener('load', () => { img.style.opacity = '1'; });
      if (img.complete) img.style.opacity = '1';
    });

    // 7. Prevent double-tap zoom on mobile buttons
    document.querySelectorAll('button, .pcard, .cat-c').forEach(el => {
      el.addEventListener('touchend', (e) => { e.preventDefault(); el.click(); }, { passive: false });
    });

    // 8. Search — highlight matching text in product names
    function highlightMatch(text, query) {
      if (!query) return text;
      const re = new RegExp(`(${query})`, 'gi');
      return text.replace(re, '<mark style="background:var(--gold);color:var(--black);border-radius:2px;padding:0 2px">$1</mark>');
    }
