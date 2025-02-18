import airports from "./airports.json";

export function Airports() {
    return (
        <div>
            <h2> Lista de Aeropuertos</h2>
            <ul>
                {airports.map((airport) => (
                    <li key={airport.id}>
                        {airport.name} ({airport.code})
                    </li>
                ))}
            </ul>
        </div>
    );
}