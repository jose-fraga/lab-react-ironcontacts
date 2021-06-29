import logo from './logo.svg';
import './App.css';
import contacts from './contacts';
import React, { useState } from 'react';

function App() {
  let [list, setList] =  useState(contacts.splice(0,5));
  let [rest, setRest] =  useState(contacts);
  console.log(rest)

  function tableContent() {
    return list.map((contact, i) => {
      console.log(contact);
      return (
        <tr key={i}>
          <td>
          <img 
            src = {contact.pictureUrl} 
            style = {{ width: '6vw' }}
          >
          </img></td>
          <td><h5>{contact.name}</h5></td>
          <td><h5>{contact.popularity.toFixed(2)}</h5></td>
          <td><button onClick={() => deleteContact(i)}>Delete</button></td>
        </tr>
      );
    })
  }

  function deleteContact(i) {
    let newList = [...list];
    newList.splice(i, 1);
    setList(newList);
  }

  function randomContact() {
    let newRest = [...rest];
    let newList = [...list];
    let newContact = newRest[Math.floor(Math.random() * newRest.length)]
    newList.push(newContact);
    newRest.splice(newRest.indexOf(newContact), 1);
    setList(newList);
    setRest(newRest);
  }

  function sortByName() {
    let newList = [...list];
    newList.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
    setList(newList);
  }

  function sortByPopularity() {
    let newList = [...list];
    newList.sort((a, b) => b.popularity - a.popularity);
    setList(newList);
  }


  return (
    <div className="App">
      <div>
        <h2>IronContacts</h2>
      </div>

      <button onClick={randomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <tbody>
          <tr>
            <td><h3>Picture</h3></td>
            <td><h3>Name</h3></td>
            <td><h3>Popularity</h3></td>
          </tr>
          {tableContent()}
        </tbody>
      </table>

    </div>
  );
}

export default App;
