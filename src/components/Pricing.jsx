import React from "react";

/**
 * Pricing component with three plans: Free, Monthly, Yearly
 * - Uses TailwindCSS
 * - Each card has a "Subscribe" button styled with orange-500
 * - Optional onSubscribe callback prop
 */

const plans = [
    {
        id: "free",
        name: "Free",
        price: "$0",
        period: "Forever",
        highlight: false,
        features: ["Basic features", "Community support", "Limited usage"],
    },
    {
        id: "monthly",
        name: "Monthly",
        price: "$9",
        period: "/month",
        highlight: true,
        features: [
            "All Free features",
            "Priority support",
            "Unlimited projects",
        ],
    },
    {
        id: "yearly",
        name: "Yearly",
        price: "$90",
        period: "/year",
        badge: "Save 17%",
        highlight: false,
        features: [
            "Everything in Monthly",
            "Best value pricing",
            "Early access features",
        ],
    },
];

export default function Pricing({ onSubscribe }) {
    const handleSubscribe = (planId) => {
        if (typeof onSubscribe === "function") onSubscribe(planId);
    };

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Choose your plan
                </h2>
                <p className="mt-3 text-gray-500">
                    Simple pricing, no hidden fees. Upgrade or cancel anytime.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={[
                            "rounded-2xl border shadow-sm p-6 flex flex-col",
                            plan.highlight
                                ? "border-orange-500 shadow-md"
                                : "border-neutral-800",
                            "bg-neutral-900/40 backdrop-blur",
                        ].join(" ")}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">
                                {plan.name}
                            </h3>
                            {plan.badge && (
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/30">
                                    {plan.badge}
                                </span>
                            )}
                        </div>

                        <div className="mt-4">
                            <span className="text-4xl font-bold">
                                {plan.price}
                            </span>
                            <span className="ml-1 text-gray-400">
                                {plan.period}
                            </span>
                        </div>

                        <ul className="mt-6 space-y-2 text-sm text-gray-300">
                            {plan.features.map((f, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => handleSubscribe(plan.id)}
                            className="mt-6 inline-flex items-center justify-center w-full rounded-xl px-4 py-2 font-medium bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-offset-neutral-900"
                            aria-label={`Subscribe to ${plan.name}`}
                            type="button"
                        >
                            Subscribe
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
