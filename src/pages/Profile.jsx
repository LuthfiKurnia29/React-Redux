import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
    return (
        <div className="">
            <h1>ProfilePage</h1>
            <h1>Username : {username}</h1>
        </div>
    )
}

export default ProfilePage;