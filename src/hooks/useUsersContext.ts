import { useContext } from "react";

import { UsersContext } from "../contexts/Users";

const useUsersContext = () => useContext(UsersContext)

export { useUsersContext }