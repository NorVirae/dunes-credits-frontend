import { ITransferModal } from "@/types"


const TransferModal = ({ creditsAmount,
    setCreditsAmount,
    recipient,
    setRecipient,
    transferCredits,
    closeTransferModal }: ITransferModal) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">Transfer Credits</h2>

                <label htmlFor="creditsAmount" className="block text-sm font-medium text-gray-600 mb-2">Enter Credits Amount:</label>
                <input type="number" id="creditsAmount" value={creditsAmount} onChange={(e) => setCreditsAmount(Number(e.target.value))} className="w-full p-2 border border-gray-300 rounded mb-4" />

                <label htmlFor="recipient" className="block text-sm font-medium text-gray-600 mb-2">Recipient Username:</label>
                <input type="text" id="recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} className="w-full p-2 border border-gray-300 rounded mb-4" />

                <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={transferCredits}>Transfer</button>
                <button className="bg-gray-300 text-black py-2 px-4 rounded ml-2" onClick={closeTransferModal}>Cancel</button>
            </div>
        </div>
    )
}

export default TransferModal