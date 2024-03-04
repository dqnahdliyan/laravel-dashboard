import { Alert, AlertDescription } from "@/Components/ui/alert";
import App from "@/Layouts/AppLayout";

export default function Dashboard() {
    return (
        <>
            <Alert>
                <AlertDescription className="text-lg">
                    You're logged in!
                </AlertDescription>
            </Alert>
        </>
    );
}

Dashboard.layout = page => <App title="Dashboard" children={page} />
