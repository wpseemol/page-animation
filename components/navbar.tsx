import TransitionLink from './transition-link';

export default function NavbarElement() {
    return (
        <header>
            <nav>
                <ul className="flex mx-auto w-fit space-x-4 mt-2">
                    <li>
                        <TransitionLink href="/" label="Home" />
                    </li>
                    <li>
                        <TransitionLink href="/product" label="Product" />
                    </li>
                    <li>
                        <TransitionLink href="/contact" label="Contact" />
                    </li>
                    <li>
                        <TransitionLink href="/about" label="about" />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
