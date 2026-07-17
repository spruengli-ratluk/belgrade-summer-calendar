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
  box: [58.0, 77.0, 4.0, 8.0]
}];

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
