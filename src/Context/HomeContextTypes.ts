import { UserFinded } from "../ViewModel/UserFinded";

export default interface HomeContextType {
    setUser: React.Dispatch<React.SetStateAction<UserFinded>> | React.Dispatch<React.SetStateAction<undefined>>;
    user: UserFinded | undefined;
    reload: boolean;
    setReload: React.Dispatch<React.SetStateAction<boolean>>
}