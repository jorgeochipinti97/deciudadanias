"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
export default function Home() {
  const services = [
    {
      name: "Asesoramiento para ciudadanía",
      description:
        "Te guiamos en el proceso para obtener tu ciudadanía, asegurando que cumplas con todos los requisitos necesarios.",
    },
    {
      name: "Asesoramiento y gestión sobre genealogías familiares",
      description:
        "Descubre tus raíces y construye tu árbol genealógico con nuestro apoyo especializado.",
    },
    {
      name: "Traducción",
      description:
        "Servicios de traducción especializados para documentos legales y personales.",
    },
    {
      name: "Búsqueda de partidas",
      description:
        "Te ayudamos a encontrar partidas de nacimiento, matrimonio, defunción y otros documentos esenciales.",
    },
    {
      name: "Certificados",
      description:
        "Gestión y obtención de certificados necesarios para trámites legales y administrativos.",
    },
    {
      name: "Apostillamiento",
      description:
        "Servicio de apostillamiento para validar la autenticidad de tus documentos a nivel internacional.",
    },
  ];
  const team = [
    {
      id: 1,
      name: "Alejandra Susana Ifran",
      designation: "Gestora",
      image: "/ale.jpg",
    },
    {
      id: 2,
      name: "Silvina Andrea Ifran",
      designation: "Gestora",
      image: "/sil.png",
    },
    {
      id: 3,
      name: "Jorge Ariel Ochipinti",
      designation: "IT",
      image: "/jor.png",
    },
    // {
    //   id: 4,
    //   name: "Agustina Ochipinti",
    //   designation: "UX Designer",
    //   image:
    //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    // },
  ];

  return (
    <>
      <div className="video-background">
        <div className="overlay"></div>{" "}
        <video autoPlay muted loop playsInline id="myVideo">
          <source src={"/video1.mp4"} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      <div className="min-h-screen flex flex-col  justify-around">
        <div>
          <div>
            <p className="degrade text-5xl md:text-7xl  text-center font-geist font-bold  tracking-tighter">
              Deciudadanias
            </p>
            <p className="text-slate-200 font-mono font-Ciudadania Italiana   tracking-tighter  Ciudadania Española:text-neutral-200  text-center text-md  ">
              Su aliado confiable.
            </p>
          </div>
          <div >
            <div className="flex justify-center w-full">

            <p className="text-center text-white text-xl md:text-4xl font-geist font-extralight tracking-tighter mt-10  w-6/12 ">
              Expertos en gestionar ciudadanias y visas en
            </p>
            </div>
            <div className="flex w-full justify-center my-10 mt-5">
              <div className="mx-5 flex flex-col ">
                <Avatar className="md:w-[10vw] w-[20vw] h-auto">
                  <AvatarImage src="/esp.png" />
                  <AvatarFallback>España</AvatarFallback>
                </Avatar>
              </div>

              <div className="mx-5 flex flex-col">
                <Avatar className="md:w-[10vw] w-[20vw] h-auto">
                  <AvatarImage src="/ita.png" />
                  <AvatarFallback>Italia</AvatarFallback>
                </Avatar>
              </div>
              <div className="mx-5 flex flex-col">
                <Avatar className="md:w-[10vw] w-[20vw] h-auto">
                  <AvatarImage src="/usa.png" />
                  <AvatarFallback>Estados Unidos</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center my-10">
            <p className="text-white font-bold text-xl w-10/12 text-center  uppercase font-geist tracking-tighter">
              Su puerta hacia nuevos{" "}
              <span className="text-2xl degrade2">horizontes</span>.
            </p>
            <div className="mt-5">
              <Link href="https://wa.link/4e1ipl">
                <Button variant="secondary" className="text-xl font-mono">
                  {/* <svg
                width={30}
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g>
                  <path
                    stroke="#fff"
                    strokeWidth="1.5"
                    d="M4 6v13a3 3 0 003 3h10a3 3 0 003-3V9a3 3 0 00-3-3H4zm0 0V5"
                  ></path>
                  <circle
                    cx="12"
                    cy="13"
                    r="3"
                    stroke="#fff"
                    strokeWidth="1.5"
                  ></circle>
                  <path
                    fill="#fff"
                    d="M18 6v.75h.75V6H18zm-2.283-3.674l-.106-.742.106.742zM4.92 3.87l-.106-.743.106.743zM5.07 6.75H18v-1.5H5.071v1.5zM18.75 6V4.306h-1.5V6h1.5zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07l-.212-1.485zM4.814 3.126A1.821 1.821 0 003.25 4.93h1.5c0-.16.117-.295.276-.318l-.212-1.485zm13.936 1.18a2.75 2.75 0 00-3.139-2.722l.212 1.485a1.25 1.25 0 011.427 1.237h1.5zM5.071 5.25a.321.321 0 01-.321-.321h-1.5c0 1.006.815 1.821 1.821 1.821v-1.5z"
                  ></path>
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M10 19h4"
                  ></path>
                </g>
              </svg> */}
                  ¡Comenzá hoy!
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 w-screen bg-black/50 md:py-5  items-start">
          <div className="mx-2 flex mt-5 md:mt-0 flex-col items-center justify-center">
            <p className="font-bold text-white text-center text-4xl degrade2">
              +100{" "}
            </p>
            <p className="tracking-tighter text-white text-md  text-center">
              {" "}
              Partidas encontradas.
            </p>
          </div>
          <div className="mx-2 flex mt-5 md:mt-0 flex-col items-center justify-center">
          <p className="font-bold text-white text-center text-4xl degrade2">
              +15{" "}
            </p>
            <p className="tracking-tighter text-white text-md  text-center">
              {" "}
              Tramites finalizados.
            </p>
          </div>
          <div className="mx-2 flex mt-5 md:mt-0 flex-col items-center justify-center">
          <p className="font-bold text-white text-center text-4xl degrade2">
              +200{" "}
            </p>
            <p className="ftracking-tighter text-white text-md  text-center">
              {" "}
              Asesoramientos.
            </p>
          </div>
        </div>
      </div>

      <section className="min-h-screen">
      <p
                className="flex items-center justify-center text-center font-bold text-7xl font-geist mb-10 text-white"
                style={{ textShadow: "2px 2px 2px black" }}
              >
                Nuestros servicios.
              </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/20 p-6 rounded-lg shadow-md flex items-center justify-center flex-col"
            >
              <h3 className="leading-6 font-semibold text-2xl text-white tracking-tighter font-geist mb-2">
                {service.name}
              </h3>
              <p className="text-[#f5f5f7] mt-5 leading-4	 text-md font-mono tracking-tighter">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="  grid grid-cols-1 md:grid-cols-2 w-screen mt-20  ">
          <section className="flex justify-center h-full items-center ">
            <form className="w-11/12 md:w-6/12  p-5 rounded-xl bg-[rgba(0,0,0,0.8)] h-fit">
              <section>
                <Label className="font-bold text-white">Nombre Completo</Label>
                <Input className="font-mono" />
              </section>
              <section className="mt-5">
                <Select className="w-full font-mono">
                  <SelectTrigger className="w-full font-mono">
                    <SelectValue
                      className="font-mono"
                      placeholder="Elija su trámite"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      className="font-mono"
                      value="Ciudadania Italiana"
                    >
                      Ciudadania Italiana
                    </SelectItem>
                    <SelectItem
                      className="font-mono"
                      value="Ciudadania Española"
                    >
                      Ciudadania Española
                    </SelectItem>
                    <SelectItem
                      className="font-mono"
                      value="Visa Estadounidense"
                    >
                      Visa Estadounidense
                    </SelectItem>
                  </SelectContent>
                </Select>
              </section>
              <section className="mt-5">
                <Label className="font-bold text-white">
                  Pais de residencia
                </Label>
                <Input className="font-mono" />
              </section>
              <section className="mt-5 flex flex-col">
                <Textarea
                  className="font-mono"
                  placeholder="Aporta cualquier dato de valor para que podamos interpretar el estado del trámite."
                />
              </section>
              <section className="mt-5 flex flex-col">
                <Button variant="secondary">Enviar</Button>
              </section>
            </form>
          </section>
          <section className="flex justify-center ">
            <div className="flex  flex-col  md:mt-0 mt-5    justify-center ">
              <p
                className="flex items-center justify-center text-center font-bold text-7xl font-geist mb-10 text-white"
                style={{ textShadow: "2px 2px 2px black" }}
              >
                Nuestro Equipo.
              </p>
              <div className="flex justify-center ">
                <AnimatedTooltip items={team} />
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* <section>
        <p className="font-geist text-center font-bold text-white  text-6xl">
          Blog
        </p>
        <div className="grid grid-cols-3 w-screen mt-10">
          <div className="flex justify-center">
            <div
              style={{
                backgroundImage:
                  "linear-gradient( to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('./venecia.jpeg')",
                height: "35vh",
                width: "90%",
                backgroundSize: "cover",
              }}
              className="rounded-md"
            ></div>
          </div>
          <div className="flex justify-center">
            <div
              style={{
                backgroundImage:
                  "linear-gradient( to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('./venecia.jpeg')",
                height: "35vh",
                width: "90%",
                backgroundSize: "cover",
              }}
              className="rounded-md"
            ></div>
          </div>
          <div className="flex justify-center">
            <div
              style={{
                backgroundImage:
                  "linear-gradient( to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('./venecia.jpeg')",
                height: "35vh",
                width: "90%",
                backgroundSize: "cover",
              }}
              className="rounded-md"
            ></div>
          </div>
        </div>
      </section> */}
    </>
  );
}
