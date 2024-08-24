const TemplateExpressions = () => {
    const name = 'Ricardo';
    const data = {
        age: 19,
        job: "Programmer",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job} com apenas {data.age} anos</p>
        </div>
    );
};

export default TemplateExpressions;
