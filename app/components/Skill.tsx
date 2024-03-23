"use client"
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const friendlyData = [
    {
        title: "C",
        img: "/c-1.svg",
    },
    {
        title: "C++",
        img: "/c.svg",
    },
    {
        title: "Python",
        img: "/python-5.svg",
    },
    {
        title: "JavaScript",
        img: "/logo-javascript.svg",
    },
    {
        title: "TypeScript",
        img: "/typescript.svg",
    },
    {
        title: "Java",
        img: "java-14.svg",
    },
    {
        title: "PHP",
        img: "php.svg",
    },
    {
        title: "Go",
        img: "golang-1.svg",
    },
    {
        title: "Rust",
        img: "rust.svg",
    },
];

const Skill = () => {
    return (
        <section className="py-2 xxl:py-24 bg-primary/5 dark:bg-bg3 bg-[url(/images/home/smartui-bg.png)]">
            <div className="container mb-5">
                <div className="max-w-2xl mx-auto text-center mb-6 lg:mb-10">
                    <h2 className="h2 text-xl font-semibold mb-4 lg:mb-6">プログラミング言語</h2>
                </div>
                <div className="grid grid-cols-12 gap-4 xxl:gap-6">
                    {friendlyData.map(({ title, img }) => (
                        <Tilt
                            key={title}
                            className="border border-slate-300 mx-2 h-48 col-span-12 min-[480px]:col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2 text-center box p-8 rounded-xl flex flex-col items-center justify-center shadow">
                            <div className="p-3 rounded-2xl bg-primary/5 box dark:bg-bg3 mb-4">
                                <Image src={img} width={70} height={70} alt="icon" />
                            </div>
                            <h5 className="text-lg">{title}</h5>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
