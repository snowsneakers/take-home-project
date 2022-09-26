function ThreesBlurb() {
     return (
          <div className="bg-black/20 backdrop-blur-sm backdrop-saturate-200 drop-shadow-lg text-white flex flex-col w-full md:w-1/2 leading-8 p-2 min-h-auto md:min-h-[272px]">
               <h3 className="text-3xl mb-3">
                    Three Point Shooting This Season
               </h3>
               <p>
                    The top three point shooters on the Lakers this season were
                    Marc Gasol, LeBron James, Ben McLemore, and Dennis Schroder.
                    Gasol's three point average was 63.6%, James averaged 37.5%,
                    McLemore averaged 33.3%, and Schroder averaged 30.8%. Stats
                    were calculated by dividing total number of attempts by
                    total makes.
               </p>
          </div>
     );
}
export default ThreesBlurb;
