'use client';

export default function Location() {
    return (
        <div className="max-w-[78rem] bg-white shadow-md rounded-lg mt-5 mb-5 mx-auto px-4 py-10 text-[#002060]">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Locations</h1>
            <p className="mb-4">
                At HRP Management Private Limited, we operate with a steadily growing footprint,
                which has made it possible for us to help clients across various regions in India. We
                are committed to reaching you wherever you are, so that you can enjoy accessible,
                responsive, and tailored facilities at any time. Our strategically placed offices and
                operational hubs enable us to deliver solutions of the highest standard without any
                difficulty.
            </p>
            <p className="mb-4">
                Each branch we have plays an integral part in our central service system, making it
                efficient for us to be consistent and meet your requirements. Irrespective of whether
                your property is located in a metropolitan city or a developing industrial zone, depend
                on us to handle your necessities with the same level of integrity and regulatory
                compliance.
            </p>
            <p className="mb-4">
                Since we have experience in several industries, it also gives us an edge over
                operational challenges, helping us resolve them through practical and hands-on
                solutions. Therefore, feel free to rely on us when running a firm in sectors such as
                banking, logistics, facility management, manpower deployment, payroll, housekeeping,
                and more.
            </p>
            <p className="mb-4">
                We understand that proximity to our services is a key factor for clients, as it allows
                us to closely understand issues and be available whenever needed. This is why we have
                regional offices across the country. Additionally, it enables us to create more
                employment opportunities within local communities.
            </p>
            <p className="mb-8">
                Rest assured that we will be continuing to expand to new regions while upholding the
                standard of our facilities for maximum efficiency. Our pan-India presence stands as a
                testament to the trust our clients place in us and our ability to scale without
                compromising on performance.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Below is a list of cities and regions where we currently operate:</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-300 text-left">
                    <thead className="bg-[#002060] text-white">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">State/Union Territory</th>
                            <th className="px-4 py-2 border border-gray-300">Cities/Locations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ['Andaman and Nicobar Islands', 'Port Blair'],
                            ['Andhra Pradesh', 'Vijayawada'],
                            ['Arunachal Pradesh', 'Itanagar'],
                            ['Assam', 'Guwahati'],
                            ['Bihar', 'Patna'],
                            ['Chhattisgarh', 'Raipur'],
                            ['Delhi', 'Delhi'],
                            ['Goa', 'Bardez'],
                            ['Gujarat', 'Ahmedabad, Surat'],
                            ['Haryana', 'Gurugram/Gurgaon'],
                            ['Himachal Pradesh', 'Baddi'],
                            ['Jharkhand', 'Jamshedpur, Ranchi'],
                            ['Karnataka', 'Bangalore'],
                            ['Kerala', 'Thiruvananthapuram'],
                            ['Madhya Pradesh', 'Bhopal, Indore'],
                            ['Maharashtra', 'Mumbai, Pune'],
                            ['Manipur', 'Imphal East'],
                            ['Meghalaya', 'Shillong'],
                            ['Mizoram', 'Aizawl'],
                            ['Nagaland', 'Dimapur'],
                            ['Odisha', 'Bhubaneswar'],
                            ['Puducherry', 'Puducherry'],
                            ['Punjab', 'Mohali'],
                            ['Rajasthan', 'Jaipur'],
                            ['Sikkim', 'Gangtok'],
                            ['Tamil Nadu', 'Chennai'],
                            ['Telangana', 'Hyderabad'],
                            ['Tripura', 'Agartala'],
                            ['Uttar Pradesh', 'Lucknow'],
                            ['Uttarakhand', 'Dehradun'],
                            ['West Bengal', 'Barasat, Kolkata, Malda, Siliguri']
                        ].map(([state, city], index) => (
                            <tr key={index} className="even:bg-gray-50">
                                <td className="px-4 py-2 border border-gray-300">{state}</td>
                                <td className="px-4 py-2 border border-gray-300">{city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
