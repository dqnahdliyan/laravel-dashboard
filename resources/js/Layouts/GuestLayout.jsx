import ApplicationLogo from '@/Components/ApplicationLogo';
import { ThemeToggle } from '@/Components/Theme';
import { Head, Link } from '@inertiajs/react';

export default function Guest({ title = null, children }) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
                <div className="absolute top-4 right-4">
                    <ThemeToggle />
                </div>
                <div>
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                </div>

                <div className="w-full sm:max-w-md mt-6">
                    {children}
                </div>
            </div></>
    );
}
