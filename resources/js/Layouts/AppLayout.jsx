import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Button } from '@/Components/ui/button'
import { HamburgerMenuIcon, PersonIcon } from '@radix-ui/react-icons'
import { Badge } from '@/Components/ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';
import { Toaster } from '@/Components/ui/sonner';
import Header from '@/Components/Header';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/Components/ui/sheet';
import { ThemeToggle } from '@/Components/Theme';

const pages = [
    { name: 'Dashboard', href: 'dashboard' },
]

export default function App({ title = null, children }) {
    const user = usePage().props.auth.user
    return (
        <>
            <Head title={title} />
            <Toaster />
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 justify-between gap-2 items-center">
                    <div className="mr-4 hidden md:flex">
                        <Link
                            className="mr-6"
                            href="/">
                            <ApplicationLogo className="h-8 w-8 fill-foreground" />
                        </Link>
                        <nav className="flex items-center gap-2 text-sm">
                            {pages.map((page, i) => (
                                <NavLink key={i} href={route(page.href)} active={route().current(page.href)} children={page.name} />
                            ))}
                        </nav>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="inline-flex md:hidden flex-shrink-0">
                                <HamburgerMenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>PAGES</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-3 py-3">
                                {pages.map((page, i) => (
                                    <SheetClose key={i} asChild>
                                        <NavLink href={route(page.href)} active={route().current(page.href)} children={page.name} />
                                    </SheetClose>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
                        <Button
                            id="search"
                            variant="outline"
                            className="w-full md:max-w-xs flex justify-between items-center">
                            <span className='inline-flex'>
                                Search ...
                            </span>
                            <Badge variant="outline">/</Badge>
                        </Button>
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
        </>
    )
}
