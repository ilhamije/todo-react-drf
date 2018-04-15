import React from 'react';
import PropTypes from 'prop-types';

const ListItemDescription = ({ description }) => (
  <div className="panel-body">
    {description}
  </div>
);

ListItemDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ListItemDescription;
