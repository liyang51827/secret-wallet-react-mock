import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletConnectProvider } from './context/WallectConnectContext';
import Profile from './pages/Profile';
import Staking from "./pages/Staking";
import Vault from "./pages/Vault";
import Lottery from "./pages/Lottery";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <WalletConnectProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing path="landing" />} />
            <Route path="/profile" element={<Profile path="profile" />} />
            <Route path="/staking" element={<Staking path="staking" />} />
            <Route path="/vault" element={<Vault path="vault" />} />
            <Route path="/lottery" element={<Lottery path="lottery" />} />
            <Route path="/presale" element={<Profile path="presale" />} />
          </Routes>
        </BrowserRouter>
      </WalletConnectProvider>
    </>
  );
}

export default App;
