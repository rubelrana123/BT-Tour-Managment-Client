import { Link } from "react-router";

 

export  function UnauthorizedPage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <h1>401 - Unauthorized</h1>
            <p>You do not have permission to view this page.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
} 