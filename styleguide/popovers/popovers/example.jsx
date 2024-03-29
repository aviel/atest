var OverlayTrigger = ReactBootstrap.OverlayTrigger,
    Button = ReactBootstrap.Button,
    Popover = ReactBootstrap.Popover;

var buttonWithPopover = (
  <OverlayTrigger [[triggerAttrs]] placement='[[placement]]' overlay={<Popover title='Popover [[placement]]'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
    <Button bsStyle='default'>Holy guacamole!</Button>
  </OverlayTrigger>
);

React.render(buttonWithPopover, document.body);
