const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h3", {}, "I am an h3 tag"),
        React.createElement("h14", {}, "I am an h4 tag")
    ])
]);
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
