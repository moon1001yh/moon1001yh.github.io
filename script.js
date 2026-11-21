const navButtons = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const languageButtons = document.querySelectorAll(".lang-button");

const translations = {
  ko: {
    navHome: "Home", navLinks: "Links", navAbout: "About",
    welcome: "저의 우주에 오신 것을 환영합니다",
    hello: "안녕하세요,", suffix: "입니다!",
    intro: "대한민국에서 종합 게임 유튜버 활동을 하고 있습니다!",
    learnMore: "더 알아보기", findOnline: "온라인에서 만나요",
    linksIntro: "아래 링크를 통해 저를 만나보실 수 있습니다!",
    youtubeDesc: "★MOON★ (@Moon1001YH)", cosmopediaDesc: "코스모피디아 페이지", tufDesc: "TUF 프로필", steamDesc: "스팀 프로필", chzzkDesc: "실시간 스트리밍 (유튜브 동시송출)",
    otherLinks: "Other Links", aboutEyebrow: "자기소개",
    aboutGreeting: "안녕하세요! 종합 게임 유튜버 <strong>★MOON★</strong>입니다!",
    aboutText: "저는 2022년 1월 23일부터 종합 게임 유튜버로서 활동중입니다! 현재는 A Dance of Fire and Ice라는 리듬 게임을 주 컨텐츠로 삼고 있습니다.",
    adofaiGreeting: "<strong>A Dance of Fire and Ice</strong>",
    adofaiText: "2022년 8월 14일부터 플레이했으며, 주로 커스텀 레벨을 제작합니다! 저의 유튜브 채널, TUF 프로필, 또는 스팀 창작마당 콘텐츠 항목에서 제가 제작한 커스텀 레벨들을 확인하실 수 있습니다!",
    fnfGreeting: "Friday Night Funkin'",
    fnfText: "얼불춤 이전 저의 유튜브 메인 컨텐츠였습니다! 제 캐릭터가 등장하는 모드를 제작중이...지만 거의 중단된 상태입니다 :(",
    otherGreeting: "다른 활동",
    otherText: "가끔씩 마인크래프트, 언더테일, 산나비를 플레이합니다.",
    footer: "여기에 뭐 쓸지 추천 좀."
  },
  en: {
    navHome: "Home", navLinks: "Links", navAbout: "About",
    welcome: "WELCOME TO MY SPACE",
    hello: "Hello, I'm", suffix: "!",
    intro: "I'm a gaming YouTuber from South Korea.",
    learnMore: "Learn more", findOnline: "FIND ME ONLINE",
    linksIntro: "Visit my online spaces through the links below.",
    youtubeDesc: "★MOON★ (@Moon1001YH)", cosmopediaDesc: "My Cosmopedia Page", tufDesc: "My TUF Profile", steamDesc: "My Steam Profile", chzzkDesc: "Live Streaming (Also on YouTube!)",
    otherLinks: "Other Links", aboutEyebrow: "A LITTLE ABOUT ME",
    aboutGreeting: "Hello! I'm <strong>★MOON★</strong>!",
    aboutText: "I'm a gaming YouTuber since January 23, 2022! Nowadays I'm playing a rhythm game called 'A Dance of Fire and Ice' as my main content.",
    adofaiGreeting: "<strong>A Dance of Fire and Ice</strong>",
    adofaiText: "I've been playing this game since August 14, 2022, and I usually make custom levels! You can search for my custom levels on my YouTube channel, TUF profile, or Steam Workshop Contents of mine!",
    fnfGreeting: "Friday Night Funkin'",
    fnfText: "It's my former main content! I'm making a mod where my character appears. ( but maybe it't halted :( )",
    otherGreeting: "Other Activities",
    otherText: "I play Minecraft, Undertale, or SANABI sometimes.",
    footer: "IDK which things to write here."
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
