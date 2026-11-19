(function () {
  const projects = window.PROJECTS || [];
  // Which image kinds this page shows, from <body data-show="photo"> or "drawing model".
  const kinds = (document.body.dataset.show || "photo").split(/\s+/);
  const listEl = document.getElementById("projects");
  const filterEl = document.getElementById("software-filter");

  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    }
    children.forEach((c) => c && node.appendChild(c));
    return node;
  };

  // Lightbox (shared by both pages)
  const box = document.getElementById("lightbox");
  const boxImg = document.getElementById("lightbox-img");
  const boxCap = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  let opener = null;
  function openBox(img, trigger) {
    opener = trigger;
    boxImg.src = img.src;
    boxImg.alt = img.alt;
    boxCap.textContent = img.alt;
    box.classList.add("open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }
  function closeBox() {
    box.classList.remove("open");
    document.body.style.overflow = "";
    if (opener) opener.focus();
  }
  if (box) {
    closeBtn.addEventListener("click", closeBox);
    box.addEventListener("click", (e) => { if (e.target === box) closeBox(); });
    document.addEventListener("keydown", (e) => {
      if (!box.classList.contains("open")) return;
      if (e.key === "Escape") closeBox();
      if (e.key === "Tab") { e.preventDefault(); closeBtn.focus(); } // keep focus in the dialog
    });
  }

  // Project sections
  const shown = projects
    .map((p) => ({ ...p, images: p.images.filter((i) => kinds.includes(i.kind)) }))
    .filter((p) => p.images.length);

  function render(software) {
    listEl.replaceChildren(
      ...shown
        .filter((p) => !software || p.software.includes(software))
        .map((p) => {
          const shots = el("div", { class: "shots" });
          p.images.forEach((img) => {
            const btn = el("button", { type: "button", "aria-label": `Enlarge: ${img.alt}` }, [
              el("img", { src: img.src, alt: img.alt, class: img.kind, "data-kind": img.kind, loading: "lazy" }),
            ]);
            btn.addEventListener("click", () => openBox(img, btn));
            shots.append(btn);
          });
          const chips = el("ul", { class: "chips", "aria-label": "Software" },
            p.software.map((s) => el("li", { text: s })));
          return el("article", { class: "project", id: p.id }, [
            el("h3", { text: p.title }),
            el("p", { class: "meta", text: [p.role, p.year].filter(Boolean).join(", ") }),
            el("p", { class: "summary", text: p.summary }),
            chips,
            shots,
          ]);
        }),
    );
  }

  if (listEl) {
    render(null);
    if (filterEl) {
      const all = ["All software", ...new Set(shown.flatMap((p) => p.software))];
      all.forEach((label, i) => {
        const btn = el("button", { type: "button", "aria-pressed": String(i === 0), text: label });
        btn.addEventListener("click", () => {
          filterEl.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
          render(i === 0 ? null : label);
        });
        filterEl.append(btn);
      });
    }
  }

  // Size the hero dimension line to the widest line of the wrapped headline.
  const headline = document.getElementById("headline");
  const dim = document.querySelector(".dim");
  function fitDimension() {
    if (!headline || !dim) return;
    dim.style.width = "";
    const range = document.createRange();
    range.selectNodeContents(headline);
    const widest = Math.max(...[...range.getClientRects()].map((r) => r.width));
    if (Number.isFinite(widest) && widest > 0) dim.style.width = `${Math.ceil(widest)}px`;
  }
  fitDimension();
  window.addEventListener("resize", fitDimension);
  if (document.fonts) document.fonts.ready.then(fitDimension);
})();
