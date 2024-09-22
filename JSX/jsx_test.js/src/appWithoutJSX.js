const roothElement = document.getElementById('root');
const rootReactElement = ReactDOM.createRoot(roothElement);

const headElement = React.createElement('h1', null, 'Dynamic Heading');
const headSecondElement = React.createElement('h2', null, 'JSX Second Title');


const headingSectionElement = React.createElement(
  'header',
  null,
  headElement,
  headSecondElement
);
rootReactElement.render(headingSectionElement);
