const links = [
  { text: "Главная", href: "home", hasMenu: false },
  {
    text: "ОМС",
    sectionId: "/",
    hasMenu: true,
    items: [
      "Постановление Правительства РД",
      "Перечень ЖНВЛП",
      "Программа государственных гарантий",
    ],
  },
  {
    text: "Платные услуги ",
    sectionId: "services",
    hasMenu: true,
    items: ["Платные услуги", "Договор", "Акт", "Прейскурант"],
  },
  {
    text: "Наши врачи",
    sectionId: "doctors",
    hasMenu: true,
    items: ["Платные услуги", "Договор", "Акт", "Прейскурант"],
  },
  {
    text: "О нас",
    sectionId: "about",
    hasMenu: true,
    items: [
      "Персонал",
      "Документы",
      "Контролирующие органы",
      "Вакансии",
      "Отзывы пациентов",
    ],
  },
  {
    text: "Контакты",
    sectionId: "contact",
    hasMenu: false,
  },
];

export default links;
