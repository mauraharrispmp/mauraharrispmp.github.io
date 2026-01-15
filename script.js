// Minimal JS: mobile menu + copy-to-clipboard for static contact form
(function () {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.querySelector(".nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const copyBtn = document.getElementById("copyBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const name = (document.getElementById("name")?.value || "").trim();
      const email = (document.getElementById("email")?.value || "").trim();
      const message = (document.getElementById("message")?.value || "").trim();

      const payload =
`Name: ${name || "[not provided]"}
Email: ${email || "[not provided]"}

Message:
${message || "[not provided]"}`;

      try {
        await navigator.clipboard.writeText(payload);
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy message"), 1400);
      } catch (e) {
        alert("Copy failed. You can manually select and copy your text.");
      }
    });
  }
})(); 
