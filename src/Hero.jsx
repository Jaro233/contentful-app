import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            labore dolorem molestiae a optio culpa reprehenderit ullam
            recusandae aliquam atque iste fugiat similique repellat, quibusdam
            commodi in delectus facilis placeat, rerum soluta asperiores ea eos
            laborum quia. Tempora, maiores illo?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
