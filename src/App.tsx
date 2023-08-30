import ItemEditSection from "./components/ItemEdit";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <section style={{ display: "flex" }}>
        <ItemList list={[]} />
        <ItemEditSection />
      </section>
    </div>
  );
}

export default App;
