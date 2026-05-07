export default function DashboardAgricola() {
  const productores = [
    {
      nombre: "Finca El Progreso",
      hectareas: 12,
      produccion: 8.5,
      humedad: 72,
      estado: "Óptimo"
    },
    {
      nombre: "Finca San José",
      hectareas: 20,
      produccion: 15.2,
      humedad: 65,
      estado: "Monitoreo"
    },
    {
      nombre: "Finca La Esperanza",
      hectareas: 8,
      produccion: 5.9,
      humedad: 81,
      estado: "Alerta"
    }
  ];

  const cards = [
    {
      titulo: "Productores",
      valor: "48"
    },
    {
      titulo: "Hectáreas",
      valor: "326 ha"
    },
    {
      titulo: "Producción",
      valor: "124 Ton"
    },
    {
      titulo: "Lotes Activos",
      valor: "96"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-green-900">
                Dashboard Agrícola
              </h1>
              <p className="text-green-700 mt-2 text-lg">
                Monitoreo Inteligente de Producción Cacaotera
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-2xl font-medium transition-all">
                Exportar Reporte
              </button>

              <button className="bg-white border border-green-300 text-green-800 px-5 py-3 rounded-2xl font-medium hover:bg-green-50 transition-all">
                Actualizar Datos
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 border border-green-100 hover:scale-[1.02] transition-all"
            >
              <p className="text-green-700 text-sm font-medium">
                {card.titulo}
              </p>

              <h2 className="text-4xl font-bold text-green-900 mt-2">
                {card.valor}
              </h2>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-xl p-6 border border-green-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-green-900">
                Producción por Mes
              </h2>

              <select className="border border-green-200 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-green-500">
                <option>2026</option>
                <option>2025</option>
              </select>
            </div>

            <div className="space-y-4">
              {[
                { mes: "Enero", valor: 40 },
                { mes: "Febrero", valor: 65 },
                { mes: "Marzo", valor: 52 },
                { mes: "Abril", valor: 80 },
                { mes: "Mayo", valor: 72 },
                { mes: "Junio", valor: 90 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1 text-green-800">
                    <span>{item.mes}</span>
                    <span>{item.valor}%</span>
                  </div>

                  <div className="w-full bg-green-100 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-700 h-4 rounded-full"
                      style={{ width: `${item.valor}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 border border-green-100">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Estado Climático
            </h2>

            <div className="space-y-5">
              <div className="bg-green-50 rounded-2xl p-5">
                <p className="text-sm text-green-700">Temperatura</p>
                <h3 className="text-3xl font-bold text-green-900 mt-2">
                  28°C
                </h3>
              </div>

              <div className="bg-green-50 rounded-2xl p-5">
                <p className="text-sm text-green-700">Humedad</p>
                <h3 className="text-3xl font-bold text-green-900 mt-2">
                  74%
                </h3>
              </div>

              <div className="bg-green-50 rounded-2xl p-5">
                <p className="text-sm text-green-700">Lluvia</p>
                <h3 className="text-3xl font-bold text-green-900 mt-2">
                  Moderada
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 border border-green-100 overflow-auto">
          <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
            <h2 className="text-2xl font-bold text-green-900">
              Monitoreo de Fincas
            </h2>

            <input
              type="text"
              placeholder="Buscar finca..."
              className="border border-green-200 rounded-2xl px-4 py-3 w-full md:w-80 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-green-100 text-left text-green-800">
                <th className="pb-4">Finca</th>
                <th className="pb-4">Hectáreas</th>
                <th className="pb-4">Producción</th>
                <th className="pb-4">Humedad</th>
                <th className="pb-4">Estado</th>
              </tr>
            </thead>

            <tbody>
              {productores.map((finca, index) => (
                <tr
                  key={index}
                  className="border-b border-green-50 hover:bg-green-50 transition-all"
                >
                  <td className="py-4 font-medium text-green-900">
                    {finca.nombre}
                  </td>

                  <td className="py-4 text-green-800">
                    {finca.hectareas} ha
                  </td>

                  <td className="py-4 text-green-800">
                    {finca.produccion} Ton
                  </td>

                  <td className="py-4 text-green-800">
                    {finca.humedad}%
                  </td>

                  <td className="py-4">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        finca.estado === "Óptimo"
                          ? "bg-green-100 text-green-800"
                          : finca.estado === "Monitoreo"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {finca.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-green-100">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Registro de Actividades
            </h2>

            <div className="space-y-4">
              {[
                "Aplicación de fertilizante completada",
                "Inspección técnica realizada",
                "Monitoreo de enfermedades actualizado",
                "Nuevo vuelo de dron registrado"
              ].map((actividad, index) => (
                <div
                  key={index}
                  className="bg-green-50 rounded-2xl p-4 text-green-800"
                >
                  {actividad}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 border border-green-100">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Integraciones
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                "QGIS",
                "ArcGIS",
                "Drones",
                "QR",
                "Google Sheets",
                "Power BI"
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-5 text-center font-semibold text-green-900 hover:scale-105 transition-all"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
