// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

/* 
<div id=parent>
    <div id=child>
        <h1></h1>
    </div>
</div>
*/
const heading1 = React.createElement("h1", { id: "heading1" }, "Heading1");
const heading2 = React.createElement("h1", { id: "heading2" }, "Heading2");
const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);

console.log("parent >>>> ", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
