class MenuController {
  getMenus(req, res) {
    const result = {
      categories: [
        {
          name: "Bebidas con alcohol",
          items: [
            {
              name: "IPA",
              price: 160,
            },
            {
              name: "APA",
              price: 165,
            },
            {
              name: "Honey",
              price: 133,
            },
            {
              name: "Daikiri",
              price: 220,
            },
            {
              name: "Mojito",
              price: 220,
            },
          ],
        },
        {
          name: "Hamburguesas",
          items: [
            {
              name: "React",
              description: "200gr carne, lechuga, tomate, queso y huevo",
              price: 450,
            },
            {
              name: "Angular",
              description:
                "200gr de carne, lechuga, tomate, queso, huevo, jamón y mayonesa casera",
              price: 500,
            },
            {
              name: "Vuegetarian",
              description:
                "200gr de hamburguesa de garbanzos, lechuga, tomate, queso y huevo",
              price: 500,
            },
          ],
        },
      ],
    };
    res.json(result);
  }
}

module.exports = MenuController;
