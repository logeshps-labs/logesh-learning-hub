(() => {
  const form = document.querySelector(".search-form");
  const input = document.querySelector("#site-search");
  const resultList = document.querySelector("#search-results");
  const status = document.querySelector("#search-status");
  if (!(form instanceof HTMLFormElement) || !(input instanceof HTMLInputElement) || !resultList || !status) return;

  const entries = [
    { title: "What is Artificial Intelligence?", type: "Lesson · AI Fundamentals · Beginner · 5 min", href: "lessons/what-is-ai.html", text: "AI intelligence prediction machine learning patterns" },
    { title: "What is Generative AI?", type: "Lesson · AI Fundamentals · Beginner · 6 min", href: "lessons/what-is-generative-ai.html", text: "generative models prompts content language images" },
    { title: "What is an AI Agent?", type: "Lesson · Agentic AI · Beginner · 6 min", href: "lessons/what-is-an-ai-agent.html", text: "agents goals tools context planning" },
    { title: "AI Agent vs. Traditional Automation", type: "Lesson · Agentic AI · Beginner · 6 min", href: "lessons/ai-agent-vs-automation.html", text: "workflow fixed flexible compare automation" },
    { title: "What is Agentic Automation?", type: "Lesson · Agentic AI · Intermediate · 7 min", href: "lessons/what-is-agentic-automation.html", text: "orchestration hybrid people systems" },
    { title: "Human-in-the-Loop", type: "Lesson · Agentic AI · Intermediate · 6 min", href: "lessons/human-in-the-loop.html", text: "approval people review checkpoints oversight" },
    { title: "Enterprise AI Guardrails", type: "Lesson · Agentic AI · Advanced · 7 min", href: "lessons/enterprise-ai-guardrails.html", text: "governance permissions data monitoring responsible" },
    { title: "RPA vs. APIs vs. AI Agents", type: "Lesson · Automation Architecture · Intermediate · 7 min", href: "lessons/rpa-vs-api-vs-ai-agent.html", text: "integration robot API agent systems" },
    { title: "Automation Architecture Basics", type: "Lesson · Automation Architecture · Beginner · 7 min", href: "lessons/automation-architecture-basics.html", text: "design triggers integrations reliability recovery" },
    { title: "Why Automation Projects Fail", type: "Lesson · Automation Architecture · Intermediate · 7 min", href: "lessons/why-automation-projects-fail.html", text: "troubleshooting delivery outcomes exceptions" },
    { title: "AI Fundamentals", type: "Learning path · Beginner to advanced", href: "learning-paths/ai-fundamentals.html", text: "artificial intelligence generative AI foundation" },
    { title: "Agentic AI", type: "Learning path · Beginner to advanced", href: "learning-paths/agentic-ai.html", text: "agents tools human in loop guardrails" },
    { title: "Automation Architecture", type: "Learning path · Beginner to advanced", href: "learning-paths/automation-architecture.html", text: "RPA APIs workflows architecture" },
    { title: "UiPath & Enterprise Automation", type: "Learning path · Beginner to advanced", href: "learning-paths/uipath-enterprise-automation.html", text: "UiPath robots orchestration governance troubleshooting" }
  ];

  const render = (query) => {
    const needle = query.trim().toLocaleLowerCase();
    const matches = needle
      ? entries.filter((entry) => `${entry.title} ${entry.type} ${entry.text}`.toLocaleLowerCase().includes(needle))
      : entries;
    resultList.replaceChildren();
    matches.forEach((entry) => {
      const link = document.createElement("a");
      link.className = "search-result";
      link.href = entry.href;
      const title = document.createElement("strong");
      title.textContent = entry.title;
      const detail = document.createElement("span");
      detail.textContent = entry.type;
      link.append(title, detail);
      resultList.append(link);
    });
    status.textContent = needle
      ? `${matches.length} result${matches.length === 1 ? "" : "s"} for “${query.trim()}”.`
      : `${matches.length} lessons and learning paths. Search to narrow the list.`;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    render(input.value);
  });
  input.addEventListener("input", () => render(input.value));
  const initialQuery = new URLSearchParams(window.location.search).get("q") || "";
  input.value = initialQuery;
  render(initialQuery);
})();
