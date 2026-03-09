const productsData = [
  {
    id: 1,
    name: "مذكرة مراجعة نهائية في الرياضيات - ثانوي",
    price: 120,
    image : "https://marketplace.canva.com/MADGxgkCtaQ/4/thumbnail_large/canva-opened-lined-book-on-book-beside-candybar-phone-MADGxgkCtaQ.jpg",
  },
  {
    id: 2,
    name: "مذكرة لغة عربية شامل القواعد والتعبير",
    price: 95,
    image:
      "https://marketplace.canva.com/JIGuM/MAEzKKJIGuM/1/tl/canva-white-tulips-flowers-on-open-book-MAEzKKJIGuM.jpg",
  },
  {
    id: 3,
    name: "مراجعة ليلة الامتحان في الفيزياء - أسئلة مجابة",
    price: 110,
    image:
      "https://marketplace.canva.com/AAej4/MAEfNvAAej4/1/tl/canva-brown-book-beside-the-lighted-candle-MAEfNvAAej4.jpg",
  },
  {
    id: 4,
    name: "ملخص كيمياء لأهم الأفكار والمسائل",
    price: 105,
    image:
      "https://marketplace.canva.com/MADGxgkCtaQ/4/thumbnail_large/canva-opened-lined-book-on-book-beside-candybar-phone-MADGxgkCtaQ.jpg",
  },
  {
    id: 5,
    name: "مذكرة إنجليزي شاملة قواعد ومفردات",
    price: 90,
    image: "https://marketplace.canva.com/JIGuM/MAEzKKJIGuM/1/tl/canva-white-tulips-flowers-on-open-book-MAEzKKJIGuM.jpg",
  },
  {
    id: 6,
    name: "Planner للمذاكرة وتنظيم ليلة الامتحان",
    price: 80,
    image: "https://marketplace.canva.com/AAej4/MAEfNvAAej4/1/tl/canva-brown-book-beside-the-lighted-candle-MAEfNvAAej4.jpg",
  },
  {
    id: 7,
    name: "مذكرة مراجعة نهائية في الرياضيات - ثانوي",
    price: 120,
    image: "https://marketplace.canva.com/MADGxgkCtaQ/4/thumbnail_large/canva-opened-lined-book-on-book-beside-candybar-phone-MADGxgkCtaQ.jpg",
  },
  {
    id: 8,
    name: "مذكرة لغة عربية شامل القواعد والتعبير",
    price: 95,
    image:
      "https://marketplace.canva.com/JIGuM/MAEzKKJIGuM/1/tl/canva-white-tulips-flowers-on-open-book-MAEzKKJIGuM.jpg",
  },
  {
    id: 9,
    name: "مراجعة ليلة الامتحان في الفيزياء - أسئلة مجابة",
    price: 110,
    image:
      "https://marketplace.canva.com/AAej4/MAEfNvAAej4/1/tl/canva-brown-book-beside-the-lighted-candle-MAEfNvAAej4.jpg",
  },
  {
    id: 10,
    name: "ملخص كيمياء لأهم الأفكار والمسائل",
    price: 105,
    image:
      "https://marketplace.canva.com/MADGxgkCtaQ/4/thumbnail_large/canva-opened-lined-book-on-book-beside-candybar-phone-MADGxgkCtaQ.jpg",
  },
  {
    id: 11,
    name: "مذكرة إنجليزي شاملة قواعد ومفردات",
    price: 90,
    image: "https://marketplace.canva.com/JIGuM/MAEzKKJIGuM/1/tl/canva-white-tulips-flowers-on-open-book-MAEzKKJIGuM.jpg",
  },
  {
    id: 12,
    name: "Planner للمذاكرة وتنظيم ليلة الامتحان",
    price: 80,
    image: "https://marketplace.canva.com/AAej4/MAEfNvAAej4/1/tl/canva-brown-book-beside-the-lighted-candle-MAEfNvAAej4.jpg",
  },
  {
    id: 13,
    name: "مذكرة مراجعة نهائية في الرياضيات - ثانوي",
    price: 120,
    image: "https://marketplace.canva.com/MADGxgkCtaQ/4/thumbnail_large/canva-opened-lined-book-on-book-beside-candybar-phone-MADGxgkCtaQ.jpg",
  },
  {
    id: 14,
    name: "مذكرة لغة عربية شامل القواعد والتعبير",
    price: 95,
    image:
      "https://marketplace.canva.com/JIGuM/MAEzKKJIGuM/1/tl/canva-white-tulips-flowers-on-open-book-MAEzKKJIGuM.jpg",
  },
  {
    id: 15,
    name: "مراجعة ليلة الامتحان في الفيزياء - أسئلة مجابة",
    price: 110,
    image:
      "https://marketplace.canva.com/AAej4/MAEfNvAAej4/1/tl/canva-brown-book-beside-the-lighted-candle-MAEfNvAAej4.jpg",
  },
  {
    id: 16,
    name: "ملخص كيمياء لأهم الأفكار والمسائل",
    price: 105,
    image:
      "https://marketplace.canva.com/MADGxgkCtaQ/4/thumbnail_large/canva-opened-lined-book-on-book-beside-candybar-phone-MADGxgkCtaQ.jpg",
  },
  {
    id: 17,
    name: "مذكرة إنجليزي شاملة قواعد ومفردات",
    price: 90,
    image: "https://marketplace.canva.com/JIGuM/MAEzKKJIGuM/1/tl/canva-white-tulips-flowers-on-open-book-MAEzKKJIGuM.jpg",
  },
  {
    id: 18,
    name: "Planner للمذاكرة وتنظيم ليلة الامتحان",
    price: 80,
    image: "https://marketplace.canva.com/AAej4/MAEfNvAAej4/1/tl/canva-brown-book-beside-the-lighted-candle-MAEfNvAAej4.jpg",
  },
  {
    id: 19,
    name: "Planner للمذاكرة وتنظيم ليلة الامتحان",
    price: 80,
    image: "https://marketplace.canva.com/MADGxgkCtaQ/4/thumbnail_large/canva-opened-lined-book-on-book-beside-candybar-phone-MADGxgkCtaQ.jpg",
  },
  {
    id: 20,
    name: "Planner للمذاكرة وتنظيم ليلة الامتحان",
    price: 80,
    image: "https://marketplace.canva.com/JIGuM/MAEzKKJIGuM/1/tl/canva-white-tulips-flowers-on-open-book-MAEzKKJIGuM.jpg",
  },
];

