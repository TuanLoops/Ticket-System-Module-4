import React from 'react';
import High from './High';
import Medium from './Medium';

const Priority = ({value}) => {
    if (value == 1) {
      return <High />;
    } else if (value == 2) {
      return <Medium />;
    }
};

export default Priority;