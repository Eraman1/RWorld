

import RWorldBlog from '@/components/dashboard/RworldBlog';
import RWorldEnquiryTable from '@/components/dashboard/RWorldEnquiry';
import Sidebar from '@/components/dashboard/Sidebar';
import StockitEnquiry from '@/components/dashboard/StockitEnquiry';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import ScholarshipSidebar from '../components/dashboard/Sidebar';
// import StudentCardTable from '../components/dashboard/Students';
// import EnquiryTable from '../components/dashboard/Enquiry';
// import ImageUploader from '../components/dashboard/ImageUploader';

export default function Dashboard() {
    const location = useLocation();
    const [tab, setTab] = useState('dash');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        } else {
            setTab('dash');
        }
    }, [location.search]);

    return (
        <div className="flex min-h-screen mt-5">
            {/* Sidebar - fixed width */}
            <div className="md:w-50 lg:w-60 bg-white border-r shadow-md">
                <Sidebar />
            </div>

            {/* Main content - takes remaining space */}
            <div className="flex-1 p-4 overflow-auto">

                {tab === 'dash' && <h2>Dashboard View</h2>}
                {tab === 'rworld-enquiry' && <RWorldEnquiryTable />}
                {tab === 'rworld-blog' && <RWorldBlog />}
                {tab === 'enquiry' && <StockitEnquiry />}

            </div>

        </div>
    );
}

