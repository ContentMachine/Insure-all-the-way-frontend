import { headerRoutes } from "@/utilities/routes";
import classes from "./ProductHeader.module.css";
import Link from "next/link";

const ProductHeader = () => {
  return (
    <section className={classes.container}>
      <h2>Have a look at our products</h2>

      <div className={classes.productsSection}>
        {headerRoutes[0].children?.map((data, i) => {
          return (
            <div key={i}>
              <Link href={data?.route as string}>
                {data?.title.toUpperCase()}
              </Link>
              {data?.children?.map((datum, j) => {
                return (
                  <Link href={`${data?.route}/${datum.route}`} key={j}>
                    <div>
                      <span>{datum?.icon}</span>
                    </div>
                    <div>
                      <h5>{datum?.title}</h5>
                      <p>{datum?.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          );
        })}

        {/* <div className={classes.contactSection}>
          <Image
            src="https://res.cloudinary.com/dfilepe0f/image/upload/v1738754325/Loc_knots_takedown__January_2023_u0urvq.jpg"
            alt="Contact us"
            height={350}
            width={300}
          />
          <p>Let's help you with all the questions you have</p>
          <Button>
            <span>Contact Sales</span>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProductHeader;
