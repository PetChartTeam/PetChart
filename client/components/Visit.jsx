/**
 * ***********************************
 *
 * @module Visit
 * @author Austin Ruby
 * @date 10/13/2019
 * @description functional component that displays
 * one visit from the current activePet
 *
 * ***********************************
 */

import React from 'react';

const Visit = (props) => {
  const { visit } = props;

  return (
    <li className={`"visit-${visit.id}"`}>
      <p>{visit.date}</p>
      {/* <p>{visit.vet}</p> not implemented in v1 */}
      <p>{visit.notes}</p>
    </li>
  );
};

export default Visit;
