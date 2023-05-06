import { UserFinded } from "../ViewModel/UserFinded";

export default interface HomeContextType {
    setUser: React.Dispatch<React.SetStateAction<UserFinded>>;
    user: UserFinded;
}