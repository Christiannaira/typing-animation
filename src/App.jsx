import { useState } from "react";
import TypeIt from "typeit-react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="typewriter_container">

        <div className="texts">

          {search}

        </div>

        <div className="searchbar_container">

          {/* Located below the window */}

          <div className="searchbar" id="searchbar">

            <input
              type="text"
              placeholder="Type"
              className="searchbar_input"
              onChange={(e) => {
                setSearch(e.target.value);
              }}

            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
