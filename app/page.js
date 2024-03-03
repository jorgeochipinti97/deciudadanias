"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Avatar, AvatarFallback, img } from "@/components/ui/avatar";
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
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import gsap, { Power1 } from "gsap";
import { Spotlight } from "./components/Spotlight";
export default function Home() {
  const [tramite, setTramite] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/consulta", {
        ...data,
        tramiteSeleccionado: tramite,
      });

      response.data &&
        gsap.to(".alert", {
          opacity: 1,
          ease: Power1.easeIn,
        });

      response.data &&
        setTimeout(() => {
          gsap.to(".alert", {
            opacity: 0,
            ease: Power1.easeIn,
          });
        }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

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
      name: "Búsqueda de partidas",
      description:
        "Te ayudamos a encontrar partidas de nacimiento, matrimonio, defunción y otros documentos esenciales en todo el mundo.",
    },
    {
      name: "Certificados",
      description:
        "Gestión y obtención de certificados necesarios para trámites legales y administrativos.",
    },
    {
      name: "Traducción y Apostillamiento",
      description:
        "Servicios de traducción especializados para documentos legales y personales, junto con el servicio de apostillamiento para validar la autenticidad de tus documentos a nivel internacional.",
    },
    {
      name: "Migraciones a Argentina",
      description:
        "Asesoramiento integral y gestión de trámites para tu migración a Argentina, facilitando el proceso de establecimiento en el país.",
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
  ];

  return (
    <>
      <Alert
        className="alert fixed w-[80vw] md:w-[30vw] right-5 bottom-20 z-50"
        style={{ opacity: 0 }}
      >
        <svg
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 48 48"
        >
          <g>
            <path fill="#000" fillOpacity="0.01" d="M0 0H48V48H0z"></path>
            <path
              fill="#000"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M24 4l5.253 3.832 6.503-.012 1.997 6.188 5.268 3.812L41 24l2.021 6.18-5.268 3.812-1.997 6.188-6.503-.012L24 44l-5.253-3.832-6.503.012-1.997-6.188-5.268-3.812L7 24l-2.021-6.18 5.268-3.812 1.997-6.188 6.503.012L24 4z"
            ></path>
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M17 24l5 5 10-10"
            ></path>
          </g>
        </svg>
        <AlertTitle>¡Consulta enviada con éxito!</AlertTitle>
        <AlertDescription>
          Gracias por confiar en nosotros, nos comunicaremos a la brevedad.
        </AlertDescription>
      </Alert>
      <div className="video-background">
        <Spotlight
          className="-top-40 z-50 left-0 md:left-60 md:-top-20"
          fill="black"
        />
        <div className="overlay"></div>{" "}
        <video autoPlay muted loop playsInline id="myVideo">
          <source src={"/video1.mp4"} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      <div className="min-h-screen flex flex-col  justify-around ">
        <div className="md:mt-10 mt-20">
          <div>
            <p
              style={{ textShadow: "2px 2px 10px #7c2d12" }}
              className="text-white text-5xl md:text-7xl  text-center font-geist font-bold  tracking-tighter"
            >
              Deciudadanias
            </p>
          </div>
          <div>
            <div className="flex justify-center w-full">
              <p
                style={{ textShadow: "2px 2px 10px #7c2d12" }}
                className=" text-center text-white text-xl mb-10 uppercase md:text-2xl font-geist  tracking-tighter mt-10 w-10/12  md:w-6/12 "
              >
                Obtené el reconocimiento de tus raices
              </p>
            </div>
            <div className="flex justify-center w-screen">
              <div className="grid grid-cols-4 w-11/12 md:w-10/12  ">
                <div className="flex justify-center">
                  <div
                    className=" hover:animate-tilt  shadowBox w-11/12 md:w-12/12 flex flex-col h-[30vh]  md:mt-0 md:w-6/12  rounded-xl "
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,.1), rgba(0,0,0,.3)),url('https://res.cloudinary.com/duptnofi0/image/upload/v1709477055/usa_onlizq.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "left",
                    }}
                  ></div>
                </div>
                <div className="flex justify-center">
                  <div
                    className=" hover:animate-tilt  shadowBox w-11/12 md:w-12/12 flex flex-col h-[30vh]  md:mt-0 md:w-6/12  rounded-xl "
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,.1), rgba(0,0,0,.3)),url('https://res.cloudinary.com/duptnofi0/image/upload/v1709477055/esp_wtailg.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "15% 75% ",
                    }}
                  ></div>
                </div>
                <div className="flex justify-center">
                  <div
                    className=" hover:animate-tilt  shadowBox w-11/12 md:w-12/12 flex flex-col h-[30vh]  md:mt-0 md:w-6/12  rounded-xl "
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,.1), rgba(0,0,0,.3)),url('https://res.cloudinary.com/duptnofi0/image/upload/v1709477056/ita_hccb15.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className="flex justify-center">
                  <div
                    className=" hover:animate-tilt  shadowBox w-11/12 md:w-12/12 flex flex-col h-[30vh]  md:mt-0 md:w-6/12  rounded-xl "
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,.1), rgba(0,0,0,.3)),url('https://res.cloudinary.com/duptnofi0/image/upload/v1709477055/arg_gimlf6.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center ">
            <p className="text-white mt-10  text-2xl w-10/12 text-center   font-geist font-light tracking-tighter">
              Todo lo que necesitas{" "}<br className="md:hidden  block"/>
              <span
                className="text-orange-950 font-bold uppercase tracking-normal"
                style={{ textShadow: "2px 2px 10px #fdba74" }}
              >
                {" "}
                sin salir de tu casa
              </span>
            </p>
            <div className="my-5">
              <Link href="https://wa.link/4e1ipl">
                <Button className="text-xl bg-orange-950 hover:bg-orange-900 transition-all duration-150 font-mono hover:animate-tilt">
                  {/* <svg
                    width={30}
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path
                        stroke="#000"
                        strokeWidth="1.5"
                        d="M4 6v13a3 3 0 003 3h10a3 3 0 003-3V9a3 3 0 00-3-3H4zm0 0V5"
                      ></path>
                      <circle
                        cx="12"
                        cy="13"
                        r="3"
                        stroke="#000"
                        strokeWidth="1.5"
                      ></circle>
                      <path
                        fill="#000"
                        d="M18 6v.75h.75V6H18zm-2.283-3.674l-.106-.742.106.742zM4.92 3.87l-.106-.743.106.743zM5.07 6.75H18v-1.5H5.071v1.5zM18.75 6V4.306h-1.5V6h1.5zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07l-.212-1.485zM4.814 3.126A1.821 1.821 0 003.25 4.93h1.5c0-.16.117-.295.276-.318l-.212-1.485zm13.936 1.18a2.75 2.75 0 00-3.139-2.722l.212 1.485a1.25 1.25 0 011.427 1.237h1.5zM5.071 5.25a.321.321 0 01-.321-.321h-1.5c0 1.006.815 1.821 1.821 1.821v-1.5z"
                      ></path>
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="M10 19h4"
                      ></path>
                    </g>
                  </svg> */}
                  <svg
                    width={30}
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#000"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M3.5 12a8.5 8.5 0 118.5 8.5 8.455 8.455 0 01-4.542-1.314 1 1 0 00-.821-.113l-2.88.859 1.085-2.537a1 1 0 00-.07-.92A8.456 8.456 0 013.5 12zM12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.838.473 3.568 1.305 5.073L1.08 21.107a1 1 0 001.206 1.351l4.5-1.342A10.456 10.456 0 0012 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5zm2.293 12.682l-1.315.926A9.338 9.338 0 0111 13.585a10.202 10.202 0 01-1.624-2.114l.835-.709a1 1 0 00.236-1.232l-1.064-2a1 1 0 00-1.54-.283l-.316.275c-.759.662-1.208 1.75-.836 2.852A12.049 12.049 0 009.586 15c1.813 1.813 3.655 2.527 4.733 2.805.868.223 1.689-.076 2.268-.548l.591-.482a1 1 0 00-.12-1.634l-1.678-1a1 1 0 00-1.088.041z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Hablá con nosotros
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-3 w-12/12 md:w-8/12  py-5  rounded-md items-start">
            <div className="mx-2 flex  md:mt-0 flex-col items-center justify-center">
              <p
                className="font-bold text-white text-center text-4xl "
                style={{ textShadow: "2px 2px 10px #7c2d12" }}
              >
                +800{" "}
              </p>
              <p
                className="tracking-tighter text-white text-md  text-center"
                style={{ textShadow: "2px 2px 10px #7c2d12" }}
              >
                {" "}
                Partidas encontradas.
              </p>
            </div>
            <div
              className="mx-2 flex  md:mt-0 flex-col items-center justify-center"
              style={{ textShadow: "2px 2px 10px #7c2d12" }}
            >
              <p
                style={{ textShadow: "2px 2px 10px #7c2d12" }}
                className="font-bold text-white text-center text-4xl "
              >
                +500{" "}
              </p>
              <p className="tracking-tighter text-white text-md  text-center">
                {" "}
                Familias reconocidas.
              </p>
            </div>
            <div className="mx-2 flex  md:mt-0 flex-col items-center justify-center">
              <p
                className="font-bold text-white text-center text-4xl "
                style={{ textShadow: "2px 2px 10px #7c2d12" }}
              >
                +1200{" "}
              </p>
              <p
                style={{ textShadow: "2px 2px 10px #7c2d12" }}
                className="ftracking-tighter text-white text-md  text-center"
              >
                {" "}
                Asesoramientos personalizados.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="min-h-screen mb-20">
        <p className="flex items-center justify-center text-center font-bold text-5xl md:text-7xl font-geist mb-10 text-white">
          Nuestros servicios.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full ">
          {services.map((service, index) => (
            <div key={index} className="flex justify-center">
              <div
                key={index}
                className="bg-black/20 p-6 rounded-lg shadow-md flex items-center justify-center flex-col md:w-full w-10/12"
              >
                <h3 className="leading-6 font-semibold text-2xl text-white tracking-tighter font-geist mb-2">
                  {service.name}
                </h3>
                <p className="text-white mt-5 leading-4	 text-md font-mono tracking-tighter">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="  grid grid-cols-1 md:grid-cols-2 w-screen mt-20  ">
          <section className="flex justify-center h-full items-center ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-11/12 md:w-6/12  p-5 rounded-xl bg-[rgba(0,0,0,0.8)] h-fit"
            >
              <section>
                <Label className="font-bold text-white">Nombre Completo</Label>
                <Input
                  {...register("nombreCompleto", {
                    required: "Este campo es obligatorio",
                  })}
                  className="font-mono"
                />
              </section>
              <section className="mt-5">
                <Select
                  className="w-full font-mono"
                  onValueChange={(e) => setTramite(e)}
                >
                  <SelectTrigger className="w-full font-mono">
                    <SelectValue
                      className="font-mono"
                      placeholder="Elija su trámite"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      className="font-mono"
                      value="Pasaporte Italiano"
                    >
                      Pasaporte Italiano
                    </SelectItem>
                    <SelectItem
                      className="font-mono"
                      value="Ciudadania Italiana"
                    >
                      Ciudadania Italiana
                    </SelectItem>
                    <SelectItem
                      className="font-mono"
                      value="Pasaporte Española"
                    >
                      Pasaporte Español
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
                    <SelectItem
                      className="font-mono"
                      value="Busqueda de partidas"
                    >
                      Busqueda de partidas
                    </SelectItem>
                    <SelectItem
                      className="font-mono"
                      value="Busqueda de partidas"
                    >
                      Formulario CNN
                    </SelectItem>
                  </SelectContent>
                </Select>
              </section>
              <section className="mt-5">
                <Label className="font-bold text-white">
                  Pais de residencia
                </Label>
                <Input
                  className="font-mono"
                  {...register("paisResidencia", {
                    required: "Este campo es obligatorio",
                  })}
                />
              </section>
              <section className="mt-5">
                <Label className="font-bold text-white">Email</Label>
                <Input
                  className="font-mono"
                  {...register("email", {
                    required: "Este campo es obligatorio",
                  })}
                />
              </section>
              <section className="mt-5">
                <Label className="font-bold text-white">
                  Número de celular
                </Label>
                <Input
                  className="font-mono"
                  {...register("numero", {
                    required: "Este campo es obligatorio",
                  })}
                />
              </section>
              <section className="mt-5 flex flex-col">
                <Textarea
                  required
                  className="font-mono"
                  {...register("informacionAdicional")}
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
              <p className="flex items-center justify-center text-center mx-2 font-bold text-5xl md:text-7xl font-geist mb-10 text-white">
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
