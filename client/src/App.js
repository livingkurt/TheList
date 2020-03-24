import React, { useState, useEffect } from 'react';
import './App.css';
import Background from './components/Background/Background';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Header from './components/Header/Header';
import ListItem from './components/ListItem/ListItem';
import ScrollContainer from './components/ScrollContainer/ScrollContainer.js';
import Title from './components/Title/Title';
import TextField from './components/TextField/TextField';
import TitleField from './components/TitleField/TitleField';
import AddButton from './components/AddButton/AddButton';
import API from "./utils/API";

const App = () => {
  const [master_todo_state, set_master_todo_state] = useState([])
  const [todo_dump_state, set_todo_dump_state] = useState([])
  const [note_state, set_note_state] = useState({
    title: "",
    body: "",
  })
  console.log(note_state)

  useEffect(() => {
    get_notes();
  }, []);

  const get_notes = () => {
    API.get_notes()
      .then(res => {
        console.log(res)
        // set_todo_dump_state(res.data)
      })
      .catch(err => console.log(err));
  };

  const new_note = () => {
    console.log(note_state)
    API.post_note(note_state)
      .then(res => {
        set_note_state({
          title: "",
          body: "",
        })
      })
      .catch(err => console.log(err));
  }
  const new_todo_dump = () => {
    console.log(note_state)
    set_todo_dump_state()

  }
  const new_todo_master = () => {
    console.log(note_state)
    set_todo_dump_state()

  }

  const handle_text_field_change = (e) => {
    console.log(note_state)
    set_note_state({ ...note_state, body: e.target.value })
  }

  return (
    <div >
      <Background>
        <Header></Header>
        <Container>
          <Section>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Title>
                Create Note
              </Title>
              {/* <AddButton data={new_note} /> */}
              <button onClick={() => new_note()} className="add_button">+</button>
            </div>
            <div style={{ padding: "10px" }}>
              <input
                className="title_field"
                onChange={e => set_note_state({ ...note_state, title: e.target.value })}
                placeholder="Title"
                onBlur={(e) => e.target.placeholder = "Title"}
                onFocus={(e) => e.target.placeholder = ""}></input>
              <textarea
                className="text_field"
                onChange={e => set_note_state({ ...note_state, body: e.target.value })}
                placeholder="Description"
                onBlur={(e) => e.target.placeholder = "Description"}
                onFocus={(e) => e.target.placeholder = ""}
              />
            </div>
          </Section>

          <Section>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Title>
                Todo Dump
            </Title>
              {/* <AddButton /> */}
              <button onClick={() => new_todo_dump()} className="add_button">+</button>
            </div>
            <ScrollContainer>
              {todo_dump_state}
              <ListItem>List Item 1</ListItem>
            </ScrollContainer>
          </Section>
          <Section>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Title>
                Master Todo List
              </Title>
              {/* <AddButton onclick={new_note} /> */}
              <button onClick={() => new_todo_master()} className="add_button">+</button>
            </div>
            <ScrollContainer>
              <ListItem>List Item 1</ListItem>
            </ScrollContainer>
          </Section>
        </Container>
        <Container>
          <Section width="100%">
            <Title>
              Calender
              </Title>
          </Section>
        </Container>

      </Background >
    </div >
  );
}

export default App;
