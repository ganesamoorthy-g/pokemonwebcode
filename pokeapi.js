//To create two variables due to list contain 1000 of above data.
let limit = 50;
let offset = 0;

//id get from HTML
let pokemonDiv = document.getElementById("pokemon");

async function pokeapi() {
  try {
    let response1 = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    let response2 = await response1.json();
    // console.log(response2);

// using for of loop due to get the value from list of array
    for (var data of response2.results) {
      try {
        let response3 = await fetch(data.url);
        let response4 = await response3.json();

        // console.log(response4);


// to find the ability,weight,moves;

//craete the div tag and append the heading1 tag
        let creatediv = document.createElement("div");
        let heading1 = document.createElement("h3")
        heading1.innerText = `Pokemon Name: ${response4.name}`;
        heading1.style.textAlign="center";
        heading1.style.color="green";
        creatediv.appendChild(heading1);

//create the createabilities tag and append the creatediv tag
        let createabilities = document.createElement("h2");
        createabilities.innerText = "Abilities:";
        createabilities.style.background=" #68e6cf"
        creatediv.appendChild(createabilities);

/// using for of loop due to get the value from abiitieslist of array and append the creatediv
        let abilityList = document.createElement("ul");
        for (let ability of response4.abilities) {
          const abilityItem = document.createElement("li");
          abilityItem.innerText = ability.ability.name;
          abilityList.appendChild(abilityItem);
        }
        creatediv.appendChild(abilityList);

//create the createmoves tag and append the creatediv tag
        let createmoves = document.createElement("h3");
        createmoves.innerText = "Moves:";
        createmoves.style.background="grey";
        creatediv.appendChild(createmoves);

/// using for of loop due to get the value from movesList of array and append the creatediv
        const movesList = document.createElement("ul");
        for (const move of response4.moves) {
          const moveItem = document.createElement("li");
          moveItem.innerText = move.move.name;
          movesList.appendChild(moveItem);
        }
        creatediv.appendChild(movesList);

//create the createweight tag and append the creatediv tag
        const createweight = document.createElement("h5");
        createweight.innerText = `Weight: ${response4.weight}`;
        createweight.style.background="rgb(179, 117, 237)";
        creatediv.appendChild(createweight);

        creatediv.appendChild(document.createElement("hr"));

//finally append the pokemonDiv
        pokemonDiv.appendChild(creatediv);

      } catch (error) {
        console.error(`Failed to fetch pokemon data: ${error.message}`);
      }
    }
  } catch (error) {
    console.error(`Failed to fetch pokemon list: ${error.message}`);
  }
}

//and call the async function
pokeapi();
