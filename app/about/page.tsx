import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
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
          via-sky to-blue-500">About Me</h1>

          <div className="space-y-4 text-neutral-200 text-pretty
          tracking-tight">
            <p>I'm Mert,
                I'm a designer with a strong background in web3, Mobile apps, and software development,
                coupled with my proficiency in design software and expertise in visual design,
                I am confident in my ability to make a meaningful impact on your team.</p>
            <p>As a passionate Designer, I’m confident that my developer background and
               UI/UX experience are exactly what you’re looking for and maybe more.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl bg-clip-text font-bold
          text-transparent bg-gradient-to-r from-emerald-400
          to-blue-500">Education</h2>
            <div className="space-y-2">
              <p className="font-medium">Bachelor of Computer Science</p>
              <p className="text-neutral-500">GPA: 3.2/4.0, Akdeniz University, 2017-2020</p>
            </div>
            </div>

          <div className="space-y-4">
            <h2 className="text-2xl bg-clip-text font-bold
          text-transparent bg-gradient-to-r from-emerald-400
          to-blue-500">Personal Experience</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Computer and Graphics Expert</p>
                <p className="text-neutral-500">Turkish Military, 2025</p>
                <a href="https://www.tsk.tr/" className="text-neutral-600">Website</a>
              </div>
              <div>
                <p className="font-medium">Lead UI/UX Designer</p>
                <p className="text-neutral-500">TopProp, 2023</p>
                <a href="https://www.toppropsports.com/" className="text-neutral-600">Website</a>
              </div>
              <div>
                <p className="font-medium">Frontend Developer</p>
                <p className="text-neutral-500">Haveno, 2023</p>
                <a href="https://haveno.exchange/" className="text-neutral-600">Website</a>
              </div>
              <div>
                <p className="font-medium">Print Design</p>
                <p className="text-neutral-500">Freelance, 2019-2020</p>
              </div>
            </div>
            <h2 className="text-2xl bg-clip-text font-bold
          text-transparent bg-gradient-to-r from-emerald-400
          to-blue-500">Certificate</h2>
          <div className="space-y-4">
            <div>
                <p className="font-medium">Fundamentals of Digital Marketing</p>
                <p className="text-neutral-600">HWH H5C 9SR</p>
                <p className="text-neutral-500">Google, 2020</p>
              </div>
              <div>
                <p className="font-medium">Python Training for Cyber ​Security</p>
                <p className="text-neutral-500">BTK Academy, 2020</p>
              </div>
          </div>
          </div>

          
        </div>
      </main>
    </div>
  )
}

export default page