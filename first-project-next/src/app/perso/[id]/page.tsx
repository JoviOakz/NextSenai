import Image from "next/image";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    id: string;
    name: string;
    status: string;
    species: string;
    image: string;
}

interface IDataStaticIndex {
    results: IData[];
}

const Perso = async ({ params: {id} } : IPerso) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data: IData = await res.json();

    return (
        <div>
            <h1>{data.id}</h1>
            <h2>{data.name}</h2>
            <h3>{data.status}</h3>
            <h3>{data.species}</h3>
            <Image src={data.image} alt="Imagens da API" width={300} height={300} priority={true} />
        </div>
    )
}

export default Perso;

export async function generateStaticParams() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data: IDataStaticIndex = await res.json();
    
    return data.results.map((item) => item.id.toString());
}