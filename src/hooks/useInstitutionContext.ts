import { useContext } from "react";

import { InstitutionContext } from "../contexts/Institution";

const useInstitutionContext = () => useContext(InstitutionContext)

export { useInstitutionContext }