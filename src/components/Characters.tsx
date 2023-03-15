import axios from "axios";
import { useState } from "react";

interface CharData {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: string;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: { wood: string; core: string; length: string };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

function Characters(): JSX.Element {
  const [characters, setCharacters] = useState<CharData[]>([]);
  async function fetchAndStoreHPData() {
    try {
        const allRawHPData = await axios.get("https://hp-api.onrender.com/api/characters");
        console.log(allRawHPData)
        setCharacters(allRawHPData.data);
    } catch (error) {
        console.error("could not complete fetch")
    }
  }
  console.log(characters)
  return (
    <>
      <div>
        <p>Character data</p>
        <button onClick={fetchAndStoreHPData}>Get HP Info</button>
        <div>
            {characters.map((charData) => {
                return <div key={charData.id}>
                    <div>{charData.name}</div>
                    <img src={charData.image} alt={charData.name}></img>
                    <div>{charData.patronus}</div>
                    <div>{charData.wand.core + ", " + charData.wand.wood}</div>
                </div>
            })}
        </div>
      </div>
    </>
  );
}

export default Characters;
