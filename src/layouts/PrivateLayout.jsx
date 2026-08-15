import { Outlet } from 'react-router'

const PrivateLayout = () => {
    return (
        <>
            <header>Navbar</header>
            <main><Outlet /></main>
        </>
    )
}

export default PrivateLayout