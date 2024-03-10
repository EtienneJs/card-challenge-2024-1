import IconCircleCard from "./IconCircleCard"

function HeaderCard() {
    return (
      <div className="bg-red-400 p-10 rounded-md">
          <div className="flex flex-row justify-between ">
                <div className=" text-white">
                <p className="text-sm">My Balance</p>
                <p className="text-2xl">$921.48</p>
                <p>sd</p>
                </div>
                <IconCircleCard/>
          </div>
      </div>
    )
  }
  
  export default HeaderCard