var PanelGroup = ReactBootstrap.PanelGroup,
    Panel = ReactBootstrap.Panel;

var panelGroup = (
  <PanelGroup defaultActiveKey='2' accordion>
    <Panel header='Panel 1' eventKey='1'>Panel 1 content</Panel>
    <Panel header='Panel 2' eventKey='2'>Panel 2 content</Panel>
  </PanelGroup>
);

React.render(panelGroup, document.body);
