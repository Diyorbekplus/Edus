import expert from "../../Images/expert.jpg"
import videoBack from "../../Images/videoBack.jpg"

import { TbDeviceAnalytics } from "react-icons/tb";
import { MdStickyNote2 } from "react-icons/md";

import "../../Style/scss/Home/Experts.scss"
const Experts = () => {
  return (
    <div className='experts'>
      <div className="expert">
        <aside>
          <img src={expert} alt="" />
        </aside>
        <aside>
          <h1>We Are Professional <br />
           And Expert</h1>
          <p>Inventore veritatis et quasi architecto beatae vitae dicta sunt explic abo enim ipsam voluptatem quia voluptas sit aspernatur</p>
          <div className="pro">
          <header>
            <p>Engineering Studies</p> 
            <p>90%</p>
          </header>
          <div className="progress">
          <div className="progress-bar" role="progressbar"style={{width: "90%", background: "#841E62"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>
          <div className="pro">
          <header>
            <p>Business Studies</p> 
            <p>70%</p>
          </header>
          <div className="progress">
          <div className="progress-bar" role="progressbar"style={{width: "70%", background: "#F3AA20"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>
          <div className="pro">
          <header>
            <p>English Studies</p> 
            <p>80%</p>
          </header>
          <div className="progress">
          <div className="progress-bar" role="progressbar"style={{width: "80%", background: "#AF87CE"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>
          <div className="pro">
          <header>
            <p>Science Studies</p> 
            <p>60%</p>
          </header>
          <div className="progress">
          <div className="progress-bar" role="progressbar"style={{width: "60%", background: "#2A445E"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>
        </aside>
      </div>

      <div className="oneline_education">
        <aside className='details'>
          <h1 className='col-12 col-sm-11 col-md-9 col-lg-10'>Let's See Online Education</h1>
          <p className="text col-12 col-sm-11 col-md-9 col-lg-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invenw tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

          <div className="advisors col-12 col-sm-11 col-md-9 col-lg-10">
            <aside >
              <div className="icon_box"><span><TbDeviceAnalytics/></span></div>
              <div className='data'>
                <p>Expert Advisors</p>
                <p>Sedut perspiciatis unde omn iste natus error sites</p>
              </div>
            </aside>
            <aside>
            <div className="icon_box"><span><MdStickyNote2/></span></div>
              <div className='data'>
                <p>Get Certifications</p>
                <p>Sedut perspiciatis unde omn iste natus error sites</p>
              </div>
            </aside>
          </div>

          <button>Registration Now</button>
        </aside>
        <aside>
          <img src={videoBack} alt="" />
        </aside>
      </div>
    </div>
  )
}

export default Experts