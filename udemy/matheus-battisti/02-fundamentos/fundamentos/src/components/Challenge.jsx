const Challenge = () => {
    const x = 10;
    const y = 5;
    
    const handleResult = () => {
        console.log(`A soma dos números é ${x + y}`);
    }

    return (
        <div>
            <h2>Imprimindo valores criados no componente: {x} e {y}</h2>

            <h2>Clique no botão para ver a soma dos números</h2>
            <button onClick={handleResult}>
                Mostras resultado no console
            </button>
        </div>
    )
};

export default Challenge;
