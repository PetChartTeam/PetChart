/**
 * ***********************************
 *
 * @module Profile
 * @author Austin Ruby and Michael Evans
 * @date 10/12/2019
 * @description functional component that displays
 * a specific pet's profile info and allows the user
 * to modify that information
 *
 * ***********************************
 */

import React from 'react';

import Visit from './Visit.jsx';
import Vaccine from './Vaccine.jsx';
import Surgery from './Surgery.jsx';

const Profile = (props) => {
  console.log(props.activePet);

  const { activePet } = props;

  const visitsListItems = [];
  const vaccinesListItems = [];
  const surgeriesListItems = [];

  // generate arrays of Visit, Vaccine, and Surgery components
  for (let i = 0; i < 5; i += 1) {
    if (activePet.visits[i]) {
      visitsListItems.push(<Visit visit={activePet.visits[i]} key={`visit-${i}`} />);
    }
    if (activePet.vaccines[i]) {
      vaccinesListItems.push(<Vaccine vaccine={activePet.vaccines[i]} key={`vaccine-${i}`} />);
    }
    if (activePet.surgeries[i]) {
      surgeriesListItems.push(<Surgery surgery={activePet.surgeries[i]} key={`surgery-${i}`} />);
    }
  }

  // grab visit details from form and dispatch savePet action with them
  function addVisit(event) {
    event.preventDefault();
    const form = document.querySelector('.visit-form');
    const date = form.date.value;
    const notes = form.notes.value;
    const vet = form.vet.value;
    const file = form.file.value;
    const petProfile = {
      id: activePet.id,
      date,
      notes,
      vet,
      file,
    };
    return props.savePet(petProfile);
  }

  // grab vaccine details from form and dispatch savePet action with them
  function addVaccine(event) {
    event.preventDefault();
    const form = document.querySelector('.vaccine-form');
    const date = form.date.value;
    const name = form.name.value;
    const petProfile = {
      id: activePet.id,
      date,
      name,
    };
    return props.savePet(petProfile);
  }

  // grab surgery details from form and dispatch savePet action with them
  function addSurgery(event) {
    event.preventDefault();
    const form = document.querySelector('.surgery-form');
    const date = form.date.value;
    const name = form.name.value;
    const petProfile = {
      id: activePet.id,
      date,
      name,
    };
    return props.savePet(petProfile);
  }

  return (
    <div className="profile-container">
      <section className="profile-header">
        <div className="img-name">
          <img src={`"${activePet.profilePic}"`} alt="pet profile pic" />
          <h1>{activePet.name}</h1>
        </div>
        <ul className="pet-profile-details">
          <li>
            Born:
            {' '}
            {activePet.birth_year}
          </li>
          <li>
            Gender:
            {' '}
            {activePet.gender}
          </li>
          <li>
            Neutered:
            {' '}
            {activePet.spayed.toString()}
          </li>
        </ul>
      </section>
      <section className="profile-body">
        <div className="visits-container">
          <h3>Visits</h3>
          <form className="visit-form">
            Add a visit
            {' '}
            <br />
            <label>
              Date:
              <input type="text" name="date" id="visit-date-input" />
            </label>
            <label>
              Notes:
              <input type="text" name="notes" id="visit-notes-input" />
            </label>
            <label>
              Vet:
              <input type="text" name="vet" id="visit-vet-input" />
            </label>
            <label>
              Upload a file:
              <input type="text" name="file" id="visit-file-input" />
            </label>
            <input type="submit" value="Save Visit" onClick={addVisit} />
          </form>
          <ul className="visits">
            {visitsListItems}
          </ul>
          <div className="vaccines-surgeries">
            <div className="vaccines-container">
              <h3>Vaccines</h3>
              <form className="vaccine-form">
                Add a vaccine
                {' '}
                <br />
                <label>
                  Date:
                  <input type="text" name="date" id="vaccine-date-input" />
                </label>
                <label>
                  Name:
                  <input type="text" name="name" id="vaccine-name-input" />
                </label>
                <input type="submit" value="Save Vaccine" onClick={addVaccine} />
              </form>
              <ul className="vaccines-list">
                {vaccinesListItems}
              </ul>
            </div>
            <div className="surgeries-container">
              <h3>Surgeries</h3>
              <form className="surgery-form">
                Add a surgery
                {' '}
                <br />
                <label>
                  Date:
                  <input type="text" name="date" id="surgery-date-input" />
                </label>
                <label>
                  Name:
                  <input type="text" name="name" id="surgery-name-input" />
                </label>
                <input type="submit" value="Save Surgery" onClick={addSurgery} />
              </form>
              <ul className="surgeries-list">
                {surgeriesListItems}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <button type="button" onClick={() => props.changeDBPage('home')}>Home</button>
      <button type="button" onClick={() => props.savePet(props.pet)}>Save Pet</button>
    </div>
  );
};

export default Profile;
