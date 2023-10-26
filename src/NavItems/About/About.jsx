import img1 from "../../assets/images/about_us/person.jpg"
import img2 from "../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div>
            <div className="hero my-10 py-10  bg-base-200">
  <div className="hero-content flex-col lg:flex-row space-y-4 md:space-y-10 ">
    <div className="lg:w-1/2 relative">
        <img src={img1} className="w-4/5" alt="" />
        <img src={img2} className="w-1/2 absolute left-36 top-1/2 md:left-72 md:top-1/2" alt="" />
    </div>
    <div className="lg:w-1/2 space-y-4">
      <p className="text-orange-600 text-lg">About Us</p>
      <h2 className="text-4xl">We are qualified & of experience in this field</h2>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn text-white bg-orange-600">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;