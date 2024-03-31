const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const parent1 = React.createElement("div", { id: "parent1" }, [
    React.createElement("div", { id: "child3" }, [
      React.createElement("h1", {}, "I'm h3 tag"),
      React.createElement("h2", {}, "I'm h3 tag"),
    ]),
    React.createElement("div", { id: "child4" }, [
      React.createElement("h1", {}, "I'm h4 tag"),
      React.createElement("h2", {}, "I'm h2 tag"),
    ]),
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([parent,parent1]);
