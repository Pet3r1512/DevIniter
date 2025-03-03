import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import DemoCard, { DemoCardProps } from "./DemoCard";
import Image from "next/image";
import { useInView } from "framer-motion";

export default function TemplateDemos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const demos: DemoCardProps[] = [
    {
      image: [
        "/images/templates/nextjs-dark.png",
        "/images/templates/nextjs.png",
      ],
      logo: "/images/templates/nextjs-deviniter.png",
      templateName: "Next.js - Page Router",
      techStacks: (
        <div className="flex items-center justify-center lg:justify-start gap-x-2.5 mt-5">
          <svg
            className="size-5 lg:size-8 dark:hidden inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="#000"
              d="M16 2a14 14 0 1 0 5.816 26.723L12 14v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.434a1 1 0 0 1 .857.486l11.491 19.15A14 14 0 0 0 16 2Zm8 16h-4V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 lg:size-8 dark:inline hidden"
            viewBox="0 0 32 32"
          >
            <path
              fill="#cfd8dc"
              d="M16 2a14 14 0 1 0 5.816 26.723L12 14v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.434a1 1 0 0 1 .857.486l11.491 19.15A14 14 0 0 0 16 2Zm8 16h-4V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z"
            />
          </svg>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="size-5 lg:size-8 inline"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>file_type_typescript_official</title>
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="1.312"
                fill="#3178c6"
              ></rect>
              <path
                d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
                fill="#fff"
              ></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 lg:size-8 inline"
            viewBox="0 0 32 32"
          >
            <path
              fill="#4db6ac"
              d="M23.5 12H8c.89-2.3 4.02-4 7.75-4 3.73 0 6.86 1.7 7.75 4ZM14 12h15.5c-.89 2.3-4.02 4-7.75 4-3.73 0-6.86-1.7-7.75-4Zm3.5 8H2c.89-2.3 4.02-4 7.75-4 3.73 0 6.86 1.7 7.75 4ZM8 20h15.5c-.89 2.3-4.02 4-7.75 4-3.73 0-6.86-1.7-7.75-4Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.1em"
            height="1em"
            className="size-5 lg:size-8 inline"
            viewBox="0 0 256 234"
          >
            <path
              fill="#fcc72b"
              d="m192.115 70.808l-61.2 88.488a5.27 5.27 0 0 1-2.673 2.002a5.3 5.3 0 0 1-3.343-.005a5.25 5.25 0 0 1-2.66-2.01a5.2 5.2 0 0 1-.903-3.203l2.45-48.854l-39.543-8.386a5.26 5.26 0 0 1-2.292-1.118a5.22 5.22 0 0 1-1.83-4.581a5.2 5.2 0 0 1 .895-2.383L142.218 2.27a5.28 5.28 0 0 1 6.016-1.996a5.24 5.24 0 0 1 2.66 2.01c.643.942.96 2.066.903 3.203l-2.45 48.855l39.542 8.386a5.26 5.26 0 0 1 2.293 1.117a5.21 5.21 0 0 1 1.829 4.582a5.2 5.2 0 0 1-.896 2.382"
            />
            <path
              fill="#729b1b"
              d="M128.025 233.537a12.36 12.36 0 0 1-8.763-3.63l-57.828-57.823a12.39 12.39 0 0 1 .023-17.5a12.394 12.394 0 0 1 17.5-.024l49.068 49.061L234.917 96.733a12.39 12.39 0 0 1 17.523 17.524l-115.655 115.65a12.34 12.34 0 0 1-8.76 3.63"
            />
            <path
              fill="#729b1b"
              fillOpacity="0.5"
              d="M127.975 233.537a12.36 12.36 0 0 0 8.763-3.63l57.828-57.823a12.4 12.4 0 0 0 3.605-8.754a12.395 12.395 0 0 0-12.375-12.376a12.4 12.4 0 0 0-8.755 3.606l-49.066 49.061L21.082 96.733a12.392 12.392 0 0 0-17.524 17.524l115.656 115.65a12.35 12.35 0 0 0 8.76 3.63"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 lg:size-8 inline"
            viewBox="0 0 32 32"
          >
            <path
              fill="#3f51b5"
              d="M22.713 4H9.287a.5.5 0 0 0-.432.248l-6.708 11.5a.5.5 0 0 0 0 .504l6.708 11.5a.5.5 0 0 0 .432.248h13.426a.5.5 0 0 0 .432-.248l6.708-11.5a.5.5 0 0 0 0-.504l-6.708-11.5A.5.5 0 0 0 22.713 4Zm-6.937 20.888-7.5-3.75A.5.5 0 0 1 8 20.691v-9.382a.5.5 0 0 1 .276-.447l7.5-3.75a.5.5 0 0 1 .448 0l7.5 3.75a.5.5 0 0 1 .276.447v9.382a.5.5 0 0 1-.276.447l-7.5 3.75a.5.5 0 0 1-.448 0Z"
            />
            <path
              fill="#7986cb"
              d="M22 19.441v-6.882a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0l-5.5 2.75a.5.5 0 0 0-.276.447v6.882a.5.5 0 0 0 .276.447l5.5 2.75a.5.5 0 0 0 .448 0l5.5-2.75a.5.5 0 0 0 .276-.447Z"
            />
          </svg>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 lg:size-8 inline"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>file_type_light_prisma</title>
              <path
                d="M25.21,24.21,12.739,27.928a.525.525,0,0,1-.667-.606L16.528,5.811a.43.43,0,0,1,.809-.094l8.249,17.661A.6.6,0,0,1,25.21,24.21Zm2.139-.878L17.8,2.883h0A1.531,1.531,0,0,0,16.491,2a1.513,1.513,0,0,0-1.4.729L4.736,19.648a1.592,1.592,0,0,0,.018,1.7l5.064,7.909a1.628,1.628,0,0,0,1.83.678l14.7-4.383a1.6,1.6,0,0,0,1-2.218Z"
                style={{ fill: "#5864DC", fillRule: "evenodd" }}
              ></path>
            </g>
          </svg>
        </div>
      ),
      liveDemoURL: "https://deviniter-nextjs-typescript-template.vercel.app/",
      style: {
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
      },
    },
    {
      image: ["/images/templates/vite-dark.png", "/images/templates/vite.png"],
      logo: "/images/templates/Vite_logo.png",
      templateName: "Vite - React.js",
      techStacks: (
        <div className="flex items-center justify-center lg:justify-start gap-x-2.5 mt-5">
          <Image
            src="/images/techstacks/vite.png"
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="size-5 lg:size-8"
          />
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="size-5 lg:size-8 inline"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>file_type_typescript_official</title>
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="1.312"
                fill="#3178c6"
              ></rect>
              <path
                d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
                fill="#fff"
              ></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 lg:size-8 inline"
            viewBox="0 0 32 32"
          >
            <path
              fill="#4db6ac"
              d="M23.5 12H8c.89-2.3 4.02-4 7.75-4 3.73 0 6.86 1.7 7.75 4ZM14 12h15.5c-.89 2.3-4.02 4-7.75 4-3.73 0-6.86-1.7-7.75-4Zm3.5 8H2c.89-2.3 4.02-4 7.75-4 3.73 0 6.86 1.7 7.75 4ZM8 20h15.5c-.89 2.3-4.02 4-7.75 4-3.73 0-6.86-1.7-7.75-4Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.1em"
            height="1em"
            className="size-5 lg:size-8 inline"
            viewBox="0 0 256 234"
          >
            <path
              fill="#fcc72b"
              d="m192.115 70.808l-61.2 88.488a5.27 5.27 0 0 1-2.673 2.002a5.3 5.3 0 0 1-3.343-.005a5.25 5.25 0 0 1-2.66-2.01a5.2 5.2 0 0 1-.903-3.203l2.45-48.854l-39.543-8.386a5.26 5.26 0 0 1-2.292-1.118a5.22 5.22 0 0 1-1.83-4.581a5.2 5.2 0 0 1 .895-2.383L142.218 2.27a5.28 5.28 0 0 1 6.016-1.996a5.24 5.24 0 0 1 2.66 2.01c.643.942.96 2.066.903 3.203l-2.45 48.855l39.542 8.386a5.26 5.26 0 0 1 2.293 1.117a5.21 5.21 0 0 1 1.829 4.582a5.2 5.2 0 0 1-.896 2.382"
            />
            <path
              fill="#729b1b"
              d="M128.025 233.537a12.36 12.36 0 0 1-8.763-3.63l-57.828-57.823a12.39 12.39 0 0 1 .023-17.5a12.394 12.394 0 0 1 17.5-.024l49.068 49.061L234.917 96.733a12.39 12.39 0 0 1 17.523 17.524l-115.655 115.65a12.34 12.34 0 0 1-8.76 3.63"
            />
            <path
              fill="#729b1b"
              fillOpacity="0.5"
              d="M127.975 233.537a12.36 12.36 0 0 0 8.763-3.63l57.828-57.823a12.4 12.4 0 0 0 3.605-8.754a12.395 12.395 0 0 0-12.375-12.376a12.4 12.4 0 0 0-8.755 3.606l-49.066 49.061L21.082 96.733a12.392 12.392 0 0 0-17.524 17.524l115.656 115.65a12.35 12.35 0 0 0 8.76 3.63"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 lg:size-8 inline"
            viewBox="0 0 32 32"
          >
            <path
              fill="#3f51b5"
              d="M22.713 4H9.287a.5.5 0 0 0-.432.248l-6.708 11.5a.5.5 0 0 0 0 .504l6.708 11.5a.5.5 0 0 0 .432.248h13.426a.5.5 0 0 0 .432-.248l6.708-11.5a.5.5 0 0 0 0-.504l-6.708-11.5A.5.5 0 0 0 22.713 4Zm-6.937 20.888-7.5-3.75A.5.5 0 0 1 8 20.691v-9.382a.5.5 0 0 1 .276-.447l7.5-3.75a.5.5 0 0 1 .448 0l7.5 3.75a.5.5 0 0 1 .276.447v9.382a.5.5 0 0 1-.276.447l-7.5 3.75a.5.5 0 0 1-.448 0Z"
            />
            <path
              fill="#7986cb"
              d="M22 19.441v-6.882a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0l-5.5 2.75a.5.5 0 0 0-.276.447v6.882a.5.5 0 0 0 .276.447l5.5 2.75a.5.5 0 0 0 .448 0l5.5-2.75a.5.5 0 0 0 .276-.447Z"
            />
          </svg>
        </div>
      ),
      liveDemoURL:
        "https://deviniter-vite-react-typescript-template.vercel.app/",
      className: "text-pink",
      style: {
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
      },
    },
    {
      image: [
        "/images/templates/vitestack-dark.png",
        "/images/templates/vitestack-light.png",
      ],
      logo: "/images/logos/ViteStack.png",
      templateName: "Vitestack",
      techStacks: (
        <div className="flex items-center justify-center lg:justify-start gap-x-2.5 mt-5">
          <Image
            src="/images/techstacks/vite.png"
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="size-5 lg:size-8"
          />
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="size-5 lg:size-8 inline"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>file_type_typescript_official</title>
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="1.312"
                fill="#3178c6"
              ></rect>
              <path
                d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
                fill="#fff"
              ></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 lg:size-8 inline"
            viewBox="0 0 32 32"
          >
            <path
              fill="#4db6ac"
              d="M23.5 12H8c.89-2.3 4.02-4 7.75-4 3.73 0 6.86 1.7 7.75 4ZM14 12h15.5c-.89 2.3-4.02 4-7.75 4-3.73 0-6.86-1.7-7.75-4Zm3.5 8H2c.89-2.3 4.02-4 7.75-4 3.73 0 6.86 1.7 7.75 4ZM8 20h15.5c-.89 2.3-4.02 4-7.75 4-3.73 0-6.86-1.7-7.75-4Z"
            />
          </svg>
          <Image
            src="/images/techstacks/tanstack.png"
            width={28}
            height={28}
            alt="tanstack"
          />
        </div>
      ),
      liveDemoURL: "https://deviniter-vitestack-template.vercel.app/",
      className: "text-yellow-500",
      style: {
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
      },
    },
  ];
  return (
    <section
      ref={ref}
      id="demo"
      className="flex flex-col gap-y-24 lg:gap-y-48 justify-center items-center min-h-screen max-w-7xl mx-auto overflow-x-hidden"
    >
      <SectionTitle
        title={"Templates in Action"}
        subtitle={"Preview our templates before you choose."}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-5 gap-y-10">
        {demos.map((demo, index) => {
          return <DemoCard key={index} props={demo} />;
        })}
      </div>
    </section>
  );
}
