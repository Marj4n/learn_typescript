import "./App.css";
import { Button } from "./components/eventProps/Button";
import { Greet } from "./components/typingProps/Greet";
import { Heading } from "./components/advancedProps/Heading";
import { Input } from "./components/eventProps/Input";
import { Oscar } from "./components/advancedProps/Oscar";
import { Person } from "./components/typingProps/Person";
import { PersonList } from "./components/typingProps/PersonList";
import { Status } from "./components/advancedProps/Status";
import { Container } from "./components/styleProps/Container";

function App() {
  const personName = {
    first: "Mamat",
    last: "Kawaki",
  };

  const nameList = [
    {
      first: "Iskandar",
      last: "Limau",
    },
    {
      first: "Asep",
      last: "Kenalpot",
    },
    {
      first: "Sucipto",
      last: "Sharkos",
    },
  ];

  return (
    <div className="App">
      {/* <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Apa coba!!", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} /> */}
      <Container styles={{ border: "1px solid black", padding: "1rem" }}>
        WOI
      </Container>
    </div>
  );
}

export default App;
