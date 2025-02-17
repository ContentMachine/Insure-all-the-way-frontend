import classes from "./LetsPlayVideoContainer.module.css";

type LetsPlayVideoContainerTypes = {
  title: string;
  url: string;
};

const LetsPlayVideoContainer = ({
  title,
  url,
}: LetsPlayVideoContainerTypes) => {
  const id = url?.split("/")[url?.split("/")?.length - 1];

  return (
    <section className={classes.container}>
      <h4>What You Missed</h4>

      <iframe
        width="560"
        height="315"
        src={`${url}?si=${id}&controls=0&modestbranding=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default LetsPlayVideoContainer;
