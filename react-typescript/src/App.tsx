import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
    </div>
  );
}

export default App;
