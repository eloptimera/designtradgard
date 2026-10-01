/**
 * ALLT kundspecifikt ligger här: företagsuppgifter, texter, tjänster och SEO.
 * Ny kund = kopiera repot, ändra den här filen (och vid behov färgerna överst i src/styles/global.css).
 *
 * Skriv *ord* med stjärnor runt för att markera det med gul understrykning (gäller rubriker).
 * Tomma fält (e-post, öppettider) döljs automatiskt på sajten.
 */
import type { IconName } from "./components/icons";

const grundat = 1995;
const arsErfarenhet = new Date().getFullYear() - grundat;

export const site = {
  /** Kort id som skickas med varje formulär, så en central mottagare vet vilken sajt det kom från. */
  id: "jovos",

  company: {
    name: "Jovos Transport AB",
    shortName: "Jovos",
    city: "Göteborg",
    area: "Göteborg",
    founded: grundat,
    employees: "ca 12",
    orgnr: "556521-4862",
    street: "Björnväktarens Gata 25",
    zip: "415 51",
    phone: "031-48 26 33",
    phoneLink: "+4631482633",
    email: "",
    hours: [] as { days: string; time: string }[],
    taxNote: "Registrerad för F-skatt och moms",
    people: [
      { name: "Jovo Marinkovic", role: "Styrelseledamot" },
      { name: "Ilija Marinkovic", role: "Styrelsesuppleant" },
    ],
  },

  nav: [
    { href: "/", label: "Hem" },
    { href: "/tjanster", label: "Tjänster" },
    { href: "/om-oss", label: "Om oss" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  navCta: { href: "/offert", label: "Få fri offert" },

  /** Titel och beskrivning per sida (visas i Google och när sidan delas). */
  seo: {
    home: {
      title: "Städfirma i Göteborg för företag & fastigheter – Jovos Transport AB",
      description:
        "Professionell lokalvård för företag, kontor, fastighetsägare och BRF:er i Göteborg. Kollektivavtal och över 30 års erfarenhet sedan 1995. Få fri offert.",
    },
    services: {
      title: "Lokalvård i Göteborg – Jovos Transport AB",
      description:
        "Kontorsstädning, fastighetsstädning och lokalvård för företag, fastighetsägare och BRF:er i Göteborg. Fri offert.",
    },
    about: {
      title: "Om oss – Jovos Transport AB, städfirma i Göteborg",
      description:
        "Jovos Transport AB är ett lokalvårdsbolag i Göteborg, verksamt sedan 1995, med kollektivavtal. Möt ledningen och läs om hur vi arbetar.",
    },
    contact: {
      title: "Kontakt – Jovos Transport AB i Göteborg",
      description:
        "Kontakta Jovos Transport AB i Göteborg. Skicka ett meddelande, se adress och kontaktuppgifter.",
    },
    quote: {
      title: "Få fri offert – Jovos Transport AB",
      description:
        "Berätta vad du behöver hjälp med och få en fri offert på kontors-, fastighets- och lokalvård i Göteborg från Jovos Transport AB.",
    },
    privacy: {
      title: "Integritetspolicy – Jovos Transport AB",
      description:
        "Så behandlar Jovos Transport AB dina personuppgifter när du kontaktar oss eller begär offert.",
    },
    notFound: { title: "Sidan finns inte – Jovos Transport AB", description: "Sidan finns inte." },
    businessDescription:
      "Lokalvårdsbolag i Göteborg. Kontorsstädning, fastighetsstädning och lokalvård för företag, fastighetsägare och organisationer.",
  },

  services: [
    {
      id: "kontorsstadning",
      title: "Kontorsstädning",
      short:
        "Professionell städning anpassad för företag, så att kontoret alltid är redo när dina medarbetare kommer.",
      points: [
        "Regelbunden städning på tider som passar verksamheten",
        "Upplägg och frekvens anpassas efter kontorets storlek och behov",
        "Offert utifrån lokalens yta och önskemål",
      ],
      icon: "building2" as IconName,
    },
    {
      id: "fastighetsstadning",
      title: "Fastighetsstädning",
      short: "Trapphusstädning och skötsel för fastighetsägare och bostadsrättsföreningar.",
      points: [
        "Trapphusstädning för fastighetsägare och BRF:er",
        "Regelbunden skötsel av gemensamma utrymmen",
        "Tydlig offert och fasta rutiner",
      ],
      icon: "building" as IconName,
    },
    {
      id: "lokalvard",
      title: "Lokalvårdstjänster",
      short: "Övrig regelbunden städning för företag och organisationer.",
      points: [
        "Lokalvård för butiker, verksamhetslokaler och organisationer",
        "Regelbunden städning enligt överenskommet schema",
        "Anpassas efter verksamhetens behov",
      ],
      icon: "clipboard" as IconName,
    },
  ],

  home: {
    topLeft: "Kontor · Fastighet · Lokalvård",
    headline: "Professionell *lokalvård* för företag och fastigheter i Göteborg",
    text: "Kontorsstädning, trapphusstädning och lokalvård för företag, fastighetsägare och BRF:er. Skicka en förfrågan så återkommer vi med fri offert.",
    cta: "Få fri offert",
    ctaSecondaryFallback: "Kontakta oss",

    servicesEyebrow: "Tjänster",
    servicesHeading: "Lokalvård för *företag* och fastigheter",

    whyEyebrow: "Varför Jovos",
    whyHeading: `Trygghet efter *${arsErfarenhet} år* i branschen`,
    why: [
      {
        icon: "handshake" as IconName,
        title: "Kollektivavtal",
        text: "Vi har kollektivavtal (Almega Serviceentreprenad). Det visar att vi är en seriös arbetsgivare med schyssta villkor, och det märks i kvaliteten.",
      },
      {
        icon: "badge" as IconName,
        title: `Över ${Math.floor(arsErfarenhet / 10) * 10} års erfarenhet`,
        text: `Vi startade ${grundat}. Så lång tid i branschen ger stabilitet och trygghet för dig som kund.`,
      },
      {
        icon: "users" as IconName,
        title: "Ett stabilt team",
        text: "Vi är ca 12 anställda och har kapacitet för både mindre och större städuppdrag.",
      },
    ],

    aboutEyebrow: "Om Jovos",
    aboutHeading: `Göteborgs städfirma sedan *${grundat}*`,
    aboutText:
      "Jovos Transport AB är ett lokalvårdsbolag med säte i Göteborg. Vi tar hand om kontorsstädning, fastighetsstädning och övrig lokalvård för företag, fastighetsägare och organisationer.",
    aboutLink: "Läs mer om oss",

    ctaEyebrow: "Kontakt",
    ctaHeading: "Redo för *rena* lokaler?",
  },

  servicesPage: {
    eyebrow: "Tjänster",
    title: "Lokalvård som passar *din verksamhet*",
    intro:
      "Kontorsstädning, trapphusstädning och lokalvård för företag, fastighetsägare och BRF:er i Göteborg.",
    quoteLabel: (service: string) => `Begär offert på ${service.toLowerCase()}`,
  },

  aboutPage: {
    eyebrow: "Om oss",
    title: `Göteborgs städfirma sedan *${grundat}*`,
    intro:
      "Jovos Transport AB är ett lokalvårdsbolag med säte i Göteborg. Vi hjälper företag, fastighetsägare, BRF:er och organisationer med kontorsstädning, fastighetsstädning och lokalvård.",
    values: [
      {
        icon: "handshake" as IconName,
        title: "Kollektivavtal",
        text: "Vi har kollektivavtal (Almega Serviceentreprenad). Det visar att vi är en seriös arbetsgivare med schyssta villkor.",
        style: "bg-brand text-white",
      },
      {
        icon: "badge" as IconName,
        title: "Lång erfarenhet",
        text: `Verksamma sedan ${grundat}. Över ${Math.floor(arsErfarenhet / 10) * 10} år i branschen ger stabilitet och trygghet för dig som kund.`,
        style: "bg-ink text-white",
      },
      {
        icon: "users" as IconName,
        title: "Ett stabilt team",
        text: "Vi är ca 12 anställda och har kapacitet för både mindre och större städuppdrag.",
        style: "bg-tint text-ink",
      },
    ],
    teamEyebrow: "Teamet",
    teamHeading: "Ledningen",
    factsEyebrow: "Fakta om företaget",
    facts: [
      { label: "Bransch", value: "Lokalvård & städservice" },
      { label: "Skatt", value: "Registrerad för F-skatt och moms" },
      { label: "Kollektivavtal", value: "Almega Serviceentreprenad" },
    ],
  },

  contactPage: {
    eyebrow: "Kontakt",
    title: "Hör av dig – vi *återkommer*",
    intro: "Skicka ett meddelande så svarar vi så snart vi kan.",
    formTitle: "Skicka ett meddelande",
    thanksTitle: "Tack för ditt meddelande",
    thanksText: "Vi återkommer så snart vi kan.",
  },

  quotePage: {
    eyebrow: "Offertförfrågan",
    title: "Berätta vad du behöver *hjälp med*",
    intro: "Ju mer du berättar, desto bättre underlag får vi till din offert. Offerten är fri.",
    types: ["Kontorsstädning", "Fastighetsstädning", "Lokalvård", "Annat"],
    placeholder:
      "Typ av lokal eller fastighet, antal våningar/trapphus, önskad frekvens, särskilda önskemål …",
    thanksTitle: "Din förfrågan är mottagen",
    thanksText: "Vi återkommer så snart vi kan.",
  },
};

export type Site = typeof site;
