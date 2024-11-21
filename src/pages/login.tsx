import Footer from "@components/Footer";
import Heading from "@components/Heading";
import LoginForm from "@components/LoginForm";

function Login() {
  return (
    <>
      <Heading renderNoteFunctions={false} />
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
