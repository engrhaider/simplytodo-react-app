import './App.css';
import Header from './components/Header'
import MainContent from "./components/MainContent";

function App() {
  return (
      <div className="page-content page-container" id="page-content">
          <div className="padding">
              <div className="row">
                  <Header></Header>
                  <div className="col-md-12">
                      <div className="card px-3">
                          <div className="card-body">
                              <MainContent></MainContent>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
