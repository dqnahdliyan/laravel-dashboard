import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdatePhotoForm from './Partials/UpdatePhotoForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import App from '@/Layouts/AppLayout';

export default function ProfileEdit({ mustVerifyEmail, status }) {
    return (
        <div className="mx-auto space-y-6">
            <div>
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}

                />
            </div>

            <div>
                <UpdatePhotoForm />
            </div>

            <div>
                <UpdatePasswordForm />
            </div>

            <div>
                <DeleteUserForm />
            </div>
        </div>
    );
}

ProfileEdit.layout = (page) => <App title="Profile" children={page} />
