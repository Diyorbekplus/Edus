import "../../Style/scss/Blog/Blog.scss"
import Header from '../../Components/Header'
import Footer from '../../Components/Footer';
import { newCategories, news, recentPosts } from '../../Components/data'
import { CiUser } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import { FaRegComment,FaRegFolderOpen, FaSearch} from "react-icons/fa";

const Blog = () => {
  return (
    <div className='blog'>
      <header>
        <Header title={"Blog"}/>
      </header>
      <main>
        <aside className="news_list">
        {
          news.map((item) => {
            const {id,admin,date,comments,type,img, title, text} = item
            return (
              <article className='card' key={id}>
                <img src={img} alt={title} className="card-img-top"/>
                <div className="card-body">
                  <div className="short_desctiption">
                    <p className="admin"><span><CiUser/></span>{admin}</p>
                    <p className="date"><span><CgCalendarDates/></span>{date}</p>
                    <p className="comments"><span><FaRegComment/></span>comment   ({comments})</p>
                    <p className="type"><span><FaRegFolderOpen/></span>{type}</p>
                  </div>
                  <h4 className="card-title">
                    {title}
                  </h4>
                  <p className="text">{text}</p>
                  <button className='read_more_btn'>Read More</button>
                </div>

              </article>
            )
          })
        }
        </aside>
        <aside className='categories'>
          <section className="search_section">
            <header className="title">
              Search
            </header>
            <div>
            <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search Keywords"/>
            <span className="input-group-text" id="basic-addon2"><FaSearch/></span>
            </div>
            </div>
          </section>

          <section className="categories_section">
            <header>Categores</header>
            <div className="list">
            {
              newCategories.map((item) => {
                const {id, title, count} = item;
                return (
                  <article key={id}>
                    <p className='title'>{title}</p>
                    <p className='count'>{count}</p>
                  </article>
                )
              })
            }
            </div>
          </section>

          <section className="Registation">
            <p className="subtitle">Resigtation Our</p>
            <p className="title">New Courses</p>
            <p className="text">
            Bur wemust ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore
            </p>
            <button>Registation</button>
          </section>
          <div className="recent_posts_section">
            <header>
              Recent Posts
            </header>
            <div className="list">
              {
                recentPosts.map((item) => {
                  const {id, img, title, date} = item;
                  return (
                    <article key={id}>
                      <div className="img">
                        <img src={img} alt="" />
                      </div>
                      <div className="details">
                        <h6 className="title">{title}</h6>
                        <p className="date">{date}</p>
                      </div>
                    </article>
                  )
                })
              }
            </div>
          </div>
        </aside>
      </main>
      <Footer/>
    </div>
  )
}

export default Blog