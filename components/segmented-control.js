/* Segmented Control — vanilla port of ddoemonn/segmented-control (21st.dev, MIT).
   Usage: SegmentedControl.fromSelect(document.getElementById("qualitySelect"), { label: "Detay seviyesi" });
   The original <select> is hidden but kept: reading select.value and listening for "change" keep working. */
(function (global) {
  "use strict";
  const instances = [];
  function el(tag, cls, attrs) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (attrs) for (const k in attrs) node.setAttribute(k, attrs[k]);
    return node;
  }
  function fromSelect(select, opts) {
    opts = opts || {};
    if (!select || select.dataset.segEnhanced) return null;
    select.dataset.segEnhanced = "true";
    const options = Array.from(select.options).map(o => ({ value: o.value, label: o.textContent.trim(), disabled: o.disabled }));
    const count = Math.max(1, options.length);
    const root = el("div", "seg-control", { role: "radiogroup", "aria-label": opts.label || select.getAttribute("aria-label") || select.name || "" });
    root.style.setProperty("--seg-count", count);
    const track = el("div", "seg-control__track");
    const thumb = el("div", "seg-control__thumb", { "aria-hidden": "true" });
    const mask = el("div", "seg-control__mask");
    const maskRow = el("div", "seg-control__mask-row");
    const hits = el("div", "seg-control__hits");
    const labels = [], buttons = [];
    options.forEach((o, i) => {
      const lab = el("span", "seg-control__label", { "aria-hidden": "true" }); lab.textContent = o.label; labels.push(lab); track.append(lab);
      const inv = el("span", "seg-control__label"); inv.textContent = o.label; maskRow.append(inv);
      const btn = el("button", "seg-control__hit", { type: "button", role: "radio" });
      const sr = el("span", "seg-sr"); sr.textContent = o.label; btn.append(sr);
      if (o.disabled) btn.setAttribute("aria-disabled", "true");
      btn.addEventListener("click", () => { if (!o.disabled) choose(i, false); });
      btn.addEventListener("keydown", e => onKey(e, i));
      btn.addEventListener("pointerenter", () => { if (!o.disabled) hover(i); });
      buttons.push(btn); hits.append(btn);
    });
    hits.addEventListener("pointerleave", () => hover(-1));
    mask.append(maskRow); thumb.append(mask); track.append(thumb, hits); root.append(track);
    select.hidden = true; select.tabIndex = -1;
    select.insertAdjacentElement("afterend", root);
    // Point any <label for="select"> at the group so clicking the label focuses the current option.
    if (select.id) document.querySelectorAll('label[for="' + select.id + '"]').forEach(l => { l.removeAttribute("for"); l.addEventListener("click", () => buttons[current()]?.focus()); });

    function current() { const i = options.findIndex(o => o.value === select.value); return i < 0 ? 0 : i; }
    function hover(i) { labels.forEach((l, k) => l.classList.toggle("is-hover", k === i && k !== current())); }
    function render() {
      const idx = current();
      root.style.setProperty("--seg-index", idx);
      buttons.forEach((b, k) => { b.setAttribute("aria-checked", String(k === idx)); b.tabIndex = k === idx ? 0 : -1; });
    }
    function choose(i, focus) {
      const o = options[i]; if (!o || o.disabled) return;
      if (focus) buttons[i].focus();
      if (select.value !== o.value) { select.value = o.value; select.dispatchEvent(new Event("change", { bubbles: true })); }
      render();
    }
    function seek(from, dir) { let i = from; for (let k = 0; k < count; k++) { i = (i + dir + count) % count; if (!options[i].disabled) return i; } return from; }
    function onKey(e, i) {
      const map = { ArrowRight: () => seek(i, 1), ArrowDown: () => seek(i, 1), ArrowLeft: () => seek(i, -1), ArrowUp: () => seek(i, -1), Home: () => seek(count - 1, 1), End: () => seek(0, -1) };
      if (!map[e.key]) return; e.preventDefault(); choose(map[e.key](), true);
    }
    // Keep in sync when app code sets select.value programmatically and fires "change" (e.g. restoring history).
    select.addEventListener("change", render);
    render();
    const api = { root, refresh: render };
    instances.push(api);
    return api;
  }
  // refreshAll(): call after code sets select.value without firing "change".
  global.SegmentedControl = { fromSelect, refreshAll: () => instances.forEach(i => i.refresh()) };
})(window);
