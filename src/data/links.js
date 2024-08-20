const links = [
    { text: "Главная", href: "/", hasMenu: false },
    {
      text: "ОМС",
      //   href: "/",
      hasMenu: true,
      items: [
        "Постановление Правительства РД",
        "Перечень ЖНВЛП",
        "Программа государственных гарантий",
      ],
    },
    {
      text: "Платные услуги ",
      //   href: "/",
      hasMenu: true,
      items: ["Платные услуги", "Договор", "Акт", "Прейскурант"],
    },
    {
      text: "Наши врачи",
      //   href: "/",
      hasMenu: true,
      items: ["Платные услуги", "Договор", "Акт", "Прейскурант"],
    },
    {
      text: "О нас",
       href: "#about",
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
       section: "contact",
      hasMenu: false,
    },
  ];

  export default links;