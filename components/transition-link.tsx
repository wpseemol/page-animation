'use client';
import { Props } from '@/define-type/props';
import { animatePageOut } from '@/utils/animation';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function TransitionLink({ href, label }: Props) {
    const router = useRouter();
    const pathName = usePathname();

    const handelClick = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (pathName !== href) {
            animatePageOut(href, router);
        }
    };

    return (
        <Link href={href} onClick={handelClick}>
            {label}
        </Link>
    );
}
