import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <main className="content p-40">
        <div className='d-flex align-center justify-between mb-40'>
          <h1 className="">All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input type="text" placeholder='Search...'/>
          </div>
        </div>

        <div className="d-flex">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

      </main>
    </div>
  );
}

export default App;
