const roothElement = document.getElementById('root');
const rootReactElement = ReactDOM.createRoot(roothElement);

const headElement = <h1>Dynamic Heading</h1>;
const headSecondElement = <h2>JSX Second Title</h2>;
const par = <p></p>

const headingSectionElement = React.createElement(
  'header',
  null,
  headElement,
  headSecondElement
);
rootReactElement.render(headingSectionElement);
