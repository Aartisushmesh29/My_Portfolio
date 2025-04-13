import HeroImg from "@/assets/images/Aarti_Pic_2.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello I’m Aarti, a passionate Full Stack Developer with hands-on experience in building scalable web applications using React, Node.js, and MongoDB. I enjoy solving real-world problems through code, love competitive programming, and thrive on continuous learning. Currently pursuing B.Tech in IT with a strong foundation in core CS concepts.
              </p>
              <p className="text-white">
                My focus is on making web development faster, easier, and more accessible for everyone. I'm currently deepening my backend skills to grow as a full-stack developer. I’m not bound to any specific tech stack—I'm an engineer first, not just a frameworker—driven by problem-solving and building seamless, robust web applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and developer, driven by a desire to
                    contribute to the real world with new ideas and
                    solutions that have real value.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Aarti
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Junior Engineer</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
