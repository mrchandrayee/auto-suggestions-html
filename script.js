(() => {
  const technologies = [
    "JavaScript", "React", "Angular", "Bootstrap", "Tailwind CSS",
    "Django", "HTML", "CSS", "Node.js", "Express",
    "PostgreSQL", "Firebase"
  ];

  const input = document.getElementById("technology-search");
  const list = document.getElementById("suggestion-list");
  let activeIndex = -1;
  let currentMatches = [];

  function closeList() {
    list.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    activeIndex = -1;
  }

  function render(query) {
    const term = query.trim().toLowerCase();
    list.replaceChildren();
    activeIndex = -1;

    if (!term) {
      closeList();
      return;
    }

    currentMatches = technologies.filter(item =>
      item.toLowerCase().includes(term)
    );

    if (currentMatches.length === 0) {
      const empty = document.createElement("li");
      empty.className = "empty";
      empty.textContent = "No results found";
      empty.setAttribute("role", "option");
      list.append(empty);
    } else {
      currentMatches.forEach((name, index) => {
        const item = document.createElement("li");
        item.className = "item";
        item.id = `suggestion-${index}`;
        item.setAttribute("role", "option");
        item.setAttribute("aria-selected", "false");

        const start = name.toLowerCase().indexOf(term);
        const before = document.createTextNode(name.slice(0, start));
        const match = document.createElement("mark");
        match.textContent = name.slice(start, start + term.length);
        const after = document.createTextNode(name.slice(start + term.length));
        item.append(before, match, after);

        item.addEventListener("mousedown", event => event.preventDefault());
        item.addEventListener("click", () => choose(name));
        list.append(item);
      });
    }

    list.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }

  function choose(name) {
    input.value = name;
    closeList();
    input.focus();
  }

  function setActive(index) {
    const items = [...list.querySelectorAll(".item")];
    if (!items.length) return;
    activeIndex = (index + items.length) % items.length;
    items.forEach((item, i) => {
      const selected = i === activeIndex;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    input.setAttribute("aria-activedescendant", items[activeIndex].id);
    items[activeIndex].scrollIntoView({ block: "nearest" });
  }

  input.addEventListener("input", () => render(input.value));
  input.addEventListener("keydown", event => {
    if (list.hidden) {
      if (event.key === "ArrowDown" && input.value.trim()) render(input.value);
      else return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive(activeIndex + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive(activeIndex - 1);
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      choose(currentMatches[activeIndex]);
    } else if (event.key === "Escape") {
      closeList();
    }
  });

  document.addEventListener("click", event => {
    if (!event.target.closest(".box")) closeList();
  });
})();