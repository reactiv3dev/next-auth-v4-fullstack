import Link from "next/link"
import SignInButton from "./SignInButton"

const AppBar = () => {
    return (
        <header className="flex gap-4 p-4 bg-gradient-to-b from-black to-gray-800 shadow">
            <Link className="transition-colors hover:text-blue-500" href={"/"}>
                Home Page 
            </Link>
            <Link className="transition-colors hover:text-blue-500" href={"/UserPost"}>
            User Post Page
            </Link>
            <SignInButton/>
        </header>
    )
}

export default AppBar;