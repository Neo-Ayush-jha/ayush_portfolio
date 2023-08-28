import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from "framer-motion";
function Archive() {
    const [showMore, setShowMore] = useState(false)

    return (
        <div className='max-w-contentContainer mx-auto px-4 py-24'>
            <div className="w-full flex flex-col items-center">
                <h2 className="text-3xl font-titleFont font-semibold">
                    Other Noteworthy Projects
                </h2>
                <p className="text-sm font-titleFont text-textGreen">View the archive</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
                <ArchiveCard
                    title="Purnea Buzzar"
                    project="Ecommerce"
                    discription="This is my ecommerce laravel project, in this i used paytm for payment and breeze for authentication and more features are used in this project."
                    link="https://github.com/Neo-Ayush-jha/purneaBazzar--laravel-"
                    itemList={["HTML", "Bootstrap", "js", "Paytm", "mySql", "Laravel"]} />

                <ArchiveCard
                    title="CoachingAPI"
                    project="Tution classes"
                    discription="This is my online classes laravel project, in this i used razopay for payment and jwt authentication for authentication and more features are used in this project.My this project is clone of my class web side CWS"
                    link="https://github.com/Neo-Ayush-jha/CoachingAPI"
                    itemList={["HTML", "Bootstrap", "js", "Razopay", "jwt authentication", "API", "mySql", "Laravel"]} />

                <ArchiveCard
                    title="asChating"
                    project="Real time chat app"
                    discription="This is my real time chat app project, in this i used node.js and socket.iofor real time massage."
                    link="https://github.com/Neo-Ayush-jha/asChating"
                    itemList={["HTML", "Bootstrap", "node.js", "express", "socket.io"]} />

                <ArchiveCard
                    title="crud_operation_in_django"
                    project="Crud operation"
                    discription="This is my crud opration of django preactice project, in this i used allAuth authentication for authentication and in my this project google,github login."
                    link="https://github.com/Neo-Ayush-jha/crud_operation_in_django"
                    itemList={["HTML", "Bootstrap", "Django", "allAuth"]} />

                <ArchiveCard
                    title="My simple portfolie"
                    project="Portfolie"
                    discription="This is my first portfolie preactice project, in this i used simple html,css and js"
                    link="https://simple-portfolio-neo-git-main-neo-ayush-jha.vercel.app/ango"
                    itemList={["HTML", "css", "js"]} />

                <ArchiveCard
                    title="my-online-note-s"
                    project="Online note's"
                    discription="This is my crud opration of next.js preactice project, in this i used mongoDB for backend and in my this project store note like online learning sides."
                    link="https://github.com/Neo-Ayush-jha/my-online-note-s"
                    itemList={["HTML", "tailwind.css", "next.js", "mongoDB"]} />
                {
                    showMore && (
                        <>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                                <ArchiveCard
                                    title="Purnea Buzzar"
                                    project="Ecommerce"
                                    discription="This is my ecommerce laravel project, in this i used paytm for payment and breeze for authentication and more features are used in this project."
                                    link="https://github.com/Neo-Ayush-jha/purneaBazzar--laravel-"
                                    itemList={["HTML", "Bootstrap", "js", "Paytm", "mySql", "Laravel"]} />
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                <ArchiveCard
                                    title="Purnea Buzzar"
                                    project="Ecommerce"
                                    discription="This is my ecommerce laravel project, in this i used paytm for payment and breeze for authentication and more features are used in this project."
                                    link="https://github.com/Neo-Ayush-jha/purneaBazzar--laravel-"
                                    itemList={["HTML", "Bootstrap", "js", "Paytm", "mySql", "Laravel"]} />
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                <ArchiveCard
                                    title="Purnea Buzzar"
                                    project="Ecommerce"
                                    discription="This is my ecommerce laravel project, in this i used paytm for payment and breeze for authentication and more features are used in this project."
                                    link="https://github.com/Neo-Ayush-jha/purneaBazzar--laravel-"
                                    itemList={["HTML", "Bootstrap", "js", "Paytm", "mySql", "Laravel"]} />
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                <ArchiveCard
                                    title="Purnea Buzzar"
                                    project="Ecommerce"
                                    discription="This is my ecommerce laravel project, in this i used paytm for payment and breeze for authentication and more features are used in this project."
                                    link="https://github.com/Neo-Ayush-jha/purneaBazzar--laravel-"
                                    itemList={["HTML", "Bootstrap", "js", "Paytm", "mySql", "Laravel"]} />
                            </motion.div>
                        </>
                    )
                }
            </div>
            <div className='mt-12 flex items-center justify-center'>
                {showMore ? (<button onClick={() => setShowMore(false)} className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>Show Less</button>) : (<button onClick={() => setShowMore(true)} className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>Show More</button>
                )
                }
            </div>
        </div>
    )
}
export default Archive