const films = [
  {
    id: 1,
    title: "SWAN AND SAVA",
    description: "Windowić 1/31. We’ll be in town for a month, opening a little Windowić to Belgrade every day. We’re starting with a memory – SWAN AND SAVA – and can’t wait to arrive tomorrow.",
    video: "assets/videos/01.mp4",
    poster: "assets/posters/01.jpg",
    instagram: "https://www.instagram.com/p/DaaCrtEB_qOqfT-BHP9ry4pbJK6PlSVZbrQAI00/",
    box: [14.2, 26.7, 4.0, 8.2]
  },
  {
    id: 2,
    title: "TISCH",
    description: "Windowić 2/31. Arrival on Nehruova Street, Belgrade.",
    video: "assets/videos/02.mp4",
    poster: "assets/posters/02.jpg",
    instagram: "https://www.instagram.com/p/Dad-CHDBKVZkF691IdHdK_NMWBVFadB9EXm_MU0/",
    box: [36.0, 37.3, 4.1, 8.5]
  },
  {
    id: 3,
    title: "FIVE A.M.",
    description: "Windowić 3/31. View from the balcony.",
    video: "assets/videos/03.mp4",
    poster: "assets/posters/03.jpg",
    instagram: "https://www.instagram.com/p/DafX7dmBQnFQBfMwjYd_PkpoPB58bK5iqDwt940/",
    box: [51.2, 49.0, 3.8, 7.7]
  },
  {
    id: 4,
    title: "JURIJA GAGARINA",
    description: "Windowić 4/31. The main boulevard through New Belgrade. Trams are not running due to infrastructure works. The city is replacing them with buses.",
    video: "assets/videos/04.mp4",
    poster: "assets/posters/04.jpg",
    instagram: "",
    box: [70.6, 58.0, 4.1, 8.0]
  },
  {
    id: 5,
    title: "FEET",
    description: "Windowić 5/31. On the balcony, listening to crows.",
    video: "assets/videos/05.mp4",
    poster: "assets/posters/05.jpg",
    instagram: "https://www.instagram.com/p/DalbCnLBFpBijW9cU0PpcTk8eedfNEDGSRdyyY0/",
    box: [27.4, 72.2, 4.0, 8.1]
  },
  {
    id: 6,
    title: "BASKET",
    description: "Windowić 6/31. Outside our house in Block 44 in New Belgrade.",
    video: "assets/videos/06.mp4",
    poster: "assets/posters/06.jpg",
    instagram: "https://www.instagram.com/p/DaoKf-ah9fIzirI94SZhklRDAygez4sxG_X9540/",
    box: [83.0, 31.0, 4.0, 8.0]
  },
  {
    id: 7,
    title: "MTS",
    description: "Windowić 7/31. We get our e-SIM cards at MTS in Delta City. Mobilna telefonija Srbije – and a kiss.",
    video: "assets/videos/07.mp4",
    poster: "assets/posters/07.jpg",
    instagram: "",
    box: [59.8, 69.5, 4.0, 8.0]
  }  ,{
    id: 8,
    title: "PORT",
    description: "Windowić 8/31. Saturday night at the Port Food Market at Luka Beograd.",
    video: "assets/videos/08.mp4",
    poster: "assets/posters/08.jpg",
    instagram: "https://www.instagram.com/p/DasNjmbhFW1OQd93vQj0pJUDadchia-inQ2RnI0/",
    box: [45.0, 25.0, 4.0, 8.0]
  }

,
  {
    id: 9,
    title: "BUS",
    description: "Windowić 9/31. Grannies. And buses. And blokovi.",
    video: "assets/videos/09.mp4",
    poster: "assets/posters/09.jpg",
    instagram: "https://www.instagram.com/p/Dav8IoohACOlxQFTLFDUtFwD4eratB9DMv2sPY0/",
    box: [11.0, 48.0, 4.0, 8.0]
  },
  {
    id: 10,
    title: "GENEX",
    description: "Windowić 10/31. The Genex Tower, also known as Belgrade's Western Gate, is a landmark of Brutalist architecture.",
    video: "assets/videos/10.mp4",
    poster: "assets/posters/10.jpg",
    instagram: "https://www.instagram.com/p/Daxr_PKB-KOf24eqvTfj8LFbk5__Wwdz-uxGNI0/",
    box: [44.0, 34.0, 4.0, 8.0]
  },
  {
    id: 11,
    title: "DRINK",
    description: "Windowić 11/31. Cafebar Coco on the Sava.",
    video: "assets/videos/11.mp4",
    poster: "assets/posters/11.jpg",
    instagram: "https://www.instagram.com/p/Da0uK0uBnZKRlehf-FBiM88vpEVf3PGc2C79Bk0/",
    box: [73.0, 70.0, 4.0, 8.0]
  },
  {
    id: 12,
    title: "KOKICE",
    description: "Windowić 12/31. Popcorn – Kokice – on the Sava Promenada.",
    video: "assets/videos/12.mp4",
    poster: "assets/posters/12.jpg",
    instagram: "https://www.instagram.com/p/Da2b_jRBdQAyWovrU-JmcffGnxNVT-rQY926w40/",
    box: [88.0, 47.0, 4.0, 8.0]
  },
{
  id: 13,
  title: "GYM",
  description: "Windowić 13/31. Outdoor Gym at Sava Promenada.",
  video: "assets/videos/13.mp4",
  poster: "assets/posters/13.jpg",
  instagram: "https://www.instagram.com/p/Da5N-7cBImhv71Cj_wi5T64QdyJykEntdUfBwQ0/",
  box: [18.0, 82.0, 4.0, 8.0]
},
{
  id: 14,
  title: "PIJACA",
  description: "Windowić 14/31. Lara at the green market in Block 44, New Belgrade.",
  video: "assets/videos/14.mp4",
  poster: "assets/posters/14.jpg",
  instagram: "https://www.instagram.com/p/Da76N1jBouB6pcPG0b7sWXrRi2qqrdRbF6TV1c0/",
  box: [39.0, 79.0, 4.0, 8.0]
},
{
  id: 15,
  title: "MOSKVA",
  description: "Windowić 15/31. Hotel Moskva, Belgrade.",
  video: "assets/videos/15.mp4",
  poster: "assets/posters/15.jpg",
  instagram: "https://www.instagram.com/p/Da-df2ChbY5J0XB877qQpIMasMTj3UmZhTuk-w0/",
  box: [64.0, 58.0, 4.0, 8.0]
},
{
  id: 16,
  title: "KRAFTWERK",
  description: "Windowić 16/31. Kraftwerk concert at Luka Beograd.",
  video: "assets/videos/16.mp4",
  poster: "assets/posters/16.jpg",
  instagram: "https://www.instagram.com/p/DbBXwKOho6e8XDMzTcKlVddW3gdITkvl2ibo9Q0/",
  box: [52.0, 65.0, 4.0, 8.0]
},
{
  id: 17,
  title: "TRAKTOR",
  description: "Windowić 17/31. Tractor with mower on the Sava promenade.",
  video: "assets/videos/17.mp4",
  poster: "assets/posters/17.jpg",
  instagram: "https://www.instagram.com/p/DbDvCAOB_p4Szh5JuOnZtokpmY84xeDMV6YTaQ0/",
  box: [31.0, 67.0, 4.0, 8.0]
},
{
  id: 18,
  title: "ŠLEPER",
  description: "Windowić 18/31. A cargo ship on the Sava.",
  video: "assets/videos/18.mp4",
  poster: "assets/posters/18.jpg",
  instagram: "https://www.instagram.com/p/DbFYayuBrxPd1V5zWjxhUdpXPu2RBjiZfF5k1M0/",
  box: [81.0, 60.0, 4.0, 8.0]
},
{
  id: 19,
  title: "MOLERI",
  description: "Windowić 19/31. Painters - moleri - at work: renovating the terrace.",
  video: "assets/videos/19.mp4",
  poster: "assets/posters/19.jpg",
  instagram: "https://www.instagram.com/p/DbIOdewhjaLMpsvaB18h32c3s8czDzttsl924c0/",
  box: [22.0, 56.0, 4.0, 8.0]
},
{
  id: 20,
  title: "GRADILIŠTE",
  description: "Windowić 20/31. Belgrade is growing: Construction site - gradilište - behind the Eurasia Trade Center, Block 72.",
  video: "assets/videos/20.mp4",
  poster: "assets/posters/20.jpg",
  instagram: "https://www.instagram.com/p/DbKwjp3htGUt_dcs5zACRj9HLv5CLVT_T_eya40/",
  box: [70.0, 43.0, 4.0, 8.0]
},
{
  id: 21,
  title: "LUKA",
  description: "Windowić 21/31. Luka Beograd - Port of Belgrade.",
  video: "assets/videos/21.mp4",
  poster: "assets/posters/21.jpg",
  instagram: "https://www.instagram.com/p/DbNbjOGB5Calk8BzdgWfqIshd8qegqOpAEeC3w0/",
  box: [47.0, 52.0, 4.0, 8.0]
},
{
  id: 22,
  title: "DOM ZDRAVLJA",
  description: "Windowić 22/31. Behind the health center in Block 44, on the way to the market.",
  video: "assets/videos/22.mp4",
  poster: "assets/posters/22.jpg",
  instagram: "https://www.instagram.com/p/DbRFCuUh7YqukkAl3xTbcOIcr6hUu8yaentsbY0/",
  box: [58.0, 49.0, 4.0, 8.0]
},
{
  id: 23,
  title: "POOL",
  description: "Windowić 23/31. In the pool with relatives at their vikendica.",
  video: "assets/videos/23.mp4",
  poster: "assets/posters/23.jpg",
  instagram: "https://www.instagram.com/p/DbS8EiAB7RGK5E7yirO5revEuSH5_2vBLT8R040/",
  box: [76.0, 72.0, 4.0, 8.0]
},
{
  id: 24,
  title: "VOJVODINA",
  description: "Windowić 24/31. On the motorway towards Krčedin.",
  video: "assets/videos/24.mp4",
  poster: "assets/posters/24.jpg",
  instagram: "https://www.instagram.com/p/DbVV6sIhgh0aMQihpRIidPS9ZCQsVoL4djZRjQ0/",
  box: [14.0, 49.0, 4.0, 8.0]
},
{
  id: 25,
  title: "A FRIEND",
  description: "Windowić 25/31. A friend is visiting.",
  video: "assets/videos/25.mp4",
  poster: "assets/posters/25.jpg",
  instagram: "https://www.instagram.com/p/DbYFZgSBDwPb7gGD1mEOuKkcAek_ikoo7hYsgA0/",
  box: [86.0, 47.0, 4.0, 8.0]
},
{
  id: 26,
  title: "SONNE",
  description: "Windowić 26/31. Sunset at Belgrade Waterfront.",
  video: "assets/videos/26.mp4",
  poster: "assets/posters/26.jpg",
  instagram: "https://www.instagram.com/p/Dbab2L4BhS3MzvY0vtlBXDpR9xxbIIiRNrbLZU0/",
  box: [43.0, 74.0, 4.0, 8.0]
},
{
  id: 27,
  title: "STILL IN BELGRADE",
  description: "Windowić 27/31. Two friends who run the website stillinbelgrade.com, at the Istok restaurant in the Dorćol district. Full calendar: link in bio - or on stillinbelgrade.com.",
  video: "assets/videos/27.mp4",
  poster: "assets/posters/27.jpg",
  instagram: "https://www.instagram.com/p/DbdfF_2BiPx7ZPBgFhqFqZSX0M8Z0aUCUxbObU0/",
  box: [67.0, 72.0, 4.0, 8.0]
},
{
  id: 28,
  title: "WINDOWIĆ",
  description: "Windowić 28/31. A guest post by Marcel Zaes, media artist in Vienna.",
  video: "assets/videos/28.mp4",
  poster: "assets/posters/28.jpg",
  instagram: "https://www.instagram.com/p/DbgzTt5Bp999zni8oXhC7aBPAjCiywl7hKnCcs0/",
  box: [28.0, 44.0, 4.0, 8.0]
},
{
  id: 29,
  title: "FEST",
  description: "Windowić 29/31. Party on August 2nd with relatives and friends.",
  video: "assets/videos/29.mp4",
  poster: "assets/posters/29.jpg",
  instagram: "https://www.instagram.com/p/DblatxfBvSz2eqOPNXfdGPzFIHGtnIUvJ2FOkw0/",
  box: [8.0, 66.0, 4.0, 8.0]
}
];

const hotspots = document.querySelector("#hotspots");
const viewer = document.querySelector("#viewer");
const player = document.querySelector("#player");
const number = document.querySelector("#windowNumber");
const title = document.querySelector("#filmTitle");
const description = document.querySelector("#filmDescription");
const instagram = document.querySelector("#instagramLink");

films.forEach((film) => {
  const button = document.createElement("button");
  button.className = "windowic";
  button.type = "button";
  button.dataset.number = String(film.id).padStart(2, "0");
  button.dataset.title = film.title;
  button.setAttribute("aria-label", `Open Windowić ${film.id}: ${film.title}`);

  const [left, top, width, height] = film.box;
  Object.assign(button.style, {
    left: `${left}%`,
    top: `${top}%`,
    width: `${width}%`,
    height: `${height}%`
  });

  button.addEventListener("click", () => openFilm(film));
  hotspots.appendChild(button);
});

function openFilm(film) {
  player.src = film.video;
  player.poster = film.poster;
  number.textContent = `Windowić ${film.id}/31`;
  title.textContent = film.title;
  description.textContent = film.description;

  if (film.instagram) {
    instagram.href = film.instagram;
    instagram.hidden = false;
  } else {
    instagram.hidden = true;
  }

  viewer.showModal();
  player.play().catch(() => {});
}

function closeViewer() {
  player.pause();
  player.removeAttribute("src");
  player.load();
  viewer.close();
}

document.querySelector(".close").addEventListener("click", closeViewer);
viewer.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeViewer();
});
viewer.addEventListener("click", (event) => {
  if (event.target === viewer) closeViewer();
});
