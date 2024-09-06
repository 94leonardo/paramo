import "./App.css";
import { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import tuImagen from "./assets/tu-imagen.jpg";

function App() {
  // Estados para los campos del formulario
  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Axios.post("http://localhost:3001/register", {
      usuario,
      nombre,
      apellido,
      correo,
      telefono,
      direccion,
      ciudad,
      password,
    })
      .then(() => {
        Swal.fire({
          title: "<strong>Registro Exitoso!!</strong>",
          icon: "success",
          timer: 6000,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error en el registro",
        });
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Columna izquierda: Formulario */}
        <div className="col-md-6">
          <div className="card p-4">
            <form>
              <div className="form-group mb-3">
                <label>Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  placeholder="Ingrese Usuario"
                />
              </div>
              <div className="form-group mb-3">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingrese Nombre"
                />
              </div>
              <div className="form-group mb-3">
                <label>Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  placeholder="Ingrese Apellido"
                />
              </div>
              <div className="form-group mb-3">
                <label>Correo</label>
                <input
                  type="email"
                  className="form-control"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="Ingrese Correo"
                />
              </div>
              <div className="form-group mb-3">
                <label>Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ingrese Teléfono"
                />
              </div>
              <div className="form-group mb-3">
                <label>Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  placeholder="Ingrese Dirección"
                />
              </div>
              <div className="form-group mb-3">
                <label>Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                  placeholder="Ingrese Ciudad"
                />
              </div>
              <div className="form-group mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingrese Contraseña"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleSubmit}
              >
                Registrar
              </button>
            </form>
          </div>
        </div>

        {/* Columna derecha: Imagen y enlaces */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <div
            className="card-header"
            style={{ fontSize: "50px", position: "relative", top: "-20px" }}
          >
            REGISTRO
          </div>
          <img
            src={tuImagen}
            alt="Registro"
            className="img-fluid mb-3"
            style={{
              fontSize: "50px",
              position: "relative",
              top: "-20px",
              maxHeight: "300px",
            }}
          />
          <div>
            <a href="#privacidad" className="d-block mb-2">
              Política de Privacidad
            </a>
            <a href="#terminos">Términos del Servicio</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
