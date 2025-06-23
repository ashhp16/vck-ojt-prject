import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
    <div><Header/></div>
    <div classNmae="other" id="other">
      <article className="content">
        <div className="banner">
          <section className="hero-section">
             <h1>Welcome to Vivekanand College!</h1>
             <p>Your journey to excellence starts here.</p>
             {/* <button><Link to="/addmission">Apply Now!</Link>
             </button>
             */}
             <a herf="/Admissionpage">hi</a>
             </section>
             </div>
             <nav>

             </nav>
            </article>
            <article className="info">
              <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
              <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
              </article>
              <article className="text">
                <h2>Why Choose Vivekanand College?</h2>
                <ul>
                <li>Legacy of Excellence: Decades of commitment to quality education.</li>
                <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
                <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
                <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
                <li>Strong Placements: Excellent career opportunities with leading companies.</li>
              </ul>
              </article>
              <figure className="image">

                <figcaption>Campus Life & Facilities</figcaption>
                <section className="img"><img src="vck-react-app/public/images/students-studying-DbLGuwF_.jpeg"/>
                <img src="vck-react-app/public/images/campus-life-Crkero7B.jpg" id="img2"/>
                </section>
                </figure>
                <section className="bottom">
                  <h4>Ready to explore our courses?</h4><button><Link to="/coursespage"><b id="bold">Explore Courses</b></Link></button>
                </section>
                </div>

                </>
                );
                }
                export default HomePage;