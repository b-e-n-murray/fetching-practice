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
  return (
    <>
      <div>
        <p>Character data</p>
      </div>
    </>
  );
}

export default Characters;
