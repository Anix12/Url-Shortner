import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";

const AuthPage = () => {

    const [login, setLogin] = useState(true);

    return (
        <div className="min-h-full flex items-center justify-center px-4">
            {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin}/>}
        </div>
    );
}

export default AuthPage;