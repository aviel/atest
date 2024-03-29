var Button = ReactBootstrap.Button,
    CollapsibleMixin = ReactBootstrap.CollapsibleMixin;

var CollapsibleParagraph = React.createClass({
  mixins: [CollapsibleMixin],

  getCollapsibleDOMNode(){
    return React.findDOMNode(this.refs.panel);
  },

  getCollapsibleDimensionValue(){
    return React.findDOMNode(this.refs.panel).scrollHeight;
  },

  onHandleToggle(e){
    e.preventDefault();
    this.setState({expanded:!this.state.expanded});
  },

  render(){
    var cx = React.addons.classSet;
    var styles = this.getCollapsibleClassSet();
    var text = this.isExpanded() ? 'Hide' : 'Show';
    return (
      <div>
        <Button onClick={this.onHandleToggle}>{text} Content</Button>
        <div ref='panel' className={cx(styles)}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

var paragraph = (
  <CollapsibleParagraph>
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  </CollapsibleParagraph>
);

React.render(paragraph, document.body);
