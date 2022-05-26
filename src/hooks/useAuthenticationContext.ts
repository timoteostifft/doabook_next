import { useContext } from "react";

import { AuthenticationContext } from "../contexts/Authentication";

const useAuthenticationContext = () => useContext(AuthenticationContext)

export { useAuthenticationContext }