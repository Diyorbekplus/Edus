import "../../Style/scss/Home/Statistics.scss"
import { MdGroups } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { BsStars } from "react-icons/bs";
import img from "../../Images/statistic.jpg";
const Statistics = () => {
  return (
    <div className='statistics'>
      <aside>
        <div className="statistic">
          <div className="icon"><span><MdGroups/></span></div>
          <div className="amount">783+</div>
          <div className="title">Parents Reviews</div>
        </div>
        <div className="statistic">
          <div className="icon"><span><BsStars/></span></div>
          <div className="amount">35K+</div>
          <div className="title">Good Students</div>
        </div>
        <div className="statistic">
          <div className="icon"><span><GrAchievement/></span></div>
          <div className="amount">486+</div>
          <div className="title">Program Awards</div>
        </div>
        <div className="statistic">
          <div className="icon"><span><FaLaptopCode/></span></div>
          <div className="amount">984+</div>
          <div className="title">Digital Laboratory</div>
        </div>
      </aside>
      <aside>
        <div>
        <img src={img} alt="good students" />
        </div>
      </aside>
    </div>
  )
}

export default Statistics