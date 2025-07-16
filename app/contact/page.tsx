import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiMapPin } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { MdMail, MdPhone } from "react-icons/md";
 
const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8
      border rounded-xl border-gray-700/50 p-5 sm:p-10
      backdrop-blur-xl bg-black/80">
        <Link href="/">
        <Button variant="ghost" className="hover:bg-black
        hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
          Back <BsArrowLeft className="ml-2"/>
        </Button>
        </Link>

        <div className="space-y-6">
            <h1 className="text-4xl bg-clip-text font-bold
            text-transparent bg-gradient-to-r from-emerald-400
            via-sky-300 to-blue-500">Get in Touch</h1>

            <div className="space-y-6">
                <p className="text-pretty text-nutral-200
                tracking-tight">I&apos;m always open to discussing new projects, creative
                ideas or
                oppurtunities to be part of your visions. Feel free to 
                reach out
                through any of the following channels</p>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg
                    border border-gray-700/50 bg-black/40">
                      <MdMail className="w-5 h-5 text-emerald-400"/>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a href="" className="text-neutral-500
                        hover:text-emerald-400
                        transition-colors">myuksel753@icloud.com</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-lg
                    border border-gray-700/50 bg-black/40">
                      <MdPhone className="w-5 h-5 text-emerald-400"/>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <a href="" className="text-neutral-500
                        hover:text-emerald-400
                        transition-colors">+90 (553) 715 80 54</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-lg
                    border border-gray-700/50 bg-black/40">
                      <BiMapPin className="w-5 h-5 text-emerald-400"/>
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-neutral-500
                        hover:text-emerald-400
                        transition-colors">Adana, Turkey</p>
                      </div>
                    </div>

                    
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default page
