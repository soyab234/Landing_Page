import { features } from "../constants/index";
export const FeatureSection = () => {
    return (
        <div className="realtive mt-20 border-b border-neutral-800 min-h-[800px] ">
            <div className="text-center">
                <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs tracking-wide font-semibold px-3 py-1 uppercase shadow-md shadow-orange-500/20 border border-orange-500/30">
                    Feature
                </span>

                <h2 className="text-3xl md:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking">
                    Easyly build{" "}
                    <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
                        your code
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 lg:w-1/3 p-4"
                        >
                            <div className="flex items-start">
                                {/* Icon */}
                                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-sm">
                                    <Icon />
                                </div>

                                {/* Text section */}
                                <div>
                                    <h5 className="mt-1 text-lg font-semibold">
                                        {feature.text}
                                    </h5>
                                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
