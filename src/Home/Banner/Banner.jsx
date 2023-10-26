import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
import img5 from "../../assets/images/banner/5.jpg"
import img6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div>
           <div className="carousel w-full relative">
  <div id="item1" className="carousel-item w-full">
    <img src={img1} className="w-full rounded-xl" />
    <div className=" absolute rounded-lg w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="md:w-1/2 space-y-5 px-10 md:py-10 lg:py-60 ">
         <h2 className="text-2xl md:text-6xl text-white">Affordable Price For Car Servicing</h2>
         <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <button className="btn mr-2 text-orange-600">Discover More</button>
         <button className="btn btn-outline text-orange-600">Latest Project</button>
        </div>
    </div>
  </div> 
  <div id="item2" className="carousel-item w-full relative">
    <img src={img2} className="w-full  rounded-lg" />
    <div className=" absolute  rounded-lg w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="md:w-1/2 space-y-5 px-10 md:py-10 lg:py-60 ">
         <h2 className="text-2xl md:text-6xl text-white">Affordable Price For Car Servicing</h2>
         <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <button className="btn mr-2 text-orange-600">Discover More</button>
         <button className="btn btn-outline text-orange-600">Latest Project</button>
        </div>
    </div>
  </div> 
  <div id="item3" className="carousel-item w-full relative">
    <img src={img3} className="w-full  rounded-lg" />
    <div className=" absolute  rounded-lg w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="md:w-1/2 space-y-5 px-10 md:py-10 lg:py-60 ">
         <h2 className="text-2xl md:text-6xl text-white">Affordable Price For Car Servicing</h2>
         <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <button className="btn mr-2 text-orange-600">Discover More</button>
         <button className="btn btn-outline text-orange-600">Latest Project</button>
        </div>
    </div>
  </div> 
  <div id="item4" className="carousel-item w-full relative">
    <img src={img4} className="w-full  rounded-lg" />
    <div className=" absolute  rounded-lg w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="md:w-1/2 space-y-5 px-10 md:py-10 lg:py-60 ">
         <h2 className="text-2xl md:text-6xl text-white">Affordable Price For Car Servicing</h2>
         <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <button className="btn mr-2 text-orange-600">Discover More</button>
         <button className="btn btn-outline text-orange-600">Latest Project</button>
        </div>
    </div>
  </div>
  <div id="item5" className="carousel-item w-full relative">
    <img src={img5} className="w-full  rounded-lg" />
    <div className=" absolute  rounded-lg w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="md:w-1/2 space-y-5 px-10 md:py-10 lg:py-60 ">
         <h2 className="text-2xl md:text-6xl text-white">Affordable Price For Car Servicing</h2>
         <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <button className="btn mr-2 text-orange-600">Discover More</button>
         <button className="btn btn-outline text-orange-600">Latest Project</button>
        </div>
    </div>
  </div>
  <div id="item6" className="carousel-item w-full relative">
    <img src={img6} className="w-full  rounded-lg" />
    <div className=" absolute  rounded-lg w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="md:w-1/2 space-y-5 px-10 md:py-10 lg:py-60 ">
         <h2 className="text-2xl md:text-6xl text-white">Affordable Price For Car Servicing</h2>
         <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <button className="btn mr-2 text-orange-600">Discover More</button>
         <button className="btn btn-outline text-orange-600">Latest Project</button>
        </div>
    </div>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
  <a href="#item5" className="btn btn-xs">5</a>
  <a href="#item6" className="btn btn-xs">6</a>
</div>
        </div>
    );
};

export default Banner;