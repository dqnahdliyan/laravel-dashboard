import { Link, useForm, usePage } from "@inertiajs/react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import { toast } from "sonner";
import InputError from "@/Components/InputError";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status
}) {
    const user = usePage().props.auth.user;
    const { data, setData, patch, errors, processing } = useForm({
        name: user.name,
        email: user.email,
        username: user.username,
        about: user.about,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("profile.update"), {
            onSuccess: () => {
                toast.success("Profile updated.");
            },
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account's profile information and email address.</CardDescription>
            </CardHeader>

            <form onSubmit={submit}>
                <CardContent className="grid gap-3 max-w-xl">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            autoFocus
                            autoComplete="name"
                        />
                        <InputError message={errors.name} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            autoComplete="username"
                        />
                        <InputError message={errors.email} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            type="text"
                            value={data.username}
                            onChange={(e) => setData("username", e.target.value)}
                            required
                            autoComplete="username"
                        />
                        <InputError message={errors.username} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="about">About</Label>
                        <Textarea
                            id="about"
                            type="text"
                            value={data.about}
                            onChange={(e) => setData("about", e.target.value)}
                            autoComplete="about"
                        />
                        <InputError message={errors.about} />
                    </div>

                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div>
                            <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                                Your email address is unverified.
                                <Link
                                    href={route("verification.send")}
                                    method="post"
                                    as="button"
                                    className="text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                >
                                    Click here to re-send the verification email.
                                </Link>
                            </p>

                            {status === "verification-link-sent" && (
                                <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                                    A new verification link has been sent to your
                                    email address.
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>

                <CardFooter>
                    <Button type="submit" disabled={processing}>Save</Button>
                </CardFooter>
            </form>
        </Card>
    );
}
