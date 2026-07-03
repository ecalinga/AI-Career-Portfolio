const profileData = {
  name: "Ermelito Calinga",
  headline: "Application Support Analyst | SQL | APIs | Production Support",
  contact: {
    phone: "0433 721 540",
    email: "ecalinga@gmail.com",
    linkedin: "https://www.linkedin.com/in/ermelitocalinga/"
  },
  summary:
    "Application Support Analyst and Software Developer with over 16 years of experience supporting enterprise applications, SaaS platforms, system integrations, and mission-critical business systems.",
  coreSkills: [
    "Application Support (L2/L3)",
    "Incident, Problem and Change Management (ITIL)",
    "SQL Server, MySQL, PostgreSQL",
    "REST APIs and Postman",
    "ServiceNow and Jira",
    "Root Cause Analysis",
    "System integration troubleshooting",
    "Microsoft 365, Power Platform, Power Apps, Dataverse",
    "Power BI, Excel, DAX and reporting",
    "Business analysis",
    "Disaster Recovery and business continuity",
    "Technical documentation and knowledge management"
  ],
  tools: [
    "C#",
    ".NET",
    "ASP.NET MVC/Core",
    "Web API",
    "VB.NET",
    "JavaScript",
    "Python",
    "SQL Server",
    "MySQL",
    "PostgreSQL",
    "SSIS",
    "SSRS",
    "Microsoft 365",
    "Power Platform",
    "Dataverse",
    "ServiceNow",
    "Azure AD",
    "Entra ID",
    "Active Directory",
    "Power BI",
    "Excel",
    "DAX",
    "Postman",
    "REST APIs",
    "Log Analysis",
    "Production Support",
    "OpenAI Codex",
    "ChatGPT",
    "Git",
    "Visual Studio",
    "Visual Studio Code",
    "SSMS",
    "pgAdmin",
    "MT4 / MT5"
  ],
  experience: [
    {
      company: "V/Line",
      dates: "Oct 2024 - Oct 2025",
      role: "Business Analyst - Application Support",
      facts: [
        "Provided L2/L3 support for critical business systems.",
        "Managed incidents, requests and changes using ServiceNow and Jira.",
        "Maintained SLA compliance across support activities.",
        "Investigated production issues using SQL and logs.",
        "Performed root cause analysis and service restoration.",
        "Troubleshot REST API integrations using Postman.",
        "Coordinated with vendors, developers and business users.",
        "Supported UAT, releases and production deployments.",
        "Contributed to Disaster Recovery planning and testing.",
        "Built reporting and workflow solutions using Power Platform."
      ]
    },
    {
      company: "Vocus Group Limited",
      dates: "Dec 2018 - Jun 2024",
      role: "Analyst Programmer and L2/L3 Application Support",
      facts: [
        "Developed and maintained enterprise applications using C#, .NET and SQL Server.",
        "Designed and enhanced system integrations using REST APIs and backend services.",
        "Developed ETL processes and data solutions using SSIS and SQL.",
        "Built operational dashboards and reporting solutions using Power BI.",
        "Investigated complex production issues across application, API and database layers.",
        "Performed root cause analysis to reduce recurring incidents and improve system stability.",
        "Resolved data integrity and integration issues through SQL and log analysis.",
        "Automated manual operational processes, reducing support overhead.",
        "Produced technical documentation, support guides and knowledge articles.",
        "Worked with business users, vendors and development teams to deliver system enhancements.",
        "Contributed to Disaster Recovery planning, testing and recovery procedures.",
        "Provided L2/L3 support for critical business applications and services."
      ]
    },
    {
      company: "Department of Education",
      dates: "Apr 2018 - Nov 2018",
      role: "Application Analyst Programmer",
      facts: [
        "Remediated system vulnerabilities in line with IT security standards.",
        "Coordinated penetration testing and validation activities.",
        "Improved application performance through debugging and optimisation.",
        "Supported compliance and risk management initiatives."
      ]
    },
    {
      company: "Organon Consulting Pty Ltd",
      dates: "Feb 2018 - Apr 2018",
      role: ".NET Developer - Systems Integration",
      facts: [
        "Developed integrations between Microsoft Dynamics 365 CRM and external systems using C# and REST APIs.",
        "Implemented real-time data synchronisation between enterprise applications.",
        "Built validation services to improve data quality and system integrity across integrated platforms."
      ]
    },
    {
      company: "Pacific Islands Club",
      dates: "Jul 2004 - Feb 2007",
      role: "Hotel IT Support / Systems Support",
      facts: [
        "Provided IT support across Front Office, Reservations, Finance and Food and Beverage departments.",
        "Supported reservation systems, POS terminals, printers and desktop workstations.",
        "Resolved hardware, software and network connectivity issues for hotel staff.",
        "Performed software installations, system maintenance and user support.",
        "Assisted with backups, data recovery and business continuity activities.",
        "Developed internal applications and reports using Microsoft technologies."
      ]
    }
  ],
  education: "Bachelor of Science in Computer Science",
  credentials: [
    "Microsoft Certified: Power Platform Fundamentals (PL-900)",
    "ITIL 4 Foundation (Training Completed)",
    "Business Analysis Foundations (2025)",
    "Advanced Power BI - DAX and Calculations (2025)",
    "Building Model-Driven Power Apps (2025)",
    "Cybersecurity Foundations and Penetration Testing (2023)",
    "Statistics and Python Programming (2023)"
  ]
};

const responses = [
  {
    keys: ["fit", "suitable", "application support", "support analyst", "software support", "systems analyst", "why"],
    answer:
      "I bring 16+ years across enterprise applications, SaaS platforms, system integrations, and production support. For Application Support Analyst roles, my strongest fit is the mix of L2/L3 support, SQL and log analysis, REST API troubleshooting, RCA, ServiceNow/Jira, UAT, releases, Disaster Recovery work, and business/vendor collaboration."
  },
  {
    keys: ["sql", "database", "data", "ssis", "ssrs", "query", "postgresql", "mysql"],
    answer:
      "Yes. I have worked with SQL Server, MySQL, PostgreSQL, SSIS, and SSRS. I use SQL and logs to investigate production issues, resolve data integrity and integration issues, and support ETL/data solutions."
  },
  {
    keys: ["api", "apis", "postman", "integration", "integrations", "rest", "crm", "dynamics"],
    answer:
      "Yes. I have REST API and integration experience. At V/Line, I troubleshot REST API integrations using Postman. At Vocus, I designed and enhanced integrations using REST APIs and backend services. At Organon Consulting, I developed Microsoft Dynamics 365 CRM integrations with external systems using C# and REST APIs."
  },
  {
    keys: ["incident", "problem", "change", "servicenow", "jira", "sla", "itil", "rca", "root cause"],
    answer:
      "Yes. I have worked with Incident, Problem and Change Management in enterprise environments. At V/Line, I managed incidents, requests and changes using ServiceNow and Jira, maintained SLA compliance across support activities, performed root cause analysis, and supported service restoration."
  },
  {
    keys: ["documentation", "knowledge", "guide", "guides", "user guide", "training"],
    answer:
      "Yes. I have produced technical documentation, support guides, knowledge articles, user guides, and training materials. Documentation and knowledge management are a strong part of how I support applications sustainably."
  },
  {
    keys: ["uat", "release", "deployment", "deployments", "disaster", "recovery", "business continuity", "dr"],
    answer:
      "Yes. I have supported UAT, releases, production deployments, Disaster Recovery, and business continuity activities. At V/Line, I supported UAT, releases, deployments, and DR planning/testing. At Vocus, I contributed to DR planning, testing, and recovery procedures."
  },
  {
    keys: ["power", "power platform", "power bi", "dataverse", "power apps", "dax", "microsoft 365"],
    answer:
      "Yes. I have worked with Microsoft 365, Power Platform, Power Apps, Dataverse, Power BI, Excel, and DAX. I built reporting and workflow solutions using Power Platform, and operational dashboards/reporting solutions using Power BI."
  },
  {
    keys: ["v/line", "vline", "v line"],
    answer:
      "At V/Line from Oct 2024 to Oct 2025, I worked as Business Analyst - Application Support. My work covered L2/L3 support for critical business systems, ServiceNow/Jira incident and change work, SLA activities, SQL and log investigation, RCA, REST API troubleshooting with Postman, vendor and business coordination, UAT, releases, production deployments, DR planning/testing, and Power Platform reporting/workflow solutions."
  },
  {
    keys: ["vocus"],
    answer:
      "At Vocus Group Limited from Dec 2018 to Jun 2024, I worked as Analyst Programmer and L2/L3 Application Support. My work included C#, .NET, SQL Server, REST APIs, backend services, SSIS, SQL ETL, Power BI dashboards, production issue investigation across application/API/database layers, RCA, data integrity fixes, operational automation, support documentation, stakeholder collaboration, Disaster Recovery work, and L2/L3 support."
  },
  {
    keys: ["department of education", "education department"],
    answer:
      "At the Department of Education from Apr 2018 to Nov 2018, I worked as an Application Analyst Programmer. My work included vulnerability remediation, penetration testing coordination and validation, application debugging and optimisation, and support for compliance and risk management initiatives."
  },
  {
    keys: ["organon"],
    answer:
      "At Organon Consulting Pty Ltd from Feb 2018 to Apr 2018, I worked as a .NET Developer - Systems Integration. I developed Microsoft Dynamics 365 CRM integrations with external systems using C# and REST APIs, implemented real-time data synchronisation, and built validation services for data quality and system integrity."
  },
  {
    keys: ["pacific", "hotel", "pic"],
    answer:
      "At Pacific Islands Club from Jul 2004 to Feb 2007, I worked in Hotel IT Support / Systems Support. I supported reservation systems, POS terminals, printers, desktop workstations, network connectivity, software installations, system maintenance, backups, data recovery, business continuity, and internal applications and reports."
  },
  {
    keys: ["cert", "certification", "credentials", "professional development", "education", "degree", "study"],
    answer:
      `My education is ${profileData.education}. My certifications and professional development include: ${profileData.credentials.join("; ")}.`
  },
  {
    keys: ["contact", "email", "phone", "linkedin", "reach"],
    answer:
      `You can contact me using the details from my CV: email ${profileData.contact.email}, phone ${profileData.contact.phone}, LinkedIn ${profileData.contact.linkedin}.`
  },
  {
    keys: ["ai", "codex", "chatgpt", "openai"],
    answer:
      "Yes. I use AI-assisted development tools, including OpenAI Codex and ChatGPT, to accelerate software development, improve code quality, modernize legacy applications, automate repetitive tasks, and rapidly prototype scalable solutions."
  },
  {
    keys: ["project", "projects", "portfolio", "impact", "examples"],
    answer:
      "Examples I highlight from my background include production issue investigation using SQL/logs/RCA, REST API and Dynamics 365 CRM integrations, Power Platform and Power BI reporting/workflow work, and technical documentation and support knowledge management."
  },
  {
    keys: ["resume", "cv", "download"],
    answer:
      "You can download my CV from the Resume/CV section of this page. This portfolio and chatbot are grounded in my uploaded CV dated 26 June 2026."
  },
  {
    keys: ["skills", "tools", "technology", "tech stack", "technical"],
    answer:
      `My core skills include: ${profileData.coreSkills.join("; ")}. Tools and platforms I have listed include: ${profileData.tools.join("; ")}.`
  }
];

const fallbackAnswer =
  "I want to keep my answers accurate, so I can only speak from my CV and this portfolio page. I do not have verified evidence for that question. You can ask me about my application support work, SQL, REST APIs, ServiceNow/Jira, incident management, Power Platform, documentation, experience, credentials, or contact details.";

let qaKnowledgeBase = null;
let lastMatchedPair = null;
let isResponding = false;

function normalise(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9+#./\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function includesTerm(query, term) {
  const safeTerm = escapeRegExp(normalise(term));
  return new RegExp(`(^|\\s)${safeTerm}(\\s|$)`).test(query);
}

function scoreQaPair(query, pair) {
  let score = 0;
  const question = normalise(pair.question || "");
  const category = normalise(pair.category || "");

  if (question && query === question) score += 120;
  else if (question && (query.includes(question) || question.includes(query))) score += 40;

  if (category && includesTerm(query, category)) score += 3;

  (pair.keywords || []).forEach((keyword) => {
    const normalizedKeyword = normalise(keyword);
    if (!normalizedKeyword) return;
    if (includesTerm(query, normalizedKeyword)) {
      score += normalizedKeyword.includes(" ") ? 8 : 3;
    } else if (normalizedKeyword.length > 4 && query.includes(normalizedKeyword)) {
      score += 2;
    }
  });

  return score;
}

function getMatchedKeywords(query, pair) {
  return (pair.keywords || [])
    .filter((keyword) => {
      const normalizedKeyword = normalise(keyword);
      return normalizedKeyword && (includesTerm(query, normalizedKeyword) || query.includes(normalizedKeyword));
    })
    .slice(0, 3);
}

function responseObject(answer, options = {}) {
  return {
    answer,
    category: options.category || "Portfolio Q&A",
    source: options.source || "CV / Portfolio Q&A",
    matchedKeywords: options.matchedKeywords || [],
    pair: options.pair || null
  };
}

function hasPositiveQaForTerm(term) {
  if (!qaKnowledgeBase?.qa_pairs) return false;
  const normalizedTerm = normalise(term);
  return qaKnowledgeBase.qa_pairs.some((pair) =>
    [pair.question, pair.answer, ...(pair.keywords || [])].some((value) => includesTerm(normalise(value || ""), normalizedTerm))
  );
}

function isContinuationQuery(query) {
  return ["tell me more", "more", "continue", "explain more", "go deeper", "elaborate"].some((term) =>
    includesTerm(query, term)
  );
}

function relatedScore(basePair, candidate) {
  if (!basePair || !candidate || basePair.id === candidate.id) return 0;
  let score = basePair.category === candidate.category ? 5 : 0;
  const baseKeywords = new Set((basePair.keywords || []).map(normalise));
  (candidate.keywords || []).forEach((keyword) => {
    if (baseKeywords.has(normalise(keyword))) score += 2;
  });
  return score;
}

function findRelatedPairs(pair, limit = 3) {
  if (!qaKnowledgeBase?.qa_pairs || !pair) return [];
  return qaKnowledgeBase.qa_pairs
    .map((candidate) => ({ candidate, score: relatedScore(pair, candidate) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.candidate);
}

function getQaResponse(query) {
  if (!qaKnowledgeBase?.qa_pairs) return null;

  const unsupportedTechnologies = ["aws", "java", "kubernetes", "docker", "salesforce", "sap", "pmp", "scrum master"];
  const unsupported = unsupportedTechnologies.find((term) => includesTerm(query, term));
  if (unsupported && !hasPositiveQaForTerm(unsupported)) {
    if (unsupported === "java" && (includesTerm(query, "javascript") || includesTerm(query, "java script"))) {
      return null;
    }
    return responseObject(
      `I do not see ${unsupported.toUpperCase()} listed in my uploaded CV or approved portfolio Q&A, so I would not claim that experience here. I want this portfolio chat to stay accurate to my verified background.`,
      { category: "Verified Scope", source: "CV / Approved Q&A" }
    );
  }

  if (isContinuationQuery(query) && lastMatchedPair) {
    const relatedPair = findRelatedPairs(lastMatchedPair, 1)[0];
    if (relatedPair) {
      return responseObject(relatedPair.answer, {
        category: relatedPair.category,
        source: relatedPair.source_scope || "CV / Portfolio Q&A",
        matchedKeywords: relatedPair.keywords?.slice(0, 3) || [],
        pair: relatedPair
      });
    }
  }

  let bestPair = null;
  let bestScore = 0;

  qaKnowledgeBase.qa_pairs.forEach((pair) => {
    const score = scoreQaPair(query, pair);
    if (score > bestScore) {
      bestPair = pair;
      bestScore = score;
    }
  });

  if (bestPair && bestScore >= 3) {
    return responseObject(bestPair.answer, {
      category: bestPair.category,
      source: bestPair.source_scope || "CV / Portfolio Q&A",
      matchedKeywords: getMatchedKeywords(query, bestPair),
      pair: bestPair
    });
  }

  return null;
}

const skillAnswers = [
  {
    terms: ["javascript", "java script"],
    answer:
      "Yes. I developed enterprise applications using .NET, JavaScript and SQL Server technologies during earlier software development, analyst programmer and IT support roles."
  },
  {
    terms: ["java"],
    answer:
      "I do not see Java listed in my uploaded CV, so I would not claim Java experience. I do have JavaScript experience listed, along with .NET and SQL Server. If you meant JavaScript, yes, that is part of my background."
  },
  {
    terms: ["c#", "c sharp", ".net", "dotnet", "asp.net", "vb.net"],
    answer:
      "Yes. I have experience with C#, .NET, ASP.NET MVC/Core, Web API and VB.NET. I have also developed and maintained enterprise applications using C#, .NET and SQL Server."
  },
  {
    terms: ["python"],
    answer:
      "Yes. Python is part of my technical tools, and my professional development includes Statistics and Python Programming (2023)."
  },
  {
    terms: ["servicenow", "jira"],
    answer:
      "Yes. I managed incidents, requests and changes using ServiceNow and Jira at V/Line."
  },
  {
    terms: ["power bi", "dax"],
    answer:
      "Yes. I have worked with Power BI, Excel, DAX and reporting, including operational dashboards and reporting solutions using Power BI."
  },
  {
    terms: ["power platform", "power apps", "dataverse"],
    answer:
      "Yes. I have worked with Microsoft Power Platform, Power Apps and Dataverse, including reporting and workflow solutions using Power Platform."
  },
  {
    terms: ["sql server", "mysql", "postgresql", "ssis", "ssrs"],
    answer:
      "Yes. I have experience with SQL Server, MySQL, PostgreSQL, SSIS and SSRS, including production issue investigation and data/integration troubleshooting using SQL and log analysis."
  },
  {
    terms: ["rest api", "rest apis", "api", "apis", "postman"],
    answer:
      "Yes. I have worked with REST APIs and Postman, including REST API troubleshooting at V/Line and system integration work using REST APIs and backend services at Vocus and Organon Consulting."
  }
];

function getBotResponse(input) {
  const query = normalise(input);
  if (!query) {
    return responseObject("Please enter a question about my CV, portfolio, or role fit.", {
      category: "Prompt",
      source: "Portfolio chat"
    });
  }

  const qaResponse = getQaResponse(query);
  if (qaResponse) return qaResponse;

  const asksSql = ["sql", "database", "data", "ssis", "ssrs", "query", "postgresql", "mysql"].some((term) =>
    query.includes(term)
  );
  const asksApi = ["api", "apis", "postman", "integration", "integrations", "rest", "crm", "dynamics"].some((term) =>
    query.includes(term)
  );
  if (asksSql && asksApi) {
    return responseObject("Yes. My background covers both SQL and API troubleshooting. On the SQL side, I have SQL Server, MySQL, PostgreSQL, SSIS and SSRS experience, plus production issue investigation using SQL and logs. On the API side, I have worked with REST APIs, Postman, backend services, Dynamics 365 CRM integrations, and troubleshooting across application, API and database layers.", {
      category: "Technical Skills",
      source: "CV",
      matchedKeywords: ["SQL", "APIs", "Troubleshooting"]
    });
  }

  const skillAnswer = skillAnswers.find((item) => item.terms.some((term) => includesTerm(query, term)));
  if (skillAnswer) {
    return responseObject(skillAnswer.answer, {
      category: "Technical Skills",
      source: "CV",
      matchedKeywords: skillAnswer.terms.slice(0, 3)
    });
  }

  const directNegatives = ["aws", "azure certification", "scrum master", "pmp", "kubernetes", "docker", "sap", "salesforce"];
  const unsupported = directNegatives.find((term) => includesTerm(query, term));
  if (unsupported) {
    return responseObject(`I do not see ${unsupported.toUpperCase()} listed in my uploaded CV, so I would not claim that experience here. I want this portfolio chat to stay accurate to my verified background.`, {
      category: "Verified Scope",
      source: "CV"
    });
  }

  let best = null;
  let bestScore = 0;

  for (const response of responses) {
    const score = response.keys.reduce((count, key) => count + (query.includes(key) ? 1 : 0), 0);
    if (score > bestScore) {
      best = response;
      bestScore = score;
    }
  }

  return responseObject(best ? best.answer : fallbackAnswer, {
    category: best ? "Portfolio Profile" : "Not Listed",
    source: best ? "CV" : "Verified scope"
  });
}

function createMessage(text, type, options = {}) {
  const message = document.createElement("div");
  message.className = `message ${type}`;

  if (type === "bot") {
    const avatar = document.createElement("img");
    avatar.src = "assets/ermelito-calinga.png";
    avatar.alt = "";
    avatar.className = "message-avatar";
    message.appendChild(avatar);
  }

  const messageContent = document.createElement("div");
  messageContent.className = "message-content";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  if (options.typing) {
    bubble.classList.add("typing-bubble");
    const label = document.createElement("span");
    label.textContent = "Ermelito is typing";
    const dots = document.createElement("span");
    dots.className = "typing-dots";
    dots.setAttribute("aria-hidden", "true");
    dots.innerHTML = "<span></span><span></span><span></span>";
    bubble.append(label, dots);
  } else {
    if (options.meta) {
      const meta = document.createElement("div");
      meta.className = "response-meta";
      meta.textContent = options.meta;
      bubble.appendChild(meta);
    }
    const responseText = document.createElement("div");
    responseText.className = "response-text";
    responseText.textContent = text;
    bubble.appendChild(responseText);
  }

  messageContent.appendChild(bubble);
  message.appendChild(messageContent);

  return message;
}

function appendMessage(text, type, options = {}) {
  const log = document.querySelector("#chat-log");
  const message = createMessage(text, type, options);
  log.appendChild(message);
  log.scrollTop = log.scrollHeight;
  return message;
}

function responseMeta(response) {
  const pieces = [response.category, response.source].filter(Boolean);
  if (response.matchedKeywords?.length) {
    pieces.push(`Matched: ${response.matchedKeywords.join(", ")}`);
  }
  return pieces.join(" | ");
}

function buildFollowUps(response) {
  const relatedPairs = findRelatedPairs(response.pair, 3);
  if (relatedPairs.length) {
    return relatedPairs.map((pair) => ({ label: pair.question, prompt: pair.question }));
  }

  return [
    { label: "Tell me about SQL support", prompt: "Tell me about your SQL troubleshooting experience." },
    { label: "Tell me about API support", prompt: "Tell me about your API troubleshooting experience." },
    { label: "Tell me about role fit", prompt: "Why are you a good fit for Application Support Analyst roles?" }
  ];
}

function addFollowUps(message, followUps) {
  if (!followUps.length) return;
  const wrap = document.createElement("div");
  wrap.className = "follow-up-chips";
  followUps.slice(0, 3).forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label.length > 42 ? `${item.label.slice(0, 39)}...` : item.label;
    button.title = item.label;
    button.addEventListener("click", () => sendQuestion(item.prompt));
    wrap.appendChild(button);
  });
  message.querySelector(".message-content").appendChild(wrap);
  const log = document.querySelector("#chat-log");
  log.scrollTop = log.scrollHeight;
}

function streamText(target, text, done) {
  const words = text.split(/(\s+)/);
  let index = 0;
  target.textContent = "";

  function tick() {
    target.textContent += words[index] || "";
    index += 1;
    const log = document.querySelector("#chat-log");
    log.scrollTop = log.scrollHeight;

    if (index < words.length) {
      window.setTimeout(tick, words[index - 1]?.trim() ? 24 : 8);
    } else {
      done?.();
    }
  }

  tick();
}

function setFormBusy(isBusy) {
  const input = document.querySelector("#chat-input");
  const button = document.querySelector("#chat-form button");
  const promptButtons = document.querySelectorAll(".chat-prompts button");
  input.disabled = isBusy;
  button.disabled = isBusy;
  promptButtons.forEach((promptButton) => {
    promptButton.disabled = isBusy;
  });
  document.querySelector("#chat-form").classList.toggle("is-busy", isBusy);
}

function appendBotResponse(response) {
  const typing = appendMessage("", "bot", { typing: true });
  const delay = Math.min(900, Math.max(420, response.answer.length * 8));

  window.setTimeout(() => {
    typing.remove();
    const message = appendMessage("", "bot", { meta: responseMeta(response) });
    const target = message.querySelector(".response-text");
    streamText(target, response.answer, () => {
      if (response.pair) lastMatchedPair = response.pair;
      addFollowUps(message, buildFollowUps(response));
      isResponding = false;
      setFormBusy(false);
      document.querySelector("#chat-input").focus();
    });
  }, delay);
}

function sendQuestion(question) {
  const value = question.trim();
  if (!value || isResponding) return;

  isResponding = true;
  setFormBusy(true);
  appendMessage(value, "user");
  appendBotResponse(getBotResponse(value));
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#chat-form");
  const input = document.querySelector("#chat-input");
  const chatExit = document.querySelector("#chat-exit");
  const mobileChatQuery = window.matchMedia("(max-width: 780px)");

  fetch("assets/ermelito_portfolio_chatbot_qa_keywords.json", { cache: "no-store" })
    .then((response) => (response.ok ? response.json() : null))
    .then((data) => {
      qaKnowledgeBase = data;
    })
    .catch(() => {
      qaKnowledgeBase = null;
    });

  function setChatFocus(isFocused) {
    document.body.classList.toggle("chat-focus", Boolean(isFocused && mobileChatQuery.matches));
  }

  function syncChatFocus() {
    setChatFocus(window.location.hash === "#chat");
  }

  window.addEventListener("hashchange", syncChatFocus);
  mobileChatQuery.addEventListener("change", syncChatFocus);
  document.querySelectorAll('a[href="#chat"]').forEach((link) => {
    link.addEventListener("click", () => setChatFocus(true));
  });
  input.addEventListener("focus", () => setChatFocus(true));
  chatExit?.addEventListener("click", () => {
    document.body.classList.remove("chat-focus");
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  });
  syncChatFocus();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendQuestion(input.value);
    input.value = "";
    input.focus();
  });

  document.querySelectorAll("[data-prompt]").forEach((button) => {
    button.addEventListener("click", () => {
      const prompt = button.getAttribute("data-prompt");
      sendQuestion(prompt);
    });
  });
});
