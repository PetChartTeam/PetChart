/**
 * ***********************************
 *
 * @module Vaccine
 * @author Austin Ruby
 * @date 10/13/2019
 * @description functional component that displays
 * one vaccine from the current activePet
 *
 * ***********************************
 */

import React from 'react';

const Vaccine = (props) => {
  const { vaccine } = props;

  return (
    <li className={`"vaccine-${vaccine.id}"`}>
      <p>{vaccine.date}</p>
      <p>{vaccine.name}</p>
    </li>
  );
};

export default Vaccine;
