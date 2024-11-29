import ClientComponent from "../client-component/page";
import ServerComponent from "../server-component/page";
import Header from "../props/page";
import UserProfile from "../multi-props/page";

export default function Page() {
    return (
        <>
            <UserProfile name='veecop' age={20} email='veecop@demo.com' isAdmin={false} />

            <div>Header and Props</div>
            <Header title='VEECOP' />

            <div>My Products from Server</div>
            <ServerComponent />

            <div>My Products from Server</div>
            <ClientComponent />
        </>
    );
}