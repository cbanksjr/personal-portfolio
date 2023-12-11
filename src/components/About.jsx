/** @format */

const About = () => {
  const about =
    "I enjoy helping others, so what better way than through software development! I am a 4-year Navy veteran and graduate of a 14-week full-stack Java coding boot camp. I am currently switching from a career in sales management. I have acquired the necessary skills to contribute effectively to software solutions and collaborative development environments. When not coding, I enjoy spending time with my family, going to the gym, and watching sports.";

  return (
    <section className="p-8 bg-neutral-50 lg:p-36">
      <article className="flex flex-col text-center">
        <h2 className="text-xl font-semibold pb-8">About Me</h2>
        <p className="text-lg leading-10 p-6">{about}</p>
      </article>
    </section>
  );
};

export default About