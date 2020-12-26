import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ sections }) => {

  return (
    <div className="directory-menu">
      {sections.map(({id, ...otherSectionProsp }) => (
        <MenuItem key={id} {...otherSectionProsp } />
      ))}
    </div>
  )
}


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);