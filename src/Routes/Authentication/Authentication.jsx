import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";

import { AuthContainer } from "./Authentication.style";

const Authentication = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default Authentication;
