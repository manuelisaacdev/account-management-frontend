import Session from "@/interfaces/Session";
import User from "@/interfaces/User";

export default interface CardUserProps {
    user: User,
    session: Session,
    handleDelete: (user:User) => void,
}