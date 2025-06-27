import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { ArrowDown, ArrowRight } from "lucide-react";
import { PersonCard } from "./components/Card";
import { Footer } from "./components/Footer";
import { data } from "./data";
import { Link } from "react-router";

function App() {
  return (
    <div className="w-full bg-gray-100 scroll-smooth">
      <div className="relative w-full h-screen">
        <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-gradient-to-t from-black to-transparent backdrop-blur-[1px]">
          <h1 className="font-bold uppercase">maos que criam</h1>
          <p className="italic max-w-5xl text-gray-200 mt-6">
            Conectar artesãos locais aos habitantes do município é essencial
            para fortalecer a economia, preservar a cultura e promover laços
            comunitários, valorizando o trabalho manual e a identidade local. A
            internet desempenha um papel crucial nesse processo, aproximando
            artesãos e consumidores por meio de redes sociais, marketplaces
            locais e eventos virtuais, que ampliam a visibilidade dos produtos,
            facilitam o acesso dos moradores e incentivam o consumo consciente,
            contribuindo para o desenvolvimento sustentável e a valorização das
            tradições.
          </p>
        </div>
        <div className="text-center p-4 animate-bounce absolute z-10 bottom-0 left-0 w-full text-white">
          <ArrowDown className="m-auto" />
        </div>

        <img
          src="https://images.unsplash.com/photo-1589051079002-b140a970f568?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="mãos femininas moldando um vaso de barro"
          className="absolute w-full h-screen"
        />
      </div>
      <div className="flex flex-col items-center w-full h-screen mt-48">
        <h2 className="uppercase">Conheça o artesão</h2>
        <p className="mb-16 max-w-7xl mt-4">
          Descubra a história e a alma por trás de cada criação em nossa
          plataforma. Conheça as mãos talentosas que transformam ideias,
          materiais e tradições em verdadeiras obras de arte. Nossos artesãos
          locais trabalham com paixão, dedicação e um profundo respeito pela
          cultura de nossa comunidade, criando peças únicas que carregam suas
          histórias pessoais e a essência do município. Cada item reflete não
          apenas habilidade manual, mas também o compromisso com a
          sustentabilidade e a preservação das técnicas artesanais tradicionais.
          Ao explorar suas criações, você se conecta com a trajetória de cada
          artesão, valorizando o cuidado e o amor empregados em cada detalhe.
          Junte-se a nós para celebrar o talento local e apoiar os artesãos que
          mantêm viva a autenticidade e a riqueza cultural de nossa região.
        </p>
        <Carousel
          className="w-10/12 h-1/2"
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {data.slice(5).map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex justify-center"
              >
                <PersonCard
                  image={item.image}
                  name={item.name}
                  description={item.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="w-full mb-24 -mt-8">
        <button className="w-48 gap-2 h-12 bg-amber-800 p-4 text-white text-[12px] rounded text-center flex items-center m-auto">
          <Link to={"/explore"}>Conhecer os artesões</Link>
          <ArrowRight />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
