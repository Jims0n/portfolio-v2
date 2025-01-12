"use client";
import { title } from "process";
import { FaJs, FaReact, FaNodeJs, FaCss3, FaHtml5} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"

// about data
const about = {
    title: "About me",
    description: "",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Jimson"
        },
        {
            fieldName: "Phone",
            fieldValue: "09067012240"
        },
        {
            fieldName: "Experience",
            fieldValue: "4+ Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Nigeria"
        },
        {
            fieldName: "Email",
            fieldValue: "opeyemiabdulateef41@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
    ]
}

// experience data
const experience = {
    icon: "",
    title: "My experience",
    description: "lorem sum vkkin nfj",
    items: [
        {
            company: "Tech Solution",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
        {
            company: "Tech Solution",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
        {
            company: "Tech Solution",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
        {
            company: "Tech Solution",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
    ]
}

// education data
const education = {
    icon: "",
    title: "My education",
    description: "lorem",
    items: [
        {
            institution: "Unilorin",
            degree: "Bsc",
            duration: "2024 - Present",
        },
        {
            company: "Tech Solution",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
        
    ]
}

const skills = {
    title: "My skills",
    description: "lorem ipsum",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
    ]
}


const Resume = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{
        opacity: 1,
        transition: {
            delay: 2.4, duration: 0.4, ease: "easeIn"
        },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12
    xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {experience.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] px-10 py-6 rounded-xl
                                             flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span>{item.duration}</span>
                                                <h3>{item.position}</h3>
                                                <div>
                                                    {/* dot */}
                                                    <span></span>
                                                    <p>{item.company}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                     {/* education */}
                     <TabsContent value="education" className="w-full">
                        Education
                    </TabsContent>

                     {/* skills */}
                     <TabsContent value="skills" className="w-full">
                        Skilld
                    </TabsContent>

                     {/* about */}
                     <TabsContent value="about" className="w-full">
                        about
                    </TabsContent>
                </div>

            </Tabs>
        </div>

    </motion.div>
  )
}

export default Resume