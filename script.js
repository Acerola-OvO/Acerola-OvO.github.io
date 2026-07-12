const siteData = {
  profile: {
    name: "Cheng Xu",
    shortName: "Cheng Xu",
    initials: "CX",
    role: "M.S. Student in Electrical Engineering and Information Systems",
    affiliation: "The University of Tokyo · Tokyo, Japan",
    image: "assets/profile-cheng-xu.jpg",
    about:
      "I am a master's student in Electrical Engineering and Information Systems at The University of Tokyo. My current academic work focuses on computer vision, visual perception, and sensor fusion for train localization in autonomous train operation. I am also interested in robotics, embodied AI, vision-language-action models, and robot learning.",
    contactNote:
      "For academic or professional inquiries, please contact me by email. My project materials and source code are available on GitHub.",
    copyright: "© Cheng Xu",
    links: [
      { label: "Email", href: "mailto:teikyoku@g.ecc.u-tokyo.ac.jp" },
      { label: "GitHub", href: "https://github.com/Acerola-OvO" },
      { label: "CV", href: "assets/Cheng-Xu-CV.pdf" },
    ],
    facts: [
      { label: "Current", value: "M.S. student at The University of Tokyo" },
      { label: "Research", value: "Visual perception and sensor fusion for train localization" },
      { label: "Interests", value: "Robotics, embodied AI, and VLA models" },
      { label: "Background", value: "Robotics engineering, electronics, and tactile sensing" },
    ],
  },
  education: [
    {
      time: "Apr. 2026 - Present",
      institution: "THE UNIVERSITY OF TOKYO",
      title: "M.Eng. in Electrical Engineering and Information Systems",
      location: "Tokyo, Japan",
      description:
        "Current academic work: vision-based landmark recognition and sensor fusion for train localization in autonomous train operation.",
    },
    {
      time: "Sep. 2021 - Jun. 2025",
      institution: "UNIVERSITY OF SUSSEX",
      title: "B.Eng. (Hons) in Robotics and Electrical Engineering",
      location: "Brighton, United Kingdom",
      description:
        "First-Class Honours. Dual-degree program average: 88/100; rank: top 5%.",
    },
    {
      time: "Sep. 2021 - Jun. 2025",
      institution: "ZHEJIANG GONGSHANG UNIVERSITY",
      title: "B.Eng. in Electronic Information Engineering",
      location: "Hangzhou, China",
      description:
        "Dual-degree program average: 88/100; rank: top 5%.",
    },
  ],
  projects: [
    {
      time: "Oct. 2024 - Mar. 2025",
      title: "Tactile Sensors for Robotic Manipulators",
      description:
        "Built and evaluated a 16 × 16 flexible piezoresistive tactile sensing prototype based on the open-source 3D-ViTac architecture. Fabricated the Velostat sensor array, integrated Arduino Nano-based matrix scanning, redrew and documented the readout schematic, organized PCB manufacturing files, and adapted a Python/OpenCV pipeline for serial acquisition and real-time tactile heatmap visualization. Bench-top experiments examined load response, contact localization, spatial response, and noise-reduction methods.",
      tags: ["Tactile Sensing", "Arduino", "Python", "OpenCV", "PCB"],
      link: {
        label: "View project on GitHub",
        href: "https://github.com/Acerola-OvO/Tactile-Sensors-for-Robotic-Manipulators",
      },
    },
    {
      time: "May 2026 - Present",
      title: "VLA Fundamentals",
      description:
        "Conducted a line-by-line analysis of Physical Intelligence's official π0 PyTorch implementation, tracing tensor shapes and data flow through multimodal preprocessing, prefix and suffix embeddings, attention-mask construction, flow-matching training, and iterative action denoising. Ongoing work focuses on preparing a reproducible π0.5 implementation and fine-tuning workflow for robotic manipulation tasks.",
      tags: ["PyTorch", "π0 / π0.5", "Transformers", "Flow Matching"],
    },
  ],
  experience: [
    {
      time: "Jun. 25 - Jul. 3, 2026",
      institution: "AGIBOT JAPAN",
      title: "Engineering Assistant Intern",
      location: "Tokyo, Japan",
      description:
        "Assisted engineers with the disassembly and maintenance inspection of G2 humanoid robots during on-site technical support. Reviewed the operating requirements of a planned robotic towel-loading task and conducted an on-site assessment of the working environment.",
    },
  ],
  skills: [
    {
      title: "Programming & Machine Learning",
      value: "Python, PyTorch, C, MATLAB",
    },
    {
      title: "Hardware & Engineering Tools",
      value: "Arduino, EasyEDA, Multisim, schematic capture, PCB layout",
    },
  ],
  languages: [
    {
      title: "Japanese",
      value: "JLPT N1",
    },
    {
      title: "English",
      value: "TOEFL iBT 87",
    },
  ],
  awards: [
    {
      year: "2024–2025",
      title: "Outstanding Student Award (Top 1%)",
      description: "Zhejiang Gongshang University",
    },
    {
      year: "2024–2025",
      title: "First-Class Scholarship",
      description: "University of Sussex",
    },
    {
      year: "2022–2023",
      title: "Academic Scholarship",
      description: "University of Sussex",
    },
  ],
};

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const createLink = ({ label, href, disabled }) => {
  const link = document.createElement("a");
  link.textContent = label;
  link.href = disabled ? "#" : href;
  if (href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  if (href.toLowerCase().endsWith(".pdf")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  if (disabled) {
    link.setAttribute("aria-disabled", "true");
    link.addEventListener("click", (event) => event.preventDefault());
  }
  return link;
};

const clear = (element) => {
  if (element) element.textContent = "";
};

const renderProfile = () => {
  const { profile } = siteData;
  document.title = `${profile.name} | Personal Homepage`;
  document.documentElement.lang = "en";

  Object.entries(profile).forEach(([key, value]) => {
    if (typeof value === "string") {
      setText(`[data-profile="${key}"]`, value);
    }
  });

  document.querySelector(".brand-mark").textContent = profile.initials;
  const profileImage = document.querySelector("[data-profile-image]");
  profileImage.src = profile.image;
  profileImage.alt = `${profile.name} portrait`;

  const profileLinks = document.querySelector("[data-profile-links]");
  const contactLinks = document.querySelector("[data-contact-links]");
  clear(profileLinks);
  clear(contactLinks);

  profile.links.forEach((item) => {
    const profileLink = createLink(item);
    profileLink.className = "profile-link";
    profileLinks.appendChild(profileLink);

    const contactLink = createLink(item);
    contactLink.className = "contact-link";
    contactLinks.appendChild(contactLink);
  });

  const facts = document.querySelector("[data-facts]");
  clear(facts);
  profile.facts.forEach((item) => {
    const row = document.createElement("li");
    row.innerHTML = `<span class="fact-label"></span><span class="fact-value"></span>`;
    row.querySelector(".fact-label").textContent = item.label;
    row.querySelector(".fact-value").textContent = item.value;
    facts.appendChild(row);
  });
};

const renderTimeline = (selector, items) => {
  const container = document.querySelector(selector);
  clear(container);
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-item";
    article.innerHTML = `
      <div class="timeline-time"></div>
      <div class="timeline-content">
        <div class="timeline-heading-row">
          <h3 class="timeline-institution"></h3>
          <span class="timeline-location"></span>
        </div>
        <p class="timeline-degree"></p>
        <p class="timeline-description"></p>
      </div>
    `;
    article.querySelector(".timeline-time").textContent = item.time;
    article.querySelector(".timeline-institution").textContent = item.institution || item.title;
    article.querySelector(".timeline-location").textContent = item.location || "";
    article.querySelector(".timeline-degree").textContent = item.title || item.position || "";
    article.querySelector(".timeline-description").textContent = item.description;
    container.appendChild(article);
  });
};

const renderItemCards = (selector, items) => {
  const container = document.querySelector(selector);
  clear(container);
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "item-card";
    article.innerHTML = `
      <div class="item-header">
        <h3></h3>
        <span class="item-time"></span>
      </div>
      <p></p>
      <div class="item-tags"></div>
      <div class="item-links"></div>
    `;
    article.querySelector("h3").textContent = item.title;
    article.querySelector(".item-time").textContent = item.time || "";
    article.querySelector("p").textContent = item.description;

    const tags = article.querySelector(".item-tags");
    (item.tags || []).forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.className = "tag";
      tagElement.textContent = tag;
      tags.appendChild(tagElement);
    });

    const links = article.querySelector(".item-links");
    if (item.link) {
      const link = createLink(item.link);
      link.className = "item-link";
      links.appendChild(link);
    } else {
      links.remove();
    }
    container.appendChild(article);
  });
};

const renderCardGrid = (selector, items) => {
  const container = document.querySelector(selector);
  clear(container);
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "skill-card";
    article.innerHTML = `<h3></h3><p></p>`;
    article.querySelector("h3").textContent = item.title;
    article.querySelector("p").textContent = item.value;
    container.appendChild(article);
  });
};

const renderAwards = () => {
  const container = document.querySelector("[data-awards]");
  clear(container);
  siteData.awards.forEach((item) => {
    const article = document.createElement("article");
    article.className = "award-item";
    article.innerHTML = `
      <div class="award-year"></div>
      <div>
        <h3></h3>
        <p></p>
      </div>
    `;
    article.querySelector(".award-year").textContent = item.year;
    article.querySelector("h3").textContent = item.title;
    article.querySelector("p").textContent = item.description;
    container.appendChild(article);
  });
};

const bindNavigation = () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelectorAll(".site-nav a");

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
};

const bindSectionIndicators = () => {
  const sections = Array.from(document.querySelectorAll("section[id]"))
    .filter((section) => section.querySelector(".section-heading"));

  sections.forEach((section) => {
    const heading = section.querySelector(".section-heading");

    section.addEventListener("mouseenter", () => {
      heading?.classList.add("is-active");
    });

    section.addEventListener("mouseleave", () => {
      heading?.classList.remove("is-active");
    });

    section.addEventListener("focusin", () => {
      heading?.classList.add("is-active");
    });

    section.addEventListener("focusout", (event) => {
      if (!section.contains(event.relatedTarget)) {
        heading?.classList.remove("is-active");
      }
    });
  });
};

renderProfile();
renderTimeline("[data-education]", siteData.education);
renderItemCards("[data-projects]", siteData.projects);
renderTimeline("[data-experience]", siteData.experience);
renderCardGrid("[data-skills]", siteData.skills);
renderCardGrid("[data-languages]", siteData.languages);
renderAwards();
bindNavigation();
bindSectionIndicators();
