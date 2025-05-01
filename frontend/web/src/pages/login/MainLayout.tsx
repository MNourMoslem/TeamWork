import { Outlet } from 'react-router-dom'
import teamImage from "../../media/images/team-work-image-1.jpg"

function MainLayout() {
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Main Content */}
      <section className="bg-gray-50 flex-[2]">
        <div className="flex  flex-col justify-center items-center bg-white px-6 py-8 mx-auto md:h-screen lg:py-">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
              <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
              Team Work    
          </a>
          <Outlet />
        </div>
      </section>
  
      {/* Image Section */}
      <div className="hidden lg:block flex-[3]">
        <img src={teamImage} className="w-full h-full object-cover" />
      </div>
    </div>
  );  
}

export default MainLayout