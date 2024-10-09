"use client"

import { useEffect, useState } from "react"

interface IData {
  id: number;
  name: string;
  status: string;
}

export default function Home() {
  const [characters, setCharacters] = useState<IData[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      console.log(data);
      setCharacters(data.results)
    };
    load();
  }, [])

  return (
    <div>
      <h1>Requisição com fetch cliente</h1>

      {characters.map((item, index) => {
        return (
          <div key={index}>
            <br />
            <h5>{item.id}</h5>
            <h2>{item.name}</h2>
            <h2>{item.status}</h2>
          </div>
        )
      })}

    </div>
  )
}