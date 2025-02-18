export function VariableComponent() {
    const name = "Leonardo";
    const age = 25;

    return (
        <div>
            <h2>Informacion del Usuario</h2>
            <p>Nombre: {name}</p>
            <p>Edad: {age}</p>
        </div>
    );
}
