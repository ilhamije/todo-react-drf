import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import uuid from 'uuid/v4';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

const styleRequired = {
  color: "#ffaaaa"
};

class AddListItem extends Component {
  handleSubmitEvent = event => {
    event.preventDefault();

    const item = {
      id: uuid.v4(),
      title: this.listItemTitle.value.trim(),
      description: this.listItemDescription.value.trim(),
    };

    // console.log(item);
    axios
      .post("http://localhost:8000/api/", item)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.addListItem(item);
      })
      .catch(err => {
        console.log("Post error", err.response);
      });

    // const item = {
    //   // id: uuid.v4(),
    //   title: this.listItemTitle.value.trim(),
    //   description: this.ListItemDescription.value.trim(),
    // };

    // this.props.addListItem(item);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitEvent}>
        <h3 className="page-header">Add new item</h3>

        <div className="form-group">
          <label htmlFor="listItemTitle">
            Title <span style={styleRequired}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="listItemTitle"
            placeholder="Enter title"
            required
            ref={input => this.listItemTitle = input}
          />
        </div>

        <div className="form-group">
          <label htmlFor="listItemDescription">
            Description <span style={styleRequired}>*</span>
          </label>
          <textarea
            className="form-control"
            rows="3"
            id="listItemDescription"
            placeholder="Enter desc"
            ref={input => this.listItemDescription = input}
          />
        </div>

        <hr />
        <button type="submit" className="btn btn-primary">
          Add to list
        </button>
        <button type="reset" className="btn btn-link">
          Cancel
        </button>
      </form>
    );
  }
}

AddListItem.propTypes = {
  addListItem: PropTypes.func.isRequired
};

export default AddListItem;
