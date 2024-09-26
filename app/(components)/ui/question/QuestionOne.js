import React from 'react'

export default function QuestionOne() {
    return (
        <>
            <div>
                <p className="mb-4">
                    To book your car, all you need is a credit or debit card. When you pick the car up, you{`'`}ll need:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Your voucher / eVoucher, to show that you{`'`}ve paid for the car.</li>
                    <li>The main driver{`'`}s credit / debit card, with enough available funds for the car{`'`}s deposit.</li>
                    <li>Each driver{`'`}s full, valid driving licence, which they{`'`}ve held for at least 12 months (often 24).</li>
                    <li>Your passport and any other ID the car hire company needs to see.</li>
                </ul>
            </div>
        </>
    )
}
