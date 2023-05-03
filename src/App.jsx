import { Routes, Route } from "react-router-dom";
import Signin from "./components/users/Signin/Signin";
import Signup from "./components/users/Signup/Signup";
import Account from "./components/users/Account/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";
import ResetPass from "./components/users/ResetPass/ResetPass";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpss" element={<ResetPass />} />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
