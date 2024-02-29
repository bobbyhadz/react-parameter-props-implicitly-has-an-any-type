interface PersonProps {
  name: string;
  age: number;
  country: string;
  children?: React.ReactNode; // 👈️ for demo purposes
}

function Person(props: PersonProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.country}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Person name="James" age={30} country="Australia" />
    </div>
  );
}

export default App;
