import { Link, useForm } from '@inertiajs/react';
import { Card, CardDescription, CardFooter, CardHeader } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    function submit(e) {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <Card>
            <CardHeader>
                {status === 'verification-link-sent' && (
                    <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                        A new verification link has been sent to the email address you provided during registration.
                    </div>
                )}
                <CardDescription>
                    Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                    link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                </CardDescription>
            </CardHeader>
            <form onSubmit={submit}>
                <CardFooter className="justify-between">
                    <Button disabled={processing}>Resend Verification Email</Button>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="text-sm text-primary/80"
                    >
                        Log Out
                    </Link>
                </CardFooter>
            </form>
        </Card>
    );
}

VerifyEmail.layout = page => <Guest title="Verify Email" children={page} />;
