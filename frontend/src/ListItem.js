import React, { Component } from "react";
import PropTypes from 'prop-types';
import ListItemDescription from './ListItemDescription';

class ListItem extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const { removeListItem } = this.props;
    const listItemId = this.props.item.id;

    removeListItem(listItemId);
  }

  render() {
    const { item } = this.props;

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          {/* {`${item.quantity} x ${item.name}`} */}
          {item.title}
        </div>

        <ListItemDescription description={item.description} />

        <div className="panel-footer">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <button type="submit" className="btn btn-default btn-xs">Remove</button>
          </form>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeListItem: PropTypes.func.isRequired,
};


export default ListItem;
