import Link from "next/link";

interface IData {
    results: {
        id: string;
        name: string;
    }[]
}

const NoHookPage = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data: IData = await res.json();

    return (
        <div>
            <h1>Server side Page</h1>
            {data.results.map((item, index) => {
                return (
                    <div key={index}>
                        <br />
                        <h2>{item.name}</h2>
                        <Link href={`/perso/${item.id}`}>ABRIR</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default NoHookPage;