import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
        BiBuilding,
        BiChevronRight,
        BiLogoGithub,
        BiLogoLinkedin,
        BiLogoTwitter,
        BiLogoWikipedia,
} from "react-icons/bi";
import { HiArrowDown } from "react-icons/hi";
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="w-full max-w-xl m-3 md:m-8 z-50 space-y-8
      border border-gray-700/50 rounded-xl p-5 sm:p-10
      backdrop-blur-xl bg-black/80">
        <div className="flex sm:flex-row sm:justify-between
        sm:items-center flex-col-reverse items-start gap-3 sm:gap-10">
          <div className="flex items-center gap-3">
            <BiBuilding className="w-5 h-5"/>
            <h3 className="text-gray-400">Adana, Türkiye</h3>
          </div>

          <Button variant="ghost" className="hover:bg-black/50
          duration-300 hover:text-white rounded-full">
            <div className="relative flex text-sm gap-1 items-center
            justify-center h-3 w-3 rounded-full">
              <span className="animate-ping absolute inline-flex h-full
              w-full rounded-full bg-green-500"></span>
              <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <p>Available For Work</p>
          </Button>
        </div>

        <div>
          <h1 className="text-4xl">Mert M. Yüksel</h1>
          <h3 className="text-xl font-bold mt-2 bg-clip-text
          text-transparent bg-gradient-to-r from-emerald-400
          via-sky-300 to-blue-500">UI/UX Designer</h3>
          <p className="text-pretty tracking-tight mt-3 text-neutral-300">
            I'm a full time UI/UX Designer and ex-Devloper. My front end 
            development experience allows me to create better designs.
            <Link href="/contact" className="bg-clip-text
            text-transparent bg-gradient-to-r from-emerald-400
            via-sky-300 to-blue-500 font-bold opacity-90
            hover:opacity-100 trnsition-opacity">Contact Me {"  "}
            </Link>
          </p>
        </div>

        <nav className="space-y-4">
          <h3 className="text-xl font-bold
          text-emerald-400">Menu</h3>
          <div className="flex flex-col">
              <Link href="/about" className="w-1/2 border bg-black/30
              border-gray-700/40 flex group items-center justify-between p-3 
              cursor-pointer transition-colors duration-200 ease-linear
              hover:bg-zinc-800/40 rounded-lg">
                <span>About</span>
                <BiChevronRight className="mr-5 text-2xl translate-x-0
                group-hover:translate-x-3 text-gray-300 opacity-0
                group-hover:opacity-100 transition-all duration-200"></BiChevronRight>
              </Link>
          </div>

                    <div className="flex flex-col">
              <Link href="/work" className="w-1/2 border bg-black/30
              border-gray-700/40 flex group items-center justify-between p-3 
              cursor-pointer transition-colors duration-200 ease-linear
              hover:bg-zinc-800/40 rounded-lg">
                <span>Work</span>
                <BiChevronRight className="mr-5 text-2xl translate-x-0
                group-hover:translate-x-3 text-gray-300 opacity-0
                group-hover:opacity-100 transition-all duration-200"></BiChevronRight>
              </Link>
          </div>

                    <div className="flex flex-col">
              <Link href="/skills" className="w-1/2 border bg-black/30
              border-gray-700/40 flex group items-center justify-between p-3 
              cursor-pointer transition-colors duration-200 ease-linear
              hover:bg-zinc-800/40 rounded-lg">
                <span>Skills</span>
                <BiChevronRight className="mr-5 text-2xl translate-x-0
                group-hover:translate-x-3 text-gray-300 opacity-0
                group-hover:opacity-100 transition-all duration-200"></BiChevronRight>
              </Link>
          </div>

                    <div className="flex flex-col">
              <Link href="/contact" className="w-1/2 border bg-black/30
              border-gray-700/40 flex group items-center justify-between p-3 
              cursor-pointer transition-colors duration-200 ease-linear
              hover:bg-zinc-800/40 rounded-lg">
                <span>Contact</span>
                <BiChevronRight className="mr-5 text-2xl translate-x-0
                group-hover:translate-x-3 text-gray-300 opacity-0
                group-hover:opacity-100 transition-all duration-200"></BiChevronRight>
              </Link>
          </div>

          <div className="flex gap-2 items-center">
            <h3 className="text-xl bg-clip-text font-bold 
            text-transparent bg-gradient-to-r from-emerald-400
            via-sky-400 to-blue-400">Check out my Socials</h3>
            <HiArrowDown className="text-2xl text-sky-400"></HiArrowDown>
          </div>

          <div className="flex flex-col gap-3">
           <a href="https://www.linkedin.com/in/mert-y%C3%BCksel753/"> <Button className="bg-black/30 w-full p-6 text-gray-300
            border border-gray-700/40 hover:bg-slate-300/20
            hover:text-white transition-colors duration-200
            ease-linear">
              <BiLogoLinkedin/> Linkedin
            </Button>
            </a>
          </div>

                    <div className="flex flex-col gap-3">
          <a href="https://twitter.com/merty753"> <Button className="bg-black/30 w-full p-6 text-gray-300
            border border-gray-700/40 hover:bg-slate-300/20
            hover:text-white transition-colors duration-200
            ease-linear">
              <BiLogoTwitter/> X
            </Button>
            </a>
          </div>

                    <div className="flex flex-col gap-3">
           <a href="https://github.com/mmy753"> <Button className="bg-black/30 w-full p-6 text-gray-300
            border border-gray-700/40 hover:bg-slate-300/20
            hover:text-white transition-colors duration-200
            ease-linear">
              <BiLogoGithub/> Github
            </Button>
            </a>
          </div>

                    <div className="flex flex-col gap-3">
        <a href="https://wellfound.com/u/mert-yuksel-2"> <Button className="bg-black/30 w-full p-6 text-gray-300
            border border-gray-700/40 hover:bg-slate-300/20
            hover:text-white transition-colors duration-200
            ease-linear">
              
              <BiLogoWikipedia/> WellFound
              
            </Button>
            </a>
          </div>
          
        </nav>
      </main>
    </div>
  );
}