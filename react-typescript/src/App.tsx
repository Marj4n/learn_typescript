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
import { LoggedIn } from "./components/state/LoggedIn";
// import { User } from "./components/state/User"; //state
// import { Counter } from "./components/state/useReducer/Counter"; //state
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User"; // context
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { Counter } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";

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
        Apa coba
      </Container>
      {/* <LoggedIn /> */}
      {/* <User name="rizeq" email="rizeq@gmail.com" />  //state */}
      {/* <Counter decrement={20} increment={20} /> //state */}
      <Counter message="The count value is" />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <MutableRef />
      <Private isLoggedIn={true} component={Profile} />
      {/* <div>
        <List
          items={["Jokowi", "Soeharto", "Megawati"]}
          onClick={(item) => console.log(item)}
        />
        <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      </div> */}
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
