import fanPic1 from "../assets/image-1.png";
import fanPic2 from "../assets/image-4.jpeg";
function Fans() {
     return (
          <section>
               <h2 className="text-white text-3xl mb-3 px-2 md:px-0">
                    A Thank You To The Fans!
               </h2>
               <div className="flex flex-col gap-5 mb-10 text-white">
                    <div className="w-full md:w-1/2 px-2 md:px-0">
                         <p className="leading-7">
                              The Los Angeles Lakers want to thank you for your
                              continued support. We know that it's a big
                              commitment to be a fan of any team, but we hope
                              you'll keep cheering us on next season! We're
                              looking forward to working hard and giving you
                              even more to celebrate.
                         </p>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center">
                         <img
                              className=""
                              src={fanPic1}
                              alt="fans during game"
                         />
                         <img
                              className=""
                              src={fanPic2}
                              alt="fans showing off thier jersey"
                         />
                    </div>
               </div>
          </section>
     );
}
export default Fans;
