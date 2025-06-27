// src/components/OurServices.js
import {
    FaShieldAlt,
    FaUserShield,
    FaBuilding,
    FaUsersCog,
    FaMoneyCheckAlt,
    FaUserTie,
    FaTruckMoving,
    FaBoxes,
    FaBroom,
    FaVideo,
    FaHome,
    FaRecycle,
    FaCalendarCheck,
    FaUserSecret,
    FaCity,
} from 'react-icons/fa';

const services = [
    {
        icon: <FaShieldAlt size={32} />,
        title: 'Corporate security services',
        description:
            'Comprehensive security solutions tailored for businesses, including risk assessment, personnel deployment, and system implementation.',
    },
    {
        icon: <FaUserShield size={32} />,
        title: 'Security guard services',
        description:
            'Trained security personnel offering 24/7 protection, access control, and patrol services.',
    },
    {
        icon: <FaBuilding size={32} />,
        title: 'Integrated facility management',
        description:
            'End-to-end facility management, including maintenance, security, cleaning, and operational support.',
    },
    {
        icon: <FaUsersCog size={32} />,
        title: 'Manpower outsourcing company',
        description:
            'Staffing solutions for various sectors, including recruitment, training, and workforce management.',
    },
    {
        icon: <FaMoneyCheckAlt size={32} />,
        title: 'Payroll management services',
        description:
            'Payroll processing with tax handling, payslip generation, and compliance assurance.',
    },
    {
        icon: <FaUserTie size={32} />,
        title: 'Manpower supply agency',
        description:
            'Supply of skilled and unskilled personnel for both short- and long-term staffing needs.',
    },
    {
        icon: <FaTruckMoving size={32} />,
        title: 'Logistics transportation services',
        description:
            'Transport solutions including fleet management, tracking systems, and timely delivery.',
    },
    {
        icon: <FaBoxes size={32} />,
        title: 'B2B logistics company',
        description:
            'Warehousing, distribution, and supply chain management tailored for businesses.',
    },
    {
        icon: <FaBroom size={32} />,
        title: 'Housekeeping services',
        description:
            'Professional commercial/residential cleaning with regular and deep-clean protocols.',
    },
    {
        icon: <FaVideo size={32} />,
        title: 'Electronic surveillance services',
        description:
            'Installation and monitoring of CCTV and alarm systems for 24/7 security.',
    },
    {
        icon: <FaHome size={32} />,
        title: 'Property management company',
        description:
            'Real estate asset management including maintenance, tenants, and rent collection.',
    },
    {
        icon: <FaRecycle size={32} />,
        title: 'Waste management company',
        description:
            'Eco-friendly collection, recycling, and disposal with regulatory compliance.',
    },
    {
        icon: <FaCalendarCheck size={32} />,
        title: 'Event management company',
        description:
            'Planning and execution of corporate and social events from venue to logistics.',
    },
    {
        icon: <FaUserSecret size={32} />,
        title: 'Bouncer security services',
        description:
            'Crowd control and high-profile event security personnel ensuring safety and decorum.',
    },
    {
        icon: <FaCity size={32} />,
        title: 'Facade cleaning services',
        description:
            'Advanced cleaning of building exteriors for long-term structural and aesthetic integrity.',
    },
];

export default function OurServices() {
    return (
        <section className="py-16 bg-[#dedede] text-blue-900">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">
                    Our Services
                </h2>
                <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-800">
                    We provide end-to-end facility, security, banking, logistics, and utility support solutions for corporates across India.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-blue-900 p-6 rounded-xl text-white shadow hover:shadow-md transition duration-300 transform hover:scale-105"
                        >
                            <div className="text-yellow-400 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
  