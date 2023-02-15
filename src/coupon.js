import React from "react";
// import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
// import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { webAuth } from "./service";
// import { useRouter } from "next/dist/client/router";

export default function Coupon() {
  const [user, setUser] = useState(null);
  //   const router = useRouter();
  useEffect(() => {
    if (window.location.hash) {
      webAuth.parseHash(
        { hash: window.location.hash },
        function (err, authResult) {
          if (err) {
            return console.log(err);
          }

          webAuth.client.userInfo(authResult.accessToken, function (err, user) {
            // get user info
            setUser(user);
          });
        }
      );
    } else {
      if (user === null) {
        // router.push("/");
      }
    }
  }, []);

  return (
    <div className="">
      <p>
        Congratulations {user && user.email}
        <span role="img" aria-label="emoji">
          🎉
        </span>
      </p>
      <h1>
        Coupon: {Math.floor(Math.random() * (67646676 - 6746 + 1)) + 74664}
      </h1>

      {/* <CloudinaryContext cloudName="dtgbzmpca">
        <Image publicId="v1633726853/tamanna-rumee-rOBRka7Q12U-unsplash.jpg">
          <Transformation
            crop="scale"
            width="600"
            height="400"
            dpr="auto"
            responsive_placeholder="blank"
          />
        </Image>
      </CloudinaryContext> */}
    </div>
  );
}
