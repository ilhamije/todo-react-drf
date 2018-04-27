import React, { Component } from "react";
import PropTypes from 'prop-types';
import ListItemDescription from './ListItemDescription';
import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

class ListItem extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const { removeListItem } = this.props;
    const listItemId = this.props.item.id;
    console.log('listItemId: ',listItemId);

    const URL = "http://localhost:8000/api/"+listItemId+"/";
    axios.delete(URL)
    .then(res => {
      removeListItem(listItemId);
      console.log(res);
      console.log(res.data);
    });
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
