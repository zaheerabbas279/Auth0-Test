import { useState, useEffect } from "react";
// import { useRouter } from "next/dist/client/router";
import { webAuth } from "./service";
import { useNavigate, useLocation } from "react-router-dom";

export default function PassswordLessComponent() {
  const location = useLocation();
  const navigate = useNavigate();

  // const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [userDetails, setUserDetails] = useState([]);

  const [error, setError] = useState({
    emailError: false,
    otpError: false,
  });
  const [success, setSuccess] = useState(false);
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

  const handleAuth = (e) => {
    e.preventDefault();
    webAuth.passwordlessStart(
      {
        connection: "email",
        send: "code",
        email: email,
      },
      function (err, res) {
        if (res.Id) {
          setSuccess(true);
        } else {
          setError({ ...error, emailError: true });
        }
      }
    );
  };

  const handleVerifyToken = (e) => {
    e.preventDefault();
    webAuth.passwordlessLogin(
      {
        connection: "email",
        email: email,
        verificationCode: otp,
        detailedResponse: true,
      },
      function (err, res) {
        console.log(res);
        console.log(err);
        if (err) {
          setError({ ...error, otpError: true });
        } else {
          setUserDetails(res);
          console.log("res-----", res);
          // navigate("/");
          //   router.push("/coupon");
        }
      }
    );
  };
  console.log(
    "🚀 ~ file: PasswordLess.js:16 ~ PassswordLessComponent ~ success",
    success
  );
  console.log(
    "🚀 ~ file: PasswordLess.js:12 ~ PassswordLessComponent ~ userDetails",
    userDetails
  );
  console.log(
    "🚀 ~ file: PasswordLess.js:20 ~ PassswordLessComponent ~ user",
    user
  );
  return (
    <div className="">
      {!success && (
        <form onSubmit={handleAuth}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // className={styles.input}
            placeholder="enter email"
            required
          />
          <button className="">Get OTP</button>
          {error.emailError && <p className="">Error sending mail</p>}
        </form>
      )}
      {success && (
        <form onSubmit={handleVerifyToken}>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            // className={styles.input}
            placeholder="input token"
            required
          />
          <button>Verify OTP</button>
          {error.otpError && <p>Error validating OTP</p>}
        </form>
      )}
    </div>
  );
}
