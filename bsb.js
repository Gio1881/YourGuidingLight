// Berean Standard Bible (BSB) data + access layer for Still Waters.
// The BSB text is dedicated to the PUBLIC DOMAIN by the Berean Bible Translation
// Committee. Scripture wording is never generated or paraphrased — full chapters
// are fetched from the Free Use Bible API (bible.helloao.org, CORS-enabled, no key)
// and cached locally. A small set of exact daily verses is seeded so the Daily
// Scripture card and reader fallback always show real BSB wording, even offline.
//
// TO UPDATE / SELF-HOST THE FULL TEXT (production integration point):
//   Source:  https://bereanbible.com/  (Text / XLSX / USFM / USX)  — imported <date>
//   Or API:  https://bible.helloao.org/api/BSB/{BOOK}/{chapter}.json
//   Replace API_BASE below, or drop a /data/bible/bsb.json and read from it.

export const BSB_INFO = {
  id: 'BSB',
  name: 'Berean Standard Bible',
  short: 'BSB',
  language: 'English',
  label: 'Berean Standard Bible · BSB',
  attribution: 'Scripture quotations marked BSB are taken from the Holy Bible, Berean Standard Bible. The Berean Standard Bible text has been dedicated to the public domain.',
  footer: 'Scripture quotations marked BSB are from the Berean Standard Bible, a public-domain Bible translation.',
  learnMore: 'https://berean.bible/'
};