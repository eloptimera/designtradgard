import {
  ArrowUpRight,
  BadgeCheck,
  Building,
  BuildingComplex,
  Check,
  ClipboardCheck,
  Clock,
  Handshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Users,
  X,
} from "@lucide/astro";

/** Ikoner som går att välja i src/site.config.ts. Lägg till fler här vid behov. */
export const icons = {
  arrowUpRight: ArrowUpRight,
  badge: BadgeCheck,
  building2: Building,
  building: BuildingComplex,
  check: Check,
  clipboard: ClipboardCheck,
  clock: Clock,
  handshake: Handshake,
  mail: Mail,
  pin: MapPin,
  menu: Menu,
  phone: Phone,
  users: Users,
  x: X,
} as const;

export type IconName = keyof typeof icons;
