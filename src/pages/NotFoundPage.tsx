import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600">Página não encontrada</p>
        <Link className="text-orange-400" to={"/"}>Back to home.</Link>
      </div>
    </div>
  );
}
