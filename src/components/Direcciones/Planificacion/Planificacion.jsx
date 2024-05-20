import React from "react";
import { Link } from "react-router-dom";

const Planificacion = () => {
  return (
    <section id="value" className="v-wrapper">
     <button className="boton-flotante"><Link to="/contact"> atras</Link></button>
      <div className="dp-container">
        <div className="text-containere">
          <div className="text-large">
            Direccion de <br /> PLANIFICACION
          </div>
        </div>
        <div className="text-containeree">
          <div className="descre-mision">
            La Dirección de Economía y Finanzas de la Alcaldía de Punata es
            responsable de establecer políticas fiscales y financieras para el
            municipio, así como de promover mejoras en los procesos operativos y
            administrativos relacionados con las finanzas públicas. Sus
            funciones incluyen:{" "}
          </div>
          <div className="contacto">
            <p className="titulo">Teléfono:</p>
            <p className="contenido">********</p>
            <p className="titulo">Dirección:</p>
            <p className="contenido">*************************</p>
          </div>
        </div>
      </div>

      <div className="eco-container">
        <div className="descr-mision">
          <strong>Elaboración y gestión del presupuesto:</strong> Responsable de
          la elaboración del presupuesto municipal, identificando los ingresos
          proyectados y asignando recursos a diferentes áreas y proyectos
          municipales de acuerdo con las prioridades establecidas. <br /> <br />
          <strong>Recaudación de impuestos y tasas:</strong> Encargada de
          administrar la recaudación de impuestos municipales, como impuestos
          prediales, impuestos sobre vehículos y tasas por servicios
          municipales, garantizando una gestión eficiente y transparente de los
          ingresos municipales. <br /> <br />
          <strong>Control y contabilidad:</strong> Realiza un seguimiento
          detallado de los ingresos y gastos municipales mediante sistemas
          contables adecuados, asegurando la transparencia y la rendición de
          cuentas en el manejo de los fondos públicos. <br /> <br />
          <strong>Gestión financiera:</strong> Administra de manera prudente los
          recursos financieros municipales, incluida la gestión de activos
          líquidos y la planificación financiera a largo plazo para garantizar
          la estabilidad económica y financiera del municipio. <br /> <br />
          <strong>Apoyo a proyectos de desarrollo económico:</strong> Colabora
          en la identificación y promoción de proyectos que impulsen el
          desarrollo económico local, como la atracción de inversiones y el
          fomento del emprendimiento. <br /> <br />
          <strong>Coordinación interdepartamental:</strong> Trabaja en estrecha
          colaboración con otros departamentos municipales para garantizar una
          gestión integrada y eficiente de los recursos en áreas como
          planificación urbana, servicios públicos y desarrollo comunitario.{" "}
          <br /> <br />º<strong>Cumplimiento normativo y reportes:</strong>{" "}
          Asegura el cumplimiento de las regulaciones financieras y contables
          aplicables y proporciona informes financieros precisos y oportunos a
          las autoridades correspondientes y al público en general.
        </div>
      </div>

    </section>
  );
};

export default Planificacion;
