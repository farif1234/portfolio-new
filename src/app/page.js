import Image from "next/image";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function Home() {
    const link =
        "text-black hover:text-blue-500 hover:scale-125 duration-200 cursor-pointer";
    return (
        <div className=" ">
            <div className="prose  lg:prose-lg mx-auto max-w-3xl p-2">
                <h3 className="flex flex-row justify-between items-center">
                    <span>
                        Hi, I'm Faihaan
                        <img
                            src="/Hi.gif"
                            width="30px"
                            className="inline-block ml-3"
                        ></img>
                    </span>

                    <div className="flex w-1/3  justify-around  px-5   ">
                        <a href="https://github.com/farif1234" target="_blank">
                            <FaGithub className={link} size={25} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/faihaan-arif"
                            target="_blank"
                        >
                            <FaLinkedin className={link} size={25} />
                        </a>
                        <a href="mailto:farif.dev@gmail.com">
                            <FaMailBulk className={link} size={25} />
                        </a>
                    </div>
                </h3>
                {/* <Image
                    src="/me.jpg"
                    width={300}
                    height={500}
                    className="scale-75"
                /> */}
                <p className="">
                    I'm a CS student 👨‍🎓, aspiring software engineer 👨‍💻, and a
                    lifelong learner 📚. Currently, I have the privilege of
                    working as a software test engineer intern at{" "}
                    <span className=" ">Intel</span>. My interests are
                    full-stack development, database design, and healthcare
                    tech.
                </p>
                {/* <p>
                    Currently, I have the privilege of working as a software
                    test engineer intern at Intel. My interests are full-stack
                    development, database design, and healthcare tech.
                </p> */}
                <p>
                    Prior to my transition into tech, I earned a degree in
                    Biology from{" "}
                    <span className=" text-yellow-400 font-semibold ">
                        Purdue
                    </span>{" "}
                    and had plans for medical school. However, I realized what I
                    really wanted in a career was to
                    <span className="font-bold"> build things</span> and{" "}
                    <span className="font-bold">solve problems</span>. That's
                    when I delved into programming and it was love at first
                    sight. I decided to attend{" "}
                    <span className=" text-orange-600 font-semibold">
                        Oregon State
                    </span>
                    's post-baccalaureate program to pursue a degree in Computer
                    Science, and I'm excited to advance in my career.
                </p>
                <p>
                    When I'm not furiously debugging, you can find me lifting
                    weights, shooting hoops, or playing chess.
                </p>
            </div>
        </div>
    );
}
