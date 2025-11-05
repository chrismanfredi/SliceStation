"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSpecial, setCurrentSpecial] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Pizza");

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Specials", href: "#" },
    { label: "Menu", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const specials = [
    {
      title: "Loaded Philly Pizza",
      description:
        "All the bold flavor of a Philly cheesesteak — on a pizza! Gooey, savory, and totally satisfying.",
      image: "https://64.media.tumblr.com/3513eab6e8142e16f3953e1978ad98ea/tumblr_osh9383d8m1tg05wco1_1280.jpg",
      ingredients: ["Shaved steak", "Sautéed onions,", "Green peppers", "Mushrooms", "Mozzarella"],
    },
    {
      title: "Cajun Shrimp Alfredo",
      description:
        "A rich and spicy seafood twist on the classic Alfredo — creamy, zesty, and unforgettable.",
      image: "https://tse1.mm.bing.net/th/id/OIP.QGHrmdWGT36E_a5cT8v9gAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      ingredients: ["Cajun seasoned shrimp", "Fettuccine pasta", "Roasted red peppers", "Parmesan cream sauce"],
    },
    {
      title: "Truffle Forest",
      description:
        "Wild mushrooms sautéed in truffle butter, creamy fontina, shaved pecorino, and a sprinkle of fresh thyme.",
      image: "https://i0.wp.com/djalalicooks.com/wp-content/uploads/2021/08/IMG_7492.jpg?w=2160",
      ingredients: ["Wild mushrooms", "Truffle butter", "Fontina", "Shaved pecorino", "Fresh thyme"],
    },
  ];

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const goToPreviousSpecial = () =>
    setCurrentSpecial((index) => (index === 0 ? specials.length - 1 : index - 1));
  const goToNextSpecial = () =>
    setCurrentSpecial((index) => (index === specials.length - 1 ? 0 : index + 1));

  const currentSpecialItem = specials[currentSpecial];
  const totalSpecials = specials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSpecial((index) => (index === totalSpecials - 1 ? 0 : index + 1));
    }, 7000);

    return () => clearInterval(timer);
  }, [totalSpecials]);

  const menuCategories = [
    {
      name: "Pizza",
      description: "Hand-tossed pies baked on stone decks with locally sourced ingredients.",
      items: [
        {
          title: "Classic Pepperoni",
          detail: "House marinara, mozzarella, and a generous layer of crispy pepperoni.",
          image: "https://images.unsplash.com/photo-1601925260184-8d0e01c6fc33?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Veggie Garden",
          detail: "Roasted peppers, baby spinach, artichokes, olives, and balsamic drizzle.",
          image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Four Cheese",
          detail: "Mozzarella, fontina, aged provolone, and parmigiano with garlic butter.",
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      name: "Specialty Pizza",
      description: "Toasted Italian rolls stacked with premium meats, cheeses, and sauces.",
      items: [
        {
          title: "Italian Stallion",
          detail: "Capicola, salami, prosciutto, provolone, lettuce, tomato, red wine vinaigrette.",
          image: "https://images.unsplash.com/photo-1542838686-5f1c068ededd?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Chicken Parm Hero",
          detail: "Crispy chicken cutlet, marinara, mozzarella, and fresh basil.",
          image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Roasted Veggie",
          detail: "Zucchini, squash, portobello, pesto aioli, arugula, and smoked gouda.",
          image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      name: "Desserts",
      description: "Toasted Italian rolls stacked with premium meats, cheeses, and sauces.",
      items: [
        {
          title: "Italian Stallion",
          detail: "Capicola, salami, prosciutto, provolone, lettuce, tomato, red wine vinaigrette.",
          image: "https://images.unsplash.com/photo-1542838686-5f1c068ededd?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Chicken Parm Hero",
          detail: "Crispy chicken cutlet, marinara, mozzarella, and fresh basil.",
          image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Roasted Veggie",
          detail: "Zucchini, squash, portobello, pesto aioli, arugula, and smoked gouda.",
          image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      name: "Craft Beer",
      description: "Sweet finishes made in-house every morning to pair perfectly with a hot slice.",
      items: [
        {
          title: "Tiramisu Cups",
          detail: "Espresso-soaked ladyfingers with whipped mascarpone and cocoa.",
          image: "https://images.unsplash.com/photo-1604908177067-088a29cf5c3f?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Cannoli Flight",
          detail: "Mini cannoli trio with pistachio, chocolate chip, and citrus ricotta fillings.",
          image: "https://images.unsplash.com/photo-1589308078056-922f584ef167?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Fired Apple Pie",
          detail: "Wood-oven baked apples, cinnamon crumble, vanilla bean gelato.",
          image: "https://images.unsplash.com/photo-1605478371310-a9bf09f0b1c3?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  ];

  const activeMenu = menuCategories.find((category) => category.name === activeCategory) ?? menuCategories[0];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-amber-50 via-white to-rose-50 font-sans text-zinc-700">
      <nav className="sticky top-0 z-40 w-full border-b border-white/60 bg-white/75 backdrop-blur">
        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
            Slice Station
          </span>
          <ul className="hidden items-center gap-6 text-sm font-semibold text-zinc-600 lg:flex">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  className="rounded-full px-3 py-2 transition-all hover:bg-gradient-to-r hover:from-amber-500/15 hover:via-orange-500/20 hover:to-rose-500/20 hover:text-zinc-900"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/60 bg-white/70 text-zinc-600 shadow-sm transition hover:border-amber-400/60 hover:text-zinc-900 lg:hidden"
            onClick={toggleMenu}
            type="button"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-opacity ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
        {isMenuOpen && (
          <div className="border-t border-white/60 bg-white/80 px-6 py-5 backdrop-blur lg:hidden">
            <ul className="flex flex-col gap-3 text-sm font-semibold text-zinc-600">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    className="block rounded-2xl px-4 py-3 transition-all hover:bg-gradient-to-r hover:from-amber-500/15 hover:via-orange-500/20 hover:to-rose-500/20 hover:text-zinc-900"
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <section className="relative w-full overflow-hidden">
        <img
          alt="Freshly baked pizza slices on a wooden board"
          className="h-[320px] w-full object-cover object-[20%_center] sm:h-[380px] sm:object-[28%_center] md:h-[520px] md:object-left"
          src="https://st3.depositphotos.com/4590583/19475/i/450/depositphotos_194750990-stock-photo-pizza-chicken-mushrooms-top-view.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        <div className="absolute inset-0">
          <div className="flex h-full w-full max-w-6xl items-end justify-start px-6 pb-12 md:items-center md:justify-start md:pb-0">
            <div className="hidden max-w-md rounded-3xl border border-white/15 bg-zinc-950/70 p-6 text-white shadow-2xl shadow-black/40 backdrop-blur md:block lg:max-w-xl lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Wood-Fired Since 1972</p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-[2.1rem] lg:text-4xl">
                Slide Station — Bringing People Together One Slice at a Time.
              </h1>
              <p className="mt-4 text-base text-white/80">
              Slide Station is your local pizza spot — a place where friends gather, the ovens are always warm, and every bite tastes like home. Fresh ingredients, friendly faces, and that perfect slice are waiting for you.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/30 transition hover:scale-105"
                  href="#specials"
                >
                  View Specials
                </a>
              </div>
            </div>
            <div className="flex w-full max-w-[15rem] flex-col gap-2 rounded-2xl border border-white/15 bg-zinc-950/70 p-3 text-white shadow-xl shadow-black/40 backdrop-blur md:hidden">
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-white/60">Wood-Fired Since 1972</p>
              <h2 className="text-base font-semibold leading-snug">Slide Station — Bringing People Together One Slice at a Time.</h2>
              <p className="text-[0.7rem] text-white/75">
                Slide Station is your local pizza spot — a place where friends gather, the ovens are always warm, and every bite tastes like home. Fresh ingredients, friendly faces, and that perfect slice are waiting for you.
              </p>
              <a
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-3 py-1.5 text-[0.7rem] font-semibold text-white shadow-lg shadow-amber-500/30 transition hover:scale-105"
                href="#specials"
              >
                View Specials
              </a>
            </div>
          </div>
        </div>
      </section>
      <main className="flex flex-1 flex-col">
        <section className="relative px-6 py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 to-transparent" />
          <div className="pointer-events-none absolute -left-24 top-32 hidden h-64 w-64 rounded-full bg-orange-200/40 blur-3xl md:block" />
          <div className="pointer-events-none absolute -right-32 bottom-24 hidden h-72 w-72 rounded-full bg-rose-200/40 blur-3xl md:block" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-12 overflow-hidden rounded-3xl border border-orange-200/70 bg-white/85 p-10 shadow-2xl shadow-amber-200/40 backdrop-blur md:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-600">Our Story</p>
              <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Pizza that binds our town together.</h2>
              <p className="text-base text-zinc-600">
                Slice Station has been the heart of downtown Willow Creek for over 50 years. What started as a single oven
                in a cozy corner shop has grown into the town&apos;s go-to spot for hand-tossed pies, family gatherings,
                and late-night cravings.
              </p>
              <p className="text-base text-zinc-600">
                Every pizza is made from scratch with heirloom dough recipes passed down through generations. We source our
                produce from local farms, cheese from regional dairies, and craft each sauce in-house daily. Whether
                you&apos;re grabbing a quick slice on your way home or celebrating with friends, we&apos;re proud to serve
                the flavors that bring our community together.
              </p>
              <p className="text-base text-zinc-600">
                Stop by for our legendary wood-fired specials, stay for the stories, and leave with a taste of tradition
                that has kept Willow Creek coming back decade after decade.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="rounded-2xl border border-orange-200/70 bg-white/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">
                  Family Owned
                </div>
                <div className="rounded-2xl border border-orange-200/70 bg-white/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">
                  Local Ingredients
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/30 bg-white/20 px-4 py-3 text-sm font-medium text-white shadow-lg backdrop-blur">
                Dough prepped every morning at 5am.
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full overflow-hidden px-6 py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-amber-100/60 to-transparent" />
          <div className="pointer-events-none absolute -top-24 left-1/2 hidden h-80 w-80 -translate-x-1/2 rounded-full bg-orange-200/50 blur-3xl md:block" />
          <div className="pointer-events-none absolute -bottom-32 right-16 hidden h-96 w-96 rounded-full bg-rose-200/40 blur-3xl lg:block" />
          <div className="relative mx-auto w-full max-w-6xl space-y-12">
            <div className="text-center">
              <h3 className="mt-3 text-3xl font-semibold text-zinc-900 md:text-4xl">New Additions to the Menu</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "The Breakfast Club",
                  ingredients: [
                    "Scrambled Eggs",
                    "Bacon",
                    "Hash Browns",
                    "Cheddar",
                    "Drizzle of Maple Syrup",
                  ],
                  image: "https://www.calgarycoop.com/wp-content/uploads/2023/08/Breakfast-pizza.png",
                },
                {
                  title: "Taco Tuesday",
                  ingredients: [
                    "Refried Beans",
                    "Seasoned Beef",
                    "Tomato",
                    "Lettuce",
                    "Cheddar",
                    "Sour Cream Drizzle",
                  ],
                  image: "https://i0.wp.com/www.thevegantwist.com/wp-content/uploads/2014/05/img_3658.jpg?resize=1024%2C683",
                },
                {
                  title: "Buffalo Inferno",
                  ingredients: [
                    "Buffalo Chicken",
                    "Blue Cheese Crumble",
                    "Hot Honey Drizzle",
                  ],
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCXO3L6EoNCk-5I71m8euLZGhKX3HcLeVow&s",
                },
              ].map((feature) => (
                <article
                  key={feature.title}
                  className="group overflow-hidden rounded-3xl border border-orange-200/70 bg-white/85 shadow-xl shadow-orange-200/30 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl backdrop-blur"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      alt={feature.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={feature.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                  </div>
                  <div className="space-y-3 p-6">
                    <h4 className="text-xl font-semibold text-zinc-900">{feature.title}</h4>
                    <ul className="space-y-1 text-sm text-zinc-600">
                      {feature.ingredients.map((ingredient) => (
                        <li key={ingredient} className="flex items-center gap-2">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500/70" />
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="specials"
          className="relative w-full overflow-hidden bg-gradient-to-br from-zinc-950 via-[#2a1410] to-zinc-900 px-6 py-20 text-white"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,179,71,0.25),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,121,198,0.2),transparent_55%)]" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-3xl font-semibold md:text-4xl">Tonight&apos;s Specials</h3>
              </div>
              <div className="hidden items-center gap-3 md:flex">
                <button
                  aria-label="View previous special"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-lg shadow-black/20 transition hover:scale-105 hover:border-amber-300/70 hover:bg-white/20"
                  onClick={goToPreviousSpecial}
                  type="button"
                >
                  <span aria-hidden className="text-lg">
                    ←
                  </span>
                </button>
                <button
                  aria-label="View next special"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-lg shadow-black/20 transition hover:scale-105 hover:border-amber-300/70 hover:bg-white/20"
                  onClick={goToNextSpecial}
                  type="button"
                >
                  <span aria-hidden className="text-lg">
                    →
                  </span>
                </button>
              </div>
            </div>
            <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-300" />
                  Special {currentSpecial + 1} of {specials.length}
                </div>
                <h4 className="text-3xl font-semibold md:text-4xl">{currentSpecialItem.title}</h4>
                <p className="text-lg text-white/85">{currentSpecialItem.description}</p>
                {currentSpecialItem.ingredients && (
                  <ul className="flex flex-wrap gap-2 text-sm text-white/75">
                    {currentSpecialItem.ingredients.map((ingredient) => (
                      <li
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1"
                        key={ingredient}
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-300" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex items-center gap-3 md:hidden">
                  <button
                    aria-label="View previous special"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-lg shadow-black/20 transition hover:scale-105 hover:border-amber-300/70 hover:bg-white/20"
                    onClick={goToPreviousSpecial}
                    type="button"
                  >
                    <span aria-hidden className="text-lg">
                      ←
                    </span>
                  </button>
                  <button
                    aria-label="View next special"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-lg shadow-black/20 transition hover:scale-105 hover:border-amber-300/70 hover:bg-white/20"
                    onClick={goToNextSpecial}
                    type="button"
                  >
                    <span aria-hidden className="text-lg">
                      →
                    </span>
                  </button>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl shadow-black/40 backdrop-blur">
                <img
                  alt={currentSpecialItem.title}
                  className="h-72 w-full object-cover md:h-96"
                  src={currentSpecialItem.image}
                />
                <div className="border-t border-white/15 bg-white/5 px-6 py-4 text-sm text-white/80">
                  Fired on our oak deck oven and finished with a brush of roasted garlic oil.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-100 px-6 py-16">
          <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-orange-200/50 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-1/3 h-72 -translate-y-1/2 rounded-full bg-rose-200/40 blur-3xl md:left-1/2 md:h-[420px] md:w-[420px] md:-translate-x-1/2" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-amber-300/40 blur-3xl" />
          <div className="relative mx-auto w-full max-w-6xl space-y-10">
            <div className="text-center">
              <h3 className="mt-3 text-3xl font-semibold text-zinc-900">Explore our Menu</h3>
              <p className="mt-3 text-base text-zinc-600">
                Discover signature pies, toasted subs, and in-house desserts curated by our kitchen crew each day.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/70 bg-white/80 p-2 shadow-lg backdrop-blur">
                {menuCategories.map((category) => (
                  <button
                    key={category.name}
                    aria-pressed={activeCategory === category.name}
                    className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      activeCategory === category.name
                        ? "bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-md"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                    type="button"
                  >
                    {activeCategory === category.name && (
                      <span className="absolute inset-x-3 -bottom-1 h-1 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 opacity-80" />
                    )}
                    <span className="relative z-10">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-[1.15fr,0.85fr] md:items-start">
              <div className="space-y-6">
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {activeMenu.items.map((item) => (
                    <li
                      key={item.title}
                      className="group overflow-hidden rounded-3xl border border-orange-200/70 bg-white/90 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <div className="relative h-40 w-full overflow-hidden">
                        <img
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          src={item.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                      </div>
                      <div className="space-y-2 p-4">
                        <h5 className="text-lg font-semibold text-zinc-900">{item.title}</h5>
                        <p className="text-sm text-zinc-600">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full overflow-hidden px-6 py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,183,77,0.25),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(244,143,177,0.25),transparent_55%)]" />
          <div className="relative mx-auto w-full max-w-6xl space-y-12">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">Visit</p>
              <h3 className="mt-3 text-3xl font-semibold text-zinc-900 md:text-4xl">Visit Slice Station</h3>
              <div className="mt-4 space-y-2 text-sm text-zinc-600 md:text-base">
                <p className="font-semibold text-zinc-900">123 Market Street, Fort Myers, FL 33901</p>
                <a className="block text-zinc-600 transition hover:text-zinc-900" href="tel:+12395550123">
                  (239) 555-0123
                </a>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-[1.05fr,0.95fr] md:items-start">
              <div className="space-y-6">
                <div className="rounded-3xl border border-orange-200/70 bg-white/85 p-6 shadow-xl shadow-orange-200/40 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">Hours</p>
                  <div className="mt-4 grid gap-4 text-sm text-zinc-600">
                    <div>
                      <p className="font-semibold text-zinc-900">Monday – Thursday</p>
                      <p>11am – 10pm</p>
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Friday – Saturday</p>
                      <p>11am – Midnight</p>
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Sunday</p>
                      <p>Noon – 9pm</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-orange-200/70 bg-white/85 p-6 shadow-xl shadow-orange-200/30 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">Contact</p>
                  <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                    <li>
                      <a className="flex items-center gap-2 hover:text-zinc-900" href="mailto:hello@slicestation.com">
                        <span className="text-amber-500">•</span>
                        hello@slicestation.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-500">•</span>
                      Catering & private events available on request.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-orange-200/70 bg-white/80 shadow-2xl shadow-orange-200/40 backdrop-blur">
                <iframe
                  allowFullScreen
                  className="h-96 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Fort%20Myers%2C%20FL&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  title="Slice Station Fort Myers Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-[#24130f] to-zinc-900 px-6 py-12 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,179,71,0.25),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,121,198,0.2),transparent_55%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Visit Us</p>
            <p className="text-lg font-semibold text-white">123 Market Street</p>
            <p className="text-sm text-white/80">Fort Myers, FL 33901</p>
            <a className="block text-sm font-semibold text-white/85 transition hover:text-white" href="tel:+12395550123">
              (239) 555-0123
            </a>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Connect</p>
            <div className="flex items-center gap-3">
              <a
                aria-label="Slice Station on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 shadow-lg shadow-black/30 transition hover:scale-105 hover:border-amber-300/70 hover:bg-white/20"
                href="https://www.facebook.com"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt="Facebook"
                  className="h-6 w-6 filter invert"
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                />
              </a>
              <a
                aria-label="Slice Station on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 shadow-lg shadow-black/30 transition hover:scale-105 hover:border-amber-300/70 hover:bg-white/20"
                href="https://www.instagram.com"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt="Instagram"
                  className="h-6 w-6 filter invert"
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
