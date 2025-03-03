import React from 'react'

function Feedback() {
    const feedbacks = [
        { text: "Working with this team was a game-changer for us!", name: "Alice Johnson", role: "CEO, TechStart" },
        { text: "Their attention to detail and commitment to quality were outstanding.", name: "David Smith", role: "Co-founder, DevWorks" },
        { text: "Absolutely fantastic service! Highly recommended.", name: "Emma Brown", role: "Marketing Director, BrandX" },
        { text: "A truly professional team that delivers beyond expectations.", name: "Chris Walker", role: "CTO, Innovate Inc." },
        { text: "Exceptional service and support throughout our project.", name: "Sophia Martinez", role: "Lead Designer, CreativeHub" },
        { text: "Exceptional service and support throughout our project.", name: "Sophia Martinez", role: "Lead Designer, CreativeHub" },
        { text: "Exceptional service and support throughout our project.", name: "Sophia Martinez", role: "Lead Designer, CreativeHub" },
        { text: "Exceptional service and support throughout our project.", name: "Sophia Martinez", role: "Lead Designer, CreativeHub" },
        { text: "Exceptional service and support throughout our project.", name: "Sophia Martinez", role: "Lead Designer, CreativeHub" },
    ];

    return (
        <div>
            {/* Client Feedback */}
            <div className="mt-20 text-center w-full max-w-6xl">
                <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
                <p className="text-gray-400">Hear from those who’ve experienced our work firsthand.</p>
                <div className="overflow-hidden relative w-full mt-6">
                    <div className="flex space-x-6 animate-marquee">
                        {[...feedbacks, ...feedbacks].map((feedback, i) => (
                            <div key={i} className="bg-gray-800 p-6 rounded-lg w-80 flex-shrink-0">
                                <p className="text-gray-300">"{feedback.text}"</p>
                                <div className="mt-4 flex items-center space-x-3">
                                    <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
                                    <div>
                                        <p className="font-bold">{feedback.name}</p>
                                        <p className="text-sm text-gray-400">{feedback.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent"></div>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                  from {
                    transform: translateX(0);
                  }
                  to {
                    transform: translateX(-50%);
                  }
                }
                .animate-marquee {
                  display: flex;
                  width: 200%;
                  animation: marquee 20s linear infinite;
                }
            `}</style>
        </div>
    )
}

export default Feedback
