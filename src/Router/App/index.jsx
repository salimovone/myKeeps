import { Outlet } from 'react-router';

function App() {
    return (
        <div className=' w-screen grid grid-cols-12'>
            <div className='bg-sky-700 w-full col-span-2 h-full'>SideBar</div>
            <div className='w-full col-span-10'>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
