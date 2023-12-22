import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const OurClients = () => {
  return (

  <div>
      <h1 className="text-center md:max-w-md mx-auto bg-base-200 bg-opacity-40 text-3xl lg:text-4xl">
    <span className="font-semibold">Focus.</span>{" "}
    <span className="text-[#00D7FF] font-semibold ">on</span>
    {`'s Journey with`}{" "}
    <span className="text-[#00D7FF] font-semibold">20,000+</span> Users{" "}
  </h1>
  <p className="md:max-w-3xl text-center mx-auto py-6">{`Everyday people find motivation in their work with 'Focus.on.' Our intuitive task management platform empowers users to organize, prioritize, and achieve their goals, fostering a positive and motivated work environment.`}</p>
    <div
      className=" bg-fixed hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/XY089pZ/blue-banner-bg.png)",
      }}
    >

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
          <div data-aos="flip-left" data-aos-delay="100" className="card-body bg-blue-300">
            <img 
            className="animated-image h-[100px] w-[150px]"
            src="https://i.ibb.co/F6mfkVx/comma.png" alt="" />
            <p>{`As a developer, 'Focus.on' streamlines my tasks effortlessly. The intuitive design enhances my productivity and project management efficiency.`}</p>
            <div className="pt-4 font-semibold">
            <p>Edward William</p>
            <p>Software Developer</p>
            </div>
          </div>
          <div data-aos="flip-up" data-aos-delay="100" className="card-body bg-purple-300">
            <img 
            className="animated-image h-[100px] w-[150px]"
            src="https://i.ibb.co/F6mfkVx/comma.png" alt="" />
            <p>{`Focus.on' is my go-to tool for banking tasks. It's a game-changer in task management, ensuring my day is structured and productive.`}</p>
            <div className="pt-4 font-semibold">
            <p>John Smith</p>
            <p>Managing Director</p>
            </div>
          </div>

          <div data-aos="flip-right" data-aos-delay="100" className="card-body bg-lime-200">
            <img 
            className="animated-image h-[100px] w-[150px]"
            src="https://i.ibb.co/F6mfkVx/comma.png" alt="" />
            <p>{`Being a doctor, 'Focus.on' aids in organizing my hectic schedule. It's a reliable companion for managing appointments and tasks seamlessly.`}</p>
            <div className="pt-4 font-semibold">
            <p>Julia Roger</p>
            <p>Neurologist</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  
  );
};

export default OurClients;
