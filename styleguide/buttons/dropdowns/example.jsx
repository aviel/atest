var DropdownButton = ReactBootstrap.DropdownButton,
    MenuItem = ReactBootstrap.MenuItem;

var button = (
  <DropdownButton [[buttonAttrs]]>
    <MenuItem eventKey='1'>Action</MenuItem>
    <MenuItem eventKey='2'>Another action</MenuItem>
    <MenuItem eventKey='3' active={true}>Active Item</MenuItem>
    <MenuItem eventKey='4' disabled>Disabled Item</MenuItem>
    <MenuItem divider />
    <MenuItem header>Header</MenuItem>
    <MenuItem eventKey='5'>Separated link</MenuItem>
  </DropdownButton>
);

React.render(button, document.body);
