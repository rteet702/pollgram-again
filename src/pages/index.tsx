import Head from "next/head";
import { Inter } from "@next/font/google";
import { FormEvent } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const scrollToTarget = (
        e: FormEvent<HTMLAnchorElement>,
        target: string
    ) => {
        e.preventDefault();
        const targetNode = document.getElementById(target);

        if (!targetNode) {
            console.error("Target not found.");
            return;
        }

        targetNode.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <>
            <Head>
                <title>Pollgram</title>
                <meta
                    name="description"
                    content="A simple voting application built and maintained by Robert Teets."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="fixed top-0 right-0 left-0 z-50 flex h-16 list-none items-center justify-between px-10 text-2xl text-white">
                <button>Pollgram</button>
                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>Your Polls</li>
                </ul>
                <button>Login</button>
            </nav>
            <main className="flex flex-col text-white backdrop-blur-lg">
                <section className="flex h-screen items-end gap-16 p-5">
                    <h1 className="flex-[3] text-[9rem]">Ask any question.</h1>
                    <div className="flex h-[9rem] flex-[2] flex-col gap-3">
                        <p className="text-4xl">Ready to get started?</p>
                        <a
                            href="#createPoll"
                            onClick={(e) => scrollToTarget(e, "createPoll")}
                            className="rounded-lg bg-cyan-400 bg-opacity-30 px-10 py-5 text-center text-3xl shadow-xl backdrop-blur-md transition-colors hover:bg-opacity-75"
                        >
                            Get Started
                        </a>
                    </div>
                </section>

                <div className="h-[5rem] bg-gradient-to-b from-transparent to-[#00000080]"></div>

                <section
                    id="createPoll"
                    className="h-screen bg-black bg-opacity-50"
                ></section>
            </main>
        </>
    );
}
