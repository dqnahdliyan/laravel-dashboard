import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={cn("bg-transparent font-medium text-sm transition-all rounded px-4 py-2 flex items-center gap-3 hover:bg-primary/20 [&>svg]:w-5 [&>svg]:h-5", {
                "bg-primary/20 pointer-events-none": active,
            })}
        >
            {children}
        </Link>
    );
}
