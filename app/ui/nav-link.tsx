'use client';

//import {usePathname} from 'next/navigation';
import Link from 'next/link';

export function NavLinks() {
    //const pathname = usePathname();
    return (
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/dashboard'>Dashboard</Link>
        </nav>
    );
}