import './Home.css'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import DashboardArea from '../DashboardArea/DashboardArea'
export default function Home() {
  return (
    <div className="mainContainer">
      <Sidebar />
      <Header />
      <DashboardArea />
    </div>
  )
}
