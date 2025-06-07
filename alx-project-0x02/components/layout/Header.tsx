import Link from "next/link";

const Header: React.FC = () => {
    return(
        <header className="p-3 mb-2 bg-green-600">
            <div className="flex items-center justify-between gap-2 ">
                <div>
                    <h3>Welcome</h3>
                </div>
                
                <nav>
                    <ul className="flex gap-4 items-center p-2 rounded">
                        <li className="underline">
                            <Link href="/home">Home</Link>
                        </li>
                        <li  className="underline">
                             <Link href="/about">About</Link>
                        </li>
                        <li  className="underline">
                             <Link href="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}
export default Header;