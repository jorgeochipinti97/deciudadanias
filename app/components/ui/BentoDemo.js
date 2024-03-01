import { cn } from "@/utils/cn";
import React from "react";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./Bento";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Acceso a Ligas Deportivas Europeas",
    description: "Al obtener la ciudadanía europea, los atletas pueden competir en ligas europeas sin ocupar cupos de jugadores extranjeros.",
    header: <img src='futbol.jpg' alt=''/>,
    
  },
  {
    title: "Facilidad para Viajar Internacionalmente",
    description: "Poseer un pasaporte europeo o estadounidense abre las puertas a viajes sin visa en numerosos países.",
    header: <img src='https://www.veintitres.com.ar/__export/1678453806814/sites/cronica/img/2023/03/10/ciudadania_italiana_tramite_1.jpg_541755376.jpg' alt=''/>,
    
  },
  {
    title: "Reducción de Barreras Burocráticas para Atletas",
    description: "Menos trámites y procesos burocráticos para atletas que deseen entrenar, competir o residir en Europa o Estados Unidos.",
    header: <img src='burocracia.jpg' alt=''/>,
    
  },
  {
    title: "Servicio Eficiente y Rápido",
    description:
      "Nuestro enfoque eficiente asegura una gestión rápida y sin contratiempos, reduciendo los tiempos de espera y acelerando el proceso de obtención de ciudadanía o visado.",
    header: <img src='work.jpg' alt=''/>,
    
  },
  {
    title: "Gestión Prolija y Detallada",
    description: "Prestamos atención a cada detalle, asegurando una gestión prolija y completa de todos los documentos y requisitos necesarios para su solicitud.",
    header: <img src='prolija.jpg' alt=''/>,
    
  },
  {
    title: "Asesoramiento Personalizado    ",
    description: "Experience the thrill of bringing ideas to life.",
    header: <img src='asesoramient.jpg' alt=''/>,
    
  },
  {
    title: "Maximice Sus Oportunidades Globales",
    description: "Nuestros clientes disfrutan de un soporte continuo durante y después del proceso de solicitud. Estamos siempre disponibles para resolver dudas y ofrecer asistencia, asegurando que cada etapa del proceso sea clara y manejable.",
    header: <img src='mapa.jpg' alt=''/>,
    
  },
];
