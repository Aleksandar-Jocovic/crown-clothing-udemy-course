import React from 'react';
import SingIn from '../../components/sing-in/SingIn'
import SingUp from '../../components/sing-up/SingUp'


import './sing-in-and-sing-up.styles.scss';

const SingInAndSingUp = () => (
  <div className="sing-in-and-sing-up">
    <SingIn />
    <SingUp />
  </div>

)

export default SingInAndSingUp;