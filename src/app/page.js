import Image from "next/image";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import ScrambleText from "@/components/ScrambleText";

export default function Home() {
    const link =
        "text-black hover:text-blue-500 hover:scale-125 duration-200 cursor-pointer";
    return (
        <div className="md:mt-4 ">
            <div className="prose prose-sm  md:prose-lg mx-auto max-w-3xl p-2 prose-img:p-0 prose-img:m-0 prose-hr:mt-0 prose-hr:mb-5 prose-h1:m-0 prose-lead:text-xs  md:prose-lead:text-xl ">
                <h1 className="flex  flex-row justify-between items-center ">
                    <span>
                        Hi, I'm{" "}
                        <span className=" text-blue-600 ">Faihaan.</span>
                    </span>

                    <div className="flex w-1/3  justify-around  px-5 max-md:mt-5  ">
                        <a
                            href="https://github.com/farif1234"
                            target="_blank"
                            className=""
                        >
                            <FaGithub className={link} size={25} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/faihaan-arif"
                            target="_blank"
                            className="max-md:px-3"
                        >
                            <FaLinkedin className={link} size={25} />
                        </a>
                        <a href="mailto:farif.dev@gmail.com" className="">
                            <FaMailBulk className={link} size={25} />
                        </a>
                    </div>
                </h1>
                <div className="lead italic w-fit font-light  ">
                    {/* I'm a CS student 👨‍🎓, aspiring software engineer 👨‍💻, and a
                    lifelong learner 📚.{" "} */}
                    <ScrambleText />
                </div>
                <div className="flex  justify-center mb-5">
                    <Image
                        src="/me-zoomed.jpg"
                        height={160}
                        width={160}
                        className="max-md:scale-75 inline-block rounded-full prose prose-not hover:shadow-2xl hover:shadow-gray-500 duration-200 hover:scale-105"
                    />
                </div>

                <hr></hr>
                <h3 className="">About Me</h3>
                <p className="">
                    Currently, I'm working on some awesome projects as a
                    solutions engineer analyst at{" "}
                    <span className=" font-bold fonnt- ">Deloitte</span>. My
                    interests are full-stack development, software architecture,
                    and healthcare tech.
                </p>
                <p>
                    Prior to my transition into tech, I earned a BS in Biology
                    from <span className=" ">Purdue</span> and had plans for
                    medical school. However, I realized what I really wanted in
                    a career was to
                    <span className="font-bold"> build things</span> and{" "}
                    <span className="font-bold">solve problems</span>. That's
                    when I delved into programming and it was love at first
                    sight. I decided to attend{" "}
                    <span className=" text-orange-600 font-semibold">
                        Oregon State
                    </span>
                    's post-baccalaureate program to pursue a degree in Computer
                    Science, and I'm looking forward to grow and learn as a
                    software developer.
                </p>
                <p>
                    When I'm not furiously debugging, you can find me lifting
                    weights, shooting hoops, or playing chess.
                </p>
            </div>
        </div>
    );
}
