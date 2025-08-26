import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants/index";

export const Workflow = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6">
                Accelerate your{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
                    coding workflow
                </span>
            </h2>

            <div className="flex flex-wrap justify-center mt-10">
                <div className="p-2 w-full lg:w-2/5">
                    <img src={codeImg} alt="Code Illustration" />
                </div>

                <div className="p-12 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <div className="font-semibold mt-2">
                                    {item.title}
                                </div>
                                <div className="text-gray-400">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
