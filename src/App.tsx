import ItemEditSection from "./components/ItemEdit";
import ItemList from "./components/ItemList";
import APIContextProvider from "./contextAPI/apiContext";

function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <section style={{ display: "flex", gap: 30 }}>
          <ItemList />
          <ItemEditSection />
        </section>
      </div>
    </APIContextProvider>
  );
}

export default App;
