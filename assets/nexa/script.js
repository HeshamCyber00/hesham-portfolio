(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -----------------------------------------------------
     Footer year
  ----------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* -----------------------------------------------------
     Header: shrink + blur on scroll
  ----------------------------------------------------- */
  const header = document.getElementById("siteHeader");
  const setHeaderState = () => {
    if (window.scrollY > 12) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  /* -----------------------------------------------------
     Mobile nav toggle
  ----------------------------------------------------- */
  const navToggle = document.getElementById("navToggle");
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.getElementById("mainNav").addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      header.classList.remove("nav-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* -----------------------------------------------------
     Scroll reveal (single, consistent pattern site-wide)
  ----------------------------------------------------- */
  const revealTargets = document.querySelectorAll("[data-reveal]");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = Array.from(el.parentElement?.querySelectorAll("[data-reveal]") || [])
              .indexOf(el);
            setTimeout(() => el.classList.add("is-visible"), Math.min(delay, 4) * 90);
            revealObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  /* -----------------------------------------------------
     Stat count-up, triggered once when in view
  ----------------------------------------------------- */
  const statNums = document.querySelectorAll(".stat-num");

  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimal || "0", 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      const value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (statNums.length) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      statNums.forEach((el) => {
        const target = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimal || "0", 10);
        el.textContent = target.toFixed(decimals) + (el.dataset.suffix || "");
      });
    } else {
      const statObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              statObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      statNums.forEach((el) => statObserver.observe(el));
    }
  }

  /* -----------------------------------------------------
     Pricing: monthly / yearly toggle
  ----------------------------------------------------- */
  const billingSwitch = document.getElementById("billingSwitch");
  const billingLabels = document.querySelectorAll(".billing-label");
  const amounts = document.querySelectorAll(".price-amount .amount");

  if (billingSwitch) {
    billingSwitch.addEventListener("click", () => {
      const toYearly = billingSwitch.getAttribute("aria-checked") !== "true";
      billingSwitch.setAttribute("aria-checked", String(toYearly));

      billingLabels.forEach((label) => {
        const isMatch = label.dataset.period === (toYearly ? "yearly" : "monthly");
        label.classList.toggle("active", isMatch);
      });

      amounts.forEach((amount) => {
        const value = toYearly ? amount.dataset.yearly : amount.dataset.monthly;
        if (value) amount.textContent = value;
      });
    });
  }

  /* -----------------------------------------------------
     Hero background: soft AI network canvas
     A single deliberate ambient motion piece — not user
     triggered, kept slow and quiet, off on reduced-motion.
  ----------------------------------------------------- */
  const canvas = document.getElementById("network");

  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext("2d");
    let width, height, nodes;
    let animationId;

    const NODE_COLOR = "139,124,246";
    const LINK_DIST = 150;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = rect.width * window.devicePixelRatio;
      height = canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      const count = Math.max(24, Math.min(56, Math.floor((rect.width * rect.height) / 26000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    };

    const step = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > rect.width) n.vx *= -1;
        if (n.y < 0 || n.y > rect.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(${NODE_COLOR},${0.16 * (1 - dist / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.fillStyle = `rgba(${NODE_COLOR},0.55)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(step);
    };

    resize();
    step();

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        step();
      }
    });
  }
})();
