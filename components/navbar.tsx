import Link from 'next/link';
import TransitionLink from './transition-link';

export default function NavbarElement() {
    return (
        <header>
            <nav>
                <ul className="flex mx-auto w-fit space-x-4 mt-2">
                    <li>
                        <Link href="/">Home</Link>
                        <TransitionLink href="/" label="Home" />
                    </li>
                    <li>
                        <Link href="/product">Product</Link>
                        <TransitionLink href="/product" label="Product" />
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                        <TransitionLink href="/contact" label="Contact" />
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                        <TransitionLink href="/about" label="about" />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
