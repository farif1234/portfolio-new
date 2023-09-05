import Image from "next/image";
import experienceList from "@/data/experienceList";

export default function Home() {
    return (
        <div className="prose lg:prose-lg mx-auto max-w-3xl p-2">
            <div className="mb-1">
                My journey so far <span className="">🚀</span>
            </div>
            {experienceList.map(
                ({
                    id,
                    title,
                    company,
                    location,
                    dateStart,
                    dateEnd,
                    desc,
                }) => (
                    <div
                        key={id}
                        className="flex flex-row items-baseline justify-between group hover:bg-slate-200 duration-100  rounded-xl px-3 "
                    >
                        <div className="w-3/4 prose-p:mb-[1rem] prose-h4:font-extrabold prose-h4:group-hover: duration-100">
                            <h4 className="">
                                {title}{" "}
                                <span className=" text-sm   text-blue-600 group-hover:text-base duration-100 ">
                                    @ {company}
                                </span>
                            </h4>
                            {desc.map((dsc) => (
                                <p className="prose not-prose pr-3">{`> ${dsc}`}</p>
                            ))}
                        </div>
                        <div className="prose  prose-stone w-1/4 font-light text-sm group-hover:font-bold duration-100 pl-2   ">
                            {dateStart} - {dateEnd}
                            <p>{location}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
