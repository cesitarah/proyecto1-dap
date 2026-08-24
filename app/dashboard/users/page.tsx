
"use client";

import Link from "next/link";

export default function Users() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 pt-24">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Usuarios
          </h1>

          <p className="mt-2 text-slate-600">
            Administración de los usuarios del sistema.
          </p>
        </div>

        <div className="rounded-xl bg-white shadow-lg">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Lista de usuarios
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Juan Pérez
                </h3>
                <p className="text-sm text-slate-500">
                  juan@correo.com
                </p>
              </div>

              <span className="text-sm text-slate-600">
                Administrador
              </span>
            </div>

            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <h3 className="font-semibold text-slate-900">
                  María López
                </h3>
                <p className="text-sm text-slate-500">
                  maria@correo.com
                </p>
              </div>

              <span className="text-sm text-slate-600">
                Usuario
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            className="rounded-lg bg-gray-900 px-5 py-2.5 font-medium text-white hover:bg-gray-800"
          >
            + Nuevo usuario
          </button>

          <Link
            href="/dashboard"
            className="rounded-lg bg-slate-200 px-5 py-2.5 font-medium text-slate-700 hover:bg-slate-300"
          >
            Volver al Dashboard
          </Link>
        </div>

      </div>
    </main>
  );
}

