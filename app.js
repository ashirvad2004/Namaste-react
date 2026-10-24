const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",
        {id:"child"},
        [React.createElement("h1",
            {},"hellllllllllloooooooooo"
        ),React.createElement("h2",
            {},"hellllllllllloooooooooo"
        )]
    )
);
const Root=ReactDOM.createRoot(document.getElementById("root"))
Root.render(parent)