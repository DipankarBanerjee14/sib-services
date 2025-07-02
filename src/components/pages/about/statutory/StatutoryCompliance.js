'use client';

import {
    FaBuilding,
    FaUserShield,
    FaFileInvoiceDollar,
    FaFileAlt,
    FaFileContract,
    FaMoneyCheckAlt,
} from 'react-icons/fa';
import {
    BsFillBagCheckFill,
    BsBank2,
    BsFillFileEarmarkCheckFill,
    BsFillPeopleFill,
    BsLightningChargeFill,
    BsPersonBadge,
    BsCashCoin,
    BsPersonVcardFill,
    BsShieldCheck,
} from 'react-icons/bs';

const items = [
    { icon: <FaBuilding />, text: 'Registered Under the Companies Act 1956' },
    { icon: <FaUserShield />, text: 'Private Security Agency Licence' },
    { icon: <FaFileInvoiceDollar />, text: 'Income Tax Registration for Tax Deduction' },
    { icon: <BsBank2 />, text: 'EPF Registration' },
    { icon: <BsFillFileEarmarkCheckFill />, text: 'GST Registration' },
    { icon: <BsPersonBadge />, text: 'Contract Labour Licence Central and State Government' },
    { icon: <FaMoneyCheckAlt />, text: 'Employees & Gratuity Fund with LIC' },
    { icon: <BsFillBagCheckFill />, text: 'Trade Licence' },
    { icon: <BsCashCoin />, text: 'Shops & Establishment Registration' },
    { icon: <BsShieldCheck />, text: 'ESI Registration' },
    { icon: <BsPersonVcardFill />, text: 'Professional Tax Registration' },
    { icon: <BsLightningChargeFill />, text: 'High Tension Electrical Licence' },
    { icon: <FaFileContract />, text: 'Labour Welfare Fund Registration' },
];

export default function StatutoryCompliance() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-[#002060]">
            <h1 className="text-3xl font-bold mb-6">Statutory Compliance</h1>
            <p className="mb-8">
                At HRP Management, we take every necessary step to maintain 100% statutory compliance. It is a core part of our
                operations because we want you to achieve the best service expectations every time. Our experts are trained
                significantly to function with utmost transparency and regulatory compliance so that you can put your faith in
                us with ease. This aspect further reinforces our reputation as an efficient compliant service provider. With
                the help of these steps, we protect stakeholder interests and build lasting partnerships based on trust and
                professional integrity.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                Here is a list of all the registrations and licenses maintained by HRP Management:
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-blue-900 p-4 rounded-md shadow-sm">
                        <div className="text-yellow-400 text-3xl">{item.icon}</div>
                        <p className="text-white font-xl">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
