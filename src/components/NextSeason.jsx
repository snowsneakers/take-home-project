import banners from "../assets/image-8.jpeg";
function NextSeason() {
     return (
          <section className="nextSeason w-full min-h-[400px] md:min-h-[750px] rounded-lg p-2 bg-black bg-opacity-20 backdrop-blur-sm drop-shadow-lg text-white flex items-center justify-end mb-10">
               <img
                    className="opacity-50 absolute left-0 top-0 w-full h-full -z-10"
                    src={banners}
                    alt="championship banners"
               />
               <div className="w-96 mr-0 md:mr-[10rem]">
                    <h1 className="text-6xl mb-5">See You Next Season!</h1>
                    <p className="leading-7">
                         This season was one for the books, and we're happy that
                         you have been a part of it. We may have not won, but I
                         hope you will join us as we win banner number 18 next
                         season! We hope you enjoyed the season recap.
                    </p>
               </div>
          </section>
     );
}
export default NextSeason;
