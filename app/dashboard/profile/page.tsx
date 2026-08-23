"use client";
import Link from "next/link";
export default function Profile() {
  return (
    <main className="min-h-screen bg-slate-100 pt-24 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          
          <h1 className="text-3xl font-bold text-slate-900">
            Mi Perfil
          </h1>

          <p className="mt-2 text-slate-600">
            Consulta y administra tu información personal.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Nombre
              </label>
              <input
                type="text"
                placeholder="César"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Apellido
              </label>
              <input
                type="text"
                placeholder="Antelo Herrera"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="correo@ejemplo.com"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Usuario
              </label>
              <input
                type="text"
                placeholder="usuario"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Teléfono
              </label>
              <input
                type="text"
                placeholder="70000000"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900"
              />
            </div>

            <div className="flex gap-3 pt-4">
            <button
                type="button"
                className="rounded-lg bg-gray-900 px-5 py-2.5 font-medium text-white hover:bg-gray-800"
            >
                Guardar cambios
            </button>

            <Link
                href="/dashboard"
                className="rounded-lg bg-slate-200 px-5 py-2.5 font-medium text-slate-700 hover:bg-slate-300"
            >
                Volver al Dashboard
            </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

