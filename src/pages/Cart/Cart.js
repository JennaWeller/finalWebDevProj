import React from 'react';
import { InfoSection } from '../../components';
import {  homeObjTwo } from './Data';

function Cart() {
  return (
    <>
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Cart;