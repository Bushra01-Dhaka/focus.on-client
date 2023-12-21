import features_img from "../../assets/focus-ly-images/features-bg.png";
import "./Features.css"

const Features = () => {
  return (
    <div className="pt-[50px]">
        {/* image part */}
     <div>
     <img
        src={features_img}
        className="bg-fixed w-full h-[400px] object-cover mx-auto"
        alt=""
      />
     </div>
     {/* text-part */}
      <div className="md:p-20 py-6 bg-[#8fc3ef] md:max-w-6xl mx-auto rounded relative bottom-[100px]">
        <h2 className="text-3xl md:text-4xl font-semibold text-center py-6">
          One Step away to get organize all your work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 px-6 mt-10">

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title"> <span className="animated-image bg-[#00D7FF] rounded-md text-black p-6">1</span></h2>
            <div className="py-4">
            <p className=" text-black text-xl font-semibold">Login First</p>
              <p className="py-2">Begin your Focus.on journey by logging in to access an array of powerful features, efficient task management experience.</p>
            </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title"> <span className="animated-image  bg-[#00D7FF] rounded-md text-black p-6">2</span></h2>
            <div className="py-4">
            <p className=" text-black text-xl font-semibold">Manage Tasks</p>
              <p className="py-2">Easily create, update, and manage your daily tasks to stay organized and up-to-date with minimal effort.</p>
            </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title"> <span className="animated-image  bg-[#00D7FF] rounded-md text-black p-6">3</span></h2>
            <div className="py-4">
            <p className=" text-black text-xl font-semibold">Visualize Progress</p>
              <p className="py-2">Get a quick overview of your working progress, keeping you motivated and in control with a glance.</p>
            </div>
            </div>
          </div>

          


        </div>
      </div>
    </div>
  );
};

export default Features;
