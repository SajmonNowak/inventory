import { useEffect, useState } from "react";

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() =>{
    fetch("/customers/api")
      .then((res) => res.json())
      .then((items) => setCustomers(items))
      .then(console.log(customers))
  }, [])

  return (
    <div className="App">
      <header>
        {customers.map((item) => {
          return <p>{item.name}</p>;
        })}
      </header>
    </div>
  );
}

export default App;
