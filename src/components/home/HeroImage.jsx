import heroImg from "../../assets/images/hero/hero.png";

const HeroImage = () => {
  return (
    <div className="hidden lg:flex justify-center">
      <img
        src={heroImg}
        alt="Medical Equipment"
        className="w-full max-w-md object-contain drop-shadow-2xl"
      />
    </div>
  );
};

export default HeroImage;