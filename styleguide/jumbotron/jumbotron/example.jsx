var Jumbotron = ReactBootstrap.Jumbotron,
    Button = ReactBootstrap.Button;

var jumbotron = (
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle='primary'>Learn more</Button></p>
  </Jumbotron>
);

React.render(jumbotron, document.body);
