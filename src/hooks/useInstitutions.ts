import { useContext } from "react";
import { InstitutionsContext } from "../contexts/Institutions";

const useInstitutionsContext = () => useContext(InstitutionsContext)

export { useInstitutionsContext }