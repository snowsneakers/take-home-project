import teamHudle from "../assets/image-5.jpeg";
function Hero() {
     return (
          <section className="hero w-full min-h-[400px] md:min-h-[750px] rounded-lg p-2 bg-black bg-opacity-20 backdrop-blur-sm drop-shadow-lg text-white flex items-center mb-10">
               <img
                    className="opacity-50 absolute left-0 top-0 w-full h-full -z-10"
                    src={teamHudle}
                    alt="team in a huddle"
               />
               <div className="w-96 ml-0 md:ml-[10rem]">
                    <h1 className="text-6xl mb-5">
                         END OF
                         <br /> SEASON
                         <br /> LEADERS
                    </h1>
                    <p className="mb-5 leading-7">
                         Welcome to the end of season stat leaders page for the
                         Los Angeles Lakers! On this page you can find stats for
                         all your favorite Lakers players, including points,
                         rebounds and three point percentage.
                    </p>
                    <button className="py-1 px-2 bg-[#FDB927] text-black font-medium">
                         <a href="#stats">See Stats</a>
                    </button>
               </div>
          </section>
     );
}
export default Hero;
