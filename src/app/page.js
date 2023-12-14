"use client";

import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import { getAllDocenProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts() {
    const res = await getAllAdminProducts();

    // if (res.success) {
    //   setProducts(res.data);
    // }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  console.log(products);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-suto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              ¡Ranzo Uza! Secundaria N.o 1119 Misión de Chichimecas
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Es un placer darle a cada uno de ustedes la bienvenida a la apliación web educativa 1.0. Desarrollada como posible herramienta para ofrecer material educativo digital entre personal administrativo, docentes y alumnado.
            </p>

            <button
              type="button"
              onClick={() => router.push("/product/listing/all-products")}
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              EXPLORE COLLECTION MATERIAL
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://media.istockphoto.com/id/1395602270/es/foto/estudiantes-de-primaria-en-un-aula.jpg?s=2048x2048&w=is&k=20&c=ROsVajycMAMduKDCyGPMKvc_lABKmXhCKGfv92FtIcw="
              alt="Explore Shop Collection"
            />
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  INTERESTING Winter Collection
                  </h2>
                </div>
                <button
                  onClick={() => router.push("/product/listing/all-products")}
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  See ALL
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                {products && products.length
                  ? products
                      .filter((item) => item.onSale === "yes")
                      .splice(0, 2)
                      .map((productItem) => (
                        <li
                          onClick={() =>
                            router.push(`/product/${productItem._id}`)
                          }
                          className="cursor-pointer"
                          key={productItem._id}
                        >
                          <div>
                            <img
                              src={productItem.imageUrl}
                              alt="Sale Product Item"
                              className="object-cover w-full rounded aspect-square"
                            />
                          </div>
                          <div className="mt-3">
                            <h3 className="font-medium text-gray-900">
                              {productItem.name}
                            </h3>
                            {/* <p className="mt-1 text-sm text-gray-800">
                              ${productItem.price}{" "}
                              <span className="text-red-700">{`(-${productItem.priceDrop}%) Off`}</span>
                            </p> */}
                          </div>
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-950 sm:text-3xl">
              EXPLORE BY CATEGORY
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src="https://media.istockphoto.com/id/1455111411/es/foto/j%C3%B3venes-amigos-estudiando-en-el-aula-de-la-universidad.jpg?s=2048x2048&w=is&k=20&c=pNgyfCJ0xM7rr2d7jRyiyMoUP7PgjvFMGoQr1_ZcLws="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">1°C</h3>
                  <button
                    onClick={() => router.push("/product/listing/kids")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="relative block group">
                <img
                  src="https://media.istockphoto.com/id/534576007/es/foto/estudiantes-entusiastas-de-secundaria-con-uniformes-escolares-sonriendo-y-saltando-en-el.jpg?s=2048x2048&w=is&k=20&c=L46d53Gnwbed-CjC6DCLVWoA_4p_y43fBO4dUODZHas="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">1°B</h3>
                  <button
                    onClick={() => router.push("/product/listing/women")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>
            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img
                  src="https://media.istockphoto.com/id/157719429/es/foto/grupo-de-estudiantes-de-la-escuela-media-de-trabajo-en-proyectos-juntos.jpg?s=2048x2048&w=is&k=20&c=Yqjr0jGAy3i7aDgGCoQmEwAMr6PrmWcHxKq1CmMI82M="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">1°A</h3>
                  <button
                    onClick={() => router.push("/product/listing/men")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src=" https://media.istockphoto.com/id/1018285948/es/foto/adolescentes-amigos-disfrutando-fuera-de.jpg?s=2048x2048&w=is&k=20&c=K2AHPTvMYq6OHpbV19lAgZIudCFKaBOgXI1811SF4WU="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">2°A</h3>
                  <button
                    onClick={() => router.push("/product/listing/sega")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src="https://media.istockphoto.com/id/1455012357/es/foto/retrato-de-una-mujer-joven-caminando-en-la-universidad.jpg?s=2048x2048&w=is&k=20&c=paESdpudJa6DIdtuwahcIRUWkQXSaI_dAC26MKxddgg="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">2°B</h3>
                  <button
                    onClick={() => router.push("/product/listing/segb")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src="https://media.istockphoto.com/id/614049980/es/foto/divertidos-hermanos-latinos-abrazando-y-sonriendo.jpg?s=2048x2048&w=is&k=20&c=kMMftjnTSnuhqqE8xWE8NvZliqBac_wfA5ZbQlBs1K4="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">2°C</h3>
                  <button
                    onClick={() => router.push("/product/listing/segc")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>


            <li>
              <div className="relative block group">
                <img
                  src="https://media.istockphoto.com/id/1469990198/es/foto/joven-hablando-con-sus-amigos-al-aire-libre.jpg?s=2048x2048&w=is&k=20&c=S6OAe8FTOHGwPUTphJc3HUAAD_6T3a6MCqdGNcwEb4w="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">3°A</h3>
                  <button
                    onClick={() => router.push("/product/listing/tera")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src="https://media.istockphoto.com/id/1359819738/es/foto/adolescentes-hablando-y-caminando-juntas-al-aire-libre.jpg?s=2048x2048&w=is&k=20&c=wx33RWIuFExQmwAKdtGYSoyb2FVquNZ9lk5SHBNrUQA="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">3°B</h3>
                  <button
                    onClick={() => router.push("/product/listing/terb")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src="https://media.istockphoto.com/id/1450587531/es/foto/retrato-de-una-mujer-joven-comiendo-palomitas-de-ma%C3%ADz-en-el-cine-al-aire-libre.jpg?s=2048x2048&w=is&k=20&c=yijv0A0Ldi3CWTGXorZCnf5hD9CCniH3fhQBUBeL7hI="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">3°C</h3>
                  <button
                    onClick={() => router.push("/product/listing/terc")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>

            {/* <li>
              <div className="relative block group">
                <img
                  src=" https://media.istockphoto.com/id/1018285948/es/foto/adolescentes-amigos-disfrutando-fuera-de.jpg?s=2048x2048&w=is&k=20&c=K2AHPTvMYq6OHpbV19lAgZIudCFKaBOgXI1811SF4WU="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">4 A " Equipo Hombre Araña"</h3>
                  <button
                    onClick={() => router.push("/product/listing/sega")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src=" https://media.istockphoto.com/id/1018285948/es/foto/adolescentes-amigos-disfrutando-fuera-de.jpg?s=2048x2048&w=is&k=20&c=K2AHPTvMYq6OHpbV19lAgZIudCFKaBOgXI1811SF4WU="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">4 B $ Equipo Nuncles $</h3>
                  <button
                    onClick={() => router.push("/product/listing/sega")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src=" https://media.istockphoto.com/id/1018285948/es/foto/adolescentes-amigos-disfrutando-fuera-de.jpg?s=2048x2048&w=is&k=20&c=K2AHPTvMYq6OHpbV19lAgZIudCFKaBOgXI1811SF4WU="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">4 C " Equipo Vector"</h3>
                  <button
                    onClick={() => router.push("/product/listing/sega")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src="https://media.istockphoto.com/id/1450587531/es/foto/retrato-de-una-mujer-joven-comiendo-palomitas-de-ma%C3%ADz-en-el-cine-al-aire-libre.jpg?s=2048x2048&w=is&k=20&c=yijv0A0Ldi3CWTGXorZCnf5hD9CCniH3fhQBUBeL7hI="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">5 A ¡ Equipo Iroman!</h3>
                  <button
                    onClick={() => router.push("/product/listing/terc")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="relative block group">
                <img
                  src="https://media.istockphoto.com/id/1450587531/es/foto/retrato-de-una-mujer-joven-comiendo-palomitas-de-ma%C3%ADz-en-el-cine-al-aire-libre.jpg?s=2048x2048&w=is&k=20&c=yijv0A0Ldi3CWTGXorZCnf5hD9CCniH3fhQBUBeL7hI="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">5 B "EQUIPO SONIC"</h3>
                  <button
                    onClick={() => router.push("/product/listing/terc")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="relative block group">
                <img
                  src="https://media.istockphoto.com/id/1450587531/es/foto/retrato-de-una-mujer-joven-comiendo-palomitas-de-ma%C3%ADz-en-el-cine-al-aire-libre.jpg?s=2048x2048&w=is&k=20&c=yijv0A0Ldi3CWTGXorZCnf5hD9CCniH3fhQBUBeL7hI="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">5 C "EQUIPO Amy"</h3>
                  <button
                    onClick={() => router.push("/product/listing/terc")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src="https://media.istockphoto.com/id/1450587531/es/foto/retrato-de-una-mujer-joven-comiendo-palomitas-de-ma%C3%ADz-en-el-cine-al-aire-libre.jpg?s=2048x2048&w=is&k=20&c=yijv0A0Ldi3CWTGXorZCnf5hD9CCniH3fhQBUBeL7hI="
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">5 D "EQUIPO Capitan Ámerica"</h3>
                  <button
                    onClick={() => router.push("/product/listing/terc")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    See Now
                  </button>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </section>
    </main>
  );
}
