import { ParentPlatform } from "../services/parentPlatform-service";
import useData from "./useData";

const usePlatforms = () => useData<ParentPlatform>('/platforms/lists/parents');

export default usePlatforms;