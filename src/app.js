// JSX - javascript xml
/*let app = {
    title:"Todo Desicions",
    subtitle:"things to focus on",
    options:["baseball","soccer","tennis","golf"],
};
let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length >0 ? "here are your options": "no options here"}</p>

        <ul>
            <li>Nairobi</li>
            <li>Malindi</li>
        </ul>
    </div>
);

//let appRoot1 = document.getElementById("app");

//ReactDOM.render(template, appRoot);

let count =0;
const addone = () => {
    console.log("addone");
};
const minusOne = () => {
    console.log("minusone");
};
const reset = () => {
    console.log("reset");
};

let templateTwo = (
    <div>
        <h1>Count :{count}</h1>
        <button onClick={addone}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
)
let appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);*/



let templateThree =(
   <div>
        <h1>Landscape</h1>

        <img src="https://thumbs.dreamstime.com/b/autumn-landscape-fall-
        scene-trees-leaves-sunlight-rays-foggy-forest-150905852.jpg"></img>
   </div>
);
let appRoot = document.getElementById("app");

ReactDOM.render(templateThree, appRoot);