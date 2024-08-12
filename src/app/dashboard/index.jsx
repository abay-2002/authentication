import Navbar from "../../components/Navbar";
import useIsAuthorized from "../../costum-hooks/useIsAuthorized";

export default function Dashboard(){
    useIsAuthorized();

    return (
        <div>
            <Navbar />
            <p>
                Dashboard
            </p>
        </div>
    )
}