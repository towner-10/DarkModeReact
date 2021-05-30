import Head from "next/head";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  if (theme == null) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-1/2 transition items-center justify-center font-medium rounded-md transform motion-safe:hover:scale-110 bg-black dark:bg-white text-white dark:text-black"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <p className="py-2">{theme.replace(/^\w/, (c) => c.toUpperCase())}</p>
    </button>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div></div>;

  return (
    <div className="flex flex-col gap-y-3 items-center bg-white dark:bg-gray-800 justify-center min-h-screen py-2">
      <Head>
        <title>Dark Mode Testing</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600 dark:text-red-600 animate-pulse">
            Dark Mode
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 dark:bg-gray-600 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 dark:hover:text-red-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 dark:hover:text-red-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 dark:hover:text-red-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 dark:hover:text-red-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <div className="mt-6 w-full md:w-3/4 lg:w-1/2">
          <ThemeChanger></ThemeChanger>
        </div>
      </main>
    </div>
  );
}
