import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={cn("text-sm bg-transparent text-foreground/70 transition-all font-medium rounded-full py-1 px-3 hover:text-foreground", {
                "bg-primary/20 text-primary-background": active,
            })}
        >
            {children}
        </Link>
    );
}
