import { Alert, AlertDescription } from "@/Components/ui/alert";
import App from "@/Layouts/AppLayout";

export default function Home() {
    return (
        <>
            <Alert>
                <AlertDescription className="text-lg">
                    This is Home
                </AlertDescription>
            </Alert>
        </>
    );
}

Home.layout = page => <App title="Home" children={page} />
