import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Button } from '@/Components/ui/button'
import { HamburgerMenuIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons'
import { Badge } from '@/Components/ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';
import { Toaster } from '@/Components/ui/sonner';
import Header from '@/Components/Header';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/Components/ui/sheet';
import { ThemeToggle } from '@/Components/Theme';
import { useState } from 'react';

const pages = [
    { name: 'Dashboard', href: 'dashboard' },
    { name: 'Home', href: 'home' },
]

export default function App({ title = null, children }) {
    const user = usePage().props.auth.user
    const [showSidebar, setShowSidebar] = useState(true)
    function toggleSidebar() {
        setShowSidebar(!showSidebar)
    }
    return (
        <>
            <Head title={title} />
            <Toaster />

            <div className="flex relative">
                <Button size="icon" variant="outline" onClick={toggleSidebar} className={`absolute z-40 transition-all top-3.5 ${showSidebar ? 'left-48' : 'left-4'}`}>
                    <HamburgerMenuIcon />
                </Button>
                <div className={`h-screen flex flex-col border-r overflow-y-auto overflow-x-hidden transition-all ${showSidebar ? 'w-72' : 'w-0'}`}>
                    <div className="flex h-16 w-full p-4 justify-between items-center sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <div className="flex items-center gap-2">
                            <ApplicationLogo className="w-10 h-10 fill-foreground" />
                            <h3 className="font-bold">LARAVEL</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 p-3">
                        {pages.map((page) => (
                            <NavLink
                                key={page.name}
                                href={route(page.href)}
                                active={route().current(page.href)}
                            >
                                {page.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col w-full">
                    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <div className={`flex container h-16 justify-between gap-2 items-center ${!showSidebar && 'pl-16'}`}>
                            <Button
                                id="search"
                                variant="outline"
                                className="w-full md:max-w-xs flex justify-between items-center">
                                <span className='inline-flex'>
                                    Search ...
                                </span>
                                <Badge variant="outline">/</Badge>
                            </Button>
                            <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
                                <ThemeToggle />
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <div variant="outline" className="flex-shrink-0 gap-2 items-center md:flex cursor-pointer">
                                            <Avatar className="w-8 h-8 border-2 border-foreground">
                                                <AvatarImage src={user.photo} />
                                                <AvatarFallback><PersonIcon /></AvatarFallback>
                                            </Avatar>
                                            <span className='text-sm font-medium hidden md:inline-flex'>{user.name}</span>
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-56">
                                        <DropdownMenuLabel className="block md:hidden">{user.name}</DropdownMenuLabel>
                                        <Link href={route('profile.edit')}>
                                            <DropdownMenuItem>
                                                Profile
                                            </DropdownMenuItem>
                                        </Link>
                                        <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                                            Logout
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </header>
                    {title && (<Header children={title} />)}
                    <main className="container py-8">{children}</main>
                </div>
            </div>
        </>
    )
}
