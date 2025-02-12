import React from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({ title, children, isOpen, onToggle, id }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => onToggle(id)}>
        <h2>{title}</h2>
      </div>

      {isOpen && (
        <div className="accordion-body">
          <div className="accordion-content">{children}</div>
        </div>
      )}
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default AccordionItem;
