import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Activity from "./Pages/Activity";
import Promotion from "./Pages/Promotion";
import Account from "./Pages/Account";
import Wallet from "./Pages/Wallet";
import Head from "./Game/Head";
import LotteryApp from "./Game/5d";
import LotteryAppk from "./Game/K3";
import LotteryAppt from "./Game/Trx";
import { useAuth } from "./contexts/AuthContext";
import Timer from "./Components/Timer";
import RechargeMain from "./Components/RechargeMain";
import WithdrawMain from "./Components/WithDrawMain";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import DepositHistory from "./Pages/DepositHistory";
import BetHistory from "./Pages/BetHistory";
import WithdrawHistory from "./Pages/WithdrawHistory";
import Transaction from "./Pages/Transaction";
import CommisionDetailsMain from "./Components/CommisionDetailsMain";
import SubordinateDataMain from "./Components/SubordinateDataMain";
import CoupenUser from "./Pages/CoupenUser";
import Invite from "./Pages/Invite";
import PaymentComponent from "./Components/WowPayment";
import InvitiationRules from "./Pages/InvitiationRules";
import Messages from "./Pages/Messages";
import Settings from "./Pages/Settings";
import Language from "./Pages/Language";
import Newsubordinate from "./Pages/Newsubordinate";
import Attendance from "./Pages/Attendance";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Testing from "./Components/testing";
import Addbank from "./Pages/addbank";
import Vip from "./Pages/Vip";
import AdminProtectedRoute from "./Components/AdminProtectedRoute";
import Members from "./Admin/Components/Member";
import DashboardMain from "./Admin/Components/DashboardMain";
import Coupen from "./Admin/Components/coupen";
import SettingsAdmin from "./Admin/Components/SettingsAdmin";
import Withdraw from "./Admin/Components/Withdraw";
import DepositRequest from "./Admin/Components/DepositRequest";
import DepositPendingRequest from "./Admin/Components/DepositPendingRequest";
import Notification from "./Admin/Components/Notification";
import BonusSetting from "./Admin/Components/BonusSetting";
import Profile from "./Admin/Components/Profile";
import Wingo from "./Admin/Components/WinGo";
import VIPLevelComponent from "./Admin/Components/VIPLevelComponent"
import WalletUpdate from "./Admin/Components/WalletUpdate";
import Support from "./Pages/Support";
import SupportAdmin from "./Admin/Components/SupportAdmin";
import PlayersSalary from "./Admin/Components/PlayersSalary";
import CreateSalary from "./Admin/Components/CreateSalary";
import OnePage from "./Pages/OpenPage";
import WithdrawlLimits from "./Admin/Components/WithdrawlLimits";
import WithdrawStatus from "./Admin/Components/WithdrawStatus";
import AdminPanel from "./Admin/Components/Admin";
const gameData = [
  { id: 1, title: "Win Go 1Min", imgSrc: "/assets/lotterycategory_20240110062051do1k.png", game: "Win Go", path: "/timer/1min" },
  { id: 2, title: "Win Go 3Min", imgSrc: "/assets/lotterycategory_20240110062051do1k.png", game: "Win Go", path: "/timer/3min" },
  { id: 3, title: "Win Go 5Min", imgSrc: "/assets/lotterycategory_20240110062051do1k.png", game: "Win Go", path: "/timer/5min" },
  { id: 4, title: "Win Go 10Min", imgSrc: "/assets/lotterycategory_20240110062051do1k.png", game: "Win Go", path: "/timer/10min" },
];

const k3GameData = [
  { id: 5, title: "K3 1Min", imgSrc: "/assets/lotterycategory_20240110062111bt8e.png", game: "K3", path: "/k3/1min" },
  { id: 6, title: "K3 3Min", imgSrc: "/assets/lotterycategory_20240110062111bt8e.png", game: "K3", path: "/k3/3min" },
  { id: 7, title: "K3 5Min", imgSrc: "/assets/lotterycategory_20240110062111bt8e.png", game: "K3", path: "/k3/5min" },
  { id: 8, title: "K3 10Min", imgSrc: "/assets/lotterycategory_20240110062111bt8e.png", game: "K3", path: "/k3/10min" },
];

const trxGameData = [
  { id: 9, title: "TRX 1Min", imgSrc: "/assets/lotterycategory_20240110062124qut6.png", game: "Trx Win", path: "/trx/1min" },
  { id: 10, title: "TRX 3Min", imgSrc: "/assets/lotterycategory_20240110062124qut6.png", game: "Trx Win", path: "/trx/3min" },
  { id: 11, title: "TRX 5Min", imgSrc: "/assets/lotterycategory_20240110062124qut6.png", game: "Trx Win", path: "/trx/5min" },
  { id: 12, title: "TRX 10Min", imgSrc: "/assets/lotterycategory_20240110062124qut6.png", game: "Trx Win", path: "/trx/10min" },
];

const extractTimerKey = (path) => {
  const parts = path.split('/');
  return parts[2];
};


const extractK3TimerKey = (path) => {
  const parts = path.split('/');
  return parts[2];
};


const App = () => {
  const isAuthenticated = useAuth();
  if (isAuthenticated === null) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <div style={{ backgroundColor: "whitesmoke"}}>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />

          <Route
            path={"/testing"}
            element={
              <AdminProtectedRoute>
                <Testing />
              </AdminProtectedRoute>
            }
          />

          <Route
            path={"/members"}
            element={
              <AdminProtectedRoute>
                <Members />
              </AdminProtectedRoute>
            }
          />

          <Route
            path={"/dashboard"}
            element={
              <AdminProtectedRoute>
                <DashboardMain />
              </AdminProtectedRoute>
            }
          />

          <Route
            path={"/create-coupon"}
            element={
              <AdminProtectedRoute>
                <Coupen />
              </AdminProtectedRoute>
            }
          />
          <Route
            path={"/settings-admin"}
            element={
              <AdminProtectedRoute>
                <SettingsAdmin />
              </AdminProtectedRoute>
            }
          />

          <Route
            path={"/withdraw-admin"}
            element={
              <AdminProtectedRoute>
                <WithdrawStatus />
              </AdminProtectedRoute>
            }
          />

          <Route
            path={"/withdraw-admin-status"}
            element={
              <AdminProtectedRoute>
                <Withdraw />
              </AdminProtectedRoute>
            }
          />
          <Route
            path={"/vip-levels"}
            element={
              <AdminProtectedRoute>
                <AdminPanel>
                <VIPLevelComponent />
                </AdminPanel>
              </AdminProtectedRoute>
            }
          />
          <Route
            path={"/recharge-admin"}
            element={
              <AdminProtectedRoute>
                <DepositRequest />
              </AdminProtectedRoute>
            }
          />
          <Route
            path={"/pending-recharge-admin"}
            element={
              <AdminProtectedRoute>
                <DepositPendingRequest />
              </AdminProtectedRoute>
            }
          />
          <Route
            path={"/notifications-admin"}
            element={
              <AdminProtectedRoute>
                <Notification />
              </AdminProtectedRoute>
            }
          />

          <Route
            path={"/bonus-settings"}
            element={
              <AdminProtectedRoute>
                <BonusSetting />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/profile/:userId"
            element={
              <AdminProtectedRoute>
                <Profile />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/wingo-admin"
            element={
              <AdminProtectedRoute>
                <Wingo />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/wallet-update"
            element={
              <AdminProtectedRoute>
                <WalletUpdate />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/create-salary"
            element={
              <AdminProtectedRoute>
                <CreateSalary />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/support-admin"
            element={
              <AdminProtectedRoute>
                <SupportAdmin />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/playersSalary"
            element={
              <AdminProtectedRoute>
                <PlayersSalary />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/withdrawl-limits"
            element={
              <AdminProtectedRoute>
                <WithdrawlLimits />
              </AdminProtectedRoute>
            }
          />

          <Route path="/timer" element={<Timer />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/activity"
            element={
              <ProtectedRoute>
                <Activity />
              </ProtectedRoute>
            }
          />
          <Route path="/support" element={<Support />} />
          <Route
            path="/coupen-user"
            element={
              <ProtectedRoute>
                <CoupenUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/coupen-user"
            element={
              <ProtectedRoute>
                <CoupenUser />
              </ProtectedRoute>
            }
          />
          <Route path="/vip" element={<Vip />} />
          <Route
            path="/transaction"
            element={
              <ProtectedRoute>
                <Transaction />
              </ProtectedRoute>
            }
          />

          <Route path="/home" element={<Home />} />

          <Route
            path="/5d"
            element={
              <ProtectedRoute>
                <LotteryApp />
              </ProtectedRoute>
            }
          />
     
            <Route
             path="/k3"
              element={
                <ProtectedRoute>
                  <LotteryAppk />
                </ProtectedRoute>
              }
            />
        
          <Route
            path="/addbank"
            element={
              <ProtectedRoute>
                <Addbank />
              </ProtectedRoute>
            }
          />
        
            <Route
           
              path="/trx"
              element={
                <ProtectedRoute>
                  <LotteryAppt/>
                </ProtectedRoute>
              }
            />
          <Route
            path="/subordinate-data"
            element={
              <ProtectedRoute>
                <SubordinateDataMain />
              </ProtectedRoute>
            }
          />
          <Route
            path="/commision-details"
            element={
              <ProtectedRoute>
                <CommisionDetailsMain />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bet-history"
            element={
              <ProtectedRoute>
                <BetHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/deposit-history"
            element={
              <ProtectedRoute>
                <DepositHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/withdraw-history"
            element={
              <ProtectedRoute>
                <WithdrawHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/withdraw"
            element={
              <ProtectedRoute>
                <WithdrawMain />
              </ProtectedRoute>
            }
          />
          <Route
            path="/recharge"
            element={
              <ProtectedRoute>
                <RechargeMain />
              </ProtectedRoute>
            }
          />
          <Route
            path="/promotion"
            element={
              <ProtectedRoute>
                <Promotion />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wallet"
            element={
              <ProtectedRoute>
                <Wallet />
              </ProtectedRoute>
            }
         />
            <Route
              path="/head"
              element={
                <ProtectedRoute>
                  <Head  />
                </ProtectedRoute>
              }
            />
          <Route
            path="/invite"
            element={
              <ProtectedRoute>
                <Invite />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentComponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/invitation-rules"
            element={
              <ProtectedRoute>
                <InvitiationRules />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/language"
            element={
              <ProtectedRoute>
                <Language />
              </ProtectedRoute>
            }
          />
          <Route
            path="/newsubordinate"
            element={
              <ProtectedRoute>
                <Newsubordinate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/attendance"
            element={
              <ProtectedRoute>
                <Attendance />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<OnePage />} />
        </Routes>
      </Router>
    </AuthProvider>
    </div>
  );
};
export default App;
