"use client";

import Link from "next/link";

export default function Tasks() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 pt-24">
      <div className="mx-auto max-w-5xl">
        
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Mis Tareas
            </h1>

            <p className="mt-2 text-slate-600">
              Consulta y organiza las tareas de tus proyectos.
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-gray-900 px-5 py-2.5 font-medium text-white hover:bg-gray-800"
          >
            + Nueva tarea
          </button>
        </div>

        <div className="space-y-4">

          <div className="rounded-xl bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Diseñar pantalla de inicio de sesión
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                  Proyecto: Sistema de Gestión
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Completada
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="text-slate-500">
                Prioridad: <strong className="text-red-600">Alta</strong>
              </span>

              <span className="text-slate-500">
                Fecha límite: 20/08/2026
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Crear página de perfil
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                  Proyecto: Sistema de Gestión
                </p>
              </div>

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                En progreso
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="text-slate-500">
                Prioridad: <strong className="text-orange-600">Media</strong>
              </span>

              <span className="text-slate-500">
                Fecha límite: 25/08/2026
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Implementar módulo de usuarios
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                  Proyecto: Sistema de Gestión
                </p>
              </div>

              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                Pendiente
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="text-slate-500">
                Prioridad: <strong className="text-red-600">Alta</strong>
              </span>

              <span className="text-slate-500">
                Fecha límite: 30/08/2026
              </span>
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

