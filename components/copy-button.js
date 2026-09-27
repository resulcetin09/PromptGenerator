/* Copy Button — vanilla port of ddoemonn/copy-button (21st.dev, MIT).
   Usage: CopyButton.attach(buttonEl, () => textToCopy, { label: "Kopyala" });
   Or create: const btn = CopyButton.create(() => text, { label: "Kopyala" }); parent.append(btn); */
(function (global) {
  "use strict";
  const ICONS =
    '<svg class="cb-idle" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9.6 5.1V3.7A1.7 1.7 0 0 0 7.9 2H3.7A1.7 1.7 0 0 0 2 3.7v4.2a1.7 1.7 0 0 0 1.7 1.7h1.4"/><rect x="5.1" y="5.1" width="6.9" height="6.9" rx="1.7"/></svg>' +
    '<svg class="cb-copied cb-check" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.9 7.4 5.6 10.1 11.1 4"/></svg>' +
    '<svg class="cb-error" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3.6 3.6 10.4 10.4"/><path d="M10.4 3.6 3.6 10.4"/></svg>';

  function writeFallback(text) {
    const area = document.createElement("textarea");
    area.value = text; area.setAttribute("readonly", "");
    area.style.cssText = "position:fixed;top:0;left:0;opacity:0";
    document.body.appendChild(area);
    const sel = document.getSelection();
    const prev = sel && sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
    area.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    area.remove();
    if (sel && prev) { sel.removeAllRanges(); sel.addRange(prev); }
    return ok;
  }

  async function copyText(text) {
    if (!text) return false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) { await navigator.clipboard.writeText(text); return true; }
      return writeFallback(text);
    } catch { try { return writeFallback(text); } catch { return false; } }
  }

  function attach(button, getText, opts) {
    opts = Object.assign({ label: "Kopyala", copiedLabel: "Kopyalandı", errorLabel: "Kopyalanamadı", timeout: 2000, iconOnly: false }, opts || {});
    button.type = "button";
    button.classList.add("copy-btn");
    if (opts.iconOnly) button.classList.add("is-icon-only");
    button.dataset.status = "idle";
    button.setAttribute("aria-label", opts.label);
    if (opts.iconOnly) button.title = opts.label;
    button.innerHTML =
      '<span class="copy-btn__icons" aria-hidden="true">' + ICONS + "</span>" +
      '<span class="copy-btn__labels" aria-hidden="true"><span class="cb-idle"></span><span class="cb-copied"></span><span class="cb-error"></span></span>' +
      '<span class="cb-sr" role="status" aria-live="polite"></span>';
    const [idleL, copiedL, errorL] = button.querySelectorAll(".copy-btn__labels span");
    idleL.textContent = opts.label; copiedL.textContent = opts.copiedLabel; errorL.textContent = opts.errorLabel;
    const live = button.querySelector(".cb-sr");
    let timer = null;
    function set(status) {
      button.dataset.status = status;
      live.textContent = status === "copied" ? opts.copiedLabel : status === "error" ? opts.errorLabel : "";
    }
    button.addEventListener("click", async () => {
      if (button.disabled) return;
      const text = typeof getText === "function" ? getText() : String(getText || "");
      const ok = await copyText(text);
      set(ok ? "copied" : "error");
      if (ok && opts.onCopy) opts.onCopy(text);
      if (!ok && opts.onError) opts.onError();
      clearTimeout(timer);
      timer = setTimeout(() => set("idle"), opts.timeout);
    });
    return button;
  }

  function create(getText, opts) { return attach(document.createElement("button"), getText, opts); }

  global.CopyButton = { attach, create, copyText };
})(window);
