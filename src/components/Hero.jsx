import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
export const Hero = () => {
    return (
        <div className="flex flex-col mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-center tracking-wide max-w-4xl mx-auto">
                VirtualR build tools{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
                    for developers
                </span>
            </h1>

            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl mx-auto">
                Empower your creativity and bring your VR app idea life with our
                intuitive development tools. Get started today and turn your
                imagination into immersive reality!
            </p>
            <div className="flex justify-center my-10">
                <a className="bg-gradient-to-r  from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md cursor-pointer">
                    Start for free
                </a>
                <a className="py-3 px-4 border rounded-md hover:text-orange-500 cursor-pointer">
                    Documention
                </a>
            </div>
            <div className="grid md:flex mt-10 justify-center gap-5 ">
                <video
                    autoPlay
                    loop
                    muted
                    src={video1}
                    type="video/mp4"
                    className="border border-orange-500 rounded-lg shadow-md shadow-orange-600  w-70"
                ></video>
                <video
                    autoPlay
                    loop
                    muted
                    src={video2}
                    type="video/mp4"
                    className="border border-orange-500 rounded-lg shadow-md shadow-orange-600  w-70"
                ></video>
            </div>
        </div>
    );
};
