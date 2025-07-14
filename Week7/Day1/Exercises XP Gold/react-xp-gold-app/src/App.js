
import React from "react";
import BootstrapCard from "./BootstrapCard";

/* ===== Exercise 1 — fictive characters ===== */
const fictiveCharacters = [
  {
    title: "Bob Dylan",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Joan_Baez_Bob_Dylan_crop.jpg/500px-Joan_Baez_Bob_Dylan_crop.jpg",
    buttonLabel: "Go To Wikipedia",
    buttonUrl: "#aeliana-story",
    description:
      "Bob Dylan [bɑb ˈdɪlən], est un auteur-compositeur-interprète, musicien, peintre, sculpteur, cinéaste et poète américain, né le 24 mai 1941 à Duluth, dans le Minnesota. ",
  },
  {
    title: "Paul McCartney",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Paul_McCartney_2021_%28cropped%29.jpg/500px-Paul_McCartney_2021_%28cropped%29.jpg",
    buttonLabel: "Go To Wikipedia",
    buttonUrl: "#dorian-profile",
    description:
      "Paul McCartney (prononcé en anglais : [pɔːl məˈkɑː(ɹ)tni])[n 1], né le 18 juin 1942 à Liverpool, est un auteur-compositeur-interprète et multi-instrumentiste britannique, jouant aussi bien de la basse et de la contrebasse, de la guitare et du piano, que de la batterie et des percussions.",
  },
];

/* ===== Exercise 2 — planets list ===== */
const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

export default function App() {
  return (
    <div className="d-flex flex-column align-items-center">
      {/* Exercise 1: render two Bootstrap cards */}
      {fictiveCharacters.map((char, idx) => (
        <BootstrapCard key={idx} {...char} />
      ))}

      {/* Exercise 2: Bootstrap list-group planets */}
      <ul className="list-group w-50 mb-5">
        {planets.map((planet) => (
          <li key={planet} className="list-group-item text-center">
            {planet}
          </li>
        ))}
      </ul>
    </div>
  );
}
