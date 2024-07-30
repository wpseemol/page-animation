import Link from 'next/link';

export default function NavbarElement() {
    return (
        <header>
            <nav>
                <ul className="flex mx-auto w-fit space-x-4 mt-2">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/product">Product</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
