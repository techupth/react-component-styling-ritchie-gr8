import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button style="primary" />
        <Button style="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert style="error" />
        <Alert style="warning" />
        <Alert style="info" />
        <Alert style="success" />
      </div>
    </div>
  );
}

export default App;
