import Image from "next/image";
import projectList from "@/data/projectList";
import { FaGithub } from "react-icons/fa";
import ImageOverlay from "@/components/ImageOverlay";

export default function Home() {
    return (
        <div className="prose lg:prose-lg mx-auto max-w-3xl p-2 prose-h4:m-0 prose-img:m-0">
            <div className="mb-6">
                Some of my favorite projects I've worked on 🛠️
            </div>
            {projectList.map(
                ({ id, title, desc, imageURL, githubURL, demo, tech }) => (
                    <div
                        key={id}
                        id="project"
                        className="flex flex-row mb-6 px-3 py-3 rounded-xl group hover:bg-slate-200 duration-100"
                    >
                        <div id="info" className="w-2/3  ">
                            <div
                                id="title"
                                className="flex flex-row justify-between items-center prose-h4:font-extrabold"
                            >
                                <h4 className="group-hover:text-blue-600 duration-100">
                                    {title}
                                </h4>
                                <div
                                    id="urls"
                                    className="flex flex-row mr-7 group-hover:scale-110 duration-100"
                                >
                                    {demo && (
                                        <a
                                            className="text-sm prose not-prose mr-5 no-underline hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer"
                                            target={demo == "/" ? "" : "_blank"}
                                            href={demo}
                                        >
                                            Demo
                                        </a>
                                    )}
                                    {githubURL && (
                                        <a
                                            className="text-sm prose not-prose h-fit "
                                            href={githubURL}
                                            target="_blank"
                                        >
                                            <FaGithub
                                                size={20}
                                                className="text-black hover:text-blue-500 hover:scale-125 duration-200 cursor-pointer"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <p className="text-sm pr-5">{desc}</p>
                            <div className="flex flex-row">
                                {tech.map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs rounded-lg px-1 py-[1.75px] mr-2 font-bold bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-300 to-blue-300  duration-100 "
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div id="image" className="w-1/3">
                            {/* <img
                                src={imageURL}
                                width={250}
                                height={150}
                                className=" duration-100"
                            /> */}
                            {imageURL && <ImageOverlay imageURL={imageURL} />}
                            {!imageURL && (
                                <div className="rounded-lg bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-500 to-orange-300 w-63 h-36"></div>
                            )}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
