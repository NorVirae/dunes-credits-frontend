// components/Dashboard.tsx
import Layouts from '@/components/layouts';
import TransferModal from '@/components/modals/TransferModal';
import { useState } from 'react';

const Dashboard: React.FC = () => {
    const [userCredits, setUserCredits] = useState<number>(100);
    const [creditsAmount, setCreditsAmount] = useState<number>(0);
    const [recipient, setRecipient] = useState<string>('');
    const [isTransferModalOpen, setIsTransferModalOpen] = useState<boolean>(false);

    const openTransferModal = () => {
        setIsTransferModalOpen(true);
    };

    const closeTransferModal = () => {
        setIsTransferModalOpen(false);
    };

    const transferCredits = () => {
        // Add your logic for credit transfer here
        // You can access creditsAmount and recipient
        // Update userCredits accordingly
        setUserCredits(userCredits - creditsAmount);
        closeTransferModal();
    };

    return (
        <Layouts>
            <div className="bg-white p-8 gap-4 rounded shadow-md w-96 h-screen text-black flex flex-col justify-content align-items">
                <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>

                <div className="mb-4">
                    <p className="text-gray-600">Your Credits: <span className="font-bold">{userCredits}</span></p>
                </div>

                <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4" onClick={openTransferModal}>Transfer Credits</button>

                {/* Transfer Credits Modal */}
                {isTransferModalOpen && (
                    <TransferModal creditsAmount={creditsAmount}
                        setCreditsAmount={setCreditsAmount}
                        recipient={recipient}
                        setRecipient={setRecipient}
                        transferCredits={transferCredits}
                        closeTransferModal={closeTransferModal} />
                )}
            </div>
        </Layouts>
    );
};

export default Dashboard;
