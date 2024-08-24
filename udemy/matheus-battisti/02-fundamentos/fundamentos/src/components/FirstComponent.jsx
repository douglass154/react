import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <p className="paragrafo">Meu paragrafo</p>
            <MyComponent />
        </div>
    )
}

export default FirstComponent;