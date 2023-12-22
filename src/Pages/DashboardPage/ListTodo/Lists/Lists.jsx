import { FaStar } from "react-icons/fa";

const Lists = ({ items, index }) => {
  const { title, description, deadlines, priority, email } = items;
  return (
    <div>
        <div className="card bg-base-100 shadow-xl border-r-2 border-r-[#00D7FF]">
            <div className="card-body">
              <div className="flex justify-between">
              <h2 className="card-title relative bottom-[20px]"> <span className="animated-image bg-[#00D7FF] rounded-md text-black p-6">{index}</span></h2>
              {
                priority === "High" && <div className="flex gap-1">
                <FaStar className="text-xl text-[#00D7FF]"></FaStar>
                <FaStar className="text-xl text-[#00D7FF]"></FaStar>
                <FaStar className="text-xl text-[#00D7FF]"></FaStar>
                </div>
              }
              {
                priority === "Moderate" && <div className="flex gap-1">
                <FaStar className="text-xl text-[#00D7FF]"></FaStar>
                <FaStar className="text-xl text-[#00D7FF]"></FaStar>
                </div>
              }
              {
                priority === "Low" && <div className="flex gap-1">
                <FaStar className="text-xl text-[#00D7FF]"></FaStar>
                </div>
              }
              {/* <FaStar className="text-2xl"></FaStar> */}
              </div>
            <div className="py-4">
            <p className=" text-black text-xl font-semibold">{title}</p>
            <p>{description}</p>
            <div className="pt-4">
            <p className="font-semibold">Target Timeline</p>
            <p>{deadlines}</p>
            </div>

            </div>
            </div>
          </div>
    </div>
  );
};

export default Lists;
