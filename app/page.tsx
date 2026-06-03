"use client";

import React from "react";
import {
  ArrowRight,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Package,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const instagram = "https://www.instagram.com/50andco.bakery/";
const whatsapp =
  "https://wa.me/639171234567?text=Hi%2050%20%26%20Co.%20Bakery,%20I'd%20like%20to%20place%20an%20order.";
const signatureCakes = [
  {
    title: "Confetti Cake",
    image: "/confetti-cake.jpg",
    description: "Soft layers, rich buttercream, and colorful sprinkles made for birthdays, celebrations, and gathering around the table.",
  },
  {
    title: "Pavlova",
    image: "/pavlova.jpg",
    description: "Light, airy meringue topped with cream and seasonal fruit.",
  },
  {
    title: "Lemon Torte",
    image: "/lemon-torte.jpg",
    description: "Bright citrus flavors balanced with delicate sweetness.",
  },
  {
    title: "Strawberry Shortcake",
    image: "/strawberry-shortcake.jpg",
    description: "Layers of sponge, cream and fresh strawberries.",
  },
  {
    title: "Mocha Crunch",
    image: "/mocha-crunch.jpg",
    description: "Chocolate, coffee and texture in every bite.",
  },
  {
    title: "Coffee Crunch",
    image: "/coffee-crunch.jpg",
    description: "A bakery favorite with rich coffee notes and crisp crunch.",
  },
  {
    title: "Sans Rival",
    image: "/sans-rival.jpg",
    description: "Layers of crisp meringue, buttercream and roasted cashews.",
  },
];

const sandwichDrops = [
  
  "/sandwich1.jpg",
  "/sandwich3.jpg",
  "/sandwich2.jpg",
  "/sandwich4.jpg",
  "/sandwich5.jpg",
  "/sandwich6.jpg",
];
const seasonalFavorites = [
  {
    title: "Thanksgiving Turkey",
    image: "/turkey.jpg",
    description: "Holiday feasts prepared for gathering around the table.",
  },
  {
    title: "Pecan Bars",
    image: "/pecan.jpg",
    description: "Rich, buttery bars made for sharing and gifting.",
  },
  {
    title: "Celebration Cakes",
    image: "/confetti-cake.jpg",
    description: "Custom cakes for birthdays, milestones and celebrations.",
  },
  {
    title: "Freshly Baked Treats",
    image: "/cookies2.jpg",
    description: "Limited releases, seasonal bakes and bakery favorites.",
  },
];
const orderSteps = [
  {
    title: "Browse",
    text: "Check the latest releases, seasonal bakes, and Saturday specials.",
  },
  {
    title: "Order",
    text: "Send a message through Instagram or WhatsApp to reserve your box.",
  },
  {
    title: "Bake",
    text: "Everything is prepared in small batches with time and care.",
  },
  {
    title: "Pickup / Delivery",
    text: "Pickup and delivery options are available within Metro Manila.",
  },
];

export default function FiftyAndCo() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#2f241d]">
      <header className="fixed top-0 z-50 w-full border-b border-[#2f241d]/10 bg-[#f7f1e8]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-xl font-black tracking-tight">
            50 & Co.
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#2f241d]/70 md:flex">
            <a href="#story">Story</a>
            <a href="#collection">Collection</a>
            <a href="#sandwich">Sandwich Club</a>
            <a href="#order">Order</a>
            <a href="#visit">Visit</a>
          </nav>

          <div className="flex items-center gap-2">
  <a href={whatsapp} target="_blank" rel="noopener noreferrer">
    <Button className="rounded-full bg-green-600 px-5 text-white hover:bg-green-700">
      WhatsApp
    </Button>
  </a>

  <a href={instagram} target="_blank" rel="noopener noreferrer">
    <Button
      variant="outline"
      className="rounded-full border-[#2f241d]/20"
    >
      Instagram
    </Button>
  </a>
</div>
        </div>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden">
        <img
          src="/50andco-hero.jpg"
          alt="50 & Co Bakery"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-20">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/75">
              Makati City
            </p>

            <h1 className="mt-6 text-6xl font-black leading-none md:text-8xl">
              50 & Co.
              <br />
              Bakery
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-white/85">
              Small-batch artisan baking from Makati.
              <br />
              Crafted by hand. Baked fresh. Made to share.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="rounded-full bg-white px-7 text-[#2f241d] hover:bg-white/90"
                >
                  Order Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>

              <a href="#story">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/40 bg-white/10 px-7 text-white hover:bg-white/20 hover:text-white"
                >
                  Our Story
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-3 shadow-2xl shadow-[#2f241d]/10">
            <img
              src="/trisha.jpg"
              alt="Trisha of 50 & Co."
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2f241d]/50">
              Meet Trisha
            </p>

            <h2 className="mt-4 text-6xl font-black leading-none md:text-7xl">
              Behind
              <br />
              The Bakery
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#2f241d]/70">
              What began as a passion for baking has grown into one of Makati’s
              most loved artisan bakeries. Every cake, cookie and pastry
              reflects a commitment to quality, craftsmanship and community.
            </p>

            <p className="mt-6 text-lg leading-9 text-[#2f241d]/65">
              50 & Co. is built around small batches, thoughtful details, and
              the kind of food people bring to celebrations, weekends and
              tables worth gathering around.
            </p>
          </div>
        </div>
      </section>

      <section id="signaturecakes" className="bg-[#fffaf2] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2f241d]/50">
              Signature Cakes
            </p>

            <h2 className="mt-4 text-5xl font-black leading-tight md:text-7xl">
              The cakes people come back for.
            </h2>
          </div>

          <div className="mt-12 flex gap-6 overflow-x-auto pb-4">
  {signatureCakes.map((cake) => (
    <div
      key={cake.title}
      className="w-80 shrink-0 overflow-hidden rounded-[2rem] bg-white shadow-sm"
    >
      <img
        src={cake.image}
        alt={cake.title}
        className="aspect-[4/5] w-full object-cover"
      />

      <div className="p-6">
  <h3 className="text-2xl font-black">
    {cake.title}
  </h3>

  <p className="mt-3 text-sm leading-6 text-[#2f241d]/65">
    {cake.description}
  </p>
</div>
    </div>
  ))}
</div>
        </div>
      </section>
<section className="py-24">
  <div className="mx-auto max-w-7xl px-5">
    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2f241d]/50">
      Fan Favorites
    </p>

    <h2 className="mt-4 text-5xl font-black">
      Bakery staples people love.
    </h2>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
        <img
          src="/cookies.jpg"
          alt="Cookies"
          className="aspect-[4/3] w-full object-cover"
        />
        <div className="p-6">
  <h3 className="text-2xl font-black">Cookies</h3>

  <p className="mt-3 text-[#2f241d]/65">
    Small-batch cookies baked fresh and made to share.
  </p>
</div>
      </div>
       <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
        <img
          src="/polvoron.jpeg"
          alt="Polvoron"
          className="aspect-[4/3] w-full object-cover"
        />
        <div className="p-6">
  <h3 className="text-2xl font-black">Polvoron</h3>

  <p className="mt-3 text-[#2f241d]/65">
    A classic Filipino favorite, handcrafted in small batches.
  </p>
</div>
      </div>
      <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
        <img
          src="/ensymadas.jpg"
          alt="Ensaymadas"
          className="aspect-[4/3] w-full object-cover"
        />
        <div className="p-6">
  <h3 className="text-2xl font-black">Ensaymadas</h3>

  <p className="mt-3 text-[#2f241d]/65">
    Soft, buttery and generously topped for the perfect indulgence.
  </p>
</div>
      </div>

      <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
        <img
          src="/empanadas.jpg"
          alt="Empanadas"
          className="aspect-[4/3] w-full object-cover"
        />
        <div className="p-6">
  <h3 className="text-2xl font-black">Empanadas</h3>

  <p className="mt-3 text-[#2f241d]/65">
    Golden, flaky pastry filled with deeply satisfying flavors.
  </p>
</div>
      </div>
    </div>
  </div>
</section>
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="mb-8 text-sm font-bold uppercase tracking-[0.35em] text-[#2f241d]/40">
            Baking Philosophy
          </p>

          <blockquote className="text-5xl font-black leading-tight md:text-7xl">
            No shortcuts.
            <br />
            No mass production.
            <br />
            Just great ingredients,
            time, and care.
          </blockquote>
        </div>
      </section>

      <section id="sandwich" className="bg-[#2f241d] py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-[2rem] bg-white/10 p-3">
<div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3">
    {sandwichDrops.map((image, index) => (
      <img
        key={image}
        src={image}
        alt={`Saturday Sandwich Club drop ${index + 1}`}
        className="aspect-[4/5] w-72 shrink-0 snap-start rounded-[1.5rem] object-cover md:w-80"
      />
    ))}
  </div>

  <p className="mt-3 text-center text-xs uppercase tracking-[0.25em] text-white/45">
    Scroll weekly sandwich drops →
  </p>
</div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
              Saturdays Only
            </p>

            <h2 className="mt-4 text-6xl font-black leading-none md:text-7xl">
              Sandwich
              <br />
              Club
            </h2>

            <p className="mt-8 text-2xl leading-9 text-white/80">
              One sandwich. One day only. Every Saturday.
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/45">
  Limited quantities · New creation every week
</p>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Built around seasonal ingredients, fresh bread, and whatever
              we’re excited to make that week. Once they’re gone, they’re gone.
            </p>

            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Button className="mt-8 rounded-full bg-white px-7 text-[#2f241d] hover:bg-white/90">
                Follow Saturday Drops
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e8] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2f241d]/50">
                Seasonal Favorites
              </p>

              <h2 className="mt-4 text-5xl font-black leading-tight md:text-7xl">
                Fresh from the oven.
              </h2>
            </div>

            <p className="text-lg leading-8 text-[#2f241d]/65 md:text-right">
              Weekly specials, celebration bakes, and limited releases made in
              small batches.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
  {seasonalFavorites.map((item) => (
    <div
      key={item.title}
      className="overflow-hidden rounded-[2rem] bg-white shadow-sm"
    >
      <img
        src={item.image}
        alt={item.title}
        className="aspect-[4/3] w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-3xl font-black">{item.title}</h3>

        <p className="mt-3 text-[#2f241d]/65">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      <section id="order" className="bg-[#fffaf2] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2f241d]/50">
              How To Order
            </p>

            <h2 className="mt-4 text-5xl font-black leading-tight md:text-7xl">
              Fresh bakes, made simple.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {orderSteps.map((step, index) => (
              <div key={step.title} className="rounded-[2rem] bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2f241d] text-white">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#2f241d]/60">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
  <a href={whatsapp} target="_blank" rel="noopener noreferrer">
    <Button
      size="lg"
      className="rounded-full bg-green-600 px-8 text-white hover:bg-green-700"
    >
      Order via WhatsApp
    </Button>
  </a>

  <a href={instagram} target="_blank" rel="noopener noreferrer">
    <Button
      size="lg"
      variant="outline"
      className="rounded-full border-[#2f241d]/20"
    >
      Browse Instagram
    </Button>
  </a>
</div>
        </div>
      </section>

      <section id="visit" className="py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#2f241d] text-white md:grid-cols-2">
          <div className="p-8 md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
              Visit / Order
            </p>

            <h2 className="mt-4 text-5xl font-black leading-tight">
              Baked in Makati.
              <br />
              Made to share.
            </h2>

            <div className="mt-8 space-y-4 text-white/75">
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5" /> Makati City
              </p>
              <p className="flex items-center gap-3">
                <Package className="h-5 w-5" /> Pickup & delivery available
              </p>
              <p className="flex items-center gap-3">
                <ExternalLink className="h-5 w-5" /> Order through Instagram
              </p>
            </div>
          </div>

          <div className="bg-[#fffaf2] p-8 text-[#2f241d] md:p-12">
            <p className="text-lg leading-8">
              Follow 50 & Co. for weekly releases, limited bakes, and Saturday
              Sandwich Club drops.
            </p>

            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Button className="mt-8 rounded-full bg-[#2f241d] px-7 text-white hover:bg-[#46362c]">
                Follow @50andco.bakery
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2f241d]/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-sm text-[#2f241d]/50 md:flex-row">
          <p>© {new Date().getFullYear()} 50 & Co. Bakery.</p>
          <p>Crafted by hand. Baked fresh. Made to share.</p>
        </div>
      </footer>
<a
  href={whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-105"
  aria-label="Order via WhatsApp"
>
  <MessageCircle className="h-7 w-7" />
</a>

<a
  href={instagram}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#2f241d] text-white shadow-xl transition hover:scale-105"
  aria-label="Order via Instagram"
>
  <ExternalLink className="h-7 w-7" />
</a>
      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#2f241d] text-white shadow-xl transition hover:scale-105"
        aria-label="Order via Instagram"
      >
        <ExternalLink className="h-7 w-7" />
      </a>
    </main>
  );
}