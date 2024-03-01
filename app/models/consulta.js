import mongoose from "mongoose";

const ConsultaSchema = new mongoose.Schema(
  {
    nombreCompleto: {
      type: String,
      required: true,
    },
    tramiteSeleccionado: {
      type: String,
      required: true,
    },
    paisResidencia: {
      type: String,
      required: true,
    },
    informacionAdicional: {
      type: String,
    },
    numero: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const Consulta =
  mongoose.models.Consulta || mongoose.model("Consulta", ConsultaSchema);

export default Consulta;
