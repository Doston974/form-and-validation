import { FC, ReactNode } from "react"
import { Button } from "./button"

interface GoogleSignInButtonProps {
    children: ReactNode;
}

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
    const loginWithGoogle = () => console.log("login with google")

    return (
        <Button className="w-full" onClick={loginWithGoogle}>{children}</Button>
    )
}

export default GoogleSignInButton