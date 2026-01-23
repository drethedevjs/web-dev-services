import services from "@/data/services";
import Image from "next/image";

export default function Offerings() {
  return (
    <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="aspect-16/7">
        <Image
          className="w-full h-full object-cover rounded-xl"
          src="/stock-coding.jpg"
          alt="Several monitors showing code."
          width={6016}
          height={4016}
        />
      </div>

      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl text-primary dark:text-neutral-200">
            We offer the best-in-class web services to small businesses
          </h2>
          <p className="mt-2 md:mt-4 text-gray-500 dark:text-neutral-500">
            Besides working with start-up enterprises as a partner for digitalization, we have built
            enterprise products for common pain points that we have encountered in various products
            and projects.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {services.map((s) => {
              const IconComponent = s.icon;
              return (
                <div key={s.id} className="flex gap-x-5">
                  <IconComponent className="shrink-0 mt-1 size-6 text-secondary dark:text-primary" />
                  <div className="grow" key={s.id}>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {s.name}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">{s.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
