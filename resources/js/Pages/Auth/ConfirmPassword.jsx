import { useEffect } from 'react';
import Guest from '@/Layouts/GuestLayout';
import { useForm } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import InputError from '@/Components/InputError';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    function submit(e) {
        e.preventDefault();
        post(route('password.confirm'));
    };

    return (
        <Card>
            <CardHeader>
                <CardDescription>
                    This is a secure area of the application. Please confirm your password before continuing.
                </CardDescription>
            </CardHeader>
            <form onSubmit={submit}>
                <CardContent className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} />
                </CardContent>

                <CardFooter className="justify-end">
                    <Button disabled={processing}>
                        Confirm
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}

ConfirmPassword.layout = page => <Guest title="Confirm Password" children={page} />
