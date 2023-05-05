const navLinksDesktop = [
  { page: "Home", link: "/", id: 0 },
  {
    page: "About",
    id: 1,
    children: [
      { page: "BIO", link: "/bio", id: 2 },
      { page: "DISCOGRAPHY", link: "/discography", id: 3 },
    ],
  },
  {
    page: "Media",
    id: 4,
    children: [
      { page: "VIDEOS", link: "/videos", id: 5 },
      { page: "PICTURES", link: "/pictures", id: 6 },
      {
        page: "EPK",
        link: "https://acrobat.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Aaa557c3a-3b8c-3b52-b294-f9c70aaa92d1&viewer%21megaVerb=group-discover",
        id: 7,
      },
    ],
  },
  { page: "CALENDAR", link: "/calendar", id: 8 },
  { page: "CONTACT", link: "/contact", id: 9 },
];

export default navLinksDesktop;
