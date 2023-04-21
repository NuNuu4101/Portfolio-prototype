import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai"

import callmefid from "./assets/avatar1.jpg"
import design from "./assets/design.png"
import code from "./assets/code.png"
import consulting from "./assets/consulting.png"
import web1 from "./assets/web1.png"
import web2 from "./assets/web2.png"
import { useState } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [toggleButton, setToggleButton] = useState(true)
  return (
    <div className={darkMode ? "dark" : ""}>
      <header>
        <title>Fid Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-400">
              developedfidd
            </h1>
            <ul className="flex items-center">
              {toggleButton ? (
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => {
                      setDarkMode(!darkMode)
                      setToggleButton(!toggleButton)
                    }}
                    className="cursor-pointer text-2xl dark:text-gray-400"
                  />
                </li>
              ) : (
                <li>
                  <BsFillSunFill
                    onClick={() => {
                      setDarkMode(!darkMode)
                      setToggleButton(!toggleButton)
                    }}
                    className="cursor-pointer text-2xl dark:text-gray-400"
                  />
                </li>
              )}
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#project">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 dark:text-gray-400">
            <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl">
              Minn Htet Wai
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl ">
              Developer and designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
              Self-taught developer hoping to obtain actual experiences. Join me
              down below and let`s start the tour
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500">
            <a href="https://twitter.com/MinnHte46482093" target="_blank">
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://www.linkedin.com/in/mc-pro-nunuu-04a211263/"
              target="_blank">
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.youtube.com/channel/UC31Z1JIPdVPrY6WOELOemYQ"
              target="_blank">
              <AiFillYoutube />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <img
              src={callmefid}
              className="contrast-100 saturate-150 brightness-100 hue-rotate-15 absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 mt-6 dark:text-gray-400 dark:font-semibold">
              Services I will offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              I can create design and see probablites for websites. In the
              future, I would like to teach some of the stuff I will learn for
              <span className="text-teal-500"> youtube. </span> 
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Near in the future, I will offer from a wide range of services,
              including brand designs, programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white ">
              <div>
                <img src={design} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Creative Thinking Abilities
              </h3>
              <p className="py-2">
                Creating layout of website by thinking about the best websites
                I've seen.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div>
                <img src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Careful Manners</h3>
              <p className="py-2">
                As I am super carful person, I pay attention details to a
                website others have missed.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div>
                <img src={consulting} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Well-liked and Well-received
              </h3>
              <p className="py-2">
                As I am likeable person, people tend to stick to me for a
                reason.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 mt-6 dark:text-gray-400 dark:font-semibold">
              Portofolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Since the beginning of my journey as a freelance developer, I've
              done projects using
              <span className="text-teal-500"> API</span> and
              <span className="text-teal-500"> react</span> Moreover, I worked
              on some projects but not amazing ones but low-leveled noob ones.
            </p>
          </div>
          <div id="project">MY PROJECTS</div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap items-center">
            <div className="basis-1/3 flex-1">
              <img
                src={web1}
                className="rounded-lg object-cover w-full h-full"
              />
              <div>
                <div className="text-sm mt-1 dark:text-gray-400">
                  This is the project made by using html and CSS.Moreover, this
                  is the one that got me into web developer path again
                </div>
                <div className="flex gap-4 items-center">
                  <a
                    href="https://github.com/NuNuu4101/youtube-clone"
                    target="_blank">
                    <AiFillGithub className="text-2xl dark:text-gray-400" />
                  </a>
                  <div className="dark:text-gray-400">source code</div>
                  <a
                    href="https://youtube-clone-origin.netlify.app/"
                    target="_blank">
                    <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 mt-4">
                      Live demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web2}
                className="rounded-lg object-cover w-full h-full"
              />
              <div>
                <div className="text-sm mt-1 dark:text-gray-400">
                  This is the project made by using react and material UI and
                  made me understand API more.
                </div>
                <div className="flex gap-4 items-center">
                  <a
                    href="https://github.com/NuNuu4101/youtube-clone"
                    target="_blank">
                    <AiFillGithub className="text-2xl dark:text-gray-400" />
                  </a>
                  <div className="dark:text-gray-400">source code</div>
                  <a
                    href="https://youtubeclone4101.netlify.app/"
                    target="_blank">
                    <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 mt-4">
                      Live demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
