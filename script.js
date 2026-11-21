const navButtons = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const languageButtons = document.querySelectorAll(".lang-button");

const translations = {
  ko: {
    navHome: "Home", navLinks: "Links", navAbout: "About",
    welcome: "나의 공간에 오신 것을 환영합니다",
    hello: "안녕하세요,", suffix: "입니다.",
    intro: "관심 있는 것을 탐구하고, 새로운 것을 만들어 갑니다.",
    learnMore: "더 알아보기", findOnline: "온라인에서 만나요",
    linksIntro: "아래 링크를 통해 저의 온라인 공간을 방문할 수 있어요.",
    githubDesc: "프로젝트와 코드", instagramDesc: "사진과 일상", youtubeDesc: "영상과 다양한 콘텐츠",
    otherLinks: "Other Links", aboutEyebrow: "나에 대해 조금 더",
    aboutGreeting: "안녕하세요! 저는 <strong>홍길동</strong>입니다.",
    aboutText: "이곳에 자신을 소개하는 글을 작성해 보세요. 관심 분야, 좋아하는 활동, 배우고 있는 기술, 앞으로 도전하고 싶은 목표 등을 적으면 좋습니다.",
    tag1: "# 관심분야", tag2: "# 공부", tag3: "# 만들기", footer: "호기심으로 만들었습니다."
  },
  en: {
    navHome: "Home", navLinks: "Links", navAbout: "About",
    welcome: "WELCOME TO MY SPACE",
    hello: "Hello, I'm", suffix: ".",
    intro: "I explore what interests me and create new things.",
    learnMore: "Learn more", findOnline: "FIND ME ONLINE",
    linksIntro: "Visit my online spaces through the links below.",
    githubDesc: "Projects & code", instagramDesc: "Photos & moments", youtubeDesc: "Videos & more",
    otherLinks: "Other Links", aboutEyebrow: "A LITTLE ABOUT ME",
    aboutGreeting: "Hello! I'm <strong>Hong Gil-dong</strong>.",
    aboutText: "Write a short introduction here. You can share your interests, favorite activities, skills you're learning, and goals you'd like to pursue.",
    tag1: "# Interests", tag2: "# Learning", tag3: "# Creating", footer: "Made with curiosity."
  }
};

function showPage(pageName) {
  pages.forEach((page) => {
    const isActive = page.id === pageName;
    page.hidden = !isActive;
    page.classList.toggle("active", isActive);
  });
  navButtons.forEach((button) => {
    const isActive = button.dataset.page === pageName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function setLanguage(language) {
  const dictionary = translations[language] || translations.ko;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) element.innerHTML = dictionary[key];
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

navButtons.forEach((button) => button.addEventListener("click", () => showPage(button.dataset.page)));
document.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => showPage(button.dataset.go)));
languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage("ko");
