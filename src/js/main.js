"use strict";
//Constantes y variables

const DisneyList = document.querySelector(".js__DisneyList");
const DisneyCharacterObj = {
  _id: 112,
  films: ["Hercules (film)"],
  shortFilms: [],
  tvShows: ["Hercules (TV series)"],
  videoGames: ["Kingdom Hearts III"],
  parkAttractions: [],
  allies: [],
  enemies: [],
  sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
  name: "Achilles",
  imageUrl:
    "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
  createdAt: "2021-04-12T01:31:30.547Z",
  updatedAt: "2021-12-20T20:39:18.033Z",
  url: "https://api.disneyapi.dev/characters/112",
  __v: 0,
};

DisneyList.innerHTML = `
    <li class = "DisneyItem">
        <h3>${DisneyCharacterObj.name}</h3>
        <div class = "DisneyCharacterCard">
            <img>${DisneyCharacterObj.imageUrl}</img>
            <p>${DisneyCharacterObj.films}
        </div>
    </li>`;

console.log(">> Ready :)");