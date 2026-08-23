
"use client";

import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 pt-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Mis Proyectos
            </h1>

            <p className="mt-2 text-slate-600">
              Administra y consulta tus proyectos.
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-gray-900 px-5 py-2.5 font-medium text-white hover:bg-gray-800"
          >
            + Nuevo proyecto
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Sistema de Gestión
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  Desarrollo de una plataforma para gestionar proyectos y tareas.
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                En progreso
              </span>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm text-slate-600">
                <span>Progreso</span>
                <span>70%</span>
              </div>

              <div className="h-2 w-full rounded-full bg-slate-200">
                <div className="h-2 w-[70%] rounded-full bg-gray-900"></div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                8 tareas pendientes
              </span>

              <button
                type="button"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Ver proyecto
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Página Web
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  Diseño y desarrollo de una página web para un proyecto.
                </p>
              </div>

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                Pendiente
              </span>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm text-slate-600">
                <span>Progreso</span>
                <span>25%</span>
              </div>

              <div className="h-2 w-full rounded-full bg-slate-200">
                <div className="h-2 w-[25%] rounded-full bg-gray-900"></div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                12 tareas pendientes
              </span>

              <button
                type="button"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Ver proyecto
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/dashboard"
            className="inline-block rounded-lg bg-slate-200 px-5 py-2.5 font-medium text-slate-700 hover:bg-slate-300"
          >
            Volver al Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

