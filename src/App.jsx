import { DashboardPage } from "./pages/dashboard/DashboardPage";
import style from "./style/App.module.scss";

function App() {
  return (
    <div className={style.app}>
      <DashboardPage />
    </div>
  );
}

export default App;
