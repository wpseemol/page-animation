'use client';
import { Props } from '@/define-type/props';
import { animatePageOut } from '@/utils/animation';
import { usePathname, useRouter } from 'next/navigation';

export default function TransitionLink({ href, label }: Props) {
    const router = useRouter();
    const pathName = usePathname();

    const handelClick = () => {
        if (pathName !== href) {
            animatePageOut(href, router);
        }
    };

    return <button onClick={handelClick}>{label}</button>;
}
