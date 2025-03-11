import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black text-center p-6">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Página no encontrada</p>
      <p className="text-gray-600 mt-2">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
