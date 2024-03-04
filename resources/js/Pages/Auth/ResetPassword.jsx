import { useEffect } from 'react';
import Guest from '@/Layouts/GuestLayout';
import { useForm } from '@inertiajs/react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import InputError from '@/Components/InputError';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    function submit(e) {
        e.preventDefault();
        post(route('password.store'));
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>RESET PASSWORD</CardTitle>
            </CardHeader>

            <form onSubmit={submit}>
                <CardContent>
                    <div className='space-y-2'>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="new-password"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password_confirmation">Confirm Password</Label>
                        <Input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>
                </CardContent>

                <CardFooter className="justify-end">
                    <Button disabled={processing}>
                        Reset Password
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}

ResetPassword.layout = page => <Guest title="Reset Password" children={page} />
