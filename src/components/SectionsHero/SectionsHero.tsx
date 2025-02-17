import classes from "./SectionsHero.module.css";

type SectionsHeroTypes = {
  title: string;
  bannerImage?: string;
  mobileBannerImage?: string;
};

const SectionsHero = ({
  title,
  bannerImage,
  mobileBannerImage,
}: SectionsHeroTypes) => {
  // Utils
  const isMobile = typeof window !== "undefined" && window?.innerHeight;

  const image = isMobile ? mobileBannerImage : bannerImage;

  return (
    <section
      className={classes.container}
      style={{
        backgroundImage: `url(${
          image ||
          "https://res.cloudinary.com/dfilepe0f/image/upload/v1739787675/Friendly_Match_Website_Banner_Mobile_spnvjw.jpg"
        })`,
      }}
    >
      <div></div>
      <h2>{title}</h2>
    </section>
  );
};

export default SectionsHero;
