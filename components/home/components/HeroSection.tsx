import Btn from "@/components/reUsed/btn";

export function HeroSection() {
    return (
      <section className=" py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Manage Your College <span className="text-cyan-400">Effortlessly</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            A unified platform for students, teachers, and administrators to streamline enrollment, 
            assignments, and academic tracking.
          </p>
          <div className="flex gap-4 justify-center">
           <Btn type="fill" className="p-7">
                Get started
           </Btn>
            <Btn type="out_line" className="p-7">
              Login
            </Btn>
          </div>
        </div>
      </section>
    );
  }