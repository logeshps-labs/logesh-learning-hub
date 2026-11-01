(() => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll(".theme-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");
  const storageKey = "llh-theme";
  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch {
    // Theme controls still work for this visit when storage is unavailable.
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const setTheme = (theme, persist = false) => {
    const isDark = theme === "dark";
    root.dataset.theme = isDark ? "dark" : "light";
    themeButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(isDark));
      const label = button.querySelector(".theme-label");
      if (label) label.textContent = isDark ? "Light mode" : "Dark mode";
    });
    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        // The selected theme remains applied until the page is closed.
      }
    }
  };

  setTheme(savedTheme === "light" || savedTheme === "dark" ? savedTheme : (prefersDark ? "dark" : "light"));
  themeButtons.forEach((button) => button.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  }));

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      const label = menuButton.querySelector(".sr-only");
      if (label) label.textContent = isOpen ? "Open navigation menu" : "Close navigation menu";
      navigation.classList.toggle("is-open", !isOpen);
    });
    navigation.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement && window.matchMedia("(max-width: 1080px)").matches) {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        const label = menuButton.querySelector(".sr-only");
        if (label) label.textContent = "Open navigation menu";
      }
    });
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const heroFlow = document.querySelector(".hero-flow");
  if (heroFlow) {
    const steps = [...heroFlow.querySelectorAll(".flow-step")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (steps.length > 1 && !reduceMotion.matches) {
      let activeIndex = 0;
      let timer = null;
      let isInViewport = true;
      const advance = () => {
        steps[activeIndex].classList.remove("is-active");
        activeIndex = (activeIndex + 1) % steps.length;
        steps[activeIndex].classList.add("is-active");
      };
      const start = () => {
        if (!timer) timer = window.setInterval(advance, 1600);
      };
      const stop = () => {
        window.clearInterval(timer);
        timer = null;
      };
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(([entry]) => {
          isInViewport = entry.isIntersecting;
          if (entry.isIntersecting && document.visibilityState === "visible") start();
          else stop();
        });
        observer.observe(heroFlow);
      } else {
        start();
      }
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") stop();
        else if (isInViewport) start();
      });
    }
  }
})();
