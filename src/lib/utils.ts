export const CONTACT = {
  whatsapp: "0768359818",
  phones: ["0756137010", "0707455964", "0702591816"],
  location: "Ntinda–Kisaasi Rd",
};

export const SOCIALS = {
  instagram: "https://instagram.com/selah.s_dry_cleaners",
  facebook: "https://www.facebook.com/search/top?q=Mugwanya%20Osbert%20Kunobwa",
};

export function makeOrderId() {
  const n = Math.floor(10000 + Math.random() * 89999);
  return `SLH-${n}`;
}
