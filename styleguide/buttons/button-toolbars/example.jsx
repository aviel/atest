var ButtonToolbar = ReactBootstrap.ButtonToolbar,
    ButtonGroup = ReactBootstrap.ButtonGroup,
    Button = ReactBootstrap.Button;

var buttonToolbar = (
  <ButtonToolbar>
    <ButtonGroup>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button>5</Button>
      <Button>6</Button>
      <Button>7</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button>8</Button>
    </ButtonGroup>
  </ButtonToolbar>
);

React.render(buttonToolbar, document.body);
