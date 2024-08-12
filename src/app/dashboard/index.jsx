import Navbar from "../../components/Navbar";
import useIsAuthorized from "../../costum-hooks/useIsAuthorized";

export default function Dashboard(){
    const { loading } = useIsAuthorized();

    return (
        <>
            {!loading &&
                <div>
                    <Navbar />
                    <p>
                        Dashboard
                    </p>
                </div>
            }
            {loading &&
                <h1>
                    Loading...
                </h1>
            }
        </>
    )
}