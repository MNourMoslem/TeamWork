import { Outlet } from 'react-router-dom';

function SecondLayout() {
    return (
        <div className="w-screen h-screen flex justify-center items-center lg:flex-row overflow-hidden">
          <div className="bg-gray-50 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center bg-white px-6 py-8 mx-auto md:h-screen lg:py-">
              <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                  <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                  Team Work    
              </a>
              <Outlet />
            </div>
          </div>
        </div>
    );
}

export default SecondLayout